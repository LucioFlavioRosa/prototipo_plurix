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
        '<p>Deseja realmente enviar esta cotação para o fornecedor via WhatsApp?</p>' +
        '<div style="margin-top:18px;">' +
        '<button id="btn-confirmar-envio" class="btn-salvar-edicao">Sim, enviar</button>' +
        '<button id="btn-cancelar-envio" class="btn-cancelar-edicao">Cancelar</button>' +
        '</div>' +
        '</div>' +
        '</div>';
      document.body.appendChild(modal);
    }
    var closeBtn = modal.querySelector('.modal-close');
    var btnCancelar = modal.querySelector('#btn-cancelar-envio');
    closeBtn.onclick = btnCancelar.onclick = function() {
      modal.classList.add('closing');
      setTimeout(function() {
        modal.style.display = 'none';
        modal.classList.remove('closing');
      }, 250);
    };
    var btnConfirmar = modal.querySelector('#btn-confirmar-envio');
    btnConfirmar.onclick = function() {
      modal.classList.add('closing');
      setTimeout(function() {
        modal.style.display = 'none';
        modal.classList.remove('closing');
        // Simulação de envio
        alert('Cotação enviada com sucesso via WhatsApp!');
      }, 250);
    };
    return modal;
  }
  window.abrirModalConfirmacaoEnvio = function() {
    var modal = criarModalConfirmacao();
    modal.style.display = 'flex';
    modal.classList.remove('closing');
    setTimeout(function() {
      var content = modal.querySelector('.modal-content');
      if(content) content.focus();
    }, 100);
  };
  document.addEventListener('DOMContentLoaded', function() {
    var btnEnviar = document.getElementById('btn-enviar-cotacao');
    if (btnEnviar) {
      btnEnviar.onclick = function(e) {
        e.preventDefault();
        window.abrirModalConfirmacaoEnvio();
      };
    }
  });
})();