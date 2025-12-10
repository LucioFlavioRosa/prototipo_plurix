// prototipos/js/dashboard-comprador.js
// Script para dashboard-comprador.html
// Requer 'mock-data.js' carregado antes deste script

// Carrega cotações em andamento na tabela correspondenteunction loadCotacoesEmAndamento() {
  const tbody = document.querySelector('#tabela-cotacoes-andamento tbody');
  if (!tbody || !window.mockCotacoes) return;
  tbody.innerHTML = '';
  const emAndamento = window.mockCotacoes.filter(c => c.status === 'em_andamento');
  emAndamento.forEach(cotacao => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${cotacao.id}</td>
      <td>${cotacao.produto}</td>
      <td>${cotacao.quantidade} ${cotacao.unidade}</td>
      <td>${cotacao.data_entrega}</td>
      <td>${cotacao.status_label}</td>
      <td><button class="btn-link" data-id="${cotacao.id}">Ver Detalhes</button></td>
    `;
    tr.querySelector('button').addEventListener('click', () => openDetalheCotacao(cotacao.id));
    tbody.appendChild(tr);
  });
}

// Carrega cotações pendentes (vindas do sistema de geração de pedidos)
function loadCotacoesPendentes() {
  const tbody = document.querySelector('#tabela-cotacoes-pendentes tbody');
  if (!tbody || !window.mockCotacoes) return;
  tbody.innerHTML = '';
  const pendentes = window.mockCotacoes.filter(c => c.status === 'pendente');
  pendentes.forEach(cotacao => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${cotacao.id}</td>
      <td>${cotacao.produto}</td>
      <td>${cotacao.quantidade} ${cotacao.unidade}</td>
      <td>${cotacao.data_entrega}</td>
      <td>${cotacao.status_label}</td>
      <td><button class="btn-link" data-id="${cotacao.id}">Ver Detalhes</button></td>
    `;
    tr.querySelector('button').addEventListener('click', () => openDetalheCotacao(cotacao.id));
    tbody.appendChild(tr);
  });
}

// Filtra cotações por status e atualiza as tabelas
function filterCotacoes(status) {
  // status: 'em_andamento', 'pendente', 'todas'
  if (status === 'em_andamento') {
    document.getElementById('cotacoes-andamento-section').style.display = '';
    document.getElementById('cotacoes-pendentes-section').style.display = 'none';
  } else if (status === 'pendente') {
    document.getElementById('cotacoes-andamento-section').style.display = 'none';
    document.getElementById('cotacoes-pendentes-section').style.display = '';
  } else {
    document.getElementById('cotacoes-andamento-section').style.display = '';
    document.getElementById('cotacoes-pendentes-section').style.display = '';
  }
}

// Abre detalhes da cotação (navega para a página de detalhes)
function openDetalheCotacao(id) {
  // Descobre status da cotação
  const cotacao = window.mockCotacoes.find(c => c.id === id);
  if (!cotacao) return;
  if (cotacao.status === 'pendente') {
    window.location.href = `detalhe-cotacao-pendente.html?cotacaoId=${id}`;
  } else if (cotacao.status === 'em_andamento') {
    window.location.href = `cotacao-em-andamento.html?cotacaoId=${id}`;
  } else if (cotacao.status === 'pronta') {
    window.location.href = `cotacao-pronta.html?cotacaoId=${id}`;
  }
}

// Inicialização ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  loadCotacoesEmAndamento();
  loadCotacoesPendentes();
  // Filtros de status (se existirem)
  const filtroBtns = document.querySelectorAll('.btn-filtro-cotacao');
  filtroBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterCotacoes(this.dataset.status);
      filtroBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
