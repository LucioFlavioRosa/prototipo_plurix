// audio-player-transcricao.js
// Player de áudio customizado com exibição de transcrição

document.addEventListener('DOMContentLoaded', function() {
  const player = document.getElementById('audio-player');
  const playBtn = document.getElementById('btn-play');
  const pauseBtn = document.getElementById('btn-pause');
  const progressBar = document.getElementById('audio-progress');
  const transcricaoBox = document.getElementById('transcricao-box');

  if (!player) return;

  // Atualiza barra de progresso
  player.addEventListener('timeupdate', function() {
    if (progressBar) {
      progressBar.value = (player.currentTime / player.duration) * 100 || 0;
    }
  });

  if (playBtn) {
    playBtn.addEventListener('click', function() {
      player.play();
    });
  }
  if (pauseBtn) {
    pauseBtn.addEventListener('click', function() {
      player.pause();
    });
  }
  if (progressBar) {
    progressBar.addEventListener('input', function() {
      if (player.duration) {
        player.currentTime = (progressBar.value / 100) * player.duration;
      }
    });
  }

  // Exibe transcrição (mock)
  if (transcricaoBox) {
    // Exemplo de transcrição, pode ser substituído por integração real
    transcricaoBox.textContent =
      'Fornecedor: "Tenho disponível 200kg de tomate, preço R$ 4,50/kg, entrega em até 48h."';
  }
});