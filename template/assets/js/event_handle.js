// let widthHeaderMiddleContainer = document.querySelector('.middleContainerMain').offsetWidth;
//     document.querySelector('#headermiddleContainer').style.width = widthHeaderMiddleContainer + "px";

// setInterval(function() {
//     widthHeaderMiddleContainer = document.querySelector('.middleContainerMain').offsetWidth;
//     document.querySelector('#headermiddleContainer').style.width = widthHeaderMiddleContainer + "px";
// }, 500);


// Header button
let btnFeeds = document.getElementById('btnFeeds')
let btnRollBack = document.getElementById('btnRollBack')
// // Left Container's Button
// const btnNewsFeed = document.getElementById('btnNewsFeedid')
// const btnNoti = document.getElementById('btnNotiid')
// const btnSearch = document.getElementById('btnSearchid')
// const btnMessages = document.getElementById('btnMessagesid')
// const btnSettings = document.getElementById('btnSettingsid')

btnFeeds.style.background = "black";
btnFeeds.style.color = "whitesmoke";
btnFeeds.style.borderRadius = "8px";

btnFeeds.addEventListener("click", function() {
    btnFeeds.style.background = "black";
    btnFeeds.style.color = "whitesmoke";
    btnFeeds.style.borderRadius = "8px";
    btnRollBack.style.background = "transparent";
    btnRollBack.style.color = "black";
    btnRollBack.style.borderRadius = "8px";
});

if(btnRollBack){
  btnRollBack.addEventListener("click", function() {
    btnRollBack.style.background = "black";
    btnRollBack.style.color = "whitesmoke";
    btnRollBack.style.borderRadius = "8px";
    btnFeeds.style.background = "transparent";
    btnFeeds.style.color = "black";
    btnFeeds.style.borderRadius = "8px";
  });
}


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
const btnProfileFeatures = document.getElementsByClassName('btnProfileFeatures');

