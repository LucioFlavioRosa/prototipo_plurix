// Modal de Detalhes de Cotação - Reutiliza padrão do dashboard-fornecedor.html
// Este script deve ser incluído após o template principal

function abrirModalCotacao(cotacaoId) {
  // Mock de dados realistas da cotação
  var cotacao = {
    id: cotacaoId,
    produto: {
      sku: '7891991000849',
      nome: 'Skol Lata 350ml',
      categoria: 'Cervejas',
      especificacoes: 'Cerveja Pilsen, Lata 350ml, ABV 4.7%, Origem: Brasil',
      fornecedor: 'Ambev S.A.',
      preco_ofertado: 3.89,
      unidade: 'Unidade',
      quantidade: 15000
    },
    historico_precos: [
      { mes: 'Jan/24', preco: 3.79 },
      { mes: 'Fev/24', preco: 3.82 },
      { mes: 'Mar/24', preco: 3.85 },
      { mes: 'Abr/24', preco: 3.88 },
      { mes: 'Mai/24', preco: 3.90 },
      { mes: 'Jun/24', preco: 3.89 }
    ],
    indices_mercado: {
      esalq: 3.95,
      milkpoint: 3.93,
      safras: 3.97
    },
    trilha_aprovacao: [
      { nivel: 'Comprador', nome: 'João Silva', status: 'aprovado', data: '10/06/2024 09:12', justificativa: 'Preço competitivo, fornecedor homologado.' },
      { nivel: 'Gerente Categoria', nome: 'Maria Souza', status: 'aprovado', data: '10/06/2024 10:02', justificativa: 'Conforme política de compras.' },
      { nivel: 'Diretor Comercial', nome: 'Carlos Lima', status: 'pendente', data: null, justificativa: null }
    ],
    status: 'pendente'
  };

  // Monta HTML do modal
  var html = '';
  html += '<div class="modal-header">';
  html += '<span class="modal-title">Detalhes da Cotação #' + cotacao.id + '</span>';
  html += '<button class="modal-close" aria-label="Fechar" onclick="fecharModalCotacao()">&times;</button>';
  html += '</div>';
  html += '<div class="modal-body">';
  html += '<section style="margin-bottom:24px;">';
  html += '<h2 style="font-size:1.15rem;color:#1a2340;margin-bottom:8px;">Produto</h2>';
  html += '<table style="width:100%;font-size:1.05rem;margin-bottom:8px;">';
  html += '<tr><td><strong>SKU:</strong></td><td>' + cotacao.produto.sku + '</td></tr>';
  html += '<tr><td><strong>Nome:</strong></td><td>' + cotacao.produto.nome + '</td></tr>';
  html += '<tr><td><strong>Categoria:</strong></td><td>' + cotacao.produto.category + '</td></tr>';
  html += '<tr><td><strong>Fornecedor:</strong></td><td>' + cotacao.produto.fornecedor + '</td></tr>';
  html += '<tr><td><strong>Especificações:</strong></td><td>' + cotacao.produto.especificacoes + '</td></tr>';
  html += '<tr><td><strong>Quantidade:</strong></td><td>' + cotacao.produto.quantidade + ' ' + cotacao.produto.unidade + '</td></tr>';
  html += '<tr><td><strong>Preço Ofertado:</strong></td><td>R$ ' + cotacao.produto.preco_ofertado.toFixed(2) + '</td></tr>';
  html += '</table>';
  html += '</section>';

  // Histórico de preços do fornecedor (gráfico mockado)
  html += '<section style="margin-bottom:24px;">';
  html += '<h2 style="font-size:1.15rem;color:#1a2340;margin-bottom:8px;">Histórico de Preços do Fornecedor</h2>';
  html += '<canvas id="grafico-historico-precos" width="480" height="180" style="background:#fff;border-radius:8px;box-shadow:0 2px 8px rgba(30,40,80,0.07);"></canvas>';
  html += '<table style="width:100%;font-size:1.01rem;margin-top:10px;">';
  html += '<thead><tr><th>Mês</th><th>Preço (R$)</th></tr></thead><tbody>';
  cotacao.historico_precos.forEach(function(item) {
    html += '<tr><td>' + item.mes + '</td><td>' + item.preco.toFixed(2) + '</td></tr>';
  });
  html += '</tbody></table>';
  html += '</section>';

  // Comparação com índices de mercado
  html += '<section style="margin-bottom:24px;">';
  html += '<h2 style="font-size:1.15rem;color:#1a2340;margin-bottom:8px;">Comparação com Índices de Mercado</h2>';
  html += '<table style="width:100%;font-size:1.05rem;">';
  html += '<tr><td><strong>Esalq CEPEA:</strong></td><td>R$ ' + cotacao.indices_mercado.esalq.toFixed(2) + '</td></tr>';
  html += '<tr><td><strong>Milkpoint:</strong></td><td>R$ ' + cotacao.indices_mercado.milkpoint.toFixed(2) + '</td></tr>';
  html += '<tr><td><strong>Safras:</strong></td><td>R$ ' + cotacao.indices_mercado.safras.toFixed(2) + '</td></tr>';
  html += '</table>';
  html += '<div style="margin-top:8px;color:#555;font-size:0.98rem;">Valores mockados para demonstração. Diferença do preço ofertado para o mercado: <strong>' + (cotacao.produto.preco_ofertado - cotacao.indices_mercado.esalq >= 0 ? '+' : '') + (cotacao.produto.preco_ofertado - cotacao.indices_mercado.esalq).toFixed(2) + '</strong></div>';
  html += '</section>';

  // Trilha de aprovação
  html += '<section style="margin-bottom:24px;">';
  html += '<h2 style="font-size:1.15rem;color:#1a2340;margin-bottom:8px;">Trilha de Aprovação</h2>';
  html += '<table style="width:100%;font-size:1.01rem;">';
  html += '<thead><tr><th>Nível</th><th>Aprovador</th><th>Status</th><th>Data</th><th>Justificativa</th></tr></thead><tbody>';
  cotacao.trilha_aprovacao.forEach(function(item) {
    var statusLabel = '';
    if(item.status === 'aprovado') statusLabel = '<span style="color:#4bb543;font-weight:700;">Aprovado</span>';
    else if(item.status === 'pendente') statusLabel = '<span style="color:#f9b233;font-weight:700;">Pendente</span>';
    else statusLabel = '<span style="color:#e74c3c;font-weight:700;">Reprovado</span>';
    html += '<tr>' +
      '<td>' + item.nivel + '</td>' +
      '<td>' + (item.nome || '-') + '</td>' +
      '<td>' + statusLabel + '</td>' +
      '<td>' + (item.data || '-') + '</td>' +
      '<td>' + (item.justificativa || '-') + '</td>' +
    '</tr>';
  });
  html += '</tbody></table>';
  html += '</section>';

  // Botões de ação
  html += '<section style="text-align:right;margin-top:18px;">';
  html += '<button class="btn-salvar-edicao" style="background:#4bb543;color:#fff;margin-right:12px;" onclick="aprovarCotacao(' + cotacao.id + ')">Aprovar</button>';
  html += '<button class="btn-cancelar-edicao" style="background:#e74c3c;color:#fff;margin-right:12px;" onclick="rejeitarCotacao(' + cotacao.id + ')">Rejeitar</button>';
  html += '<button class="btn-download-excel" style="background:#f9b233;color:#fff;" onclick="solicitarRevisaoCotacao(' + cotacao.id + ')">Solicitar Revisão</button>';
  html += '</section>';

  html += '</div>';

  // Cria modal na página (reutiliza estrutura do template)
  var modalId = 'modal-detalhes-cotacao';
  var modal = document.getElementById(modalId);
  if (!modal) {
    modal = document.createElement('div');
    modal.id = modalId;
    modal.className = 'modal';
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('role', 'dialog');
    modal.style.display = 'none';
    document.body.appendChild(modal);
    var content = document.createElement('div');
    content.className = 'modal-content';
    content.setAttribute('tabindex', '0');
    modal.appendChild(content);
  }
  var content = modal.querySelector('.modal-content');
  content.innerHTML = html;
  modal.style.display = 'flex';
  modal.classList.remove('closing');
  setTimeout(function() {
    content.focus();
    desenharGraficoHistoricoPrecos(cotacao.historico_precos);
  }, 100);
}

