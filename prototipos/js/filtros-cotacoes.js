// Script para filtros interativos na página cotacoes-enviadas.html
// Filtra por status, fornecedor, período sem recarregar página

document.addEventListener('DOMContentLoaded', function() {
  var statusFiltro = document.getElementById('filtro-status');
  var fornecedorFiltro = document.getElementById('filtro-fornecedor');
  var periodoFiltro = document.getElementById('filtro-periodo');
  var tabelaCotacoes = document.getElementById('tabela-cotacoes');

  function filtrarCotacoes() {
    var status = statusFiltro ? statusFiltro.value : '';
    var fornecedor = fornecedorFiltro ? fornecedorFiltro.value.toLowerCase() : '';
    var periodo = periodoFiltro ? periodoFiltro.value : '';
    var linhas = tabelaCotacoes ? tabelaCotacoes.querySelectorAll('tbody tr') : [];
    linhas.forEach(function(tr) {
      var tdStatus = tr.querySelector('.td-status');
      var tdFornecedor = tr.querySelector('.td-fornecedor');
      var tdData = tr.querySelector('.td-data');
      var mostra = true;
      if (status && tdStatus && tdStatus.textContent.trim().toLowerCase() !== status.toLowerCase()) {
        mostra = false;
      }
      if (fornecedor && tdFornecedor && !tdFornecedor.textContent.toLowerCase().includes(fornecedor)) {
        mostra = false;
      }
      if (periodo && tdData) {
        var dataCotacao = tdData.textContent.trim();
        // Suporta filtro por mês/ano: "2024-06" ou intervalo "2024-06-01:2024-06-30"
        if (periodo.includes(':')) {
          var partes = periodo.split(':');
          var inicio = new Date(partes[0]);
          var fim = new Date(partes[1]);
          var dataLinha = new Date(dataCotacao.split('/').reverse().join('-'));
          if (dataLinha < inicio || dataLinha > fim) mostra = false;
        } else {
          var [ano, mes] = periodo.split('-');
          var [dia, mesLinha, anoLinha] = dataCotacao.split('/');
          if (anoLinha !== ano || mesLinha !== mes) mostra = false;
        }
      }
      tr.style.display = mostra ? '' : 'none';
    });
  }

  if (statusFiltro) statusFiltro.addEventListener('change', filtrarCotacoes);
  if (fornecedorFiltro) fornecedorFiltro.addEventListener('input', filtrarCotacoes);
  if (periodoFiltro) periodoFiltro.addEventListener('change', filtrarCotacoes);
});