const enableDarkMode = () => {
  // 1. thêm class css 
  document.body.classList.add('darkmode');
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
  for(let i=0; i<btnProfileFeatures.length; i++){
    btnProfileFeatures[i].style.color = "whitesmoke";
  }
  btnDarkmodeID.innerHTML = `<i class="fa-solid fa-sun"></i><span>Light Mode</span>`
  logoImg.innerHTML = `<a href="#"><img src="assets/img/logo/roll-high-resolution-logo-white-transparent.png" alt=""></a>`
  // 2. cập nhật lại giá trị của biến darkMode trong Local Storage thành enabled
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Bỏ lớp css 
  document.body.classList.remove('darkmode');
  wrapper.classList.remove('darkmode');
  headerContainer.classList.remove('headerDarkmode');
  for(let i=0; i<btnMenu.length; i++){
    btnMenu[i].classList.remove('btnMenuDarkMode');
  }
  for(let i=0; i<postBack.length; i++){
    postBack[i].style.background = "black";
  }
  for(let i=0; i<btnAddfriend.length; i++){
    btnAddfriend[i].style.color = "black";
  }
  for(let i=0; i<btnProfileFeatures.length; i++){
    btnProfileFeatures[i].style.color = "black";
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
// ---------------------------------*** QUERY CÁC THÀNH PHẦN CẦN TƯƠNG TÁC NHIỀU ***---------------------------------------
// 3 Khung chính của giao diện
const leftCtn = document.getElementById('leftContainerID');
const middleCtn = document.getElementById('middleContainerID');
const rightCtn = document.getElementById('rightContainerID');
// Left Container's Button
const btnNewsFeed = document.getElementById('btnNewsFeedid')
const btnNoti = document.getElementById('btnNotiid')
const btnSearch = document.getElementById('btnSearchid')
const btnMessages = document.getElementById('btnMessagesid')
const btnSettings = document.getElementById('btnSettingsid')
// ------------------------------------------------------------------------------------------

// ----------------------------------*** EXPAND MEMU ***-------------------------------------
var checkExpandMenu = false;
const btnExpandMenu = document.getElementById('btnExpandMenuID')

// query DOM

const expandMenu = () => {
  leftCtn.className = "col l-2 m-12 c-12 leftContainer"
  middleCtn.className = "col l-7 m-0 c-0 middleContainer"
  checkExpandMenu = true
  // console.log('Mở Menu')
}

const closeMenu = () => {
  leftCtn.className = "col l-2 m-0 c-0 leftContainer"
  middleCtn.className = "col l-7 m-12 c-12 middleContainer"
  checkExpandMenu = false
  // console.log('Đóng Menu')
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
// -------------------*** ACTIVE STORY ***--------------------------------
// Khi người dùng bấm vào Story thì sẽ hiện lên giao diện để xem story và tính lượt xem cho story đó...
// là một khung đè lên giao diện hiện tại, chứa danh sách các story sẽ chiếu
const storyActiveContainer = document.getElementById('storyActiveContainerID');
// list các video story đã load được...
var listStoryContent = document.getElementsByClassName('storyContent');
// list info của người đăng story đã load được...
var listStoryInfo = document.getElementsByClassName('storyInfo');
// nút bấm vào ở mỗi story
const btnPlayStory = document.getElementsByClassName('btnPlayStory');
// mẫu html để chứa danh sách các story
var storyActiveTemplate = '';

for(let i=0;i<btnPlayStory.length; i++){
  btnPlayStory[i].addEventListener('click', function(e){
    // index của video story;
    let indexStoryActive = i;
    console.log(indexStoryActive);
    storyActiveContainer.style = "height: 100%; width: 100%; padding: 0; position: absolute; z-index: 1;";
    storyActiveTemplate = `<div id="storyActiveID" class="storyActive">
    <div class="listStoryActiveContainer">
        <button id="btnLeftStoryActiveID" class="btnLeftStoryActiveContainer">
            <i class="fa-solid fa-chevron-left"></i>
        </button>
        <ul class="listStoryActive">
            <li class="storyActive_content">
                <div class="infoStoryActiveContainer">
                    <img id="avatarStoryActiveID" src="`+listStoryInfo[indexStoryActive].children[0].src+`" alt="" class="avatarStoryActive">
                    <span id="nameStoryActiveID" class="nameStoryActive">`+listStoryInfo[indexStoryActive].children[1].textContent+`</span>
                    <!-- <button id="" class="btnPlayPauseStoryActive"><i class="fa-solid fa-play"></i></button> -->
                    <button id="btnMuteStoryActiveID" class="btnMuteStoryActive"><!-- <i class="fa-solid fa-volume-xmark"></i> --><i class="fa-solid fa-volume-high"></i></button>
                    <button id="btnCancelStoryActiveID" class="btnCancelStoryActive" onclick="cancelStoryActive()"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div class="mediaStoryActive">
                    <video id="videoStoryActiveID" src="`+listStoryContent[indexStoryActive].src+`" autoplay loop></video>
                </div>
                <div class="interactStoryActive">
                    <button class="btnLikeStoryActive"><i class="fa-solid fa-heart"></i></button>
                </div>
            </li>
            <!-- <li class="storyActive_content">
    
            </li> -->
        </ul>
        <button id="btnRightStoryActiveID" class="btnRightStoryActiveContainer">
            <i class="fa-solid fa-chevron-right"></i>
        </button>
    </div>
    </div>`
    storyActiveContainer.innerHTML = storyActiveTemplate;
    // khung tên, avatar, video của story
    var nameStoryActive = document.getElementById('nameStoryActiveID');
    var avatarStoryActive = document.getElementById('avatarStoryActiveID');
    var videoStoryActive = document.getElementById('videoStoryActiveID');
    // nút lùi về story trước
    document.getElementById('btnLeftStoryActiveID').addEventListener('click', function(e){
      if(indexStoryActive != 0){
        indexStoryActive = indexStoryActive - 1;
        nameStoryActive.textContent = listStoryInfo[indexStoryActive].children[1].textContent;
        avatarStoryActive.src = listStoryInfo[indexStoryActive].children[0].src;
        videoStoryActive.src = listStoryContent[indexStoryActive].src;
      }else{
        indexStoryActive = indexStoryActive;
        // alert("Hết rồi :v");
      }
    });
    // nút tiến tới story tiếp theo 
    document.getElementById('btnRightStoryActiveID').addEventListener('click', function(e){
      if(indexStoryActive < (btnPlayStory.length - 1)){
        indexStoryActive = indexStoryActive + 1;
        nameStoryActive.textContent = listStoryInfo[indexStoryActive].children[1].textContent;
        avatarStoryActive.src = listStoryInfo[indexStoryActive].children[0].src;
        videoStoryActive.src = listStoryContent[indexStoryActive].src;
      }else{
        indexStoryActive = indexStoryActive;
        // alert("Hết rồi :v");
      }
    });
    // nút tắt âm lượng của story
    document.getElementById('btnMuteStoryActiveID').addEventListener('click', function(e){
      
    })
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

// -------------------------*** ACTIVE IMAGE ***--------------------------
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
      if(imageActiveSrc != 0){
        imageActiveSrc = imageActiveSrc - 1;
        imageActiveContent.innerHTML = `<img class="imageActiveContentSize" src="`+postImage[imageActiveSrc].src+`" alt="">`
      }else{
        imageActiveSrc = imageActiveSrc;
        // alert("Hết rồi :v");
      }
    });
    // nút tiến tới hình bên phải
    document.getElementById('btnRightImageActiveID').addEventListener('click',function(e){
      // console.log('index trước đó: ', imageActiveSrc);
      // sau khi nhấn nút tăng cập nhật index (imageActiveSrc) tăng lên 1, và show hình với index đó
      if(imageActiveSrc < (postImage.length - 1)){
        imageActiveSrc = imageActiveSrc + 1;
        imageActiveContent.innerHTML = `<img class="imageActiveContentSize" src="`+postImage[imageActiveSrc].src+`" alt="">`
      }else{
        imageActiveSrc = imageActiveSrc;
        // alert("Hết rồi :v");
      }      
    });
  })
}
// -----------------------------------------------------------------

// --------------------*** BUTTON MOVE SLIDE POST IMAGES ***---------------------
// tất cả các slide hình của các bài viết đã được load...
const postImages = document.getElementsByClassName('postImages');
// nút di chuyển slide hình qua trái
const btnLeftPostImages = document.getElementsByClassName('btnLeftPostImages');
// nút di chuyển slide hình qua phải
const btnRightPostImages = document.getElementsByClassName('btnRightPostImages');
// 
for(let i=0; i<postImages.length; i++){
  btnLeftPostImages[i].addEventListener('click', function(e){
    postImages[i].scrollLeft = postImages[i].scrollLeft - 350;
  });
  btnRightPostImages[i].addEventListener('click', function(e){
    postImages[i].scrollLeft = postImages[i].scrollLeft + 350;
  });
}
// ------------------------------------------------------------------------------

// ---------------*** HIDE HEADER BAR WHEN SCROLL ***------------------
var prevScrollpos = middleCtn.scrollTop;
middleCtn.onscroll = function() {
  var currentScrollPos = middleCtn.scrollTop;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("headerContainerID").style.top = "0";
    document.getElementById("leftContainerID").style.top = "0";
    document.getElementById("rightContainerID").style.top = "0";
    window.scrollTo(0,0);
    prevScrollpos = currentScrollPos;
  } else if (currentScrollPos > prevScrollpos + 60){
    document.getElementById("headerContainerID").style.top = "-70px";
    document.getElementById("leftContainerID").style.top = "-70px";
    document.getElementById("rightContainerID").style.top = "-60px";
    window.scrollTo(0,1);
    prevScrollpos = currentScrollPos;
  }
}
// ------------------------------------------------------------------------------

