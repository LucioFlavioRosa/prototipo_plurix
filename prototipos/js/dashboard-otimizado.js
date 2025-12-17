// dashboard-otimizado.js
// Versão de desenvolvimento (não minificada)
// Otimizações: lazy loading, debounce, cache, código limpo

// Cache para dados já carregados
const cache = {};

// Função debounce para filtros de busca
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// Lazy loading de dados mock
function loadMockData(key, loaderFn) {
  if (cache[key]) {
    return Promise.resolve(cache[key]);
  }
  return loaderFn().then(data => {
    cache[key] = data;
    return data;
  });
}

// Exemplo de loader para cotações em andamento
function fetchCotacoesAndamento() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, produto: 'Carne Bovina', quantidade: 100, unidade: 'kg', status: 'Em andamento' },
        { id: 2, produto: 'Banana Nanica', quantidade: 200, unidade: 'kg', status: 'Em andamento' }
      ]);
    }, 400); // Simula requisição
  });
}

// Exemplo de uso do lazy loading
function renderCotacoesAndamento() {
  loadMockData('cotacoesAndamento', fetchCotacoesAndamento).then(cotacoes => {
    const tbody = document.getElementById('cotacoes-andamento-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    cotacoes.forEach(cotacao => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${cotacao.produto}</td><td>${cotacao.quantidade} ${cotacao.unidade}</td><td>${cotacao.status}</td>`;
      tbody.appendChild(tr);
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Lazy load das cotações ao abrir a aba
  const tabAndamento = document.getElementById('tab-cotacoes-andamento');
  if (tabAndamento) {
    tabAndamento.addEventListener('click', renderCotacoesAndamento, { once: true });
  }

  // Debounce em filtros de busca
  const filtroInput = document.getElementById('filtro-cotacoes');
  if (filtroInput) {
    filtroInput.addEventListener('input', debounce(function(e) {
      const termo = e.target.value.toLowerCase();
      const tbody = document.getElementById('cotacoes-andamento-tbody');
      if (!tbody) return;
      Array.from(tbody.children).forEach(tr => {
        tr.style.display = tr.textContent.toLowerCase().includes(termo) ? '' : 'none';
      });
    }, 250));
  }
});

// Minificação sugerida para produção:
// Use ferramentas como Terser ou UglifyJS para minificar este arquivo antes de publicar em produção.