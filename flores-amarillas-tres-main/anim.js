// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
// lyricsData convertido desde el .lrc (Alewife — Clairo, duración 3:33)
var lyricsData = [
  { text: "In Massachusetts, only 30 minutes from Alewife", time: 19.36 },
  { text: "I lay in my room, wonderin' why I've got this life", time: 28.77 },
  { text: "I met you by surprise, you were hangin' out all the time", time: 38.09 },
  { text: "But you know you saved me from doin' something to myself that night", time: 47.38 },
  { text: "You called me seven time: one, two, three, four on the line", time: 75.22 },
  { text: "I didn't mean to scare you, just had the thoughts in my mind", time: 84.72 },
  { text: "They showed up to my door, my parents didn't know what for", time: 93.98 },
  { text: "Swear I could've done it if you weren't there when I hit the floor", time: 103.38 },
  { text: "It's been so long", time: 131.30 },
  { text: "And you've been my sister all along", time: 133.60 },
  { text: "But you know I'll be alright", time: 140.66 },
  { text: "Eighth grade was never that tight", time: 143.53 }
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);