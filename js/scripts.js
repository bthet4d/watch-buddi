

document.addEventListener("DOMContentLoaded", () => {

    // target date
    const countDownDate = new Date("March 23, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    let distance = countDownDate - now;        
    const countdownInterval = setInterval(() => {
        updateCountdown();
        distance -= 1000;
        if (distance < 0) {
            distance = 0;
        }
    }, 1000);
    // Get the current date and time
    const updateCountdown = () => {
        const remainingDays = Math.floor(distance / (1000 * 60 * 60 * 24));
        const remainingHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const remainingMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const remainingSeconds = Math.floor((distance % (1000 * 60)) / 1000);
        let days = document.getElementById('days');
        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds');

        days.innerHTML = remainingDays < 10 ? '0' + remainingDays.toString(): remainingDays.toString();
        hours.innerHTML = remainingHours < 10 ? '0' + remainingHours.toString() : remainingHours.toString();
        minutes.innerHTML = remainingMinutes < 10 ? '0' + remainingMinutes.toString() : remainingMinutes.toString();
        seconds.innerHTML = remainingSeconds < 10 ? '0' + remainingSeconds.toString() : remainingSeconds.toString();
    }

    updateCountdown();

    const splide = new Splide('.splide', {
        autoplay: true, 
        rewind: true, 
        pauseOnHover: true, 
        pauseOnFocus: true, 
        width: '700px', 
        height: '348px', 
        video: {
            loop: false, 
            host: 'https://www.youtube-nocookie.com',
            playerOptions: {
                youtube: {
                    fs: 0
                }
            }
        }
    });
    splide.mount( window.splide.Extensions );

    var Autoplay = splide.Components.Autoplay;

    splide.on('video:play', function() {
        Autoplay.pause();
    });

    splide.on('video:ended', function() {
        Autoplay.play();
    });
});
