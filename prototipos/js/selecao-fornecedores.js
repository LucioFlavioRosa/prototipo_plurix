// Script para seleção múltipla de fornecedores em selecionar-fornecedores.html
// Exibe contador de selecionados e validação mínima (pelo menos 1 fornecedor)

document.addEventListener('DOMContentLoaded', function() {
  var checkboxes = document.querySelectorAll('.fornecedor-checkbox');
  var contador = document.getElementById('contador-selecionados');
  var btnContinuar = document.getElementById('btn-continuar');

  function atualizarContador() {
    var selecionados = Array.from(checkboxes).filter(function(cb) { return cb.checked; });
    if (contador) contador.textContent = selecionados.length;
    if (btnContinuar) btnContinuar.disabled = selecionados.length < 1;
  }

  checkboxes.forEach(function(cb) {
    cb.addEventListener('change', atualizarContador);
  });

  if (btnContinuar) {
    btnContinuar.addEventListener('click', function(e) {
      var selecionados = Array.from(checkboxes).filter(function(cb) { return cb.checked; });
      if (selecionados.length < 1) {
        e.preventDefault();
        alert('Selecione pelo menos um fornecedor para continuar.');
      }
    });
  }

  atualizarContador();
});