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

// ---------------------------*** DARK MODE ***------------------------------------------
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
const btnAddfriend = document.getElementsByClassName('btnAddfriend');

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
  for(let i=0; i<btnAddfriend.length; i++){
    btnAddfriend[i].style.color = "whitesmoke";
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
  for(let i=0; i<btnAddfriend.length; i++){
    btnAddfriend[i].style.color = "black";
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
// ------------------------------------------------------------------------------------------

// ----------------------------------*** EXPAND MEMU ***-------------------------------------
var checkExpandMenu = false;
const btnExpandMenu = document.getElementById('btnExpandMenuID')

// query DOM
const leftCtn = document.getElementById('leftContainerID')
const middleCtn = document.getElementById('middleContainerID')

const expandMenu = () => {
  leftCtn.className = "col l-2 m-5 c-5 leftContainer"
  middleCtn.className = "col l-7 m-7 c-7 middleContainer"
  checkExpandMenu = true
  console.log('Mở Menu')
}

const closeMenu = () => {
  leftCtn.className = "col l-2 m-0 c-0 leftContainer"
  middleCtn.className = "col l-7 m-12 c-12 middleContainer"
  checkExpandMenu = false
  console.log('Đóng Menu')
}

btnExpandMenu.addEventListener('click', () => {
  // kiểm tra xem menu đang đóng hay mở và thực hiện hành động ngược lại 
  if(checkExpandMenu === false){
    expandMenu();
  }else{
    closeMenu();
  }
});
// ------------------------------------------------------------------------------------------
// ----------------------*** KÉO DI CHUYỂN SLIDE HÌNH CỦA BÀI VIẾT ***-----------------------
const postImageCtn = document.querySelectorAll('.postImages');
let startX = 0;
let pressed = false;

// Phát hiện khi người dùng bấm chuột xuống ở phạm vi postImages (khung chứa các hình của bài đăng)
for(let i=0; i<postImageCtn.length; i++){
  postImageCtn[i].addEventListener('mousedown', function (e) {
    startX = e.clientX;
    pressed = true;
    // this.style.cursor = 'grabbing';
    console.log(startX);
    console.log(pressed)
  })
}
// Phát hiện chuột rời khỏi phạm vi khung (cho pressed bằng false)
for(let i=0; i<postImageCtn.length; i++){
  postImageCtn[i].addEventListener('mouseleave', function (e) {
    pressed = false;    
    console.log(pressed);
  })
}
// Phát hiện chuột khi người dùng thả nút chuột (cho pressed bằng false)
window.addEventListener('mouseup', function (e) {
  pressed = false;
  // wrapper.style.cursor  = 'grab'
  console.log(pressed)
})
// Xử lý kéo slide hình theo con trỏ chuột
for(let i=0; i<postImageCtn.length; i++){
  postImageCtn[i].addEventListener('mousemove', function (e) {
    if(!pressed){
      return;
    }
    // tính toán slide hình sẽ di chuyển qa trái hay phải bao nhiu
    // scrollLeft += số dương (sẽ qua trái)
    // scrollLeft += số âm (sẽ qua phải)
    this.scrollLeft += startX - e.clientX;
  })
}
// ------------------------------------------------------------------------------------------


// --------------------TEST HOVER ON STORY--------------------------
const storyContent = document.getElementsByClassName('storyContent');
for(let i=0; i<storyContent.length; i++){
  storyContent[i].addEventListener('mouseover', function(e){
    this.play();
  })
}
for(let i=0; i<storyContent.length; i++){
  storyContent[i].addEventListener('mouseleave', function(e){
    this.pause();
  })
}
// -----------------------------------------------------------------
// ------------------- Active Story --------------------------------
// Khi người dùng bấm vào Story thì sẽ hiện lên giao diện để xem story và tính lượt xem cho story đó...
// là một khung đè lên giao diện hiện tại, chứa danh sách các story sẽ chiếu
const storyActiveContainer = document.getElementById('storyActiveContainerID');
// nút bấm vào ở mỗi story
const btnPlayStory = document.getElementsByClassName('btnPlayStory');
// mẫu html để chứa danh sách các story
var storyActiveTemplate = `<div id="storyActiveID" class="storyActive">
<div class="listStoryActiveContainer">
    <button class="btnLeftStoryActiveContainer">
        <i class="fa-solid fa-chevron-left"></i>
    </button>
    <ul class="listStoryActive">
        <li class="storyActive_content">
            <div class="infoStoryActiveContainer">
                <img src="https://i.pinimg.com/564x/2a/fa/7f/2afa7f0934a2c2f1c7132b0b179dba49.jpg" alt="" class="avatarStoryActive">
                <span class="nameStoryActive">nvmiinh</span>
                <button class="btnPlayPauseStoryActive"><i class="fa-solid fa-play"></i></button>
                <button class="btnMuteStoryActive"><!-- <i class="fa-solid fa-volume-xmark"></i> --><i class="fa-solid fa-volume-high"></i></button>
                <button id="btnCancelStoryActiveID" class="btnCancelStoryActive" onclick="cancelStoryActive()"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="mediaStoryActive">
                <video src="assets/media/video/story13.mp4"></video>
            </div>
            <div class="interactStoryActive">
                <button class="btnLikeStoryActive"><i class="fa-solid fa-heart"></i></button>
            </div>
        </li>
        <!-- <li class="storyActive_content">

        </li> -->
    </ul>
    <button class="btnRightStoryActiveContainer">
        <i class="fa-solid fa-chevron-right"></i>
    </button>
</div>
</div>

`;

for(let i=0;i<btnPlayStory.length; i++){
  btnPlayStory[i].addEventListener('click', function(e){
    storyActiveContainer.style = "height: 100%; width: 100%; padding: 0; position: absolute; z-index: 1;";
    storyActiveContainer.innerHTML = storyActiveTemplate;
  });
};

//nút CANCEL Story Active
const btnCancelStoryActive = document.getElementById('btnCancelStoryActiveID');

function cancelStoryActive(){
  storyActiveContainer.style = "";
  storyActiveContainer.innerHTML = "";
}

// btnCancelStoryActive.addEventListener('click', () => {
//   cancelStoryActive();
// });
// -----------------------------------------------------------------

// ------------------------- Active Image --------------------------
// list các hình của tất cả các bài viết
var postImage = document.getElementsByClassName('postImage');
// khung imageActiveContainer
const imageActiveContainer = document.getElementById('imageActiveContainerID');
// template imageActive 
var imageActive = '';

for(let i=0; i<postImage.length; i++){
  postImage[i].addEventListener('click', function(e){
    // imageActiveSrc lưu index hiện tại của hình khi được chọn.
    let imageActiveSrc = i;
    imageActiveContainer.style = `height: 100%;width: 100%;padding: 0;position: absolute;z-index:1;background: linear-gradient(0deg, rgba(0, 0, 0, 0.56) 0%, rgba(0, 0, 0, 0.54) 100%);-webkit-backdrop-filter: blur(20px);backdrop-filter: blur(8px);`;
    imageActive = `<div id="imageActiveID" class="imageActive">
        <button id="btnLeftImageActiveID" class="col l-1 m-2 c-2 btnLeftImageActive">
        <i class="fa-solid fa-circle-chevron-left"></i>
        </button>
        <div id="imageActiveContentID" class="col l-10 m-8 c-8 imageActiveContent">
            <img class="imageActiveContentSize" src="`+postImage[imageActiveSrc].src+`" alt="">
        </div>
        <button id="btnRightImageActiveID" class="col l-1 m-2 c-2 btnRightImageActive">
            <i class="fa-solid fa-circle-chevron-right"></i>
        </button>
    </div>`
    imageActiveContainer.innerHTML = imageActive;
    // khung chứa hình
    var imageActiveContent = document.getElementById('imageActiveContentID');
    imageActiveContent.addEventListener('click', function(e){
      imageActiveContainer.style = "";
      imageActiveContainer.innerHTML = "";
    });
    // nút lùi về hình bên trái
    document.getElementById('btnLeftImageActiveID').addEventListener('click',function(e){
      // console.log('index trước đó: ', imageActiveSrc);
      // sau khi nhấn nút lùi cập nhật index (imageActiveSrc) giảm đi 1, và show hình với index đó
      imageActiveSrc = imageActiveSrc - 1;
      imageActiveContent.innerHTML = `<img class="imageActiveContentSize" src="`+postImage[imageActiveSrc].src+`" alt="">`
    });
    // nút tiến tới hình bên phải
    document.getElementById('btnRightImageActiveID').addEventListener('click',function(e){
      // console.log('index trước đó: ', imageActiveSrc);
      // sau khi nhấn nút tăng cập nhật index (imageActiveSrc) tăng lên 1, và show hình với index đó
      imageActiveSrc = imageActiveSrc + 1;
      imageActiveContent.innerHTML = `<img class="imageActiveContentSize" src="`+postImage[imageActiveSrc].src+`" alt="">`
    });
  })
}
// -----------------------------------------------------------------