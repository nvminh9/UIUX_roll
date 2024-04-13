// Header button
let btnFeeds = document.getElementById('btnFeeds')
let btnRoll = document.getElementById('btnRoll')
// Left Container's Button
let btnNewsFeed = document.getElementById('btnNewsFeedid')
let btnNoti = document.getElementById('btnNotiid')
let btnSearch = document.getElementById('btnSearchid')
let btnMessages = document.getElementById('btnMessagesid')
let btnSettings = document.getElementById('btnSettingsid')

btnFeeds.style.background = "black";
btnFeeds.style.color = "whitesmoke";
btnFeeds.style.borderRadius = "8px";

btnFeeds.addEventListener("click", function() {
    btnFeeds.style.background = "black";
    btnFeeds.style.color = "whitesmoke";
    btnFeeds.style.borderRadius = "8px";
    btnRoll.style.background = "transparent";
    btnRoll.style.color = "black";
    btnRoll.style.borderRadius = "8px";
});

btnRoll.addEventListener("click", function() {
    btnRoll.style.background = "black";
    btnRoll.style.color = "whitesmoke";
    btnRoll.style.borderRadius = "8px";
    btnFeeds.style.background = "transparent";
    btnFeeds.style.color = "black";
    btnFeeds.style.borderRadius = "8px";
});

// Left Container's Button Handle 
// Button News Feed
$('.btnNewsFeed').click(function(){
    btnNewsFeed.style.background = "black"
    btnNewsFeed.style.color = "whitesmoke"
    btnNoti.style.background = "white"
    btnNoti.style.color = "black"
    btnSearch.style.background = "white"
    btnSearch.style.color = "black"
    btnMessages.style.background = "white"
    btnMessages.style.color = "black"
    btnSettings.style.background = "white"
    btnSettings.style.color = "black"
    document.querySelector('.contentmiddleContainer').innerHTML = `<h1>News Feed</h1>`
});
// Button Notifications
$('.btnNoti').click(function(){
    btnNoti.style.background = "black"
    btnNoti.style.color = "whitesmoke"
    btnNewsFeed.style.background = "white"
    btnNewsFeed.style.color = "black"
    btnSearch.style.background = "white"
    btnSearch.style.color = "black"
    btnMessages.style.background = "white"
    btnMessages.style.color = "black"
    btnSettings.style.background = "white"
    btnSettings.style.color = "black"
    document.querySelector('.contentmiddleContainer').innerHTML = `<h1>Notifications</h1>`
});
// Button Search
$('.btnSearch').click(function(){
    btnSearch.style.background = "black"
    btnSearch.style.color = "whitesmoke"
    btnNoti.style.background = "white"
    btnNoti.style.color = "black"
    btnNewsFeed.style.background = "white"
    btnNewsFeed.style.color = "black"
    btnMessages.style.background = "white"
    btnMessages.style.color = "black"
    btnSettings.style.background = "white"
    btnSettings.style.color = "black"
    document.querySelector('.contentmiddleContainer').innerHTML = `<h1>Search</h1>`
});
// Button Messages
$('.btnMessages').click(function(){
    btnMessages.style.background = "black"
    btnMessages.style.color = "whitesmoke"
    btnNoti.style.background = "white"
    btnNoti.style.color = "black"
    btnSearch.style.background = "white"
    btnSearch.style.color = "black"
    btnNewsFeed.style.background = "white"
    btnNewsFeed.style.color = "black"
    btnSettings.style.background = "white"
    btnSettings.style.color = "black"
    document.querySelector('.contentmiddleContainer').innerHTML = `<h1>Messages</h1>`
});
// Button Settings
$('.btnSettings').click(function(){
    btnSettings.style.background = "black"
    btnSettings.style.color = "whitesmoke"
    btnNoti.style.background = "white"
    btnNoti.style.color = "black"
    btnSearch.style.background = "white"
    btnSearch.style.color = "black"
    btnMessages.style.background = "white"
    btnMessages.style.color = "black"
    btnNewsFeed.style.background = "white"
    btnNewsFeed.style.color = "black"
    document.querySelector('.contentmiddleContainer').innerHTML = `<h1>Settings</h1>`
});