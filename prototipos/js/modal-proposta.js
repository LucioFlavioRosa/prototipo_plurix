// prototipos/js/modal-proposta.js
// Script para modal-proposta-fornecedor.html
// Requer Chart.js incluído na página

let propostaAtual = null;

function loadPropostaDetalhes(propostaId) {
  // Simulação de busca de dados (mock)
  // Em produção, substituir por chamada à API
  const propostas = {
    1: {
      id: 1,
      produto: 'Carne Bovina - Alcatra',
      quantidade: 200,
      unidade: 'kg',
      precoUnitario: 38.50,
      fornecedorId: 101,
      fornecedor: 'Frigorífico Bom Corte',
      status: 'enviada',
      dataEntrega: '2024-06-20',
      condicoes: 'Refrigerado, entrega até 12h, embalagem a vácuo',
      historicoKPI: {
        pontualidade: [95, 98, 97, 99, 96],
        qualidade: [90, 92, 93, 91, 94],
        meses: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai']
      },
      historicoPreco: [39.2, 38.9, 39.5, 38.7, 38.5],
      mercado: [40.0, 39.8, 39.9, 39.7, 39.4],
      produtoId: 501
    }
    // ... outras propostas
  };
  propostaAtual = propostas[propostaId];
  if (!propostaAtual) {
    alert('Proposta não encontrada.');
    return;
  }
  // Preencher modal
  document.getElementById('proposta-produto').textContent = propostaAtual.produto;
  document.getElementById('proposta-fornecedor').textContent = propostaAtual.fornecedor;
  document.getElementById('proposta-quantidade').textContent = propostaAtual.quantidade + ' ' + propostaAtual.unidade;
  document.getElementById('proposta-preco').textContent = 'R$ ' + propostaAtual.precoUnitario.toFixed(2);
  document.getElementById('proposta-entrega').textContent = propostaAtual.dataEntrega;
  document.getElementById('proposta-condicoes').textContent = propostaAtual.condicoes;
  renderKPICharts(propostaAtual.fornecedorId);
  renderPriceComparisonChart(propostaAtual.produtoId, propostaAtual.fornecedorId);
}

function renderKPICharts(fornecedorId) {
  // Usa dados mock da propostaAtual
  if (!propostaAtual) return;
  const ctxPontualidade = document.getElementById('chart-pontualidade').getContext('2d');
  const ctxQualidade = document.getElementById('chart-qualidade').getContext('2d');
  // Destruir gráficos antigos se existirem
  if (window.pontualidadeChart) window.pontualidadeChart.destroy();
  if (window.qualidadeChart) window.qualidadeChart.destroy();
  window.pontualidadeChart = new Chart(ctxPontualidade, {
    type: 'line',
    data: {
      labels: propostaAtual.historicoKPI.meses,
      datasets: [{
        label: 'Pontualidade (%)',
        data: propostaAtual.historicoKPI.pontualidade,
        borderColor: '#4bb543',
        backgroundColor: 'rgba(75,181,67,0.12)',
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { min: 80, max: 100 } }
    }
  });
  window.qualidadeChart = new Chart(ctxQualidade, {
    type: 'line',
    data: {
      labels: propostaAtual.historicoKPI.meses,
      datasets: [{
        label: 'Qualidade (%)',
        data: propostaAtual.historicoKPI.qualidade,
        borderColor: '#f9b233',
        backgroundColor: 'rgba(249,178,51,0.12)',
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { min: 80, max: 100 } }
    }
  });
}

function renderPriceComparisonChart(produtoId, fornecedorId) {
  // Usa dados mock da propostaAtual
  if (!propostaAtual) return;
  const ctxPreco = document.getElementById('chart-preco').getContext('2d');
  if (window.precoChart) window.precoChart.destroy();
  window.precoChart = new Chart(ctxPreco, {
    type: 'line',
    data: {
      labels: propostaAtual.historicoKPI.meses,
      datasets: [
        {
          label: 'Fornecedor',
          data: propostaAtual.historicoPreco,
          borderColor: '#1a2340',
          backgroundColor: 'rgba(26,35,64,0.09)',
          tension: 0.3,
          fill: true
        },
        {
          label: 'Mercado (Esalq/CEPEA)',
          data: propostaAtual.mercado,
          borderColor: '#e74c3c',
          backgroundColor: 'rgba(231,76,60,0.09)',
          tension: 0.3,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'top' } },
      scales: { y: { beginAtZero: false } }
    }
  });
}

function aceitarProposta(propostaId) {
  // Simulação de aceite
  alert('Proposta aceita com sucesso!');
  // Fechar modal e atualizar dashboard
  if (typeof fecharModalProposta === 'function') fecharModalProposta();
  // Em produção: chamada API para registrar aceite
}

function rejeitarProposta(propostaId) {
  // Simulação de rejeição
  alert('Proposta rejeitada.');
  if (typeof fecharModalProposta === 'function') fecharModalProposta();
  // Em produção: chamada API para registrar rejeição
}
