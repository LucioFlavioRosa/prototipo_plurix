// validacao-formulario-cotacao.js
// Validação client-side do formulário de nova cotação

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form-nova-cotacao');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    let valido = true;
    let mensagens = [];

    const produto = form.produto ? form.produto.value.trim() : '';
    const quantidade = form.quantidade ? form.quantidade.value.trim() : '';
    const prazo = form.prazo ? form.prazo.value.trim() : '';

    if (!produto) {
      valido = false;
      mensagens.push('O campo Produto é obrigatório.');
    }
    if (!quantidade || isNaN(Number(quantidade)) || Number(quantidade) <= 0) {
      valido = false;
      mensagens.push('Informe uma quantidade válida (número maior que zero).');
    }
    if (!prazo) {
      valido = false;
      mensagens.push('O campo Prazo de entrega é obrigatório.');
    } else {
      const hoje = new Date();
      const prazoData = new Date(prazo);
      if (isNaN(prazoData.getTime()) || prazoData <= hoje) {
        valido = false;
        mensagens.push('O prazo deve ser uma data futura.');
      }
    }

    if (!valido) {
      e.preventDefault();
      alert(mensagens.join('\n'));
    }
  });
});