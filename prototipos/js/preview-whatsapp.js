// preview-whatsapp.js
// Gera dinamicamente o preview da mensagem WhatsApp para cotação

document.addEventListener('DOMContentLoaded', function() {
  const produtoInput = document.getElementById('produto');
  const quantidadeInput = document.getElementById('quantidade');
  const prazoInput = document.getElementById('prazo');
  const previewBox = document.getElementById('preview-mensagem');

  function gerarPreview() {
    const produto = produtoInput ? produtoInput.value.trim() : '';
    const quantidade = quantidadeInput ? quantidadeInput.value.trim() : '';
    const prazo = prazoInput ? prazoInput.value.trim() : '';

    let mensagem = 'Olá, fornecedor!\n\nGostaria de solicitar uma cotação para o seguinte produto:';
    mensagem += `\nProduto: ${produto || '[não informado]'}`;
    mensagem += `\nQuantidade: ${quantidade || '[não informado]'}`;
    mensagem += `\nPrazo de entrega: ${prazo || '[não informado]'}`;
    mensagem += '\n\nFavor responder com preço, disponibilidade e prazo. Obrigado!';

    if (previewBox) {
      previewBox.textContent = mensagem;
    }
  }

  [produtoInput, quantidadeInput, prazoInput].forEach(function(input) {
    if (input) {
      input.addEventListener('input', gerarPreview);
    }
  });

  gerarPreview();
});