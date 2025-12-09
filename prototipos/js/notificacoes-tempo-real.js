// Simulação de notificações push em tempo real
(function() {
  var badge = null;
  var lista = null;
  var notificacoes = [
    'Nova resposta de fornecedor: Frutas Silva',
    'Cotação aprovada para Tomate - Supermercado Real',
    'Fornecedor Hortifruti Express enviou áudio',
    'Nova demanda de compra registrada pela Indicatore',
    'Resposta estruturada recebida: Batata Inglesa',
    'Fornecedor Mercado Verde respondeu via WhatsApp'
  ];
  var idx = 0;

  function criarBadge() {
    badge = document.getElementById('notificacao-badge');
    lista = document.getElementById('notificacao-lista');
    if (!badge) {
      var sino = document.getElementById('icone-sino');
      if (!sino) return;
      badge = document.createElement('span');
      badge.id = 'notificacao-badge';
      badge.style.background = '#e74c3c';
      badge.style.color = '#fff';
      badge.style.borderRadius = '50%';
      badge.style.padding = '2px 7px';
      badge.style.position = 'absolute';
      badge.style.top = '2px';
      badge.style.right = '-10px';
      badge.style.fontSize = '0.95rem';
      badge.style.fontWeight = '700';
      badge.textContent = '0';
      sino.style.position = 'relative';
      sino.appendChild(badge);
    }
    if (!lista) {
      lista = document.createElement('div');
      lista.id = 'notificacao-lista';
      lista.style.position = 'absolute';
      lista.style.top = '38px';
      lista.style.right = '0';
      lista.style.background = '#fff';
      lista.style.boxShadow = '0 4px 16px rgba(30,40,80,0.13)';
      lista.style.borderRadius = '8px';
      lista.style.minWidth = '260px';
      lista.style.zIndex = '1200';
      lista.style.display = 'none';
      lista.style.fontSize = '1.02rem';
      lista.style.color = '#222';
      lista.style.padding = '12px 0';
      sino.appendChild(lista);
    }
  }

  function adicionarNotificacao(msg) {
    criarBadge();
    var count = parseInt(badge.textContent, 10) || 0;
    badge.textContent = count + 1;
    var item = document.createElement('div');
    item.textContent = msg;
    item.style.padding = '8px 18px';
    item.style.borderBottom = '1px solid #f0f0f0';
    item.style.cursor = 'pointer';
    item.onmouseover = function() { item.style.background = '#f7f8fa'; };
    item.onmouseout = function() { item.style.background = '#fff'; };
    lista.insertBefore(item, lista.firstChild);
    lista.style.display = 'block';
  }

  function toggleLista() {
    if (lista) {
      lista.style.display = (lista.style.display === 'block') ? 'none' : 'block';
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    criarBadge();
    var sino = document.getElementById('icone-sino');
    if (sino) {
      sino.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleLista();
      });
      document.body.addEventListener('click', function() {
        if (lista) lista.style.display = 'none';
      });
    }
    setInterval(function() {
      adicionarNotificacao(notificacoes[idx % notificacoes.length]);
      idx++;
    }, 30000);
  });
})();