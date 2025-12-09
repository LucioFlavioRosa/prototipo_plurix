function showModalConfirmacao({titulo, mensagem, textoPrimario, callbackPrimario, textoSecundario, callbackSecundario}) {
  let modal = document.createElement('div');
  modal.className = 'modal';
  modal.style.display = 'flex';
  modal.setAttribute('tabindex', '-1');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('role', 'dialog');
  modal.innerHTML = `
    <div class="modal-content" tabindex="0" style="max-width:420px;">
      <div class="modal-header">
        <span class="modal-title">${titulo}</span>
        <button class="modal-close" aria-label="Fechar">&times;</button>
      </div>
      <div class="modal-body" style="font-size:1.08rem; color:#222; margin-bottom:18px;">${mensagem}</div>
      <div style="text-align:right;">
        <button class="btn-salvar-edicao" id="modal-confirm-primary">${textoPrimario}</button>
        <button class="btn-cancelar-edicao" id="modal-confirm-secondary">${textoSecundario}</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  // Foco e acessibilidade
  setTimeout(function(){
    let content = modal.querySelector('.modal-content');
    if(content) content.focus();
  }, 100);
  // Eventos
  modal.querySelector('.modal-close').onclick = fechar;
  modal.querySelector('#modal-confirm-primary').onclick = function(){ fechar(); if(callbackPrimario) callbackPrimario(); };
  modal.querySelector('#modal-confirm-secondary').onclick = function(){ fechar(); if(callbackSecundario) callbackSecundario(); };
  function fechar() {
    modal.classList.add('closing');
    setTimeout(function(){
      document.body.removeChild(modal);
    }, 250);
  }
  // Fechar ao clicar fora
  modal.addEventListener('mousedown', function(e){
    if(e.target === modal) fechar();
  });
  // Fechar com ESC
  document.addEventListener('keydown', escListener);
  function escListener(e){
    if(e.key === 'Escape') fechar();
  }
  // Remover listener ao fechar
  modal.addEventListener('transitionend', function(){
    document.removeEventListener('keydown', escListener);
  });
}
// Exemplo de uso:
// showModalConfirmacao({
//   titulo: 'Confirmar Aprovação',
//   mensagem: 'Deseja aprovar esta cotação? Esta ação não poderá ser desfeita.',
//   textoPrimario: 'Aprovar',
//   callbackPrimario: function(){ alert('Cotação aprovada!'); },
//   textoSecundario: 'Cancelar',
//   callbackSecundario: function(){ alert('Ação cancelada.'); }
// });