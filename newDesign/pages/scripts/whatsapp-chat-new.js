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
        <div class="msg-w">
            <div class="shape-w"></div>
            <p class="text-msg" contenteditable="true">
                ${message}
            </p>
            <p class="timer" contenteditable="true">1:27 PM</p>
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
  }, 200);
}
//send a message
function sendMSG(e) {
  let message = e.value;
  document.getElementById("messanger").insertAdjacentHTML(
    "beforeend",
    `
    <div class="block-out">
        <div class="msg-w-out">
            <div class="shape-w out"></div>
            <p class="text-msg" contenteditable="true">
                ${message}
            </p>
            <div class="timer-read">
                <p class="timer-out" contenteditable="true">1:27 PM</p>
                <img src="../assets/phone/whatsapp/read.svg" alt="" class="read">
            </div>
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
            <div class="img-in-w">
                <div class="shape-w"></div>
                <img src="${e.target.result}" alt="" class="img-img">
                <p class="timer img-time" contenteditable="true">1:27 PM</p>
            </div>
        </div>
        `
    );
  };
  reader.readAsDataURL(image);
  resetProfile();
  e.value = "";
}
function handleImageOut(e) {
  var image = e.files[0];

  var reader = new FileReader();

  reader.onload = function (e) {
    document.getElementById("messanger").insertAdjacentHTML(
      "beforeend",
      `
        <div class="block-out">
            <div class="img-out-w">
                <div class="shape-w out"></div>
                <img src="${e.target.result}" alt="" class="img-img">
                <div class="timer-read img-time">
                    <p class="timer-out" contenteditable="true">1:27 PM</p>
                    <img src="../assets/phone/whatsapp/read.svg" alt="" class="read">
                </div>
            </div>
        </div>
        `
    );
  };
  e.value = "";
  resetProfile();
  reader.readAsDataURL(image);
}
/*legacy code*/
let prev = 0;
function randomize() {
  let random;
  do {
    random = Math.round(Math.random() * 3);
  } while (random == 0 || random > 4 || random == prev);
  prev = random;
  return random;
}
function handleAudioIn(e) {
  let rand = randomize();
  document.getElementById("messanger").insertAdjacentHTML(
    "beforeend",
    `
    <div class="block">
        <div class="audio-in-w">
            <div class="shape-w"></div>
            <img src="../assets/phone/whatsapp/play.png" alt="" class="play-w" onclick="playAudio(this)">
            <div class="wave">
                <div class="waver"><img src="../assets/phone/whatsapp/blueCircle.png" class="blue-c" alt=""></div>
                <img src="../assets/phone/whatsapp/wave${rand}.svg" class="waveimg" alt="">
            </div>
            <div class="profile-pic"><img src="/../assets/phone/whatsapp/microOld.svg" alt="" class="moved-mic"></div>
            <div class="timer-duration">
                <p class="duration-w">0:09</p>
                <audio src="" controls style="display:none" class="hiddenAudio" ontimeupdate="updateTracktime(this)"></audio>
                <p class="timer-audio" contenteditable="true">1:27 PM</p>
            </div>
        </div>
    </div>`
  );
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
    let target = document.querySelectorAll(".duration-w");
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
function handleAudioOut(e) {
  let rand = randomize();
  document.getElementById("messanger").insertAdjacentHTML(
    "beforeend",
    `
    <div class="block-out">
        <div class="audio-out-w">
            <div class="shape-w out"></div>
            <div class="profile-pic"><img src="../assets/phone/whatsapp/microOld.svg" alt="" class="moved-mic-reverse"></div>
            <img src="../assets/phone/whatsapp/play.png" alt="" class="play-w" onclick="playAudio(this)">
            <div class="wave">
                <div class="waver waver-out"><img src="../assets/phone/whatsapp/blueCircle.png" class="blue-c" alt=""></div>
                <img src="../assets/phone/whatsapp/wave${rand}.svg" class="waveimg" alt="">
            </div>
            <div class="timer-duration-out">
                <p class="duration-w duration-w-out">0:09</p>
                <audio src="" controls style="display:none" class="hiddenAudio" ontimeupdate="updateTracktime(this)"></audio>
                <p class="timer-audio" contenteditable="true">1:27 PM</p>
                <img src="../assets/phone/whatsapp/read.svg" class="read" alt="">
            </div>
        </div>
    </div>`
  );
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
  var audio = e.parentNode.querySelectorAll(".hiddenAudio")[0];
  let animator = e.parentNode.querySelectorAll(".wave")[0].firstElementChild;
  if (audio.paused) {
    e.src = "../assets/phone/instagram/pause.png";
    audio.play();
    animator.style.animationName = "smallerGo";
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
      seconds = seconds.toFixed();
      var displayDuration = minutes + ":" + seconds;
      displayDuration = displayDuration.toString();
      animator.parentNode.previousElementSibling.innerText = displayDuration;
    }, 100);
  }
  audio.addEventListener("ended", function () {
    e.src = "../assets/phone/instagram/play.png";
    animator.style.animationName = "none";
  });
  resetProfile();
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
  if (e.value != "") {
    document.getElementById("mic-send").src =
      "../assets/phone/whatsapp/send.svg";
  } else {
    document.getElementById("mic-send").src =
      "../assets/phone/whatsapp/micro.png";
  }

  resetProfile();
}
function transferFunction(e) {
  if (e.value != "") {
    sendMSG(e);
    bottomInput(e);
  }
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

function status(e) {
  if (e.checked) {
    document.querySelectorAll(".profile-pic").forEach((element) => {
      element.style.boxShadow = "#000 0 0 0 1px, #258c60 0 0 0 4px";
    });
  } else {
    document.querySelectorAll(".profile-pic").forEach((element) => {
      element.style.boxShadow = "none";
    });
  }
}
function missVoiceCall() {
  document.getElementById("messanger").insertAdjacentHTML(
    "beforeend",
    `
    <div class="block">
        <div class="missed-video-call-in">
            <div class="shape-w"></div>
            <div class="inner-call">
                <div class="img-circle">
                    <img src="../assets/phone/whatsapp/voiceCallIn.svg" alt="" class="call-symbol">
                </div>
                <div class="text-flexer">
                    <p>Missed call</p>
                    <p class="darker">Tap to call back</p>
                </div>
                <p class="timer" contenteditable="true">5:59 PM &nbsp;</p>
            </div>
        </div>
    </div>
    `
  );
}
function missVideoCall() {
  document.getElementById("messanger").insertAdjacentHTML(
    "beforeend",
    `
    <div class="block">
        <div class="missed-video-call-in">
            <div class="shape-w"></div>
            <div class="inner-call">
                <div class="img-circle">
                    <img src="../assets/phone/whatsapp/videoCallIn.svg" alt="" class="call-symbol">
                </div>
                <div class="text-flexer">
                    <p>Missed call</p>
                    <p class="darker">Tap to call back</p>
                </div>
                <p class="timer" contenteditable="true">5:59 PM &nbsp;</p>
            </div>
        </div>
    </div>
    `
  );
}
function missedVoiceCall() {
  document.getElementById("messanger").insertAdjacentHTML(
    "beforeend",
    `
    <div class="block-out">
        <div class="missed-video-call-out">
            <div class="shape-w out"></div>
            <div class="inner-call">
                <div class="img-circle-out">
                    <img src="../assets/phone/whatsapp/voiceCallOut.svg" alt="" class="call-symbol">
                </div>
                <div class="text-flexer">
                    <p>Voice call</p>
                    <p class="darker">No answer</p>
                </div>
                <p class="timer" contenteditable="true">5:59 PM &nbsp;</p>
            </div>
        </div>
    </div>
    `
  );
}
function missedVideoCall() {
  document.getElementById("messanger").insertAdjacentHTML(
    "beforeend",
    `
    <div class="block-out">
        <div class="missed-video-call-out">
            <div class="shape-w out"></div>
            <div class="inner-call">
                <div class="img-circle-out">
                    <img src="../assets/phone/whatsapp/videoCallOut.svg" alt="" class="call-symbol">
                </div>
                <div class="text-flexer">
                    <p>Video call</p>
                    <p class="darker">No answer</p>
                </div>
                <p class="timer" contenteditable="true">5:59 PM &nbsp;</p>
            </div>
        </div>
    </div>
    `
  );
}
function VoiceCall() {
  document.getElementById("messanger").insertAdjacentHTML(
    "beforeend",
    `
        
    `
  );
}
function VideoCall() {
  document.getElementById("messanger").insertAdjacentHTML(
    "beforeend",
    `
        
    `
  );
}
function insertBlocked(e) {
  if (e.checked) {
    document.getElementById("messanger").insertAdjacentHTML(
      "beforeend",
      `
        <div class="block-i">
            <div class="time-indicator-w">
                <p contenteditable="true">You blocked this contact .Tap to unblock</p>
            </div>
        </div>
    `
    );
  } else {
    document.getElementById("messanger").insertAdjacentHTML(
      "beforeend",
      `
        <div class="block-i">
            <div class="time-indicator-w">
                <p contenteditable="true">You Unblocked this contact.</p>
            </div>
        </div>
    `
    );
  }
}
function insertTime() {
  document.getElementById("messanger").insertAdjacentHTML(
    "beforeend",
    `
    <div class="block-i">
        <div class="time-indicator-w">
            <p contenteditable="true">Yesterday</p>
        </div>
    </div>
    `
  );
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
  let platform = localStorage.getItem("choice");
  document.querySelectorAll(`.${platform}`)[0].remove();
  document.head.title.innerText = platform;
  let type = localStorage.getItem("type");
  document.getElementById("what-social").src = document
    .getElementById("what-social")
    .src.replace("default", platform);
  let href = `${platform}-${type}.html`;
  const loadSnippet = (fileName) => {
    fetch(`./snippets/${fileName}`)
      .then((res) => {
        if (res.ok) {
          return res.text();
        }
      })
      .then((htmlSnippet) => {
        document
          .getElementById("inserter")
          .insertAdjacentHTML("afterend", htmlSnippet);
      });
  };
  loadSnippet(href);
}
function scalePhone() {
  var elem = document.getElementById('template');
  elem.innerHTML = document.querySelector('.whatsapp').outerHTML;
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