module.exports = function () {
  const statuses = [
    "Hive temperature rising...",
    "Mutations detected in Sector C...",
    "Unauthorized access in laboratory 12...",
    "T-Virus sample missing...",
    "Security lockdown initiated..."
  ];

  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

  return `
    <link rel="stylesheet" href="/style.css">
    <audio id="alert" src="/alert.mp3" preload="auto"></audio>
    <h1> Umbrella Corporation – Access Terminal</h1>
    <p><strong>System Status:</strong> ${randomStatus}</p>
    <ul>
      <li><a href="/research" onclick="play()">🔬 Research Division</a></li>
      <li><a href="/security" onclick="play()">🚨 Security Protocols</a></li>
      <li><a href="/files" onclick="play()">📁 Infected Files</a></li>
      <li><a href="/redqueen" onclick="play()">🔴 Red Queen AI</a></li>
    </ul>
    <p class="blink">> Awaiting command...</p>
    <script>
  document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('alert');
    audio.play().catch(() => {
      console.log("Autoplay blocked by browser, click link to play sound.");
    });
  });

  function play() {
    document.getElementById('alert').play();
  }
</script>

  `;
};
