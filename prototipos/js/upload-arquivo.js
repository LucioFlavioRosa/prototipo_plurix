// upload-arquivo.js
// Simulação de upload de arquivo com drag-and-drop, preview, validação e feedback visual

document.addEventListener('DOMContentLoaded', function () {
  const dropArea = document.querySelector('.upload-drop-area');
  const fileInput = document.querySelector('.upload-file-input');
  const fileLabel = document.querySelector('.upload-file-label');
  const progressBar = document.querySelector('.upload-progress-bar');
  const feedback = document.querySelector('.upload-feedback');
  const allowedTypes = [
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
    'application/vnd.ms-excel', // .xls
    'text/csv',
    'application/csv',
    'text/comma-separated-values',
    'application/octet-stream'
  ];

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
  });

  ['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => dropArea.classList.add('highlight'), false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => dropArea.classList.remove('highlight'), false);
  });

  dropArea.addEventListener('drop', handleDrop, false);
  fileInput.addEventListener('change', handleFiles, false);

  function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    fileInput.files = files;
    handleFiles();
  }

  function handleFiles() {
    const file = fileInput.files[0];
    feedback.innerHTML = '';
    if (!file) return;
    if (!allowedTypes.includes(file.type) && !file.name.match(/\.(csv|xls|xlsx)$/i)) {
      showError('Formato inválido. Envie um arquivo Excel (.xls, .xlsx) ou CSV.');
      resetProgress();
      return;
    }
    fileLabel.textContent = file.name;
    simulateUpload(file);
  }

  function simulateUpload(file) {
    progressBar.style.width = '0%';
    progressBar.classList.remove('error', 'success');
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 25;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        simulateValidation(file);
      }
      progressBar.style.width = progress + '%';
    }, 250);
  }

  function simulateValidation(file) {
    setTimeout(() => {
      // Simulação de validação: 80% de chance de sucesso
      if (Math.random() < 0.8) {
        progressBar.classList.add('success');
        showSuccess('Arquivo validado e enviado com sucesso!');
      } else {
        progressBar.classList.add('error');
        showError('Erro de validação: coluna SKU ausente ou formato inválido.');
      }
    }, 900);
  }

  function showError(msg) {
    feedback.innerHTML = '<span class="upload-error">' + msg + '</span>';
    progressBar.classList.add('error');
  }

  function showSuccess(msg) {
    feedback.innerHTML = '<span class="upload-success">' + msg + '</span>';
    progressBar.classList.add('success');
  }

  function resetProgress() {
    progressBar.style.width = '0%';
    progressBar.classList.remove('error', 'success');
    fileLabel.textContent = 'Selecione ou arraste o arquivo (.xlsx, .csv)';
  }

  // Botão de reset (opcional)
  const resetBtn = document.querySelector('.upload-reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      fileInput.value = '';
      resetProgress();
      feedback.innerHTML = '';
    });
  }
});
