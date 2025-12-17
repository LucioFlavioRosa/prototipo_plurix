// prototipos/js/avaliacao.js
// Script para avaliacao-entrega.html

// Dados mock de pedidos para avaliação
const pedidosParaAvaliacao = [
  {
    id: 1,
    produto: 'Alcatra Bovina (kg)',
    fornecedor: 'Frigorífico Bom Corte',
    dataEntrega: '2024-06-12',
    quantidade: 120,
    unidade: 'kg',
    status: 'pendente'
  },
  {
    id: 2,
    produto: 'Banana Prata (cx 18kg)',
    fornecedor: 'Frutas do Vale',
    dataEntrega: '2024-06-11',
    quantidade: 10,
    unidade: 'caixa',
    status: 'pendente'
  }
];

// KPIs atuais do fornecedor (mock)
let kpisFornecedor = {
  pontualidade: 92, // %
  qualidade: 88,    // %
  conformidade: 95  // %
};

function loadPedidosParaAvaliacao() {
  const tbody = document.getElementById('tbody-pedidos-avaliacao');
  if (!tbody) return;
  tbody.innerHTML = '';
  pedidosParaAvaliacao.forEach(pedido => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${pedido.produto}</td>
      <td>${pedido.fornecedor}</td>
      <td>${pedido.dataEntrega}</td>
      <td>${pedido.quantidade} ${pedido.unidade}</td>
      <td><button class="btn-avaliar" onclick="abrirFormularioAvaliacao(${pedido.id})">Avaliar</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function abrirFormularioAvaliacao(id) {
  const pedido = pedidosParaAvaliacao.find(p => p.id === id);
  if (!pedido) return;
  // Preencher campos do formulário
  document.getElementById('form-avaliacao').reset();
  document.getElementById('avaliacao-produto').textContent = pedido.produto;
  document.getElementById('avaliacao-fornecedor').textContent = pedido.fornecedor;
  document.getElementById('avaliacao-data').textContent = pedido.dataEntrega;
  document.getElementById('avaliacao-quantidade').textContent = pedido.quantidade + ' ' + pedido.unidade;
  document.getElementById('avaliacao-id').value = pedido.id;
  document.getElementById('modal-avaliacao').style.display = 'flex';
}

function closeFormularioAvaliacao() {
  document.getElementById('modal-avaliacao').style.display = 'none';
}

function submitAvaliacao(event) {
  event.preventDefault();
  const data = {
    id: document.getElementById('avaliacao-id').value,
    pontualidade: document.querySelector('input[name="pontualidade"]:checked')?.value,
    qualidade: document.querySelector('input[name="qualidade"]:checked')?.value,
    conformidade: document.querySelector('input[name="conformidade"]:checked')?.value,
    observacao: document.getElementById('avaliacao-observacao').value.trim()
  };
  const valid = validateAvaliacao(data);
  if (!valid) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }
  // Simula envio e cálculo de impacto
  const impacto = calculateKPIImpact(data);
  alert(
    `Avaliação enviada com sucesso!\n\nImpacto estimado nos KPIs do fornecedor:\n- Pontualidade: ${impacto.pontualidade}%\n- Qualidade: ${impacto.qualidade}%\n- Conformidade: ${impacto.conformidade}%`
  );
  closeFormularioAvaliacao();
  // Remove pedido da lista
  const idx = pedidosParaAvaliacao.findIndex(p => p.id == data.id);
  if (idx > -1) pedidosParaAvaliacao.splice(idx, 1);
  loadPedidosParaAvaliacao();
}

function validateAvaliacao(data) {
  return (
    data.pontualidade &&
    data.qualidade &&
    data.conformidade
  );
}

function calculateKPIImpact(avaliacao) {
  // Simples: se "Sim" soma 1 ponto, se "Não" diminui 2 pontos
  let delta = {
    pontualidade: avaliacao.pontualidade === 'sim' ? 1 : -2,
    qualidade: avaliacao.qualidade === 'sim' ? 1 : -2,
    conformidade: avaliacao.conformidade === 'sim' ? 1 : -2
  };
  // Calcula novo valor (mantém entre 0 e 100)
  return {
    pontualidade: Math.max(0, Math.min(100, kpisFornecedor.pontualidade + delta.pontualidade)),
    qualidade: Math.max(0, Math.min(100, kpisFornecedor.qualidade + delta.qualidade)),
    conformidade: Math.max(0, Math.min(100, kpisFornecedor.conformidade + delta.conformidade))
  };
}

document.addEventListener('DOMContentLoaded', () => {
  loadPedidosParaAvaliacao();
  const form = document.getElementById('form-avaliacao');
  if (form) {
    form.onsubmit = submitAvaliacao;
  }
  document.getElementById('btn-fechar-avaliacao').onclick = closeFormularioAvaliacao;
});
