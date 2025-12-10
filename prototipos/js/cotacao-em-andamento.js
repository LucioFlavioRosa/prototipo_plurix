// prototipos/js/cotacao-em-andamento.js
// Script para cotacao-em-andamento.html
// Requer 'mock-data.js' carregado antes deste script

function loadCotacaoDetalhes(id) {
  const cotacao = window.mockCotacoes.find(c => c.id === Number(id));
  if (!cotacao) return;
  document.getElementById('cotacao-produto').textContent = cotacao.produto;
  document.getElementById('cotacao-quantidade').textContent = cotacao.quantidade + ' ' + cotacao.unidade;
  document.getElementById('cotacao-entrega').textContent = cotacao.data_entrega;
  document.getElementById('cotacao-condicoes').textContent = cotacao.condicoes;
}

function loadPropostasRecebidas(cotacaoId) {
  const tbody = document.querySelector('#tabela-propostas-recebidas tbody');
  if (!tbody || !window.mockPropostas) return;
  tbody.innerHTML = '';
  const propostas = window.mockPropostas.filter(p => p.cotacaoId === Number(cotacaoId));
  propostas.forEach(proposta => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${proposta.fornecedorNome}</td>
      <td>${proposta.quantidade}</td>
      <td>R$ ${proposta.preco_unitario.toFixed(2)}</td>
      <td><button class="btn-link" data-id="${proposta.id}">Ver Proposta</button></td>
    `;
    tr.querySelector('button').addEventListener('click', () => openPropostaModal(proposta.id));
    tbody.appendChild(tr);
  });
}

function loadFornecedoresSemProposta(cotacaoId) {
  const tbody = document.querySelector('#tabela-fornecedores-sem-proposta tbody');
  if (!tbody || !window.mockFornecedores) return;
  tbody.innerHTML = '';
  // Fornecedores convidados menos os que já enviaram proposta
  const propostas = window.mockPropostas.filter(p => p.cotacaoId === Number(cotacaoId));
  const fornecedoresComProposta = propostas.map(p => p.fornecedorId);
  const fornecedores = window.mockFornecedores.filter(f => f.cotacoes.includes(Number(cotacaoId)) && !fornecedoresComProposta.includes(f.id));
  fornecedores.forEach(fornecedor => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${fornecedor.nome}</td>
      <td>${fornecedor.kpis.qualidade}%</td>
      <td>${fornecedor.kpis.pontualidade}%</td>
      <td>${fornecedor.kpis.spread_preco}%</td>
    `;
    tbody.appendChild(tr);
  });
}

function openPropostaModal(propostaId) {
  // Simula modal com detalhes da proposta
  const proposta = window.mockPropostas.find(p => p.id === propostaId);
  if (!proposta) return;
  // Exemplo: abrir modal customizado
  alert(`Proposta de ${proposta.fornecedorNome}\nQuantidade: ${proposta.quantidade}\nPreço unitário: R$ ${proposta.preco_unitario.toFixed(2)}`);
}

document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const cotacaoId = urlParams.get('cotacaoId');
  loadCotacaoDetalhes(cotacaoId);
  loadPropostasRecebidas(cotacaoId);
  loadFornecedoresSemProposta(cotacaoId);
  // Botão voltar
  const btnVoltar = document.getElementById('btn-voltar-dashboard');
  if (btnVoltar) {
    btnVoltar.addEventListener('click', function() {
      window.location.href = 'dashboard-comprador.html';
    });
  }
});
