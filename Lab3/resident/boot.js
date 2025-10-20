document.addEventListener("DOMContentLoaded", () => {
  const messages = [
    "Initializing Umbrella OS v3.2...",
    "Loading Hive security protocols...",
    "Decrypting classified archives...",
    "Checking containment systems...",
    "Access granted. Welcome, operative."
  ];

  let index = 0;
  const output = document.getElementById("boot");
  const sound = new Audio("/click.mp3");

  function printNext() {
    if (index < messages.length) {
      sound.play();
      const line = document.createElement("p");
      line.textContent = messages[index++];
      output.appendChild(line);
      setTimeout(printNext, 1200);
    } else {
      setTimeout(() => {
        window.location.href = "/home";
      }, 1000);
    }
  }

  printNext();
});
