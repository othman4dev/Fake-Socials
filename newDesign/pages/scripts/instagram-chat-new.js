//global variables

let url = "../assets/phone/whatsapp/default.svg";

let el = null;

//receive a message.
function receiveMSG(e) {
  let message = e.value;
  document.getElementById("messanger").insertAdjacentHTML(
    "beforeend",
    `
    <div class="block">
        <div class="profile-pic"></div>
        <div class="simple-msg">
            <p class="msg-text" contenteditable="true">${message}</p>
        </div>
    </div>
    `
  );
  e.value = "";
  resetProfile();
}
//reset profile pictues
function resetProfile() {
  setTimeout(() => {
    document.querySelectorAll(".profile-pic").forEach((element) => {
      element.style.backgroundImage = `url('${url}')`;
    });
  }, 20);
}
//send a message
function sendMSG(e) {
  let message = e.value;
  document.getElementById("messanger").insertAdjacentHTML(
    "beforeend",
    `
    <div class="block-out">
        <div class="msg-out">
            <p class="msg-text" contenteditable="true">${message}</p>
        </div>
    </div>
    `
  );
  e.value = "";
  resetProfile();
}
// handle and set profile picture.
function handleProfile(e) {
  var image = e.files[0];
  var reader = new FileReader();

  reader.onload = function (e) {
    let all = document.querySelectorAll(".profile-pic");
    for (let i = 0; i < all.length; i++) {
      all[i].style.backgroundImage = `url(${e.target.result})`;
      url = e.target.result;
    }
  };
  reader.readAsDataURL(image);
  e.value = "";
  resetProfile();
}
//handle and append an image to chat (message in).
function handleImageIn(e) {
  var image = e.files[0];

  var reader = new FileReader();

  reader.onload = function (e) {
    document.getElementById("messanger").insertAdjacentHTML(
      "beforeend",
      `
        <div class="block">
            <div class="profile-pic"></div>
            <div class="img-in">
                <img src="${e.target.result}" alt="" class="img-target-in">
            </div>
        </div>
        `
    );
  };
  reader.readAsDataURL(image);
  e.value = "";
  resetProfile();
}
function handleImageOut(e) {
  var image = e.files[0];

  var reader = new FileReader();

  reader.onload = function (e) {
    document.getElementById("messanger").insertAdjacentHTML(
      "beforeend",
      `
        <div class="block-out">
            <div class="img-out">
                <img src="${e.target.result}" alt="" class="img-target-in">
            </div>
        </div>
        `
    );
  };
  reader.readAsDataURL(image);
  e.value = "";
  resetProfile();
}
/*legacy code*/

function handleAudioIn(e) {
  document.getElementById("messanger").insertAdjacentHTML(
    "beforeend",
    `<div class="message-border" ondblclick="deleteIt(this)">
    <div class="block" ondblclick="deleteIt(this)">
        <div class="profile-pic"></div>
        <div class="insta-in" style="padding-right: 0px;background-image:linear-gradient(#004fd8,#0091dc)" onclick="turnBlack(this)">
            <div class="instaAudio">
                <img src="../assets/phone/whatsapp/play.png" alt="" class="voiceCon" style="margin-left:10px" onclick="playAudio(this)">
                <div class="formar">
                    <div class="animator2"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
                <p class="insta-duration" contenteditable="true">0:43</p>
                <audio src="" controls style="display: none;" class="hiddenAudio" ontimeupdate="updateTracktime(this)"></audio>
            </div>
        </div>
    </div>`
  );
  audioStyle();
  let targets = document.querySelectorAll(".hiddenAudio");
  targets[targets.length - 1].setAttribute(
    "src",
    URL.createObjectURL(e.files[0])
  );
  setDuration();
  e.value = "";
  resetProfile();
}
function setDuration() {
  setTimeout(() => {
    let target = document.querySelectorAll(".insta-duration");
    let e = target[target.length - 1];
    let targets = document.querySelectorAll(".hiddenAudio");
    let duration = targets[targets.length - 1].duration;
    let minutes = Math.floor(duration / 60);
    let seconds = duration - minutes * 60;
    seconds = Math.floor(seconds);
    if (seconds < 10) {
      var displayDuration = minutes + ":" + "0" + seconds;
      displayDuration = displayDuration.toString();
      e.innerText = displayDuration;
    } else if (seconds >= 10) {
      var displayDuration = minutes + ":" + seconds;
      displayDuration = displayDuration.toString();
      e.innerText = displayDuration;
    }
  }, 1000);
}
function audioStyle() {
  let target = document.querySelectorAll(".formar");
  let e = target[target.length - 1];
  var elements = e.childNodes;
  for (let i = 1; i < elements.length; i++) {
    if (elements[i].className == "bar") {
      var random = Math.floor(Math.random() * 30);
      elements[i].style.height = random + "px";
    }
  }
}

