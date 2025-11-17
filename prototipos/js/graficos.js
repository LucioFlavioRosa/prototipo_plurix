"use strict";
// Renderização de gráficos usando Chart.js (inclusão obrigatória nas páginas que usam gráficos)
// Funções utilitárias para gráficos do protótipo Plurix

// Gráfico de variação de preços por SKU
window.renderGraficoVariacaoPrecos = function(ctx, dados) {
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dados.map(item => item.sku),
      datasets: [
        {
          label: 'Preço Anterior',
          backgroundColor: '#b3b3b3',
          data: dados.map(item => item.precoAnterior)
        },
        {
          label: 'Preço Novo',
          backgroundColor: '#0071ce',
          data: dados.map(item => item.precoNovo)
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: { enabled: true },
        legend: { position: 'top' }
      },
      scales: {
        x: { stacked: true },
        y: { beginAtZero: true }
      }
    }
  });
};

// Gráfico de impacto no DRE por categoria
window.renderGraficoImpactoDRE = function(ctx, dados) {
  return new Chart(ctx, {
    type: 'pie',
    data: {
      labels: dados.map(item => item.categoria),
      datasets: [
        {
          label: 'Impacto R$',
          data: dados.map(item => item.impacto),
          backgroundColor: [
            '#0071ce', '#00a859', '#ffb300', '#e53935', '#8e24aa', '#43a047', '#f4511e'
          ]
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: { enabled: true },
        legend: { position: 'right' }
      }
    }
  });
};

// Gráfico de performance de fornecedores
window.renderGraficoPerformanceFornecedores = function(ctx, dados) {
  return new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: dados.map(item => item.fornecedor),
      datasets: [
        {
          label: 'Pontualidade (%)',
          backgroundColor: '#00a859',
          data: dados.map(item => item.pontualidade)
        },
        {
          label: 'Qualidade de Dados (%)',
          backgroundColor: '#0071ce',
          data: dados.map(item => item.qualidade)
        }
      ]
    },
    options: {
      responsive: true,
      indexAxis: 'y',
      plugins: {
        tooltip: { enabled: true },
        legend: { position: 'top' }
      },
      scales: {
        x: { min: 0, max: 100, title: { display: true, text: '%' } },
        y: { beginAtZero: true }
      }
    }
  });
};

// Timeline de aprovações
window.renderTimelineAprovacoes = function(ctx, dados) {
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: dados.map(item => item.data),
      datasets: [
        {
          label: 'Aprovações',
          borderColor: '#0071ce',
          backgroundColor: 'rgba(0,113,206,0.1)',
          data: dados.map(item => item.qtdAprovacoes),
          fill: true,
          tension: 0.3
        },
        {
          label: 'Reprovações',
          borderColor: '#e53935',
          backgroundColor: 'rgba(229,57,53,0.1)',
          data: dados.map(item => item.qtdReprovacoes),
          fill: true,
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: { enabled: true },
        legend: { position: 'top' }
      },
      scales: {
        x: { title: { display: true, text: 'Data' } },
        y: { beginAtZero: true, title: { display: true, text: 'Quantidade' } }
      }
    }
  });
};
