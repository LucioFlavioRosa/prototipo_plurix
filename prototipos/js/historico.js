// prototipos/js/historico.js
// Script para histórico de cotações - filtros dinâmicos, mock data e exportação Excel

const historicoMock = [
  {
    id: 1,
    data: '2024-06-10',
    produto: 'Tomate',
    categoria: 'Verduras e Legumes',
    fornecedor: 'Hortifruti Silva',
    status: 'Finalizada',
    valor: 1200.50
  },
  {
    id: 2,
    data: '2024-06-09',
    produto: 'Alcatra Bovina',
    categoria: 'Carnes',
    fornecedor: 'Frigorífico Boa Carne',
    status: 'Em Andamento',
    valor: 3500.00
  },
  {
    id: 3,
    data: '2024-06-07',
    produto: 'Banana Prata',
    categoria: 'Frutas',
    fornecedor: 'Distribuidora Tropical',
    status: 'Cancelada',
    valor: 800.00
  },
  {
    id: 4,
    data: '2024-06-05',
    produto: 'Cenoura',
    categoria: 'Verduras e Legumes',
    fornecedor: 'Hortifruti Silva',
    status: 'Finalizada',
    valor: 950.00
  }
];

let historicoFiltrado = [...historicoMock];

function loadHistorico(filters = {}) {
  historicoFiltrado = [...historicoMock];
  if (filters.startDate && filters.endDate) {
    filterByDate(filters.startDate, filters.endDate);
  }
  if (filters.produtoId) {
    filterByProduto(filters.produtoId);
  }
  if (filters.status) {
    filterByStatus(filters.status);
  }
  renderHistoricoTable();
}

function filterByDate(startDate, endDate) {
  historicoFiltrado = historicoFiltrado.filter(item => {
    return item.data >= startDate && item.data <= endDate;
  });
}

function filterByProduto(produtoId) {
  // produtoId pode ser o nome do produto ou um id real
  historicoFiltrado = historicoFiltrado.filter(item => {
    return item.produto.toLowerCase().includes(produtoId.toLowerCase());
  });
}

function filterByStatus(status) {
  historicoFiltrado = historicoFiltrado.filter(item => {
    return item.status.toLowerCase() === status.toLowerCase();
  });
}

function renderHistoricoTable() {
  const tbody = document.querySelector('#historico-table tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  if (historicoFiltrado.length === 0) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.colSpan = 6;
    td.textContent = 'Nenhuma cotação encontrada.';
    tr.appendChild(td);
    tbody.appendChild(tr);
    return;
  }
  historicoFiltrado.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.data}</td>
      <td>${item.produto}</td>
      <td>${item.categoria}</td>
      <td>${item.fornecedor}</td>
      <td>${item.status}</td>
      <td>R$ ${item.valor.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
    `;
    tbody.appendChild(tr);
  });
}

function exportToExcel() {
  if (typeof XLSX === 'undefined') {
    alert('Biblioteca XLSX não carregada.');
    return;
  }
  const ws_data = [
    ['Data', 'Produto', 'Categoria', 'Fornecedor', 'Status', 'Valor']
  ];
  historicoFiltrado.forEach(item => {
    ws_data.push([
      item.data,
      item.produto,
      item.categoria,
      item.fornecedor,
      item.status,
      item.valor
    ]);
  });
  const ws = XLSX.utils.aoa_to_sheet(ws_data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Histórico');
  XLSX.writeFile(wb, 'historico-cotacoes.xlsx');
}

document.addEventListener('DOMContentLoaded', function() {
  loadHistorico();
  // Exemplo de integração com filtros
  const form = document.getElementById('historico-filtros');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const startDate = form.querySelector('[name="startDate"]').value;
      const endDate = form.querySelector('[name="endDate"]').value;
      const produto = form.querySelector('[name="produto"]').value;
      const status = form.querySelector('[name="status"]').value;
      loadHistorico({
        startDate: startDate || undefined,
        endDate: endDate || undefined,
        produtoId: produto || undefined,
        status: status || undefined
      });
    });
  }
  // Botão exportar
  const btnExport = document.getElementById('btn-exportar-historico');
  if (btnExport) {
    btnExport.addEventListener('click', exportToExcel);
  }
});
