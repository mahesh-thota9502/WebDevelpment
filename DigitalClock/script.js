function updateClock() {
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    const time = `${hours}:${minutes}:${seconds}`;

    document.getElementById("clock").textContent = time;

    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();

    const date = `${day}/${month}/${year}`;

    document.getElementById("date").textContent = date;
}

updateClock();
 
setInterval(updateClock, 1000);