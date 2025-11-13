"use strict";
// Toggle do menu lateral
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  sidebar.classList.toggle('sidebar-open');
  overlay.classList.toggle('active');
}
document.querySelectorAll('[data-toggle-sidebar]').forEach(btn => {
  btn.addEventListener('click', toggleSidebar);
});
document.querySelectorAll('.sidebar-overlay').forEach(overlay => {
  overlay.addEventListener('click', toggleSidebar);
});

// Abrir/fechar modais genéricos
function openModal(modalId) {
  document.getElementById(modalId).classList.add('modal-open');
  document.body.classList.add('no-scroll');
}
function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('modal-open');
  document.body.classList.remove('no-scroll');
}
document.querySelectorAll('[data-open-modal]').forEach(btn => {
  btn.addEventListener('click', e => {
    openModal(btn.getAttribute('data-open-modal'));
  });
});
document.querySelectorAll('[data-close-modal]').forEach(btn => {
  btn.addEventListener('click', e => {
    closeModal(btn.getAttribute('data-close-modal'));
  });
});

// Validação básica de formulário (client-side)
window.validateForm = function(formId) {
  const form = document.getElementById(formId);
  let valid = true;
  form.querySelectorAll('[required]').forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('input-error');
      valid = false;
    } else {
      input.classList.remove('input-error');
    }
  });
  return valid;
};

// Ordenação de tabelas
window.sortTable = function(tableId, colIndex, type = 'string') {
  const table = document.getElementById(tableId);
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  const asc = table.getAttribute('data-sort-asc') !== 'true';
  rows.sort((a, b) => {
    let valA = a.children[colIndex].innerText.trim();
    let valB = b.children[colIndex].innerText.trim();
    if (type === 'number') {
      valA = parseFloat(valA.replace(',', '.'));
      valB = parseFloat(valB.replace(',', '.'));
    }
    if (valA < valB) return asc ? -1 : 1;
    if (valA > valB) return asc ? 1 : -1;
    return 0;
  });
  rows.forEach(row => tbody.appendChild(row));
  table.setAttribute('data-sort-asc', asc);
};

document.querySelectorAll('[data-sort-table]').forEach(th => {
  th.addEventListener('click', function() {
    const tableId = th.closest('table').id;
    const colIndex = Array.from(th.parentNode.children).indexOf(th);
    const type = th.getAttribute('data-type') || 'string';
    window.sortTable(tableId, colIndex, type);
  });
});

// Filtros de tabela
window.filterTable = function(tableId, inputId) {
  const filter = document.getElementById(inputId).value.toLowerCase();
  const table = document.getElementById(tableId);
  table.querySelectorAll('tbody tr').forEach(row => {
    row.style.display = Array.from(row.children).some(td =>
      td.innerText.toLowerCase().includes(filter)
    ) ? '' : 'none';
  });
};

document.querySelectorAll('[data-filter-table]').forEach(input => {
  input.addEventListener('input', function() {
    const tableId = input.getAttribute('data-filter-table');
    window.filterTable(tableId, input.id);
  });
});

// Paginação de tabelas
window.paginateTable = function(tableId, pageSize, pageNum) {
  const table = document.getElementById(tableId);
  const rows = Array.from(table.querySelectorAll('tbody tr'));
  rows.forEach((row, idx) => {
    row.style.display = (idx >= pageSize * (pageNum - 1) && idx < pageSize * pageNum) ? '' : 'none';
  });
  // Atualizar controles de paginação (exemplo básico)
  const totalPages = Math.ceil(rows.length / pageSize);
  const pagination = document.querySelector(`[data-pagination-for='${tableId}']`);
  if (pagination) {
    pagination.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.innerText = i;
      btn.className = i === pageNum ? 'active' : '';
      btn.onclick = () => window.paginateTable(tableId, pageSize, i);
      pagination.appendChild(btn);
    }
  }
};

document.querySelectorAll('[data-paginate-table]').forEach(table => {
  const pageSize = parseInt(table.getAttribute('data-page-size')) || 10;
  window.paginateTable(table.id, pageSize, 1);
});

// Tooltips
function showTooltip(e) {
  let tooltip = document.getElementById('global-tooltip');
  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.id = 'global-tooltip';
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);
  }
  tooltip.innerText = e.target.getAttribute('data-tooltip');
  tooltip.style.display = 'block';
  tooltip.style.left = (e.pageX + 10) + 'px';
  tooltip.style.top = (e.pageY + 10) + 'px';
}
function hideTooltip() {
  const tooltip = document.getElementById('global-tooltip');
  if (tooltip) tooltip.style.display = 'none';
}
document.querySelectorAll('[data-tooltip]').forEach(el => {
  el.addEventListener('mouseenter', showTooltip);
  el.addEventListener('mouseleave', hideTooltip);
  el.addEventListener('mousemove', showTooltip);
});

// Animações de transição entre telas (fade)
window.transitionTo = function(href) {
  const main = document.querySelector('main, .main-content');
  if (main) {
    main.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = href;
    }, 300);
  } else {
    window.location.href = href;
  }
};

document.querySelectorAll('[data-transition-to]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    window.transitionTo(link.getAttribute('href'));
  });
});
