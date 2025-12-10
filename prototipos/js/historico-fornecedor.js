// prototipos/js/historico-fornecedor.js

// Mock de dados de histórico de cotações do fornecedor
let mockHistorico = [
  {
    id: 1,
    produto: 'Filé de Peito de Frango',
    quantidade: 500,
    unidade: 'kg',
    data: '2024-06-10',
    status: 'aceita',
    preco: 13.75,
    faturado: 480 * 13.75
  },
  {
    id: 2,
    produto: 'Tomate Italiano',
    quantidade: 1200,
    unidade: 'kg',
    data: '2024-06-08',
    status: 'recusada',
    preco: 4.10,
    faturado: 0
  },
  {
    id: 3,
    produto: 'Alface Crespa',
    quantidade: 300,
    unidade: 'un',
    data: '2024-05-28',
    status: 'aceita',
    preco: 1.90,
    faturado: 300 * 1.90
  },
  {
    id: 4,
    produto: 'Banana Prata',
    quantidade: 700,
    unidade: 'kg',
    data: '2024-05-20',
    status: 'pendente',
    preco: 3.80,
    faturado: 0
  }
];

let historicoFiltrado = [...mockHistorico];

function loadHistoricoFornecedor(filters = {}) {
  let data = [...mockHistorico];
  if (filters.startDate && filters.endDate) {
    data = filterByDate(filters.startDate, filters.endDate, data);
  }
  if (filters.status && filters.status !== 'todos') {
    data = filterByStatus(filters.status, data);
  }
  historicoFiltrado = data;
  renderHistoricoTable(data);
  calculateTotalFaturado();
}

function filterByDate(startDate, endDate, data = historicoFiltrado) {
  return data.filter(item => item.data >= startDate && item.data <= endDate);
}

function filterByStatus(status, data = historicoFiltrado) {
  return data.filter(item => item.status === status);
}

function renderHistoricoTable(data) {
  const tbody = document.getElementById('historico-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  if (data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7">Nenhuma cotação encontrada.</td></tr>';
    return;
  }
  data.forEach(item => {
    let statusLabel = '';
    if (item.status === 'aceita') statusLabel = '<span class="status status-aceita">Aceita</span>';
    else if (item.status === 'recusada') statusLabel = '<span class="status status-recusada">Recusada</span>';
    else statusLabel = '<span class="status status-pendente">Pendente</span>';
    tbody.innerHTML += `<tr>
      <td>${item.data}</td>
      <td>${item.produto}</td>
      <td>${item.quantidade} ${item.unidade}</td>
      <td>R$ ${item.preco.toFixed(2)}</td>
      <td>${statusLabel}</td>
      <td>${item.status === 'aceita' ? 'R$ ' + item.faturado.toFixed(2) : '-'}</td>
      <td><a href="#" class="link-detalhes" onclick="verDetalhesCotacao(${item.id});return false;">Ver Detalhes</a></td>
    </tr>`;
  });
}

function calculateTotalFaturado() {
  const total = historicoFiltrado
    .filter(item => item.status === 'aceita')
    .reduce((sum, item) => sum + item.faturado, 0);
  const el = document.getElementById('total-faturado');
  if (el) el.textContent = 'R$ ' + total.toLocaleString('pt-BR', {minimumFractionDigits: 2});
}

function aplicarFiltros() {
  const startDate = document.getElementById('filtro-data-inicio').value;
  const endDate = document.getElementById('filtro-data-fim').value;
  const status = document.getElementById('filtro-status').value;
  loadHistoricoFornecedor({ startDate, endDate, status });
}

function verDetalhesCotacao(id) {
  alert('Detalhes da cotação ' + id + ' (mock).');
}

document.addEventListener('DOMContentLoaded', function() {
  loadHistoricoFornecedor();
  // Filtros
  const btnFiltrar = document.getElementById('btn-filtrar');
  if (btnFiltrar) btnFiltrar.addEventListener('click', aplicarFiltros);
});
