// let widthHeaderMiddleContainer = document.querySelector('.middleContainerMain').offsetWidth;
//     document.querySelector('#headermiddleContainer').style.width = widthHeaderMiddleContainer + "px";

// setInterval(function() {
//     widthHeaderMiddleContainer = document.querySelector('.middleContainerMain').offsetWidth;
//     document.querySelector('#headermiddleContainer').style.width = widthHeaderMiddleContainer + "px";
// }, 500);


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

// // Left Container's Button Handle 
// // Button News Feed
// $('.btnNewsFeed').click(function(){
//     btnNewsFeed.style.background = "black"
//     btnNewsFeed.style.color = "whitesmoke"
//     btnNoti.style.background = "white"
//     btnNoti.style.color = "black"
//     btnSearch.style.background = "white"
//     btnSearch.style.color = "black"
//     btnMessages.style.background = "white"
//     btnMessages.style.color = "black"
//     btnSettings.style.background = "white"
//     btnSettings.style.color = "black"
//     // document.querySelector('.contentmiddleContainer').innerHTML = `<h1>News Feed</h1>`
// });
// // Button Notifications
// $('.btnNoti').click(function(){
//     btnNoti.style.background = "black"
//     btnNoti.style.color = "whitesmoke"
//     btnNewsFeed.style.background = "white"
//     btnNewsFeed.style.color = "black"
//     btnSearch.style.background = "white"
//     btnSearch.style.color = "black"
//     btnMessages.style.background = "white"
//     btnMessages.style.color = "black"
//     btnSettings.style.background = "white"
//     btnSettings.style.color = "black"
//     // document.querySelector('.contentmiddleContainer').innerHTML = `<h1>Notifications</h1>`
// });
// // Button Search
// $('.btnSearch').click(function(){
//     btnSearch.style.background = "black"
//     btnSearch.style.color = "whitesmoke"
//     btnNoti.style.background = "white"
//     btnNoti.style.color = "black"
//     btnNewsFeed.style.background = "white"
//     btnNewsFeed.style.color = "black"
//     btnMessages.style.background = "white"
//     btnMessages.style.color = "black"
//     btnSettings.style.background = "white"
//     btnSettings.style.color = "black"
//     // document.querySelector('.contentmiddleContainer').innerHTML = `<h1>Search</h1>`
// });
// // Button Messages
// $('.btnMessages').click(function(){
//     btnMessages.style.background = "black"
//     btnMessages.style.color = "whitesmoke"
//     btnNoti.style.background = "white"
//     btnNoti.style.color = "black"
//     btnSearch.style.background = "white"
//     btnSearch.style.color = "black"
//     btnNewsFeed.style.background = "white"
//     btnNewsFeed.style.color = "black"
//     btnSettings.style.background = "white"
//     btnSettings.style.color = "black"
//     // document.querySelector('.contentmiddleContainer').innerHTML = `<h1>Messages</h1>`
// });
// // Button Settings
// $('.btnSettings').click(function(){
//     btnSettings.style.background = "black"
//     btnSettings.style.color = "whitesmoke"
//     btnNoti.style.background = "white"
//     btnNoti.style.color = "black"
//     btnSearch.style.background = "white"
//     btnSearch.style.color = "black"
//     btnMessages.style.background = "white"
//     btnMessages.style.color = "black"
//     btnNewsFeed.style.background = "white"
//     btnNewsFeed.style.color = "black"
//     // document.querySelector('.contentmiddleContainer').innerHTML = `<h1>Settings</h1>`
// });

// --------------- Dark Mode -------------------------
// kiểm tra biến 'darkMode' đã lưu trong Local Storage và gán vào biến darkMode
let darkMode = localStorage.getItem('darkMode'); 
// query nút darkmode, wrapper và headerContainer
const btnDarkMode = document.querySelector('#btnDarkmodeid');
const wrapper = document.getElementById('wrapperID');
const headerContainer = document.getElementById('headerContainerID');
const btnMenu = document.getElementsByClassName('btnMenu');
const logoImg = document.getElementById('logoImgID');
const postBack = document.getElementsByClassName('postBack');
const btnDarkmodeID = document.getElementById('btnDarkmodeid');

const enableDarkMode = () => {
  // 1. thêm class css 
  wrapper.classList.add('darkmode');
  headerContainer.classList.add('headerDarkmode');
  for(let i=0; i<btnMenu.length; i++){
    btnMenu[i].classList.add('btnMenuDarkMode');
  }
  for(let i=0; i<postBack.length; i++){
    postBack[i].style.background = "black";
  }
  btnDarkmodeID.innerHTML = `<i class="fa-solid fa-sun"></i><span>Light Mode</span>`
  logoImg.innerHTML = `<a href="#"><img src="assets/img/logo/roll-high-resolution-logo-white-transparent.png" alt=""></a>`
  // 2. cập nhật lại giá trị của biến darkMode trong Local Storage thành enabled
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Bỏ lớp css 
  wrapper.classList.remove('darkmode');
  headerContainer.classList.remove('headerDarkmode');
  for(let i=0; i<btnMenu.length; i++){
    btnMenu[i].classList.remove('btnMenuDarkMode');
  }
  for(let i=0; i<postBack.length; i++){
    postBack[i].style.background = "#101010";
  }
  btnDarkmodeID.innerHTML = `<i class="fa-solid fa-moon"></i><span>Dark Mode</span>`
  logoImg.innerHTML = `<a href="#"><img src="assets/img/logo/roll-high-resolution-logo-black-transparent.png" alt=""></a>`
  // 2. cập nhật lại giá trị của biến darkMode trong Local Storage thành null 
  localStorage.setItem('darkMode', null);
}
 
// kiểm tra xem người đã bật darkmode từ trước chưa 
// nếu có thì enable darkmode (biến darkMode được lấy ra Local Storage)
if (darkMode === 'enabled') {
  enableDarkMode();
}
// xử lý khi người dùng bấm nút dark mode
btnDarkMode.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // nếu darkmode chưa enable thì enable nó
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // ngược lại nếu darkmode đã enable thì tắt nó
  } else {  
    disableDarkMode(); 
  }
});
// ---------------------------------------------------

