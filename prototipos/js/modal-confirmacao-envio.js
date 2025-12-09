// Modal de confirmação antes de enviar cotação em preview-mensagem-whatsapp.html
(function() {
  function criarModalConfirmacao() {
    var modal = document.getElementById('modal-confirmacao-envio');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'modal-confirmacao-envio';
      modal.className = 'modal';
      modal.setAttribute('tabindex', '-1');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('role', 'dialog');
      modal.style.display = 'none';
      modal.innerHTML = '<div class="modal-content" tabindex="0">' +
        '<div class="modal-header">' +
        '<span class="modal-title">Confirmar envio</span>' +
        '<button class="modal-close" aria-label="Fechar">&times;</button>' +
        '</div>' +
        '<div class="modal-body">' +
        '<p>Tem certeza que deseja enviar esta cotação via WhatsApp?</p>' +
        '<div style="margin-top:18px;">' +
        '<button id="btn-confirmar-envio" class="btn-salvar-edicao">Sim, enviar</button>' +
        '<button id="btn-cancelar-envio" class="btn-cancelar-edicao">Cancelar</button>' +
        '</div>' +
        '</div>' +
        '</div>';
      document.body.appendChild(modal);
      // Fechar modal
      modal.querySelector('.modal-close').onclick = fecharModal;
      modal.addEventListener('mousedown', function(e) {
        if (e.target === modal) fecharModal();
      });
      document.getElementById('btn-cancelar-envio').onclick = fecharModal;
      document.getElementById('btn-confirmar-envio').onclick = function() {
        fecharModal();
        enviarCotacaoWhatsapp();
      };
    }
    return modal;
  }
  function abrirModal() {
    var modal = criarModalConfirmacao();
    modal.style.display = 'flex';
    setTimeout(function() {
      var content = modal.querySelector('.modal-content');
      if(content) content.focus();
    }, 100);
  }
  function fecharModal() {
    var modal = document.getElementById('modal-confirmacao-envio');
    if (modal) {
      modal.classList.add('closing');
      setTimeout(function() {
        modal.style.display = 'none';
        modal.classList.remove('closing');
      }, 250);
    }
  }
  // Função de envio (mock)
  function enviarCotacaoWhatsapp() {
    alert('Cotação enviada via WhatsApp com sucesso!');
  }
  // Expor função global para uso no botão
  window.abrirModalConfirmacaoEnvio = abrirModal;
  // Sugestão de uso: <button onclick="abrirModalConfirmacaoEnvio()">Enviar Cotação</button>
})();