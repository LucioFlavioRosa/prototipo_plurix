// prototipos/js/selecao-fornecedores.js
// Script para selecao-fornecedores.html
// Requer 'mock-data.js' carregado antes deste script

let fornecedoresSelecionados = new Set();

function loadFornecedores(cotacaoId) {
  const tbody = document.querySelector('#tabela-fornecedores tbody');
  if (!tbody || !window.mockFornecedores) return;
  tbody.innerHTML = '';
  const fornecedores = window.mockFornecedores.filter(f => f.cotacoes.includes(Number(cotacaoId)));
  fornecedores.forEach(fornecedor => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><input type="checkbox" data-id="${fornecedor.id}" onchange="toggleFornecedorSelection(${fornecedor.id})"></td>
      <td>${fornecedor.nome}</td>
      <td>${fornecedor.kpis.qualidade}%</td>
      <td>${fornecedor.kpis.pontualidade}%</td>
      <td>${fornecedor.kpis.spread_preco}%</td>
    `;
    tbody.appendChild(tr);
  });
}

function toggleFornecedorSelection(fornecedorId) {
  if (fornecedoresSelecionados.has(fornecedorId)) {
    fornecedoresSelecionados.delete(fornecedorId);
  } else {
    fornecedoresSelecionados.add(fornecedorId);
  }
}

function validateSelection() {
  return fornecedoresSelecionados.size > 0;
}

function dispararCotacao() {
  if (!validateSelection()) {
    alert('Selecione ao menos um fornecedor para disparar a cotação.');
    return;
  }
  // Simula envio
  alert('Cotação disparada para os fornecedores selecionados!');
  window.location.href = 'dashboard-comprador.html';
}

document.addEventListener('DOMContentLoaded', function() {
  // Pega cotacaoId da URL
  const urlParams = new URLSearchParams(window.location.search);
  const cotacaoId = urlParams.get('cotacaoId');
  loadFornecedores(cotacaoId);
  // Botão disparar cotação
  const btnDisparar = document.getElementById('btn-disparar-cotacao');
  if (btnDisparar) {
    btnDisparar.addEventListener('click', dispararCotacao);
  }
  // Botão voltar
  const btnVoltar = document.getElementById('btn-voltar-dashboard');
  if (btnVoltar) {
    btnVoltar.addEventListener('click', function() {
      window.location.href = 'dashboard-comprador.html';
    });
  }
});
