function gerarPreviewMensagem() {
  var produto = document.getElementById('produto').value.trim();
  var quantidade = document.getElementById('quantidade').value.trim();
  var prazo = document.getElementById('prazo').value;
  var preview = document.getElementById('preview-whatsapp');
  if (!produto || !quantidade || !prazo) {
    preview.innerHTML = '<span style="color:#e74c3c;">Preencha todos os campos para gerar o preview.</span>';
    return;
  }
  var prazoFormatado = new Date(prazo).toLocaleDateString('pt-BR');
  var mensagem = `Olá, segue a cotação para o produto: *${produto}*\nQuantidade: *${quantidade}*\nPrazo de entrega: *${prazoFormatado}*\nFavor confirmar o recebimento.`;
  preview.innerHTML = `<span style='color:#25D366;'>${mensagem.replace(/\n/g, '<br>')}</span>`;
}