function handleAudioOut(e) {
  document.getElementById("messanger").insertAdjacentHTML(
    "beforeend",
    `<div class="message-border" ondblclick="deleteIt(this)">
    <div class="block-out" ondblclick="deleteIt(this)">
        <div class="img-out">
            <div class="audio-out">
                <img src="../assets/phone/whatsapp/play.png" alt="" class="voiceCon" style="margin-left:10px" onclick="playAudio(this)">
                <div class="formar">
                    <div class="animator"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
                <p class="insta-duration" contenteditable="true" >0:43</p>
                <audio src="" controls style="display: none;" class="hiddenAudio" ontimeupdate="updateTracktime(this)"></audio>
            </div>
        </div>
    </div>`
  );
  audioStyle();
  let targets = document.querySelectorAll(".hiddenAudio");
  targets[targets.length - 1].setAttribute(
    "src",
    URL.createObjectURL(e.files[0])
  );
  setDuration();
  e.value = "";
  resetProfile();
}
//
function playAudio(e) {
  var audio = e.parentNode.lastElementChild;
  let animator = e.nextElementSibling.firstElementChild;
  if (audio.paused) {
    e.src = "../assets/phone/instagram/pause.png";
    audio.play();
    animator.style.animationName = "increaseWidth";
    animator.style.animationDuration = audio.duration + "s";
  } else {
    e.src = "../assets/phone/instagram/play.png";
    audio.pause();
    audio.currentTime = 0;
    animator.style.animationName = "none";
    setTimeout(function () {
      var duration = audio.duration;
      var minutes = Math.floor(duration / 60);
      var seconds = duration - minutes * 60;
      seconds = Math.round(seconds);
      if (seconds < 10) {
        var displayDuration = minutes + ":" + "0" + seconds;
        displayDuration = displayDuration.toString();
        audio.previousElementSibling.innerText = displayDuration;
      } else if (seconds >= 10) {
        var displayDuration = minutes + ":" + seconds;
        displayDuration = displayDuration.toString();
        audio.previousElementSibling.innerText = displayDuration;
      }
    }, 100);
  }
  audio.addEventListener("ended", function () {
    e.src = "../assets/phone/instagram/play.png";
    animator.style.animationName = "none";
  });
}
function turnBlack(e) {
  e.style.boxShadow = "#222 0 0 0 1px";
  e.style.backgroundColor = "black";
  e.style.backgroundImage = "linear-gradient(black,black)";
}
function updateTracktime(e) {
  let ed = e.previousElementSibling;
  var duration = e.currentTime;
  var minutes = Math.floor(duration / 60);
  var seconds = duration - minutes * 60;
  seconds = Math.floor(seconds);
  if (seconds < 10) {
    var counter = minutes + ":" + "0" + seconds;
    ed.innerText = counter;
  } else if (seconds >= 10) {
    var counter = minutes + ":" + seconds;
    ed.innerText = counter;
  }
}

