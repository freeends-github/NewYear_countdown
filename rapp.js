function countdown(){
    var now = new Date();
    var newYear = now.getFullYear() + 1;
    var eventDate = new Date(newYear, 00,01);
    var currentTime = now.getTime();
    var remainingTime = eventDate - currentTime;
    var d = Math.floor( remainingTime / 86400000);
    remainingTime = remainingTime % 86400000;
    var h = Math.floor( remainingTime / 3600000);
    remainingTime = remainingTime % 3600000;
    var min = Math.floor( remainingTime / 60000);
    remainingTime = remainingTime % 60000;
    var s = Math.floor( remainingTime / 1000);
    h %= 24;
    min %= 60;
    s %= 60;
    h = (h<10) ? "0" + h : h;
    min = (min<10) ? "0" + min : min;
    s = (s<10) ? "0" + s : s;
    document.querySelector(".days").textContent = d;
    document.querySelector(".hours").textContent = h;
    document.querySelector(".minutes").textContent = min;
    document.querySelector(".seconds").textContent = s;
}
setInterval("countdown()", 1000);