// ---------------*** HIDE SEARCH BAR ON SAFARI WHEN SCROLL (Chưa được) ***------------------
//For iPhone and Andriod To remove Address bar when viewing website on Safari Mobile
// When ready...
// window.addEventListener("load",function() {
//   // Set a timeout...
//   setTimeout(function(){
//   // Hide the address bar!
//   window.scrollTo(0, 1);
//   }, 0);
// });
// ------------------------------------------------------------------------------

// ---------------*** JS Các nút bên thanh Menu ***------------------
// *** Nút Profile
const btnProfile = document.getElementById('btnProfileid');
// Điều hướng nút Profile
btnProfile.addEventListener('click', function(e){
  window.location.href = 'profile.html';
});
// Điều hướng nút New feeds
btnNewsFeed.addEventListener('click', function(e){
  window.location.href = 'test.html';
});
btnNoti.addEventListener('click', function(e){
  window.location.href = 'notification.html'
});
// ------------------------------------------------------------------------------




// ----------------------------*** TRANG CÁ NHÂN ***-----------------------------
const refreshbtnProfileFeaturesActive = () => {
  for(let i=0; i<btnProfileFeatures.length; i++){
    btnProfileFeatures[i].style.borderBottom = "3px solid transparent";
  }
}

for(let i=0; i<btnProfileFeatures.length; i++){
  btnProfileFeatures[i].addEventListener('click', function(e){
    refreshbtnProfileFeaturesActive();
    btnProfileFeatures[i].style.borderBottom = "3px solid #243CFC";
    // alert();
  });
}
// ------------------------------------------------------------------------------

