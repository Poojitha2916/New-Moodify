function suggestMusic(mood) {
  const result = document.getElementById("result");

  const songs = {
    happy: {
      title: "Happy - Pharrell Williams",
      youtube: "https://www.youtube.com/embed/ZbZSe6N_BXs",
      spotify: "https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH",
      message: "Stay joyful and keep dancing! 💃🕺"
    },
    sad: {
      title: "Someone Like You - Adele",
      youtube: "https://www.youtube.com/embed/hLQl3WQQoQ0",
      spotify: "https://open.spotify.com/track/4kflIGfjdZJW4ot2ioixTB",
      message: "It’s okay to feel sad. Music heals. 💙"
    },
    energetic: {
      title: "Eye of the Tiger - Survivor",
      youtube: "https://www.youtube.com/embed/btPJPFnesV4",
      spotify: "https://open.spotify.com/track/2KH16WveTQWT6KOG9Rg6e2",
      message: "You’re full of power! Go crush it! ⚡"
    },
    relaxed: {
      title: "Weightless - Marconi Union",
      youtube: "https://www.youtube.com/embed/UfcAVejslrU",
      spotify: "https://open.spotify.com/track/5chZ7VWbrX0LIYZUDoKc2f",
      message: "Take a breath. You deserve peace. 🌿"
    }
  };

  const song = songs[mood];

  result.innerHTML = `
    <h3 class="mb-3">${song.message}</h3>
    <p><strong>🎵 ${song.title}</strong></p>
    <a href="${song.spotify}" target="_blank">🎧 Listen on Spotify</a><br>
    <iframe class="mt-3" width="320" height="180" src="${song.youtube}" frameborder="0" allowfullscreen></iframe>
  `;
}
