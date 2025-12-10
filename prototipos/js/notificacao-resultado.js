// prototipos/js/notificacao-resultado.js

// Mock de dados de resultado de cotação
const mockResultados = [
  {
    id: 1,
    produto: 'Filé de Peito de Frango',
    quantidade: 500,
    unidade: 'kg',
    status: 'aceita',
    preco: 13.75,
    dataEntrega: '2024-06-15',
    quantidadePedido: 480,
    condicoes: 'Entrega refrigerada até 10h, embalagem a vácuo',
    recebido: false
  },
  {
    id: 2,
    produto: 'Tomate Italiano',
    quantidade: 1200,
    unidade: 'kg',
    status: 'recusada',
    preco: 4.10,
    dataEntrega: '2024-06-16',
    quantidadePedido: 0,
    condicoes: 'Entrega até 12h, caixa plástica',
    recebido: false
  }
];

function loadResultadoCotacao(id) {
  const resultado = mockResultados.find(r => r.id === id);
  if (!resultado) {
    document.getElementById('resultado-cotacao').innerHTML = '<div class="alert alert-danger">Cotação não encontrada.</div>';
    return;
  }
  let html = `<h2>Resultado da Cotação</h2>
    <div class="info-bloco">
      <strong>Produto:</strong> ${resultado.produto}<br>
      <strong>Quantidade Solicitada:</strong> ${resultado.quantidade} ${resultado.unidade}<br>
      <strong>Preço Ofertado:</strong> R$ ${resultado.preco.toFixed(2)}<br>
      <strong>Data de Entrega:</strong> ${resultado.dataEntrega}<br>
      <strong>Condições:</strong> ${resultado.condicoes}<br>
    </div>`;
  html += displayStatus(resultado.status, resultado);
  document.getElementById('resultado-cotacao').innerHTML = html;
}

function displayStatus(status, resultado) {
  if (status === 'aceita') {
    let recebido = resultado.recebido;
    let html = `<div class="status-bloco status-aceita">Sua proposta foi <strong>ACEITA</strong>!</div>`;
    html += `<div class="pedido-info">
      <strong>Quantidade Pedida:</strong> ${resultado.quantidadePedido} ${resultado.unidade}<br>
      <button id="btn-confirmar-recebimento" class="btn-confirmar" ${recebido ? 'disabled' : ''} onclick="confirmarRecebimentoPedido(${resultado.id})">
        ${recebido ? 'Pedido Confirmado' : 'Confirmar Recebimento do Pedido'}
      </button>
    </div>`;
    return html;
  } else if (status === 'recusada') {
    return `<div class="status-bloco status-recusada">Sua proposta <strong>NÃO FOI ACEITA</strong> nesta cotação.</div>`;
  } else {
    return `<div class="status-bloco status-pendente">Cotação em análise.</div>`;
  }
}

function confirmarRecebimentoPedido(id) {
  const resultado = mockResultados.find(r => r.id === id);
  if (!resultado || resultado.recebido) return;
  resultado.recebido = true;
  document.getElementById('btn-confirmar-recebimento').innerText = 'Pedido Confirmado';
  document.getElementById('btn-confirmar-recebimento').disabled = true;
  alert('Recebimento do pedido confirmado com sucesso!');
}

// Ao carregar a página, buscar o id da cotação (exemplo via query string ou mock)
document.addEventListener('DOMContentLoaded', function() {
  // Exemplo: id=1
  loadResultadoCotacao(1);
});
