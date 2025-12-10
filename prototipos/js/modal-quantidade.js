// prototipos/js/modal-quantidade.js
// Script para modal-quantidade-compra.html

let propostaQuantidadeContext = null;

function setPropostaContext(propostaId) {
  propostaQuantidadeContext = propostaId;
  // Buscar dados da proposta selecionada (mock)
  let proposta = null;
  if (window.propostasFinais) {
    proposta = window.propostasFinais.find(p => p.propostaId === propostaId);
  }
  if (!proposta) {
    alert('Proposta não encontrada para seleção de quantidade.');
    return;
  }
  document.getElementById('modal-quantidade-fornecedor').textContent = proposta.nome;
  document.getElementById('modal-quantidade-preco').textContent = 'R$ ' + proposta.preco.toFixed(2);
  document.getElementById('modal-quantidade-input').value = proposta.quantidade;
  calcularValorTotal(proposta.quantidade, proposta.preco);
}

function validateQuantidade(value) {
  const quantidade = parseFloat(value);
  if (isNaN(quantidade) || quantidade <= 0) {
    document.getElementById('modal-quantidade-erro').textContent = 'Informe uma quantidade válida.';
    return false;
  }
  document.getElementById('modal-quantidade-erro').textContent = '';
  return true;
}

function confirmarQuantidade() {
  const input = document.getElementById('modal-quantidade-input');
  const quantidade = parseFloat(input.value);
  if (!validateQuantidade(quantidade)) return;
  // Atualiza seleção global
  if (window.propostasSelecionadas && propostaQuantidadeContext) {
    window.propostasSelecionadas[propostaQuantidadeContext].quantidade = quantidade;
  }
  // Fecha modal
  const modal = document.getElementById('modal-quantidade');
  if (modal) modal.style.display = 'none';
}

function calcularValorTotal(quantidade, precoUnitario) {
  const total = (!isNaN(quantidade) && !isNaN(precoUnitario)) ? quantidade * precoUnitario : 0;
  document.getElementById('modal-quantidade-total').textContent = 'R$ ' + total.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
}

// Evento para atualizar valor total em tempo real
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('modal-quantidade-input');
    if (input) {
      input.addEventListener('input', function() {
        const quantidade = parseFloat(this.value);
        let preco = 0;
        if (window.propostasFinais && propostaQuantidadeContext) {
          const proposta = window.propostasFinais.find(p => p.propostaId === propostaQuantidadeContext);
          if (proposta) preco = proposta.preco;
        }
        calcularValorTotal(quantidade, preco);
      });
    }
  });
}
