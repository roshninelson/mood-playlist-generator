async function generatePlaylist(){

  const mood =
  document.getElementById("mood").value;

  const language =
  document.getElementById("language").value;

  const songsContainer =
  document.getElementById("songsContainer");

  songsContainer.innerHTML =
  "<h2 class='loading'>🎵 Loading Playlist...</h2>";

  const query =
  `${mood} ${language}`;

  try{

    const response =
    await fetch(
      `https://itunes.apple.com/search?term=${query}&media=music&limit=10`
    );

    const data =
    await response.json();

    songsContainer.innerHTML = "";

    data.results.forEach(song => {

      songsContainer.innerHTML += `

      <div class="song-card">

        <img src="${song.artworkUrl100.replace(
          '100x100',
          '500x500'
        )}">

        <div class="song-info">

          <h2>${song.trackName}</h2>

          <p>${song.artistName}</p>

          <audio controls>

            <source
            src="${song.previewUrl}"
            type="audio/mp3">

          </audio>

        </div>

      </div>

      `;
    });

  }

  catch(error){

    songsContainer.innerHTML =

    "<h2 class='loading'>❌ Failed to load songs</h2>";

    console.log(error);
  }
}