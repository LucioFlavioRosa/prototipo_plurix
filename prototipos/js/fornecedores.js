// prototipos/js/fornecedores.js
// Script para CRUD de fornecedores, importação Excel e validação de CNPJ

let fornecedoresMock = [
  {
    id: 1,
    nome: 'Hortifruti Silva',
    cnpj: '12.345.678/0001-90',
    categoria: 'Verduras e Legumes',
    email: 'contato@hortifrutisilva.com',
    telefone: '(11) 99999-1234'
  },
  {
    id: 2,
    nome: 'Frigorífico Boa Carne',
    cnpj: '98.765.432/0001-55',
    categoria: 'Carnes',
    email: 'vendas@boacarne.com',
    telefone: '(11) 98888-4321'
  }
];

function loadFornecedores() {
  const tbody = document.querySelector('#fornecedores-table tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  fornecedoresMock.forEach(f => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${f.nome}</td>
      <td>${f.cnpj}</td>
      <td>${f.categoria}</td>
      <td>${f.email}</td>
      <td>${f.telefone}</td>
      <td>
        <button class="btn-editar" onclick="openCadastroModal(${f.id})">Editar</button>
        <button class="btn-excluir" onclick="deleteFornecedor(${f.id})">Excluir</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openCadastroModal(fornecedorId) {
  const modal = document.getElementById('modal-cadastro-fornecedor');
  if (!modal) return;
  let fornecedor = fornecedoresMock.find(f => f.id === fornecedorId) || {};
  modal.querySelector('[name="id"]').value = fornecedor.id || '';
  modal.querySelector('[name="nome"]').value = fornecedor.nome || '';
  modal.querySelector('[name="cnpj"]').value = fornecedor.cnpj || '';
  modal.querySelector('[name="categoria"]').value = fornecedor.categoria || '';
  modal.querySelector('[name="email"]').value = fornecedor.email || '';
  modal.querySelector('[name="telefone"]').value = fornecedor.telefone || '';
  modal.style.display = 'flex';
}

function saveFornecedor(data) {
  if (!validateCNPJ(data.cnpj)) {
    alert('CNPJ inválido!');
    return false;
  }
  if (!data.nome || !data.email) {
    alert('Preencha todos os campos obrigatórios.');
    return false;
  }
  if (data.id) {
    // Editar
    const idx = fornecedoresMock.findIndex(f => f.id == data.id);
    if (idx !== -1) fornecedoresMock[idx] = data;
  } else {
    // Novo
    data.id = Math.max(0, ...fornecedoresMock.map(f => f.id)) + 1;
    fornecedoresMock.push(data);
  }
  loadFornecedores();
  fecharCadastroModal();
  return true;
}

function deleteFornecedor(id) {
  if (confirm('Deseja realmente excluir este fornecedor?')) {
    fornecedoresMock = fornecedoresMock.filter(f => f.id !== id);
    loadFornecedores();
  }
}

function importFromExcel(file) {
  if (typeof XLSX === 'undefined') {
    alert('Biblioteca XLSX não carregada.');
    return;
  }
  const reader = new FileReader();
  reader.onload = function(e) {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, {type: 'array'});
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet);
    rows.forEach(row => {
      if (row['CNPJ'] && validateCNPJ(row['CNPJ'])) {
        saveFornecedor({
          nome: row['Nome'] || '',
          cnpj: row['CNPJ'],
          categoria: row['Categoria'] || '',
          email: row['Email'] || '',
          telefone: row['Telefone'] || ''
        });
      }
    });
  };
  reader.readAsArrayBuffer(file);
}

function validateCNPJ(cnpj) {
  // Validação básica de CNPJ
  cnpj = cnpj.replace(/[\D]/g, '');
  if (cnpj.length !== 14) return false;
  // Elimina CNPJs inválidos conhecidos
  if (/^(\d)\1{13}$/.test(cnpj)) return false;
  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(0)) return false;
  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1)) return false;
  return true;
}

function fecharCadastroModal() {
  const modal = document.getElementById('modal-cadastro-fornecedor');
  if (modal) modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
  loadFornecedores();
  // Botão novo fornecedor
  const btnNovo = document.getElementById('btn-novo-fornecedor');
  if (btnNovo) {
    btnNovo.addEventListener('click', function() {
      openCadastroModal();
    });
  }
  // Botão importar Excel
  const inputImport = document.getElementById('input-import-fornecedores');
  if (inputImport) {
    inputImport.addEventListener('change', function(e) {
      if (e.target.files.length > 0) {
        importFromExcel(e.target.files[0]);
      }
    });
  }
  // Formulário modal salvar
  const modal = document.getElementById('modal-cadastro-fornecedor');
  if (modal) {
    const form = modal.querySelector('form');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const data = {
          id: form.querySelector('[name="id"]').value ? Number(form.querySelector('[name="id"]').value) : undefined,
          nome: form.querySelector('[name="nome"]').value,
          cnpj: form.querySelector('[name="cnpj"]').value,
          categoria: form.querySelector('[name="categoria"]').value,
          email: form.querySelector('[name="email"]').value,
          telefone: form.querySelector('[name="telefone"]').value
        };
        saveFornecedor(data);
      });
    }
    // Botão fechar modal
    const btnClose = modal.querySelector('.btn-fechar-modal');
    if (btnClose) {
      btnClose.addEventListener('click', fecharCadastroModal);
    }
  }
});
