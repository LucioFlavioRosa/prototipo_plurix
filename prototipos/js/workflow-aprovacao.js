// workflow-aprovacao.js
// Simulação de workflow de aprovação multinível com timeline, validação e feedback visual

document.addEventListener('DOMContentLoaded', function () {
  const aprovarBtns = document.querySelectorAll('.btn-aprovar');
  const reprovarBtns = document.querySelectorAll('.btn-reprovar');
  const justificativaInputs = document.querySelectorAll('.input-justificativa');
  const timeline = document.querySelector('.workflow-timeline');
  const statusLabel = document.querySelector('.workflow-status-label');
  const feedback = document.querySelector('.workflow-feedback');

  function showFeedback(message, isSuccess) {
    feedback.innerHTML = message;
    feedback.classList.remove('success', 'error');
    feedback.classList.add(isSuccess ? 'success' : 'error');
    feedback.style.opacity = 1;
    setTimeout(() => {
      feedback.style.opacity = 0;
    }, 2200);
  }

  function updateTimeline(status, user, obs) {
    const now = new Date();
    const time = now.toLocaleString('pt-BR', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: '2-digit' });
    const step = document.createElement('div');
    step.className = 'timeline-step ' + (status === 'Aprovado' ? 'aprovado' : 'reprovado');
    step.innerHTML =
      '<span class="timeline-status">' + (status === 'Aprovado' ? '✔️' : '❌') + '</span>' +
      '<span class="timeline-user">' + user + '</span>' +
      '<span class="timeline-date">' + time + '</span>' +
      (obs ? '<div class="timeline-obs">Justificativa: ' + obs + '</div>' : '');
    timeline.appendChild(step);
    timeline.scrollTop = timeline.scrollHeight;
  }

  aprovarBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const user = btn.getAttribute('data-user') || 'Usuário';
      const input = btn.closest('.workflow-aprovacao-form').querySelector('.input-justificativa');
      if (input && input.required && !input.value.trim()) {
        showFeedback('Justificativa obrigatória para aprovação.', false);
        input.focus();
        return;
      }
      btn.disabled = true;
      showFeedback('Aprovando...', true);
      setTimeout(() => {
        updateTimeline('Aprovado', user, input ? input.value : '');
        statusLabel.innerText = 'Aprovado por ' + user;
        showFeedback('Aprovação registrada com sucesso!', true);
        btn.disabled = false;
      }, 1200);
    });
  });

  reprovarBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const user = btn.getAttribute('data-user') || 'Usuário';
      const input = btn.closest('.workflow-aprovacao-form').querySelector('.input-justificativa');
      if (!input || !input.value.trim()) {
        showFeedback('Justificativa obrigatória para reprovação.', false);
        input.focus();
        return;
      }
      btn.disabled = true;
      showFeedback('Reprovando...', false);
      setTimeout(() => {
        updateTimeline('Reprovado', user, input.value);
        statusLabel.innerText = 'Reprovado por ' + user;
        showFeedback('Reprovação registrada com sucesso!', false);
        btn.disabled = false;
      }, 1200);
    });
  });
});
