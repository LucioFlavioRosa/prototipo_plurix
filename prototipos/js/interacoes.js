"use strict";
// Toggle menu lateral
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('sidebar-open');
  document.body.classList.toggle('sidebar-active');
}

// Abrir/fechar modal
function openModal(id) {
  document.getElementById(id).classList.add('modal-open');
  document.body.classList.add('modal-active');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('modal-open');
  document.body.classList.remove('modal-active');
}

// Validação de formulário (exemplo genérico)
function validarFormulario(formId) {
  const form = document.getElementById(formId);
  let valido = true;
  form.querySelectorAll('[required]').forEach(function(input) {
    if (!input.value.trim()) {
      input.classList.add('input-erro');
      valido = false;
    } else {
      input.classList.remove('input-erro');
    }
  });
  return valido;
}

// Ordenação de tabelas
function sortTable(tableId, col, asc = true) {
  const table = document.getElementById(tableId);
  const tbody = table.tBodies[0];
  const rows = Array.from(tbody.querySelectorAll('tr'));
  rows.sort((a, b) => {
    let v1 = a.children[col].innerText;
    let v2 = b.children[col].innerText;
    if (!isNaN(parseFloat(v1)) && !isNaN(parseFloat(v2))) {
      v1 = parseFloat(v1); v2 = parseFloat(v2);
    }
    return asc ? (v1 > v2 ? 1 : -1) : (v1 < v2 ? 1 : -1);
  });
  rows.forEach(row => tbody.appendChild(row));
}

// Filtros de tabela
function filtrarTabela(tableId, inputId) {
  const input = document.getElementById(inputId);
  const filter = input.value.toLowerCase();
  const table = document.getElementById(tableId);
  const trs = table.tBodies[0].getElementsByTagName('tr');
  for (let i = 0; i < trs.length; i++) {
    let show = false;
    trs[i].querySelectorAll('td').forEach(td => {
      if (td.innerText.toLowerCase().indexOf(filter) > -1) show = true;
    });
    trs[i].style.display = show ? '' : 'none';
  }
}

// Paginação de tabela
function paginarTabela(tableId, pagina, porPagina) {
  const table = document.getElementById(tableId);
  const trs = Array.from(table.tBodies[0].getElementsByTagName('tr'));
  const total = trs.length;
  trs.forEach((tr, i) => {
    tr.style.display = (i >= (pagina - 1) * porPagina && i < pagina * porPagina) ? '' : 'none';
  });
  // Atualizar controles de paginação (assumindo elementos com id 'paginacao-'+tableId)
  const paginacao = document.getElementById('paginacao-' + tableId);
  if (paginacao) {
    let paginas = Math.ceil(total / porPagina);
    paginacao.innerHTML = '';
    for (let i = 1; i <= paginas; i++) {
      paginacao.innerHTML += `<button onclick=\"paginarTabela('${tableId}',${i},${porPagina})\" class=\"btn-pagina${i===pagina?' active':''}\">${i}</button>`;
    }
  }
}

// Tooltips
function tooltipInit() {
  document.querySelectorAll('[data-tooltip]').forEach(function(el) {
    el.addEventListener('mouseenter', function() {
      let tip = document.createElement('div');
      tip.className = 'tooltip';
      tip.innerText = el.getAttribute('data-tooltip');
      document.body.appendChild(tip);
      const rect = el.getBoundingClientRect();
      tip.style.left = rect.left + window.scrollX + 'px';
      tip.style.top = rect.bottom + window.scrollY + 5 + 'px';
      el._tooltip = tip;
    });
    el.addEventListener('mouseleave', function() {
      if (el._tooltip) {
        document.body.removeChild(el._tooltip);
        el._tooltip = null;
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', tooltipInit);

// Animações de transição (fade simples)
function fadeIn(el, ms = 300) {
  el.style.opacity = 0;
  el.style.display = '';
  let last = +new Date();
  let tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / ms;
    last = +new Date();
    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };
  tick();
}
function fadeOut(el, ms = 300) {
  el.style.opacity = 1;
  let last = +new Date();
  let tick = function() {
    el.style.opacity = +el.style.opacity - (new Date() - last) / ms;
    last = +new Date();
    if (+el.style.opacity > 0) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    } else {
      el.style.display = 'none';
    }
  };
  tick();
}
