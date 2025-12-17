// prototipos/js/aprovacoes.js
// Script para workflow de aprovações de cotações

let aprovacoesPendentes = [
  // Exemplo mock
  { id: 'cot001', produto: 'Carne Bovina', valor: 12000, status: 'pendente', solicitante: 'João', data: '10/06/2024' },
  { id: 'cot002', produto: 'Banana Prata', valor: 3500, status: 'pendente', solicitante: 'Maria', data: '11/06/2024' }
];

function loadAprovacoesPendentes() {
  // Popular tabela de aprovações
  const tbody = document.getElementById('aprovacoes-pendentes-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  aprovacoesPendentes.forEach((ap, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><input type="checkbox" class="chk-aprovacao" value="${ap.id}" aria-label="Selecionar aprovação"></td>
      <td>${ap.produto}</td>
      <td>R$ ${ap.valor.toLocaleString('pt-BR', {minimumFractionDigits:2})}</td>
      <td>${ap.solicitante}</td>
      <td>${ap.data}</td>
      <td>
        <button class="btn-aprovar" onclick="abrirJustificativa('${ap.id}', 'aprovar')">Aprovar</button>
        <button class="btn-reprovar" onclick="abrirJustificativa('${ap.id}', 'reprovar')">Reprovar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function aprovarCotacao(id, justificativa) {
  if (!validateJustificativa(justificativa)) {
    alert('Justificativa obrigatória para aprovação.');
    return;
  }
  // Simulação de aprovação
  aprovacoesPendentes = aprovacoesPendentes.filter(ap => ap.id !== id);
  loadAprovacoesPendentes();
  fecharModalJustificativa();
  alert('Cotação aprovada com sucesso!');
}

function reprovarCotacao(id, justificativa) {
  if (!validateJustificativa(justificativa)) {
    alert('Justificativa obrigatória para reprovação.');
    return;
  }
  // Simulação de reprovação
  aprovacoesPendentes = aprovacoesPendentes.filter(ap => ap.id !== id);
  loadAprovacoesPendentes();
  fecharModalJustificativa();
  alert('Cotação reprovada com sucesso!');
}

function aprovarEmLote(ids) {
  if (!Array.isArray(ids) || ids.length === 0) {
    alert('Selecione pelo menos uma cotação para aprovar em lote.');
    return;
  }
  // Modal para justificativa única
  abrirJustificativa(ids, 'aprovar-lote');
}

function validateJustificativa(text) {
  return text && text.trim().length >= 5;
}

// Modal de justificativa (mock)
let aprovacaoModalContext = { ids: [], tipo: '' };
function abrirJustificativa(ids, tipo) {
  // ids pode ser string ou array
  aprovacaoModalContext = { ids: Array.isArray(ids) ? ids : [ids], tipo };
  const modal = document.getElementById('modal-justificativa-aprovacao');
  if (modal) {
    modal.style.display = 'flex';
    modal.classList.remove('closing');
    setTimeout(() => {
      const textarea = modal.querySelector('textarea');
      if (textarea) textarea.focus();
    }, 100);
  }
}
function fecharModalJustificativa() {
  const modal = document.getElementById('modal-justificativa-aprovacao');
  if (modal) {
    modal.classList.add('closing');
    setTimeout(() => {
      modal.style.display = 'none';
      modal.classList.remove('closing');
      const textarea = modal.querySelector('textarea');
      if (textarea) textarea.value = '';
    }, 250);
  }
}
// Handler para o modal
function enviarJustificativa() {
  const modal = document.getElementById('modal-justificativa-aprovacao');
  if (!modal) return;
  const textarea = modal.querySelector('textarea');
  const justificativa = textarea.value;
  if (!validateJustificativa(justificativa)) {
    alert('Justificativa obrigatória (mínimo 5 caracteres).');
    return;
  }
  if (aprovacaoModalContext.tipo === 'aprovar') {
    aprovarCotacao(aprovacaoModalContext.ids[0], justificativa);
  } else if (aprovacaoModalContext.tipo === 'reprovar') {
    reprovarCotacao(aprovacaoModalContext.ids[0], justificativa);
  } else if (aprovacaoModalContext.tipo === 'aprovar-lote') {
    aprovacaoModalContext.ids.forEach(id => {
      // Em lote, mesma justificativa para todos
      aprovarCotacao(id, justificativa);
    });
    fecharModalJustificativa();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  loadAprovacoesPendentes();
  // Botão de aprovação em lote
  const btnLote = document.getElementById('btn-aprovar-lote');
  if (btnLote) {
    btnLote.addEventListener('click', function() {
      const chks = document.querySelectorAll('.chk-aprovacao:checked');
      const ids = Array.from(chks).map(chk => chk.value);
      aprovarEmLote(ids);
    });
  }
  // Modal justificativa
  const modal = document.getElementById('modal-justificativa-aprovacao');
  if (modal) {
    const btnEnviar = modal.querySelector('.btn-enviar-justificativa');
    if (btnEnviar) btnEnviar.addEventListener('click', enviarJustificativa);
    const btnFechar = modal.querySelector('.btn-fechar-modal');
    if (btnFechar) btnFechar.addEventListener('click', fecharModalJustificativa);
    modal.addEventListener('mousedown', function(e) {
      if (e.target === modal) fecharModalJustificativa();
    });
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') fecharModalJustificativa();
  });
});
