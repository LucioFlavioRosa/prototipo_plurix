document.addEventListener('DOMContentLoaded', function() {
  var audioUrl = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
  var transcricao = 'Transcrição: Pedido de compra gerado para o produto "Skol Lata 350ml", quantidade 1200 unidades, entrega prevista para 20/06/2024. Confirmação enviada ao ERP Totvs Com5.';
  var container = document.getElementById('audio-player-container');
  var transcricaoContainer = document.getElementById('transcricao-container');
  if (!container) return;
  var audio = document.createElement('audio');
  audio.src = audioUrl;
  audio.preload = 'auto';
  audio.style.display = 'none';
  var playBtn = document.createElement('button');
  playBtn.textContent = '▶️ Play';
  playBtn.className = 'cta-upload';
  playBtn.setAttribute('aria-label', 'Play áudio');
  var pauseBtn = document.createElement('button');
  pauseBtn.textContent = '⏸️ Pause';
  pauseBtn.className = 'cta-upload';
  pauseBtn.setAttribute('aria-label', 'Pause áudio');
  pauseBtn.style.marginLeft = '12px';
  var progress = document.createElement('input');
  progress.type = 'range';
  progress.min = 0;
  progress.max = 100;
  progress.value = 0;
  progress.style.width = '260px';
  progress.setAttribute('aria-label', 'Progresso do áudio');
  container.appendChild(playBtn);
  container.appendChild(pauseBtn);
  container.appendChild(progress);
  container.appendChild(audio);
  playBtn.addEventListener('click', function() {
    audio.play();
  });
  pauseBtn.addEventListener('click', function() {
    audio.pause();
  });
  audio.addEventListener('timeupdate', function() {
    if (audio.duration) {
      progress.value = Math.floor((audio.currentTime / audio.duration) * 100);
    }
  });
  progress.addEventListener('input', function() {
    if (audio.duration) {
      audio.currentTime = (progress.value / 100) * audio.duration;
    }
  });
  audio.addEventListener('ended', function() {
    progress.value = 0;
  });
  transcricaoContainer.textContent = transcricao;
});