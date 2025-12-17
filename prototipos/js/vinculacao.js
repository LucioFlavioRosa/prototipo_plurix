// prototipos/js/vinculacao.js
// Script para gerenciamento de vinculação fornecedor x produto x bandeira

let vinculos = [];

function loadVinculacoes(filters = {}) {
  // Simulação de busca de dados (mock)
  // Filtros: fornecedor, produto, bandeira
  // No futuro, integrar com backend
  const tabela = document.getElementById('tabela-vinculacoes-body');
  if (!tabela) return;
  tabela.innerHTML = '';
  let dados = vinculos;
  if (filters.fornecedor) {
    dados = dados.filter(v => v.fornecedorId === filters.fornecedor);
  }
  if (filters.produto) {
    dados = dados.filter(v => v.produtoId === filters.produto);
  }
  if (filters.bandeira) {
    dados = dados.filter(v => v.bandeiras.includes(filters.bandeira));
  }
  dados.forEach((v, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${v.fornecedorNome}</td>
      <td>${v.produtoNome}</td>
      <td>${v.bandeiras.join(', ')}</td>
      <td>
        <button class="btn-remover" aria-label="Remover vinculação" onclick="removeVinculacao('${v.id}')">Remover</button>
      </td>
    `;
    tabela.appendChild(tr);
  });
}

function addVinculacao(fornecedorId, produtoId, bandeiras) {
  // Validação básica
  const data = { fornecedorId, produtoId, bandeiras };
  const valid = validateVinculacao(data);
  if (!valid.status) {
    alert(valid.msg);
    return;
  }
  // Simulação de nomes (em produção, buscar do cadastro)
  const fornecedorNome = document.querySelector(`#fornecedor-select option[value='${fornecedorId}']`)?.textContent || fornecedorId;
  const produtoNome = document.querySelector(`#produto-select option[value='${produtoId}']`)?.textContent || produtoId;
  const id = `${fornecedorId}_${produtoId}_${bandeiras.join('_')}_${Date.now()}`;
  vinculos.push({ id, fornecedorId, fornecedorNome, produtoId, produtoNome, bandeiras });
  loadVinculacoes();
}

function removeVinculacao(id) {
  vinculos = vinculos.filter(v => v.id !== id);
  loadVinculacoes();
}

function saveVinculacoes() {
  // Simulação de envio para backend
  alert('Vinculações salvas com sucesso!');
}

function validateVinculacao(data) {
  if (!data.fornecedorId || !data.produtoId || !data.bandeiras || data.bandeiras.length === 0) {
    return { status: false, msg: 'Preencha todos os campos obrigatórios.' };
  }
  // Verifica duplicidade
  const existe = vinculos.some(v => v.fornecedorId === data.fornecedorId && v.produtoId === data.produtoId && JSON.stringify(v.bandeiras) === JSON.stringify(data.bandeiras));
  if (existe) {
    return { status: false, msg: 'Esta vinculação já existe.' };
  }
  return { status: true };
}

// Exemplo de inicialização (mock)
document.addEventListener('DOMContentLoaded', function() {
  loadVinculacoes();
  const form = document.getElementById('form-vinculacao');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const fornecedorId = form.querySelector('[name=fornecedor]').value;
      const produtoId = form.querySelector('[name=produto]').value;
      const bandeiras = Array.from(form.querySelectorAll('[name=bandeiras]:checked')).map(cb => cb.value);
      addVinculacao(fornecedorId, produtoId, bandeiras);
    });
  }
  const btnSalvar = document.getElementById('btn-salvar-vinculos');
  if (btnSalvar) {
    btnSalvar.addEventListener('click', saveVinculacoes);
  }
});