// -------------------------*** Notification tab ***-----------------------------
let templateTuongTac = `<!-- Thông báo tương tác -->
                        <div class="row postWrapper">
                            <div class="col l-12 m-12 c-12 postContainer">
                                <div class="col l-12 m-12 c-12 postBack postHeader" style="border-radius: 15px; border: .5px solid whitesmoke;">
                                    <div class="poster" style="justify-content: left; align-items: center;">
                                        <div class="posterAvatar">
                                            <button class="btnPosterAvatar">
                                                <img src="https://i.pinimg.com/236x/5a/e1/9a/5ae19a4705e9083c1ed5efcb99ceaf94.jpg" alt="">
                                            </button>
                                        </div>
                                        <div class="posterInfo" style="text-align: left;">
                                            <button style="color: whitesmoke; font-size: 17px;"><span class="posterName" style="color: whitesmoke;">meowmeme</span> đã thích bài viết của bạn</button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <!-- Thông báo tương tác -->
                        <div class="row postWrapper">
                            <div class="col l-12 m-12 c-12 postContainer">
                                <div class="col l-12 m-12 c-12 postBack postHeader" style="border-radius: 15px; border: .5px solid whitesmoke;">
                                    <div class="poster" style="justify-content: left; align-items: center;">
                                        <div class="posterAvatar">
                                            <button class="btnPosterAvatar">
                                                <img src="https://i.pinimg.com/564x/e2/01/65/e201653bbd985c7efe53bad36f612074.jpg" alt="">
                                            </button>
                                        </div>
                                        <div class="posterInfo" style="text-align: left;">
                                            <button style="color: whitesmoke; font-size: 17px;"><span class="posterName" style="color: whitesmoke;">woodfilms</span> đã bình luận vào bài viết của bạn</button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <!-- Thông báo tương tác -->
                        <div class="row postWrapper">
                            <div class="col l-12 m-12 c-12 postContainer">
                                <div class="col l-12 m-12 c-12 postBack postHeader" style="border-radius: 15px; border: .5px solid whitesmoke;">
                                    <div class="poster" style="justify-content: left; align-items: center;">
                                        <div class="posterAvatar">
                                            <button class="btnPosterAvatar">
                                                <img src="https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png?ssl=1" alt="">
                                            </button>
                                        </div>
                                        <div class="posterInfo" style="text-align: left;">
                                            <button style="color: whitesmoke; font-size: 17px;"><span class="posterName" style="color: whitesmoke;">thinhngo</span> đã bình luận vào bài viết của bạn</button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <!-- Thông báo tương tác -->
                        <div class="row postWrapper">
                            <div class="col l-12 m-12 c-12 postContainer">
                                <div class="col l-12 m-12 c-12 postBack postHeader" style="border-radius: 15px; border: .5px solid whitesmoke;">
                                    <div class="poster" style="justify-content: left; align-items: center;">
                                        <div class="posterAvatar">
                                            <button class="btnPosterAvatar">
                                                <img src="https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png?ssl=1" alt="">
                                            </button>
                                        </div>
                                        <div class="posterInfo" style="text-align: left;">
                                            <button style="color: whitesmoke; font-size: 17px;"><span class="posterName" style="color: whitesmoke;">thinhngo</span> đã thích vào bài viết của bạn</button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <!-- Thông báo tương tác -->
                        <div class="row postWrapper">
                            <div class="col l-12 m-12 c-12 postContainer">
                                <div class="col l-12 m-12 c-12 postBack postHeader" style="border-radius: 15px; border: .5px solid whitesmoke;">
                                    <div class="poster" style="justify-content: left; align-items: center;">
                                        <div class="posterAvatar">
                                            <button class="btnPosterAvatar">
                                                <img src="https://i.pinimg.com/564x/e2/01/65/e201653bbd985c7efe53bad36f612074.jpg" alt="">
                                            </button>
                                        </div>
                                        <div class="posterInfo" style="text-align: left;">
                                            <button style="color: whitesmoke; font-size: 17px;"><span class="posterName" style="color: whitesmoke;">woodfilms</span> đã thích vào bài viết của bạn</button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <!-- Thông báo tương tác -->
                        <div class="row postWrapper">
                            <div class="col l-12 m-12 c-12 postContainer">
                                <div class="col l-12 m-12 c-12 postBack postHeader" style="border-radius: 15px; border: .5px solid whitesmoke;">
                                    <div class="poster" style="justify-content: left; align-items: center;">
                                        <div class="posterAvatar">
                                            <button class="btnPosterAvatar">
                                                <img src="https://www.datocms-assets.com/39109/1615914210-mcqueen-shalom-harlow-runway.jpeg?auto=format%2Ccompress&fit=clip&h=720&w=802" alt="">
                                            </button>
                                        </div>
                                        <div class="posterInfo" style="text-align: left;">
                                            <button style="color: whitesmoke; font-size: 17px;"><span class="posterName" style="color: whitesmoke;">modelsreprise</span> đã thích vào bài viết của bạn</button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <!-- Thông báo tương tác -->
                        <div class="row postWrapper">
                            <div class="col l-12 m-12 c-12 postContainer">
                                <div class="col l-12 m-12 c-12 postBack postHeader" style="border-radius: 15px; border: .5px solid whitesmoke;">
                                    <div class="poster" style="justify-content: left; align-items: center;">
                                        <div class="posterAvatar">
                                            <button class="btnPosterAvatar">
                                                <img src="https://i.pinimg.com/236x/f4/4c/1d/f44c1db2c58a4017e35aa939c3b6e471.jpg" alt="">
                                            </button>
                                        </div>
                                        <div class="posterInfo" style="text-align: left;">
                                            <button style="color: whitesmoke; font-size: 17px;"><span class="posterName" style="color: whitesmoke;">meowgaugau</span> đã thích vào bài viết của bạn</button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>`

