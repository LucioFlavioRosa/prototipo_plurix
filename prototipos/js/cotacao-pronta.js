// prototipos/js/cotacao-pronta.js
// Script para cotacao-pronta.html

let cotacaoAtual = null;
let propostasSelecionadas = {};
let propostasFinais = [];

function loadCotacaoPronta(id) {
  // Mock de dados da cotação pronta
  cotacaoAtual = {
    id: id,
    produto: 'Banana Prata',
    quantidade: 500,
    unidade: 'kg',
    status: 'pronta',
    fornecedores: [
      { id: 201, nome: 'Frutas do Vale', propostaId: 1001, preco: 3.20, quantidade: 500 },
      { id: 202, nome: 'HortiNobre', propostaId: 1002, preco: 3.15, quantidade: 500 },
      { id: 203, nome: 'Ceasa Minas', propostaId: 1003, preco: 3.10, quantidade: 500 }
    ]
  };
  // Renderiza na interface (exemplo)
  document.getElementById('cotacao-produto').textContent = cotacaoAtual.produto;
  document.getElementById('cotacao-quantidade').textContent = cotacaoAtual.quantidade + ' ' + cotacaoAtual.unidade;
  loadPropostasFinais(cotacaoAtual.id);
}

function loadPropostasFinais(cotacaoId) {
  // Mock de propostas finais
  propostasFinais = cotacaoAtual.fornecedores;
  const tbody = document.getElementById('propostas-finais-tbody');
  tbody.innerHTML = '';
  propostasFinais.forEach((p, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${p.nome}</td>
      <td>R$ ${p.preco.toFixed(2)}</td>
      <td>${p.quantidade} ${cotacaoAtual.unidade}</td>
      <td><input type="checkbox" onchange="togglePropostaSelection(${p.propostaId})" id="check-proposta-${p.propostaId}"></td>
      <td><button class="btn-quantidade" onclick="openQuantidadeModal(${p.propostaId})">Selecionar Qtd.</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function togglePropostaSelection(propostaId) {
  const checkbox = document.getElementById('check-proposta-' + propostaId);
  if (checkbox.checked) {
    propostasSelecionadas[propostaId] = { quantidade: null };
  } else {
    delete propostasSelecionadas[propostaId];
  }
}

function openQuantidadeModal(propostaId) {
  // Chama modal de quantidade
  if (typeof setPropostaContext === 'function') setPropostaContext(propostaId);
  // Exibe modal
  const modal = document.getElementById('modal-quantidade');
  if (modal) modal.style.display = 'flex';
}

function enviarPedidoCompra() {
  // Valida seleção e quantidades
  const selecionados = Object.keys(propostasSelecionadas);
  if (selecionados.length === 0) {
    alert('Selecione ao menos um fornecedor e informe a quantidade.');
    return;
  }
  for (let propId of selecionados) {
    if (!propostasSelecionadas[propId].quantidade || propostasSelecionadas[propId].quantidade <= 0) {
      alert('Informe a quantidade para todos os fornecedores selecionados.');
      return;
    }
  }
  // Simulação de envio
  alert('Pedido de compra enviado com sucesso!');
  // Em produção: chamada API para registrar pedido
  // Redirecionar ou fechar modal
  window.location.href = 'dashboard-comprador.html';
}
