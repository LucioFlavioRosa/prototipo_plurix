// prototipos/js/dashboard-fornecedor.js
// Script para dashboard-fornecedor.html

// Mock de cotações recebidas pelo fornecedor
const cotacoesRecebidas = [
  {
    id: 101,
    produto: 'Tomate Italiano',
    quantidade: 500,
    unidade: 'kg',
    dataEntrega: '2024-06-14',
    status: 'aberta',
    precoReferencia: 4.20
  },
  {
    id: 102,
    produto: 'Cenoura',
    quantidade: 200,
    unidade: 'kg',
    dataEntrega: '2024-06-15',
    status: 'respondida',
    precoReferencia: 2.80
  },
  {
    id: 103,
    produto: 'Alcatra Bovina',
    quantidade: 100,
    unidade: 'kg',
    dataEntrega: '2024-06-16',
    status: 'aberta',
    precoReferencia: 32.00
  }
];

// Mock de resumo de submissões
const resumoSubmissoes = [
  { status: 'aberta', label: 'Abertas', quantidade: 2 },
  { status: 'respondida', label: 'Respondidas', quantidade: 1 }
];

function loadCotacoesRecebidas() {
  const tbody = document.getElementById('tbody-cotacoes-recebidas');
  if (!tbody) return;
  tbody.innerHTML = '';
  cotacoesRecebidas.forEach(cotacao => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${cotacao.produto}</td>
      <td>${cotacao.quantidade} ${cotacao.unidade}</td>
      <td>${cotacao.dataEntrega}</td>
      <td>R$ ${cotacao.precoReferencia.toFixed(2)}</td>
      <td>${cotacao.status === 'aberta' ? '<span class="status status-pendente">Aberta</span>' : '<span class="status status-aprovada">Respondida</span>'}</td>
      <td>
        ${cotacao.status === 'aberta' ? `<button class="btn-primary" onclick="openResponderCotacao(${cotacao.id})">Responder</button>` : '<span style="color:#888">--</span>'}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function loadResumoSubmissoes() {
  const tbody = document.getElementById('tbody-resumo-submissoes');
  if (!tbody) return;
  tbody.innerHTML = '';
  resumoSubmissoes.forEach(item => {
    tbody.innerHTML += `
      <tr>
        <td><span class="status ${item.status === 'aberta' ? 'status-pendente' : 'status-aprovada'}">${item.label}</span></td>
        <td>${item.quantidade}</td>
      </tr>
    `;
  });
}

function filterCotacoes(status) {
  const tbody = document.getElementById('tbody-cotacoes-recebidas');
  if (!tbody) return;
  tbody.innerHTML = '';
  cotacoesRecebidas.filter(c => c.status === status).forEach(cotacao => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${cotacao.produto}</td>
      <td>${cotacao.quantidade} ${cotacao.unidade}</td>
      <td>${cotacao.dataEntrega}</td>
      <td>R$ ${cotacao.precoReferencia.toFixed(2)}</td>
      <td>${cotacao.status === 'aberta' ? '<span class="status status-pendente">Aberta</span>' : '<span class="status status-aprovada">Respondida</span>'}</td>
      <td>
        ${cotacao.status === 'aberta' ? `<button class="btn-primary" onclick="openResponderCotacao(${cotacao.id})">Responder</button>` : '<span style="color:#888">--</span>'}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openResponderCotacao(id) {
  // Redireciona para responder-cotacao.html com o id na query string
  window.location.href = `responder-cotacao.html?cotacaoId=${id}`;
}

document.addEventListener('DOMContentLoaded', () => {
  loadCotacoesRecebidas();
  loadResumoSubmissoes();
  // Exemplo: filtro por status
  const btnFiltroAbertas = document.getElementById('filtro-abertas');
  const btnFiltroRespondidas = document.getElementById('filtro-respondidas');
  if (btnFiltroAbertas) btnFiltroAbertas.onclick = () => filterCotacoes('aberta');
  if (btnFiltroRespondidas) btnFiltroRespondidas.onclick = () => filterCotacoes('respondida');
});