let templateLoiMoiKb = `<!-- Thông báo lời mời kết bạn -->
                        <div class="row postWrapper">
                            <div class="col l-12 m-12 c-12 postContainer">
                                <div class="col l-12 m-12 c-12 postBack postHeader" style="border-radius: 15px; border: .5px solid whitesmoke;">
                                    <div class="poster" style="justify-content: space-between; align-items: center;">
                                        <div class="posterAvatar">
                                            <button class="btnPosterAvatar">
                                                <img src="https://www.svgrepo.com/show/382102/male-avatar-boy-face-man-user-8.svg" alt="">
                                            </button>
                                        </div>
                                        <div class="posterInfo" style="text-align: left;">
                                            <button style="color: whitesmoke; font-size: 17px;"><span class="posterName" style="color: whitesmoke;">michael</span> đã gửi lời mời kết bạn</button>
                                        </div>
                                        <div class="friendInvitationOptions" style="display: flex; justify-content: center;">
                                            <button style="border: none; background-color: #243CFC; padding: 5px; border-radius: 5px; cursor: pointer; color: whitesmoke; margin: 2px;">Xác nhận</button>
                                            <button style="border: none; background-color: grey; padding: 5px; border-radius: 5px; cursor: pointer; color: whitesmoke; margin: 2px;">Hủy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Thông báo lời mời kết bạn -->
                        <div class="row postWrapper">
                            <div class="col l-12 m-12 c-12 postContainer">
                                <div class="col l-12 m-12 c-12 postBack postHeader" style="border-radius: 15px; border: .5px solid whitesmoke;">
                                    <div class="poster" style="justify-content: space-between; align-items: center;">
                                        <div class="posterAvatar">
                                            <button class="btnPosterAvatar">
                                                <img src="https://i.pinimg.com/564x/8a/09/3e/8a093ed95db0a8f6336fe662e6a09187.jpg" alt="">
                                            </button>
                                        </div>
                                        <div class="posterInfo" style="text-align: left;">
                                            <button style="color: whitesmoke; font-size: 17px;"><span class="posterName" style="color: whitesmoke;">easymoneysniper</span> đã gửi lời mời kết bạn</button>
                                        </div>
                                        <div class="friendInvitationOptions" style="display: flex; justify-content: center;">
                                            <button style="border: none; background-color: #243CFC; padding: 5px; border-radius: 5px; cursor: pointer; color: whitesmoke; margin: 2px;">Xác nhận</button>
                                            <button style="border: none; background-color: grey; padding: 5px; border-radius: 5px; cursor: pointer; color: whitesmoke; margin: 2px;">Hủy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`         
      
