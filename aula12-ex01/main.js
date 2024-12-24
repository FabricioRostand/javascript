function updateTime() {
    const time = new Date()

    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    document.getElementById('time').textContent = `${hour}:${formattedMinutes}:${formattedSeconds}`;

    updateImage(hour)
}

function updateImage(hour) {
    const image = document.getElementById('image');

    if (hour >= 5 && hour < 12 ) {
        image.style.backgroundImage = 'url("images/manha.jpg")';
        document.body.style.background = '#e2cd9f'
    } else if (hour >= 12 && hour < 19) {
        image.style.backgroundImage = 'url("images/tarde.jpg")';
        document.body.style.background = '#b9846f'
    } else {
        image.style.backgroundImage = 'url("images/noite.jpg")';
        document.body.style.background = '#515154'
    }
}
function main() {
    updateTime();
    setInterval(updateTime, 1000);
}

main();