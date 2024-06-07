document.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio();
    const playButton = document.getElementById('playButton');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const progressBar = document.getElementById('progress');
    const volumeControl = document.getElementById('volumeControl');
    const currentTimeDisplay = document.getElementById('currentTime');
    const currentTrackTitle = document.getElementById('currentTrackTitle');
    const currentTrackArtist = document.getElementById('currentTrackArtist');
    const currentTrackCover = document.getElementById('currentTrackCover');
    let currentTrackIndex = 0;

    const tracks = Array.from(document.querySelectorAll('#playlist li'));

    const loadTrack = (index) => {
        const track = tracks[index];
        const src = track.getAttribute('data-src');
        const title = track.querySelector('.track-title').innerText;
        const artist = track.getAttribute('data-artist');
        const cover = track.getAttribute('data-cover');

        console.log(`Loading track: ${src}`);
        audio.src = src;
        currentTrackTitle.innerText = title;
        currentTrackArtist.innerText = artist;
        currentTrackCover.src = cover;
    };

    const playTrack = () => {
        console.log('Playing track...');
        audio.play().catch(error => {
            console.error('Error playing track:', error);
        });
        playButton.innerText = '❚❚';
    };

    const pauseTrack = () => {
        console.log('Pausing track...');
        audio.pause();
        playButton.innerText = '►';
    };

    const togglePlayPause = () => {
        if (audio.paused) {
            playTrack();
        } else {
            pauseTrack();
        }
    };

    playButton.addEventListener('click', togglePlayPause);

    prevButton.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex > 0) ? currentTrackIndex - 1 : tracks.length - 1;
        loadTrack(currentTrackIndex);
        playTrack();
    });

    nextButton.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex < tracks.length - 1) ? currentTrackIndex + 1 : 0;
        loadTrack(currentTrackIndex);
        playTrack();
    });

    audio.addEventListener('timeupdate', () => {
        progressBar.value = (audio.currentTime / audio.duration) * 100 || 0;
        currentTimeDisplay.innerText = formatTime(audio.currentTime);
    });

    progressBar.addEventListener('input', () => {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    });

    volumeControl.addEventListener('input', () => {
        audio.volume = volumeControl.value;
    });

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    tracks.forEach((track, index) => {
        track.querySelector('.play-button').addEventListener('click', () => {
            currentTrackIndex = index;
            loadTrack(currentTrackIndex);
            playTrack();
        });
    });

    audio.addEventListener('ended', () => {
        currentTrackIndex = (currentTrackIndex < tracks.length - 1) ? currentTrackIndex + 1 : 0;
        loadTrack(currentTrackIndex);
        playTrack();
    });

    loadTrack(currentTrackIndex);
});
