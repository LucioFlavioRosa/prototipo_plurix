// Simulação de notificações push em tempo real no header
(function() {
  var notificacoes = [
    "Nova cotação recebida de Fornecedor X.",
    "Pedido de compra aprovado pelo ERP Totvs.",
    "Sincronização de cadastro concluída.",
    "Erro de integração: retry em andamento.",
    "Sugestão de compra importada do Indicatore."
  ];
  var badge = null;
  var lista = null;
  var count = 0;

  function criarBadge() {
    badge = document.getElementById('notificacao-badge');
    lista = document.getElementById('notificacao-lista');
    if (!badge) {
      // Cria badge se não existir
      var header = document.querySelector('.header');
      if (!header) return;
      var sino = document.createElement('div');
      sino.style.position = 'relative';
      sino.style.marginLeft = '24px';
      sino.innerHTML = '<button id="notificacao-sino" aria-label="Notificações" style="background:none;border:none;cursor:pointer;font-size:22px;position:relative;"><span style="font-size:22px;">🔔</span><span id="notificacao-badge" style="position:absolute;top:-6px;right:-8px;background:#e74c3c;color:#fff;border-radius:12px;padding:2px 8px;font-size:0.9rem;display:none;">0</span></button>';
      header.appendChild(sino);
      badge = sino.querySelector('#notificacao-badge');
      // Cria lista de notificações
      lista = document.createElement('div');
      lista.id = 'notificacao-lista';
      lista.style.position = 'absolute';
      lista.style.top = '40px';
      lista.style.right = '0';
      lista.style.background = '#fff';
      lista.style.boxShadow = '0 2px 8px rgba(30,40,80,0.13)';
      lista.style.borderRadius = '8px';
      lista.style.minWidth = '260px';
      lista.style.zIndex = '999';
      lista.style.display = 'none';
      lista.style.padding = '12px 0';
      lista.innerHTML = '<div style="padding: 8px 18px; color: #1a2340; font-weight: 700;">Notificações</div><ul style="list-style:none;padding:0;margin:0;" id="notificacao-ul"></ul>';
      sino.appendChild(lista);
      // Toggle lista ao clicar no sino
      sino.querySelector('#notificacao-sino').onclick = function(e) {
        e.stopPropagation();
        lista.style.display = (lista.style.display === 'none') ? 'block' : 'none';
      };
      document.body.addEventListener('click', function() {
        lista.style.display = 'none';
      });
    }
  }

  function adicionarNotificacao(texto) {
    criarBadge();
    count++;
    badge.textContent = count;
    badge.style.display = 'inline-block';
    var ul = document.getElementById('notificacao-ul');
    if (ul) {
      var li = document.createElement('li');
      li.style.padding = '8px 18px';
      li.style.borderBottom = '1px solid #f0f0f0';
      li.style.fontSize = '1.02rem';
      li.style.color = '#222';
      li.textContent = texto;
      ul.insertBefore(li, ul.firstChild);
    }
  }

  criarBadge();
  setInterval(function() {
    var idx = Math.floor(Math.random() * notificacoes.length);
    adicionarNotificacao(notificacoes[idx]);
  }, 30000);
  // Primeira notificação instantânea
  setTimeout(function() {
    adicionarNotificacao(notificacoes[0]);
  }, 2000);
})();