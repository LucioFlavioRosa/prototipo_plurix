// Destaca automaticamente a linha com melhor preço e melhor prazo na tabela de comparativo-cotacoes.html
(function() {
  function highlightComparativo() {
    var tabela = document.querySelector('.comparativo-cotacoes-table');
    if (!tabela) return;
    var linhas = tabela.querySelectorAll('tbody tr');
    var menorPreco = Infinity, menorPrazo = Infinity;
    var idxPreco = -1, idxPrazo = -1;
    linhas.forEach(function(tr, idx) {
      var precoTd = tr.querySelector('[data-col="preco"]');
      var prazoTd = tr.querySelector('[data-col="prazo"]');
      if (precoTd) {
        var preco = parseFloat(precoTd.textContent.replace(',', '.'));
        if (!isNaN(preco) && preco < menorPreco) {
          menorPreco = preco;
          idxPreco = idx;
        }
      }
      if (prazoTd) {
        var prazo = parseInt(prazoTd.textContent);
        if (!isNaN(prazo) && prazo < menorPrazo) {
          menorPrazo = prazo;
          idxPrazo = idx;
        }
      }
    });
    linhas.forEach(function(tr, idx) {
      tr.style.background = '';
    });
    if (idxPreco !== -1) {
      linhas[idxPreco].style.background = '#d6f5d6';
    }
    if (idxPrazo !== -1 && idxPrazo !== idxPreco) {
      linhas[idxPrazo].style.background = '#e3f6d6';
    }
  }
  document.addEventListener('DOMContentLoaded', highlightComparativo);
})();