// mẫu thông báo nếu ko có tin nhắn nào, hoặc người dùng chưa dùng tính năng nhắn tin                      
let templateTbTinNhanNull = `<!-- Thông báo tin nhắn (nếu chưa có tin nhắn nào) -->
                        <div class="row postWrapper">
                            <div class="col l-12 m-12 c-12 postContainer">
                                <div class="col l-12 m-12 c-12 postBack postHeader" style="border-radius: 15px;">
                                    <div class="poster" style="display: grid; justify-content: center; align-items: center;">
                                        <img src="https://abs.twimg.com/responsive-web/client-web/verification-check-800x400.v1.52677a99.png" alt="" style="width: 400px;">
                                        <div class="posterInfo" style="width: 100%; justify-content: center;">
                                            <button style="color: whitesmoke; font-size: 17px;">Chưa có tin nhắn nào</button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>`                        

const contentNotification = document.getElementById('contentNotificationID');    

const btnTbCacTuongTac = document.getElementById('btnTbCacTuongTac');
const btnTbLoiMoiKb = document.getElementById('btnTbLoiMoiKb');
const btnTbTinNhan = document.getElementById('btnTbTinNhan');

if(btnTbCacTuongTac){
  btnTbCacTuongTac.addEventListener('click', function(e){
    contentNotification.innerHTML = templateTuongTac;
  });
}
if(btnTbLoiMoiKb){
  btnTbLoiMoiKb.addEventListener('click', function(e){
    contentNotification.innerHTML = templateLoiMoiKb;
  });
}
if(btnTbTinNhan){
  btnTbTinNhan.addEventListener('click', function(e){
    contentNotification.innerHTML = templateTbTinNhanNull;
  });
}

// ------------------------------------------------------------------------------

// -------------------------*** Expand Storie Trên Mobile ***--------------------
const btnExpandStory = document.getElementById('btnExpandStory');
var checkExpandStory = false;

const expandStoryContainer = () => {
  middleCtn.className = "col l-7 m-0 c-0 middleContainer"
  rightCtn.className = "col l-3 m-12 c-12 rightContainer"
  checkExpandStory = true
  // console.log('Mở Menu')
}

const closeStoryContainer = () => {
  middleCtn.className = "col l-7 m-12 c-12 middleContainer"
  rightCtn.className = "col l-3 m-0 c-0 rightContainer"
  checkExpandStory = false
  // console.log('Đóng Menu')
}

btnExpandStory.addEventListener('click', () => {
  // kiểm tra xem menu đang đóng hay mở và thực hiện hành động ngược lại 
  if(checkExpandStory === false){
    expandStoryContainer();
  }else{
    closeStoryContainer();
  }
});
// ------------------------------------------------------------------------------------------
