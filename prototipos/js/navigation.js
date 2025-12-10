// prototipos/js/navigation.js
function goToPage(url) {
  if (url) window.location.href = url;
}
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'flex';
    setTimeout(function() {
      var focusable = modal.querySelector('[tabindex]');
      if (focusable) focusable.focus();
    }, 100);
  }
}
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('closing');
    setTimeout(function() {
      modal.style.display = 'none';
      modal.classList.remove('closing');
    }, 250);
  }
}
function logout() {
  if (confirm('Deseja realmente sair?')) {
    window.location.href = 'index.html';
  }
}
