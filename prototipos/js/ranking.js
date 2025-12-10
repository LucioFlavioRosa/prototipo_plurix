// prototipos/js/ranking.js
// Script para ranking de fornecedores por categoria e período

let rankingData = [
  // Exemplo mock
  { fornecedor: 'Fornecedor A', categoria: 'Carnes', periodo: '2024-06', kpis: { qualidade: 9.2, pontualidade: 8.8, preco: 7.5 } },
  { fornecedor: 'Fornecedor B', categoria: 'Carnes', periodo: '2024-06', kpis: { qualidade: 8.7, pontualidade: 9.5, preco: 8.0 } },
  { fornecedor: 'Fornecedor C', categoria: 'Frutas', periodo: '2024-06', kpis: { qualidade: 9.5, pontualidade: 9.1, preco: 8.2 } },
  { fornecedor: 'Fornecedor D', categoria: 'Verduras', periodo: '2024-06', kpis: { qualidade: 8.9, pontualidade: 8.5, preco: 7.8 } }
];

function loadRanking(categoria = '', periodo = '') {
  // Filtra e popula tabela
  const tbody = document.getElementById('ranking-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  let dados = rankingData;
  if (categoria) dados = dados.filter(r => r.categoria === categoria);
  if (periodo) dados = dados.filter(r => r.periodo === periodo);
  dados.forEach((r, idx) => {
    const score = calculateScore(r.kpis);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${r.fornecedor}</td>
      <td>${r.categoria}</td>
      <td>${r.periodo}</td>
      <td>${r.kpis.qualidade.toFixed(1)}</td>
      <td>${r.kpis.pontualidade.toFixed(1)}</td>
      <td>${r.kpis.preco.toFixed(1)}</td>
      <td><strong>${score.toFixed(2)}</strong></td>
    `;
    tbody.appendChild(tr);
  });
  renderRankingChart(dados);
}

function calculateScore(kpis) {
  // Score ponderado: qualidade 40%, pontualidade 35%, preco 25%
  return kpis.qualidade * 0.4 + kpis.pontualidade * 0.35 + kpis.preco * 0.25;
}

function renderRankingChart(data) {
  // Exemplo simples com Chart.js (deve haver um <canvas id="rankingChart"> na página)
  if (typeof Chart === 'undefined') return;
  const ctx = document.getElementById('rankingChart');
  if (!ctx) return;
  const labels = data.map(r => r.fornecedor);
  const scores = data.map(r => calculateScore(r.kpis));
  if (window.rankingChartInstance) window.rankingChartInstance.destroy();
  window.rankingChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Score',
        data: scores,
        backgroundColor: '#f9b233'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: { display: true, text: 'Ranking de Fornecedores' }
      },
      scales: {
        y: { beginAtZero: true, max: 10 }
      }
    }
  });
}

function filterByCategoria(categoria) {
  loadRanking(categoria);
}

document.addEventListener('DOMContentLoaded', function() {
  loadRanking();
  // Filtros
  const categoriaSelect = document.getElementById('categoria-select');
  if (categoriaSelect) {
    categoriaSelect.addEventListener('change', function() {
      loadRanking(this.value);
    });
  }
  const periodoSelect = document.getElementById('periodo-select');
  if (periodoSelect) {
    periodoSelect.addEventListener('change', function() {
      loadRanking(categoriaSelect ? categoriaSelect.value : '', this.value);
    });
  }
});