function fecharModalCotacao() {
  var modal = document.getElementById('modal-detalhes-cotacao');
  if (modal) {
    modal.classList.add('closing');
    setTimeout(function() {
      modal.style.display = 'none';
      modal.classList.remove('closing');
    }, 250);
  }
}

// Funções de ação mockadas
function aprovarCotacao(id) {
  alert('Cotação #' + id + ' aprovada com sucesso!');
  fecharModalCotacao();
}
function rejeitarCotacao(id) {
  var justificativa = prompt('Informe a justificativa da rejeição:');
  if(justificativa && justificativa.trim().length > 0) {
    alert('Cotação #' + id + ' rejeitada. Justificativa: ' + justificativa);
    fecharModalCotacao();
  } else {
    alert('Justificativa obrigatória para rejeição.');
  }
}
function solicitarRevisaoCotacao(id) {
  var justificativa = prompt('Informe o motivo para solicitar revisão:');
  if(justificativa && justificativa.trim().length > 0) {
    alert('Revisão solicitada para cotação #' + id + '. Motivo: ' + justificativa);
    fecharModalCotacao();
  } else {
    alert('Justificativa obrigatória para revisão.');
  }
}

// Função para desenhar gráfico mockado no canvas
function desenharGraficoHistoricoPrecos(historico) {
  var canvas = document.getElementById('grafico-historico-precos');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Eixos
  ctx.strokeStyle = '#b7b9c6';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(50, 20);
  ctx.lineTo(50, 150);
  ctx.lineTo(450, 150);
  ctx.stroke();
  // Pontos e linha
  var maxPreco = Math.max.apply(null, historico.map(function(h){return h.preco;}));
  var minPreco = Math.min.apply(null, historico.map(function(h){return h.preco;}));
  var escalaY = function(preco) {
    return 150 - ((preco - minPreco) / (maxPreco - minPreco + 0.01)) * 110;
  };
  ctx.strokeStyle = '#4bb543';
  ctx.lineWidth = 3;
  ctx.beginPath();
  historico.forEach(function(item, i) {
    var x = 50 + i * 65;
    var y = escalaY(item.preco);
    if(i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();
  // Pontos
  historico.forEach(function(item, i) {
    var x = 50 + i * 65;
    var y = escalaY(item.preco);
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, 2 * Math.PI);
    ctx.fillStyle = '#f9b233';
    ctx.fill();
    ctx.strokeStyle = '#1a2340';
    ctx.lineWidth = 2;
    ctx.stroke();
    // Labels
    ctx.fillStyle = '#222';
    ctx.font = '13px Helvetica, Arial';
    ctx.fillText('R$ ' + item.preco.toFixed(2), x - 18, y - 12);
    ctx.fillStyle = '#555';
    ctx.font = '12px Helvetica, Arial';
    ctx.fillText(item.mes, x - 18, 165);
  });
}

// Acessibilidade: permite fechar com ESC
window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') fecharModalCotacao();
});
