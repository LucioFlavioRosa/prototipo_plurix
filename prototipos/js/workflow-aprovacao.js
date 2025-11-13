// workflow-aprovacao.js
// Simulação de workflow de aprovação multinível com timeline, validação de justificativa e feedback visual

document.addEventListener('DOMContentLoaded', function () {
  const aprovarBtns = document.querySelectorAll('.btn-aprovar');
  const reprovarBtns = document.querySelectorAll('.btn-reprovar');
  const timeline = document.querySelector('.workflow-timeline');
  const statusLabel = document.querySelector('.workflow-status-label');
  const justificativaInput = document.querySelector('.justificativa-input');
  const feedback = document.querySelector('.workflow-feedback');

  let etapaAtual = 0;
  const etapas = [
    { nome: 'Gerente Categoria', status: 'Pendente' },
    { nome: 'Dir. Comercial Bandeira', status: 'Pendente' },
    { nome: 'Dir. Comercial Holding', status: 'Pendente' },
    { nome: 'VP', status: 'Pendente' }
  ];

  function renderTimeline() {
    if (!timeline) return;
    timeline.innerHTML = '';
    etapas.forEach((etapa, idx) => {
      const etapaDiv = document.createElement('div');
      etapaDiv.className = 'timeline-etapa' + (idx === etapaAtual ? ' atual' : '') + (etapa.status === 'Aprovado' ? ' aprovado' : etapa.status === 'Reprovado' ? ' reprovado' : '');
      etapaDiv.innerHTML = `<span class="etapa-nome">${etapa.nome}</span><span class="etapa-status">${etapa.status}</span>`;
      timeline.appendChild(etapaDiv);
    });
  }

  function atualizarStatus(novoStatus) {
    etapas[etapaAtual].status = novoStatus;
    renderTimeline();
    if (novoStatus === 'Aprovado') {
      etapaAtual++;
      if (etapaAtual < etapas.length) {
        statusLabel.textContent = `Aguardando aprovação: ${etapas[etapaAtual].nome}`;
        feedback.innerHTML = '<span class="workflow-success">Aprovado! Próxima etapa liberada.</span>';
      } else {
        statusLabel.textContent = 'Workflow concluído: Tabela Aprovada!';
        feedback.innerHTML = '<span class="workflow-success">Workflow finalizado com sucesso.</span>';
      }
    } else if (novoStatus === 'Reprovado') {
      statusLabel.textContent = 'Workflow interrompido: Tabela Reprovada.';
      feedback.innerHTML = '<span class="workflow-error">Reprovado. Justificativa registrada e workflow encerrado.</span>';
    }
  }

  aprovarBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      if (etapaAtual >= etapas.length) return;
      if (justificativaInput && justificativaInput.value.trim() === '' && btn.dataset.obrigajust === 'true') {
        feedback.innerHTML = '<span class="workflow-error">Justificativa obrigatória para esta etapa.</span>';
        justificativaInput.focus();
        return;
      }
      atualizarStatus('Aprovado');
      if (justificativaInput) justificativaInput.value = '';
    });
  });

  reprovarBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      if (etapaAtual >= etapas.length) return;
      if (!justificativaInput || justificativaInput.value.trim() === '') {
        feedback.innerHTML = '<span class="workflow-error">Justificativa obrigatória para reprovação.</span>';
        justificativaInput.focus();
        return;
      }
      atualizarStatus('Reprovado');
      if (justificativaInput) justificativaInput.value = '';
    });
  });

  renderTimeline();
  if (statusLabel) statusLabel.textContent = `Aguardando aprovação: ${etapas[etapaAtual].nome}`;
});
