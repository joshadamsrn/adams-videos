const videos = [
  {
    title: "Sam the Ninja 1",
    src: "videos/Sam The Ninja 1.mp4",
    author: "By Sam Adams",
    cover: "images/ninjasam.png"
  },
  {
    title: "Sam the Ninja 2",
    src: "videos/Sam The Ninja 2.mp4",
    author: "By Sam Adams",
    cover: "images/ninjasam.png"
  },
  {
    title: "Sam the Ninja 3",
    src: "videos/Sam The Ninja 3.mp4",
    author: "By Sam Adams",
    cover: "images/ninjasam.png"
  },
  {
    title: "Sam the Ninja 4",
    src: "videos/Sam The Ninja 4.mp4",
    author: "By Sam Adams",
    cover: "images/ninjasam.png"
  }
];

const player = document.getElementById("videoPlayer");
const source = document.getElementById("videoSource");
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

    item.onclick = () => playVideo(index);
    playlistContainer.appendChild(item);
  });
}

function playVideo(index) {
  const video = videos[index];
  source.src = video.src;
  player.load();
  nowPlaying.textContent = `Now Playing: ${video.title} — ${video.author}`;
}

loadPlaylist();
playVideo(0);
