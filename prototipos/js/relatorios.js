// prototipos/js/relatorios.js
// Script para relatórios comparativos de preços, performance, geração de gráficos e exportação

// Dados mock para relatórios
const relatorioPrecosMock = [
  { produto: 'Tomate', fornecedor: 'Hortifruti Silva', preco: 5.20, periodo: '2024-06', mercado: 5.10 },
  { produto: 'Alcatra Bovina', fornecedor: 'Frigorífico Boa Carne', preco: 34.90, periodo: '2024-06', mercado: 35.40 },
  { produto: 'Banana Prata', fornecedor: 'Distribuidora Tropical', preco: 3.10, periodo: '2024-06', mercado: 3.50 }
];

const relatorioPerformanceMock = [
  { comprador: 'João Silva', cotações: 12, aproveitamento: 0.92, tempoMedio: 2.3 },
  { comprador: 'Maria Souza', cotações: 15, aproveitamento: 0.87, tempoMedio: 2.8 }
];

function loadRelatorioComparativoPrecos(filters = {}) {
  // Filtro mock
  let data = relatorioPrecosMock;
  if (filters.produto) {
    data = data.filter(r => r.produto.toLowerCase().includes(filters.produto.toLowerCase()));
  }
  renderRelatorioPrecos(data);
  generateCharts(data, 'chart-precos');
}

function loadRelatorioPerformance(filters = {}) {
  let data = relatorioPerformanceMock;
  if (filters.comprador) {
    data = data.filter(r => r.comprador.toLowerCase().includes(filters.comprador.toLowerCase()));
  }
  renderRelatorioPerformance(data);
  generateCharts(data, 'chart-performance');
}

function renderRelatorioPrecos(data) {
  const tbody = document.querySelector('#relatorio-precos-table tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  data.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.produto}</td>
      <td>${item.fornecedor}</td>
      <td>R$ ${item.preco.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
      <td>R$ ${item.mercado.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
      <td>${item.periodo}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderRelatorioPerformance(data) {
  const tbody = document.querySelector('#relatorio-performance-table tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  data.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.comprador}</td>
      <td>${item.cotações}</td>
      <td>${(item.aproveitamento * 100).toFixed(1)}%</td>
      <td>${item.tempoMedio} dias</td>
    `;
    tbody.appendChild(tr);
  });
}

function generateCharts(data, chartId) {
  // Exemplo com Chart.js
  if (typeof Chart === 'undefined') return;
  const ctx = document.getElementById(chartId);
  if (!ctx) return;
  // Exemplo: gráfico de barras para preços
  if (chartId === 'chart-precos') {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(i => i.produto + ' - ' + i.fornecedor),
        datasets: [
          {
            label: 'Preço Fornecedor',
            data: data.map(i => i.preco),
            backgroundColor: '#4bb543'
          },
          {
            label: 'Preço Mercado',
            data: data.map(i => i.mercado),
            backgroundColor: '#f9b233'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Comparativo de Preços' }
        }
      }
    });
  }
  // Exemplo: gráfico de performance
  if (chartId === 'chart-performance') {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(i => i.comprador),
        datasets: [
          {
            label: 'Aproveitamento (%)',
            data: data.map(i => (i.aproveitamento * 100)),
            backgroundColor: '#1a2340'
          },
          {
            label: 'Tempo Médio (dias)',
            data: data.map(i => i.tempoMedio),
            backgroundColor: '#f9b233'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Performance de Compradores' }
        }
      }
    });
  }
}

function exportRelatorio(format = 'excel') {
  if (format === 'excel') {
    if (typeof XLSX === 'undefined') {
      alert('Biblioteca XLSX não carregada.');
      return;
    }
    // Exporta a tabela de preços
    const ws_data = [
      ['Produto', 'Fornecedor', 'Preço', 'Preço Mercado', 'Período']
    ];
    relatorioPrecosMock.forEach(item => {
      ws_data.push([
        item.produto,
        item.fornecedor,
        item.preco,
        item.mercado,
        item.periodo
      ]);
    });
    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'ComparativoPrecos');
    XLSX.writeFile(wb, 'relatorio-comparativo-precos.xlsx');
  } else if (format === 'pdf') {
    // Exemplo: exportação PDF pode ser feita com jsPDF (não implementada aqui)
    alert('Exportação em PDF não implementada neste protótipo.');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Inicialização automática
  loadRelatorioComparativoPrecos();
  loadRelatorioPerformance();
  // Botões de exportação
  const btnExport = document.getElementById('btn-exportar-relatorio');
  if (btnExport) {
    btnExport.addEventListener('click', function() {
      exportRelatorio('excel');
    });
  }
});
