document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('form-nova-cotacao');
  var mensagem = document.getElementById('mensagem-validacao');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      mensagem.textContent = '';
      var produto = document.getElementById('produto').value.trim();
      var quantidade = document.getElementById('quantidade').value.trim();
      var prazo = document.getElementById('prazo').value;
      var erros = [];
      if (!produto) {
        erros.push('O campo Produto é obrigatório.');
      }
      if (!quantidade || isNaN(Number(quantidade)) || Number(quantidade) <= 0) {
        erros.push('Quantidade deve ser um número maior que zero.');
      }
      if (!prazo) {
        erros.push('Informe o prazo de entrega.');
      } else {
        var hoje = new Date();
        var prazoData = new Date(prazo);
        hoje.setHours(0,0,0,0);
        prazoData.setHours(0,0,0,0);
        if (prazoData <= hoje) {
          erros.push('O prazo de entrega deve ser uma data futura.');
        }
      }
      if (erros.length > 0) {
        mensagem.innerHTML = erros.join('<br>');
        return false;
      }
      mensagem.style.color = '#4bb543';
      mensagem.textContent = 'Cotação enviada com sucesso!';
      form.reset();
      return true;
    });
  }
});