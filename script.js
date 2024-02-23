

// const songPaths = [
//     "./music/Aaj Phir Video Song.mp3",
//     "./music/Saudebaazi.mp3",
//     "./music/Aasan Nahin Yahan.mp3",
//     "./music/Sawan Aaya Hai.mp3",
//     "./music/Aayat.mp3",
//     "./music/Ashq Na Ho.mp3",
//     "./music/Singham Returns.mp3",
//     "./music/Soch na sake.mp3",
//     "./music/Baatein Ye Kab.mp3"
// ];
// const songNames = [
//     "Aaj Phir Video Song",
//     "Saudebaazi",
//     "Aasan Nahin Yahan",
//     "Sawan Aaya Hai",
//     "Aayat",
//     "Ashq Na Ho",
//     "Singham Returns",
//     "Soch na sake",
//     "Baatein Ye Kab"
// ];

// const songs = songPaths.map(path => new Audio(path));
// const audioPlayer = document.getElementById("audioPlayer");
// const playPauseButton = document.getElementById("playPauseButton");
// const prevButton = document.getElementById("prev");
// const nextButton = document.getElementById("next");
// const songNameDisplay = document.getElementById("songName");
// const songListContainer = document.getElementById("songList");
// let currentSongIndex = 0;

// function playSong() {
//     audioPlayer.src = songs[currentSongIndex].src; // Assigning the src property of Audio object
//     audioPlayer.play();
//     songNameDisplay.textContent = songNames[currentSongIndex];s
// }
// function createSongListItem(index) {
//     const songListItem = document.createElement("button");
//     songListItem.textContent = songNames[index];
//     songListItem.addEventListener("click", function () {
//         playSong(index);
//     });
//     return songListItem;
// }
// function createSongList() {
//     for (let i = 0; i < songNames.length; i++) {
//         const songListItem = createSongListItem(i);
//         songListContainer.appendChild(songListItem);
//     }
// }


// playPauseButton.addEventListener("click", function () {
//     if (audioPlayer.paused) {
//         audioPlayer.play();
//         playPauseButton.innerHTML = '<img width="60" height="60" class="mx-2" src="https://img.icons8.com/color/48/circled-pause.png" alt="circled-pause" />';
//     } else {
//         audioPlayer.pause();
//         playPauseButton.innerHTML = '<img width="60" height="60" class="mx-2" src="https://img.icons8.com/color/48/circled-play.png" alt="circled-play" />';
//     }
// });

// prevButton.addEventListener("click", function () {
//     currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
//     playSong();
// });

// nextButton.addEventListener("click", function () {
//     currentSongIndex = (currentSongIndex + 1) % songs.length;
//     playSong();
// });

// // Play the first song when the page loads
// playSong();
// createSongList();
// // 




const songPaths = [
    "./music/Aaj Phir Video Song.mp3",
    "./music/Saudebaazi.mp3",
    "./music/Aasan Nahin Yahan.mp3",
    "./music/Sawan Aaya Hai.mp3",
    "./music/Aayat.mp3",
    "./music/Ashq Na Ho.mp3",
    "./music/Singham Returns.mp3",
    "./music/Soch na sake.mp3",
    "./music/Baatein Ye Kab.mp3"
];
// const songsPath2 = [
//     "./music2/"
//     "./music2/"
//     "./music2/"
//     "./music2/"
//     "./music2/"
//     "./music2/"
//     "./music2/"
//     "./music2/"
//     "./music2/"
//     "./music2/"
//     "./music2/"
//     "./music2/"
//     "./music2/"
//     "./music2/"
//     "./music2/"
// ];

const songNames = [
    "Aaj Phir Video Song",
    "Saudebaazi",
    "Aasan Nahin Yahan",
    "Sawan Aaya Hai",
    "Aayat",
    "Ashq Na Ho",
    "Singham Returns",
    "Soch na sake",
    "Baatein Ye Kab"
];

const songs = songPaths.map(path => new Audio(path));
const audioPlayer = document.getElementById("audioPlayer");
const playPauseButton = document.getElementById("playPauseButton");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const songNameDisplay = document.getElementById("songName");
const songListContainer = document.getElementById("songList");
const progressBar = document.getElementById("progressBar");
const progressLabel = document.getElementById("progressLabel");
let currentSongIndex = 0;

function playSong(index) {
    currentSongIndex = index;
    audioPlayer.src = songs[currentSongIndex].src;
    audioPlayer.play();

    // Update song name display
    songNameDisplay.textContent = songNames[currentSongIndex];
}
songListContainer.addEventListener("click", function(){
    audioPlayer.play();
    playPauseButton.innerHTML = '<img width="48" height="48" class="mx-2" src="https://img.icons8.com/color/48/circled-pause.png" alt="circled-pause" />';
})
audioPlayer.addEventListener("timeupdate", function() {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    const progress = (currentTime / duration) * 100;
    progressBar.value = progress;
  progressLabel.textContent = formatTime(currentTime) + "/" + formatTime(duration);
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }

function createSongListItem(index) {
    const songListItem = document.createElement("button");
    songListItem.textContent = songNames[index];
    songListItem.addEventListener("click", function () {
        playSong(index);
        
    });
    return songListItem;
}

function createSongList() {
    for (let i = 0; i < songNames.length; i++) {
        const songListItem = createSongListItem(i);
        songListContainer.appendChild(songListItem);
    }
}

playPauseButton.addEventListener("click", function () {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.innerHTML = '<img width="48" height="48" class="mx-2" src="https://img.icons8.com/color/48/circled-pause.png" alt="circled-pause" />';
    } else {
        audioPlayer.pause();
        playPauseButton.innerHTML = '<img width="48" height="48" class="mx-2" src="https://img.icons8.com/color/48/circled-play.png" alt="circled-play" />';
    }
});

prevButton.addEventListener("click", function () {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
});

nextButton.addEventListener("click", function () {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
});

// Create the song list when the page loads
createSongList();
