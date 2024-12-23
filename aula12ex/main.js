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

    if (hour < 12) {
        image.style.backgroundImage = 'url("images/manha.jpg")';
    } else if (hour < 18) {
        image.style.backgroundImage = 'url("images/tarde.jpg")';
    } else {
        image.style.backgroundImage = 'url("images/noite.jpg")';
    }
}

function main() {
    updateTime();
    setInterval(updateTime, 1000);
}

main();