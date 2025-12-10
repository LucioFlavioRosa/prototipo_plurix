// prototipos/js/responder-cotacao.js
// Script para responder-cotacao.html

// Mock de detalhes de cotação
const cotacoesMock = {
  101: {
    id: 101,
    produto: 'Tomate Italiano',
    quantidade: 500,
    unidade: 'kg',
    dataEntrega: '2024-06-14',
    precoReferencia: 4.20,
    condicoes: 'Entrega refrigerada, caixa plástica retornável, pagamento 21 dias.'
  },
  102: {
    id: 102,
    produto: 'Cenoura',
    quantidade: 200,
    unidade: 'kg',
    dataEntrega: '2024-06-15',
    precoReferencia: 2.80,
    condicoes: 'Entrega em até 24h após pedido, caixa papelão, pagamento 14 dias.'
  },
  103: {
    id: 103,
    produto: 'Alcatra Bovina',
    quantidade: 100,
    unidade: 'kg',
    dataEntrega: '2024-06-16',
    precoReferencia: 32.00,
    condicoes: 'Entrega refrigerada, embalagem a vácuo, pagamento 28 dias.'
  }
};

function getCotacaoIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.has('cotacaoId') ? params.get('cotacaoId') : null;
}

function loadCotacaoDetalhes(id) {
  const cotacao = cotacoesMock[id];
  if (!cotacao) {
    document.getElementById('detalhes-cotacao').innerHTML = '<p>Cotação não encontrada.</p>';
    document.getElementById('form-proposta').style.display = 'none';
    return;
  }
  document.getElementById('cotacao-produto').textContent = cotacao.produto;
  document.getElementById('cotacao-quantidade').textContent = cotacao.quantidade + ' ' + cotacao.unidade;
  document.getElementById('cotacao-data').textContent = cotacao.dataEntrega;
  document.getElementById('cotacao-condicoes').textContent = cotacao.condicoes;
  document.getElementById('cotacao-preco-ref').textContent = 'R$ ' + cotacao.precoReferencia.toFixed(2);
  document.getElementById('form-proposta').style.display = 'block';
}

function submitProposta(event) {
  event.preventDefault();
  const data = {
    quantidade: document.getElementById('input-quantidade').value,
    preco: document.getElementById('input-preco').value
  };
  if (!validateProposta(data)) {
    alert('Preencha quantidade e preço corretamente.');
    return;
  }
  const valorTotal = calculateValorTotal(data.quantidade, data.preco);
  alert(
    `Proposta enviada com sucesso!\nQuantidade: ${data.quantidade}\nPreço unitário: R$ ${parseFloat(data.preco).toFixed(2)}\nValor total: R$ ${valorTotal.toFixed(2)}`
  );
  // Redireciona para dashboard-fornecedor.html
  window.location.href = 'dashboard-fornecedor.html';
}

function validateProposta(data) {
  const qtd = Number(data.quantidade);
  const preco = Number(data.preco);
  return (
    !isNaN(qtd) && qtd > 0 &&
    !isNaN(preco) && preco > 0
  );
}

function calculateValorTotal(quantidade, preco) {
  return Number(quantidade) * Number(preco);
}

document.addEventListener('DOMContentLoaded', () => {
  const id = getCotacaoIdFromUrl();
  if (id) {
    loadCotacaoDetalhes(id);
  }
  const form = document.getElementById('form-proposta');
  if (form) {
    form.onsubmit = submitProposta;
  }
});
