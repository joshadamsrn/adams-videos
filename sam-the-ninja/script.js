const videos = [
  {
    title: "Sam the Ninja 1",
    src: "https://www.youtube.com/embed/c48MqNgtfU4",
    author: "By Sam Adams",
    cover: "images/ninjasam.png"
  },
  {
    title: "Sam the Ninja 2",
    src: "https://www.youtube.com/embed/LpoebDpKaUI",
    author: "By Sam Adams",
    cover: "images/ninjasam.png"
  },
  {
    title: "Sam the Ninja 3",
    src: "https://www.youtube.com/embed/LBpEWkHtxgY",
    author: "By Sam Adams",
    cover: "images/ninjasam.png"
  },
  {
    title: "Sam the Ninja 4",
    src: "https://www.youtube.com/embed/G3VgTLmgWlE",
    author: "By Sam Adams",
    cover: "images/ninjasam.png"
  }
];

const player = document.getElementById("videoPlayer");
const nowPlaying = document.getElementById("nowPlaying");
const playlistContainer = document.getElementById("playlist");

function loadPlaylist() {
  playlistContainer.innerHTML = "";

  videos.forEach((video, index) => {
    const item = document.createElement("div");
    item.className = "track";

    item.innerHTML = `
      <img src="${video.cover}" alt="${video.title} cover art" class="cover-thumb">
      <div class="video-meta">
        <div>${video.title}</div>
        <div class="video-author">${video.author}</div>
      </div>
    `;

    item.addEventListener("click", () => playVideo(index));
    playlistContainer.appendChild(item);
  });
}

function playVideo(index) {
  const video = videos[index];
  player.src = `${video.src}?rel=0&modestbranding=1`;
  nowPlaying.textContent = `Now Playing: ${video.title} — ${video.author}`;
}

loadPlaylist();
playVideo(0);
