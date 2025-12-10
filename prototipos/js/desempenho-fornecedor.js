// prototipos/js/desempenho-fornecedor.js

// Mock de KPIs e não-conformidades
const mockKPIs = {
  pontualidade: [90, 92, 95, 93, 97, 98], // % por mês
  qualidade: [96, 94, 97, 98, 99, 97], // % por mês
  conformidade: [99, 98, 98, 97, 99, 98], // % por mês
  meses: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun']
};

const mockNaoConformidades = [
  {
    data: '2024-05-12',
    tipo: 'Atraso na entrega',
    descricao: 'Entrega realizada com 1 dia de atraso.'
  },
  {
    data: '2024-04-28',
    tipo: 'Qualidade abaixo do esperado',
    descricao: 'Lote de tomate apresentou avarias.'
  }
];

function loadKPIs() {
  document.getElementById('kpi-pontualidade').textContent =
    mockKPIs.pontualidade[mockKPIs.pontualidade.length - 1] + '%';
  document.getElementById('kpi-qualidade').textContent =
    mockKPIs.qualidade[mockKPIs.qualidade.length - 1] + '%';
  document.getElementById('kpi-conformidade').textContent =
    mockKPIs.conformidade[mockKPIs.conformidade.length - 1] + '%';
  document.getElementById('kpi-score').textContent =
    calculateScoreGeral(mockKPIs) + '%';
}

function calculateScoreGeral(kpis) {
  // Score geral = média dos últimos valores de cada KPI
  const ultimos = [
    kpis.pontualidade[kpis.pontualidade.length - 1],
    kpis.qualidade[kpis.qualidade.length - 1],
    kpis.conformidade[kpis.conformidade.length - 1]
  ];
  return Math.round(ultimos.reduce((a, b) => a + b, 0) / ultimos.length);
}

function renderKPICharts() {
  // Exemplo simples com Chart.js (deve haver <canvas> com ids abaixo na página)
  if (typeof Chart === 'undefined') return;
  const ctxPontualidade = document.getElementById('chart-pontualidade').getContext('2d');
  new Chart(ctxPontualidade, {
    type: 'line',
    data: {
      labels: mockKPIs.meses,
      datasets: [{
        label: 'Pontualidade (%)',
        data: mockKPIs.pontualidade,
        borderColor: '#4bb543',
        fill: false
      }]
    },
    options: { responsive: true, plugins: { legend: { display: false } } }
  });
  const ctxQualidade = document.getElementById('chart-qualidade').getContext('2d');
  new Chart(ctxQualidade, {
    type: 'line',
    data: {
      labels: mockKPIs.meses,
      datasets: [{
        label: 'Qualidade (%)',
        data: mockKPIs.qualidade,
        borderColor: '#f9b233',
        fill: false
      }]
    },
    options: { responsive: true, plugins: { legend: { display: false } } }
  });
  const ctxConformidade = document.getElementById('chart-conformidade').getContext('2d');
  new Chart(ctxConformidade, {
    type: 'line',
    data: {
      labels: mockKPIs.meses,
      datasets: [{
        label: 'Conformidade (%)',
        data: mockKPIs.conformidade,
        borderColor: '#1a2340',
        fill: false
      }]
    },
    options: { responsive: true, plugins: { legend: { display: false } } }
  });
}

function loadNaoConformidades() {
  const tbody = document.getElementById('nao-conformidades-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  if (mockNaoConformidades.length === 0) {
    tbody.innerHTML = '<tr><td colspan="3">Nenhuma não-conformidade registrada.</td></tr>';
    return;
  }
  mockNaoConformidades.forEach(item => {
    tbody.innerHTML += `<tr>
      <td>${item.data}</td>
      <td>${item.tipo}</td>
      <td>${item.descricao}</td>
    </tr>`;
  });
}

document.addEventListener('DOMContentLoaded', function() {
  loadKPIs();
  loadNaoConformidades();
  renderKPICharts();
});
