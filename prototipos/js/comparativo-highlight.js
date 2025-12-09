// Destaca automaticamente a linha com melhor preço e melhor prazo na tabela de comparativo de cotações
(function() {
  function highlightComparativo() {
    var tabela = document.querySelector('table.comparativo-cotacoes');
    if (!tabela) return;
    var linhas = Array.from(tabela.querySelectorAll('tbody tr'));
    if (linhas.length === 0) return;
    var menorPreco = Infinity, menorPrazo = Infinity;
    var idxPreco = -1, idxPrazo = -1;
    linhas.forEach(function(tr, i) {
      var preco = parseFloat(tr.querySelector('.col-preco')?.textContent.replace(',', '.') || '99999');
      var prazo = parseInt(tr.querySelector('.col-prazo')?.textContent || '99999', 10);
      if (preco < menorPreco) { menorPreco = preco; idxPreco = i; }
      if (prazo < menorPrazo) { menorPrazo = prazo; idxPrazo = i; }
    });
    linhas.forEach(function(tr, i) {
      tr.style.background = '';
    });
    if (idxPreco >= 0) linhas[idxPreco].style.background = '#eafbe6';
    if (idxPrazo >= 0 && idxPrazo !== idxPreco) linhas[idxPrazo].style.background = '#e6f3fb';
  }
  document.addEventListener('DOMContentLoaded', highlightComparativo);
})();