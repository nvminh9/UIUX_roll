let btnFeeds = document.getElementById('btnFeeds')
let btnRoll = document.getElementById('btnRoll')

btnFeeds.style.background = "black";
btnFeeds.style.color = "whitesmoke";
btnFeeds.style.borderRadius = "8px";

btnFeeds.addEventListener("click", function() {
    btnFeeds.style.background = "black";
    btnFeeds.style.color = "whitesmoke";
    btnFeeds.style.borderRadius = "8px";
    btnRoll.style.background = "white";
    btnRoll.style.color = "black";
    btnRoll.style.borderRadius = "8px";
});

btnRoll.addEventListener("click", function() {
    btnRoll.style.background = "black";
    btnRoll.style.color = "whitesmoke";
    btnRoll.style.borderRadius = "8px";
    btnFeeds.style.background = "white";
    btnFeeds.style.color = "black";
    btnFeeds.style.borderRadius = "8px";
});