"use strict";
// Renderização de gráficos usando Chart.js (inclusão dinâmica se não existir)
(function loadChartJs(cb) {
  if (window.Chart) return cb();
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
  script.onload = cb;
  document.head.appendChild(script);
})(function() {
  // Função para gráfico de variação de preços
  window.renderGraficoVariacaoPrecos = function(canvasId, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Preço Antigo',
          data: data.antigo,
          borderColor: '#2e3192',
          backgroundColor: 'rgba(46,49,146,0.1)',
          fill: false,
          tension: 0.2
        }, {
          label: 'Preço Novo',
          data: data.novo,
          borderColor: '#00b1b0',
          backgroundColor: 'rgba(0,177,176,0.1)',
          fill: false,
          tension: 0.2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: { enabled: true },
          legend: { display: true }
        },
        interaction: { mode: 'index', intersect: false },
        scales: {
          y: { beginAtZero: false, title: { display: true, text: 'Preço (R$)' } },
          x: { title: { display: true, text: 'SKU' } }
        }
      }
    });
  };

  // Gráfico de impacto DRE
  window.renderGraficoImpactoDRE = function(canvasId, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Impacto (R$)',
          data: data.valores,
          backgroundColor: '#2e3192'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: { enabled: true },
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: true, title: { display: true, text: 'Impacto em R$' } },
          x: { title: { display: true, text: 'Fornecedor' } }
        }
      }
    });
  };

  // Gráfico de performance de fornecedores
  window.renderGraficoPerformanceFornecedor = function(canvasId, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Performance',
          data: data.scores,
          backgroundColor: 'rgba(0,177,176,0.2)',
          borderColor: '#00b1b0',
          pointBackgroundColor: '#2e3192'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: { enabled: true },
          legend: { display: false }
        },
        scales: {
          r: {
            angleLines: { display: true },
            suggestedMin: 0,
            suggestedMax: 100
          }
        }
      }
    });
  };

  // Gráfico timeline de aprovações
  window.renderGraficoTimelineAprovacoes = function(canvasId, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: data.map((aprov, i) => ({
          label: aprov.usuario,
          data: aprov.eventos.map(ev => ({ x: new Date(ev.dataHora), y: i + 1 })),
          backgroundColor: '#2e3192',
          pointRadius: 6,
          showLine: false
        }))
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: function(context) {
                const d = context.raw;
                return `${context.dataset.label}: ${d.x.toLocaleString('pt-BR')}`;
              }
            }
          },
          legend: { display: true }
        },
        scales: {
          x: {
            type: 'time',
            time: { unit: 'hour', tooltipFormat: 'dd/MM/yyyy HH:mm' },
            title: { display: true, text: 'Data/Hora' }
          },
          y: {
            ticks: { callback: (v) => data[v-1]?.usuario || '' },
            min: 0,
            max: data.length+1,
            title: { display: true, text: 'Aprovador' }
          }
        }
      }
    });
  };
});
