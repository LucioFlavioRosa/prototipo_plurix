// Script para filtros interativos em cotacoes-enviadas.html
// Filtra cotacoes por status, fornecedor e período sem recarregar página

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
      var tdStatus = tr.querySelector('.cotacao-status');
      var tdFornecedor = tr.querySelector('.cotacao-fornecedor');
      var tdData = tr.querySelector('.cotacao-data');
      var exibe = true;
      if (status && tdStatus && tdStatus.textContent.trim().toLowerCase() !== status.toLowerCase()) {
        exibe = false;
      }
      if (fornecedor && tdFornecedor && !tdFornecedor.textContent.trim().toLowerCase().includes(fornecedor)) {
        exibe = false;
      }
      if (periodo && tdData) {
        var dataCotacao = tdData.textContent.trim();
        var [dia, mes, ano] = dataCotacao.split('/');
        var dataObj = new Date(ano, mes - 1, dia);
        var [inicio, fim] = periodo.split(' - ');
        if (inicio && fim) {
          var [diaIni, mesIni, anoIni] = inicio.split('/');
          var [diaFim, mesFim, anoFim] = fim.split('/');
          var dataIni = new Date(anoIni, mesIni - 1, diaIni);
          var dataFim = new Date(anoFim, mesFim - 1, diaFim);
          if (dataObj < dataIni || dataObj > dataFim) exibe = false;
        }
      }
      tr.style.display = exibe ? '' : 'none';
    });
  }

  if (statusFiltro) statusFiltro.addEventListener('change', filtrarCotacoes);
  if (fornecedorFiltro) fornecedorFiltro.addEventListener('input', filtrarCotacoes);
  if (periodoFiltro) periodoFiltro.addEventListener('change', filtrarCotacoes);
});