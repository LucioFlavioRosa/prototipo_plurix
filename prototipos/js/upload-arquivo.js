// upload-arquivo.js
// Simulação de upload de arquivo com drag-and-drop, validação, preview e feedback visual

document.addEventListener('DOMContentLoaded', function () {
  const dropZone = document.querySelector('.upload-dropzone');
  const fileInput = document.querySelector('.upload-file-input');
  const filePreview = document.querySelector('.upload-file-preview');
  const progressBar = document.querySelector('.upload-progress-bar');
  const feedback = document.querySelector('.upload-feedback');
  const allowedTypes = [
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
    'application/vnd.ms-excel', // .xls
    'text/csv',
    '.csv',
    '.xls',
    '.xlsx'
  ];

  function resetFeedback() {
    feedback.innerHTML = '';
    feedback.classList.remove('success', 'error');
  }

  function showFeedback(message, isSuccess) {
    feedback.innerHTML = message;
    feedback.classList.remove('success', 'error');
    feedback.classList.add(isSuccess ? 'success' : 'error');
  }

  function validateFile(file) {
    if (!file) return false;
    if (allowedTypes.includes(file.type) || allowedTypes.some(type => file.name.endsWith(type.replace('.', '')))) {
      return true;
    }
    return false;
  }

  function previewFile(file) {
    filePreview.innerHTML =
      '<div class="file-info"><span class="file-icon">📄</span> ' +
      '<strong>' + file.name + '</strong> (' + Math.round(file.size / 1024) + ' KB)</div>';
  }

  function simulateProgress(callback) {
    progressBar.style.width = '0%';
    progressBar.parentElement.style.opacity = '1';
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 25;
      if (progress > 100) progress = 100;
      progressBar.style.width = progress + '%';
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          progressBar.parentElement.style.opacity = '0';
          callback();
        }, 400);
      }
    }, 200);
  }

  function simulateValidation(file) {
    // Simulação: 80% de chance de sucesso, 20% erro de validação
    setTimeout(() => {
      if (Math.random() < 0.8) {
        showFeedback('Arquivo validado com sucesso! Pronto para submissão.', true);
      } else {
        showFeedback('Erro: Estrutura do arquivo inválida. Verifique colunas obrigatórias e códigos de fornecedor.', false);
      }
    }, 600);
  }

  function handleFile(file) {
    resetFeedback();
    if (!validateFile(file)) {
      showFeedback('Formato não suportado. Envie um arquivo Excel (.xlsx/.xls) ou CSV.', false);
      filePreview.innerHTML = '';
      return;
    }
    previewFile(file);
    simulateProgress(() => {
      simulateValidation(file);
    });
  }

  if (dropZone && fileInput) {
    dropZone.addEventListener('click', function () {
      fileInput.click();
    });
    dropZone.addEventListener('dragover', function (e) {
      e.preventDefault();
      dropZone.classList.add('dragover');
    });
    dropZone.addEventListener('dragleave', function (e) {
      e.preventDefault();
      dropZone.classList.remove('dragover');
    });
    dropZone.addEventListener('drop', function (e) {
      e.preventDefault();
      dropZone.classList.remove('dragover');
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    });
    fileInput.addEventListener('change', function () {
      if (fileInput.files[0]) handleFile(fileInput.files[0]);
    });
  }
});