function bottomInput(e) {
  if (e.value !== "") {
    e.nextElementSibling.style.display = "block";
    document.querySelectorAll(".smaller").forEach((element) => {
      element.style.display = "none";
    });
  } else {
    e.nextElementSibling.style.display = "none";
    document.querySelectorAll(".smaller").forEach((element) => {
      element.style.display = "block";
    });
  }
}
function transferFunction(e) {
  sendMSG(e);
  bottomInput(e);
}
function verify(e) {
  if (e.checked) {
    document.getElementById("verified").style.display = "inline-block";
    document.getElementById("verified2").style.display = "inline-block";
  } else {
    document.getElementById("verified").style.display = "none";
    document.getElementById("verified2").style.display = "none";
  }
}
function matchNames(e) {
  document.querySelectorAll(".name").forEach((element) => {
    if (element !== e) {
      element.childNodes[0].textContent = e.childNodes[0].textContent;
    }
  });
}
function matchUserNames(e) {
  document.querySelectorAll(".userName").forEach((element) => {
    if (element !== e) {
      element.textContent = e.innerText;
    }
  });
}
function status(e) {
  if (e.checked) {
    document.querySelectorAll(".profile-pic")[0].style.boxShadow =
      "#000 0 0 0 1px,#ff8000 0 -2px 0 1px, #ff008c 0 2px 0 1px, rgb(210, 23, 76) 0 0 0 3px";
    document.querySelectorAll(".profile-pic")[1].style.boxShadow =
      "#000 0 0 0 1px,#ff8000 0 -3px 0 1px, #ff008c 0 3px 0 1px, rgb(210, 23, 76) 0 0 0 4px";
  } else {
    document.querySelectorAll(".profile-pic")[0].style.boxShadow = "none";
    document.querySelectorAll(".profile-pic")[1].style.boxShadow = "none";
  }
}
function missVoiceCall() {
  document.getElementById("messanger").insertAdjacentHTML(
    "beforeend",
    `
    <div class="block">
        <div class="profile-pic" style="opacity:0;"></div>
        <div class="voice-call">
            <img src="../assets/phone/instagram/callStarted.png" alt="" class="call-start">
            <div class="call-text">
                <p>Voice call started</p>
                <p contenteditable="true">5:14 PM</p>
            </div>
        </div>
    </div>
    <div class="block">
        <div class="profile-pic"></div>
        <div class="voice-call-missed">
            <img src="../assets/phone/instagram/callMissed.png" alt="" class="call-start">
            <div class="call-text">
                <p>Missed voice call</p>
                <p contenteditable="true">5:14 PM</p>
            </div>
            <div class="call-back">
                <p>Call back</p>
            </div>
        </div>
    </div>
    `
  );
  resetProfile();
}
function missVideoCall() {
  document.getElementById("messanger").insertAdjacentHTML(
    "beforeend",
    `
    <div class="block">
        <div class="profile-pic" style="opacity:0;"></div>
        <div class="voice-call">
            <img src="../assets/phone/instagram/videoCall.svg" alt="" class="call-start">
            <div class="call-text">
                <p>Video call started</p>
                <p contenteditable="true">5:14 PM</p>
            </div>
        </div>
    </div>
    <div class="block">
        <div class="profile-pic"></div>
        <div class="voice-call-missed">
            <img src="../assets/phone/instagram/missedVideoCall.svg" alt="" class="call-start">
            <div class="call-text">
                <p>Missed video call</p>
                <p contenteditable="true">5:14 PM</p>
            </div>
            <div class="call-back">
                <p>Call back</p>
            </div>
        </div>
    </div>
    `
  );
  resetProfile();
}
function insertBlocked(e) {
  setTimeout(() => {
    if (e.checked) {
      document.getElementById("messanger").insertAdjacentHTML(
        "beforeend",
        `
          <div class="blockInsta" id="blocking">
              <div class="block-title">
                  <p>You blocked this account</p>
                  <p contenteditable="true" spellcheck="false">You can't message or video chat with "@${
                    document.querySelectorAll(".userName")[0].innerText
                  }".</p>
              </div>
              <div class="block-buttons">
                  <button style="border-right: 0.5px #222 solid;" onclick="document.getElementById('blocking').remove();document.getElementById('blocked').checked = false;">Unblock</button>
                  <button style="color: red;">Delete</button>
              </div>
          </div>
      `
      );
    } else {
      document.getElementById("blocking").remove();
    }
  }, 50);
}
function insertTime() {
  document.getElementById("messanger").insertAdjacentHTML(
    "beforeend",
    `
    <div class="block">
        <div class="time-indicator">
            <p contenteditable="true">Today</p>
            <p contenteditable="true">12:22AM</p>
        </div>
    </div>
    `
  );
  resetProfile();
}
function getBlocked() {
  document.querySelectorAll(".profile-pic").forEach((element) => {
    element.style.backgroundImage = `url('../assets/phone/whatsapp/default.svg')`;
  });
}
function confirmErase() {
  document.getElementById("erase-dialog").style.display = "flex";
}
function cancelIt() {
  document.getElementById("erase-dialog").style.display = "none";
}
function eraseIt() {
  document.getElementById("erase-dialog").style.display = "none";
  window.location.reload;
}
let fullscreen = false;

function scalePhone() {
  var elem = document.getElementById('template');
  elem.innerHTML = document.querySelector('.instagram').outerHTML;
  if (elem.requestFullscreen) {
    elem.style.display = 'flex';
    elem.requestFullscreen();
  }
  document.addEventListener('fullscreenchange', function() {
    if (!document.fullscreenElement) {
      elem.style.display = 'none';
    }
  });
}