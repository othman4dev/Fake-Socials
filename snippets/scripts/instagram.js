
//Those scripts are for Instagram template.

/*
| ______          _____  _______
|   |    |\   |  (          |       /\
|   |    | \  |    \        |      /  \
|   |    |  \ |     \       |     /____\
| ______ |   \|  ____)      |    /      \
|                                       script.
*/ 


//change Profile Pictures for messages in and the sender.
function handleImage() {
    console.log('handleImage()');
    var image = document.getElementById("pp-changer").files[0];
    var imagePlace = document.getElementById("dpp");
    var imagePlace2 = document.getElementById("dpp2");
    var all = document.querySelectorAll('.repeat-pp');

    var reader = new FileReader();

    reader.onload = function(e) {
    imagePlace.src = e.target.result;
    imagePlace2.src = e.target.result;
    for (let i = 0; i < all.length ; i++ ) {
        all[i].src = e.target.result;
    }
    }
    reader.readAsDataURL(image);
}
//To verify sender.
function makeCheck() {
    console.log('makeCheck()');
    var box = document.getElementById('verified');
    if (box.checked == true) {
        var label = document.getElementById('checkbox');
        label.style.transition = ('0.3s');
        label.style.backgroundColor = ('blueviolet');
        label.style.boxShadow = ('0 0 0 2px crimson inset');
        var icon = document.getElementById('verifiedIcon');
        icon.style.display = ("block");
        var icon2 = document.getElementById('verifiedIcon2');
        icon2.style.display = ("block");
    } else {
        var label = document.getElementById('checkbox');
        label.style.transition = ('0.5s');
        label.style.backgroundColor = ('transparent');
        label.style.boxShadow = ('none');
        var icon = document.getElementById('verifiedIcon');
        icon.style.display = ("none");
        var icon2 = document.getElementById('verifiedIcon2');
        icon2.style.display = ("none");
    }
}
//Insert a time popup for Instagram.
function insertTime() {
    console.log('insertTime()');
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var suffix = 'AM';
    if(hours > 12) {
        hours = hours-12;
        suffix = 'PM';
    }
    var fullTime = hours + ':' + minutes +' '+ suffix;
    document.getElementById('lastMessage').insertAdjacentHTML('beforebegin',`
    <div class="message-border" ondblclick="deleteIt()">
        <div class="iday" style="margin-bottom: 5px;" class="generalInfo">
            <p contenteditable="true" spellcheck="false" style="outline: none;" >Today &nbsp;<p contenteditable="true">${fullTime}</p></p>
        </div>
    </div>`)
}
//change between send button and logos in Instagram.
function transMessage2() {
    console.log('transMessage()');
    var input = document.getElementById('messager');
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");
    var btn = document.getElementById('sendBtn');

    if(input && input.value) {
        img1.style.display = ("none");
        img2.style.display = ("none");
        img3.style.display = ("none");
        btn.style.display = ("block");
        input.style.marginLeft = ("-7px");
    } else {
        setTimeout(function () {
            img1.style.display = ("block");
            img2.style.display = ("block");
            img3.style.display = ("block");
            btn.style.display = ("none");
            input.style.marginLeft = ("0px");
        },2);
    }
}
//deletes messages to all.
function deleteIt(e) {
    console.log('deleteIt()');
    e.style.display = ("none");
}
//bottom input for instagram and whatsapp.
function transmitValue() {
    console.log('transmitValue()');
    var input = document.getElementById('messager').value;
    var output = document.getElementById('you');
    output.value = input;
    setTimeout(function (){
        document.getElementById('insiderMes').click() ;
        document.getElementById('formOfInp').reset();
        transMessage2();
    },1);
}

function outInstaMessage() {
    console.log('outInstaMessage()');
    var message = document.getElementById("sender").value;
    var placement = document.getElementById("firstMessage");
    var pp = document.getElementById("dpp").src;
    placement.insertAdjacentHTML("beforebegin","<p>> " + message + "</p>");
    document.getElementById("format").reset();
    var lastMessage = document.getElementById('lastMessage');
    lastMessage.insertAdjacentHTML("beforebegin", `<div class='message-border' style="position:relative;" ondblclick="deleteIt(this)">
    <img src="${pp}" alt="" style="float: left; width: 28px;border-radius: 50%; height: 28px; margin-top: 4px;margin-right: -35px;position:absolute;bottom:6px; left:0px" class="repeat-pp" onclick="makeInvisible(this)">
    <div class='insta-in' style="min-width:none">
        <span class="tooltip-text-first">Edit</span>
        <p class='talk' contenteditable="true" spellcheck="false">${message}</p>
    </div>
</div>`);
}

function inInstaMessage() {
    console.log('inInstaMessage()');
    var message = document.getElementById("you").value;
    var placement = document.getElementById("firstMessage2");
    var timer = document.getElementById("timerBox").value;
    placement.insertAdjacentHTML("beforebegin","<p>> " + message + "</p>");
    document.getElementById("format2").reset();
    var lastMessage = document.getElementById('lastMessage');
    lastMessage.insertAdjacentHTML("beforebegin", `<div class='message-border' ondblclick="deleteIt(this)">
    <div class='insta-out' style="padding-right:10px;min-width:none">
        <span class="tooltip-text-second">Edit</span>
        <p class='talk' contenteditable="true" spellcheck="false">${message}</p>
    </div>
</div>`);
}
//handles the picture for next function
function handleThePicture() {
    console.log('handleThePicture()');
    var image = document.getElementById("imagePort2").files[0];
    var imagePlace = document.getElementById("imagePlayer");

    var reader = new FileReader();

    reader.onload = function(e) {
    imagePlace.src = e.target.result;
    }

    reader.readAsDataURL(image);
}
//appends images in.
function appendInstaPic1() {
    console.log('appendInstaPic()');
    handleThePicture();
    setTimeout(function putImage(){
        var thePicture = document.getElementById("imagePlayer").src;
        var pp = document.getElementById("dpp").src;
        imagePlace = document.getElementById("firstMessage")
        imagePlace.insertAdjacentHTML("beforebegin","<p>> " + "image was Posted." + "</p>");
        var lastMessage = document.getElementById('lastMessage');
        lastMessage.insertAdjacentHTML('beforebegin',`<div class='message-border' style="position:relative" ondblclick="deleteIt(this)">
        <img src="${pp}" alt="" style="float: left; width: 28px;border-radius: 50%; height: 28px; margin-top: 4px;margin-right: -35px;position:absolute;bottom:6px; left:0px" class="repeat-pp" onclick="makeInvisible(this)">
        <div class='insta-in' style="padding-inline: 0px;overflow:hidden;">
            <img src="${thePicture}" id=""pptest class="instaPic" alt="Red dot">
        </div>
    </div>`);
    document.getElementById("format").reset();},1000);
}
//handles the picture for the next function.
function handleThePicture2() {
    console.log('handleThePicture2()');
    var image = document.getElementById("imagePort").files[0];
    var imagePlace = document.getElementById("imagePlayer2");

    var reader = new FileReader();

    reader.onload = function(e) {
    imagePlace.src = e.target.result;
    }

    reader.readAsDataURL(image);
}
//appends images out.
function appendInstaPic2() {
    console.log('appendInstaPic2()');
    handleThePicture2();
    setTimeout(function putImage(){
        var thePicture = document.getElementById("imagePlayer2").src;
        imagePlace = document.getElementById("firstMessage2");
        imagePlace.insertAdjacentHTML("beforebegin","<p>> " + "image was Posted." + "</p>");
        var lastMessage = document.getElementById('lastMessage');
        lastMessage.insertAdjacentHTML('beforebegin',`<div class='message-border' ondblclick="deleteIt(this)">
        <div class='insta-out' style="padding-inline: 0px;overflow:hidden;">
            <img src="${thePicture}" id=""pptest class="instaPic" alt="Red dot">
        </div>
    </div>`);
    document.getElementById("format2").reset();},1000);
}
//makes Instagram duplicated Profile Pictures Disappear onClick.
function makeInvisible(e) {
    console.log('makeInvisible(e)');
    e.style.opacity = ("0");
}
//loads audios out.
function loadInstaAudio() {
    console.log('loadInstaAudio()');
    let r = "s"+ (Math.random() + 1).toString(36).substring(7);
    let rd = "s"+ (Math.random() + 1).toString(36).substring(7);
    let r3 = "s"+ (Math.random() + 1).toString(36).substring(7);
    let r4 = "s"+ (Math.random() + 1).toString(36).substring(7);
    let rf = "s"+ (Math.random() + 1).toString(36).substring(7);
    let ri = "s"+ (Math.random() + 1).toString(36).substring(7);
    let hiddenAudID = "s"+ (Math.random() + 1).toString(36).substring(7);
    imagePlace = document.getElementById("firstMessage2");
    imagePlace.insertAdjacentHTML("beforebegin","<p>> " + "Audio was posted." + "</p>");
    var lastMessage = document.getElementById('lastMessage');
    var inserter = document.getElementById("inserter");
    inserter.insertAdjacentHTML('beforebegin',`<audio id="${hiddenAudID}" src="" style="display:none;"></audio>` )
    lastMessage.insertAdjacentHTML('beforebegin',`<div class="message-border">
    <div class="insta-out" id="message1" style="padding-right: 0px;" ondblclick="deleteIt(this)">
        <div class="instaAudio">
            <img src="assets/phone/whatsapp/play.png" onclick="playInstaAudio(${r},${rd},${r3},${r4},${ri},${hiddenAudID})" id="${r3}" alt="" class="voiceCon" style="margin-left:10px">
            <div class="formar" id="${ri}">
            <div id="${r4}" class="animator"></div>
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
            <p id="${rd}" class="insta-duration">--:--</p>
            <audio src="" controls id="${r}" style="display: none;" ontimeupdate="updateTracktime(${r},${rd})"></audio>
        </div>
    </div>
    </div>`);
    audioStyle(ri);
    var inp =document.getElementById("audioPort");
    var url = URL.createObjectURL(inp.files[0]);
    var hiddenAud = document.getElementById(hiddenAudID);
    hiddenAud.setAttribute('src', url);
    var hiddenSrc = hiddenAud.src;
    var audio = document.getElementById(r);
    audio.src = hiddenSrc;
    setTimeout(function (){
        var duration = hiddenAud.duration;
        var minutes = Math.floor(duration / 60);
        var seconds = duration - minutes * 60;
        seconds = seconds.toFixed();
        var displayDuration = minutes + ":" + seconds;
        displayDuration = displayDuration.toString();
        var durationPlace = document.getElementById(rd);
        durationPlace.innerText = displayDuration;
    },1000);
}
//loads audios in.
function loadInstaAudio2() {
    console.log('loadInstaAudio2()');
    let r = "s"+ (Math.random() + 1).toString(36).substring(7);
    let rd = "s"+ (Math.random() + 1).toString(36).substring(7);
    let r3 = "s"+ (Math.random() + 1).toString(36).substring(7);
    let r4 = "s"+ (Math.random() + 1).toString(36).substring(7);
    let rf = "s"+ (Math.random() + 1).toString(36).substring(7);
    let ri = "s"+ (Math.random() + 1).toString(36).substring(7);
    let hiddenAudID = "s"+ (Math.random() + 1).toString(36).substring(7);
    imagePlace = document.getElementById("firstMessage");
    imagePlace.insertAdjacentHTML("beforebegin","<p>> " + "Audio was posted." + "</p>");
    var lastMessage = document.getElementById('lastMessage');
    var inserter = document.getElementById("inserter");
    var pp = document.getElementById("dpp").src;
    inserter.insertAdjacentHTML('beforebegin',`<audio id="${hiddenAudID}" src="" style="display:none;"></audio>`)
    lastMessage.insertAdjacentHTML('beforebegin',`<div class="message-border" ondblclick="deleteIt(this)">
    <img src="${pp}" alt="" style="float:left; width: 28px;border-radius: 50%; height: 28px; margin-top: 30px;margin-right: -35px;margin-bottom:0px; left:0px;" class="repeat-pp" onclick="makeInvisible(this)">
    <div class="insta-in" id="message1" style="padding-right: 0px;background-image:linear-gradient(#004fd8,#0091dc)" onclick="turnBlack(this)">
        <div class="instaAudio">
            <img src="assets/phone/whatsapp/play.png" onclick="playInstaAudio2(${r},${rd},${r3},${r4},${ri},${hiddenAudID})" id="${r3}" alt="" class="voiceCon" style="margin-left:10px">
            <div class="formar" id="${ri}">
                <div id="${r4}" class="animator2" style="background-color:black"></div>
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
            <p id="${rd}" class="insta-duration">--:--</p>
            <audio src="" controls id="${r}" style="display: none;" ontimeupdate="updateTracktime(${r},${rd})"></audio>
        </div>
    </div>
    </div>`);
    audioStyle(ri);
    var inp =document.getElementById("audioPort2");
    var url = URL.createObjectURL(inp.files[0]);
    var hiddenAud = document.getElementById(hiddenAudID);
    hiddenAud.setAttribute('src', url);
    var hiddenSrc = hiddenAud.src;
    var audio = document.getElementById(r);
    audio.src = hiddenSrc;
    setTimeout(function (){
        var duration = hiddenAud.duration;
        var minutes = Math.floor(duration / 60);
        var seconds = duration - minutes * 60;
        seconds = seconds.toFixed();
        var displayDuration = minutes + ":" + seconds;
        displayDuration = displayDuration.toString();
        var durationPlace = document.getElementById(rd);
        durationPlace.innerText = displayDuration;
    },1000);
}
//style the random heights of audio waves (bars) in Instagram.
function audioStyle(e) {
    console.log('audioStyle(e)');
    var id = e;
    var elements = document.getElementById(id).childNodes;
    for ( let i = 1; i < 51 ; i += 2) {
        if (elements[i].nodeName = 'DIV') {
            var random = Math.floor(Math.random()*30);
            var element = elements[i];
            element.style.height = (random + 'px');
        } else {
            console.log('Audio styled');
        }
    }
};
//update timer for audios
function updateTracktime(e,ed){
    console.log('updateTracktime(e,ed)');
    var duration = e.currentTime;
    var minutes = Math.floor(duration / 60);
    var seconds = duration - minutes * 60;
    seconds = Math.floor(seconds);
    if(seconds<10) {
        var counter = minutes +":"+ "0" + seconds ;
        ed.innerText = counter;
    }else if(seconds>=10) {
        var counter =  minutes +":" + seconds ;
        ed.innerText = counter;
    }
}
//plays audios out.
function playInstaAudio() {
    console.log('playInstaAudio()');
    var r = arguments[0];
    var rd = arguments[1];
    var r3 = arguments[2];
    var r4 = arguments[3];
    if (r.paused){
        r3.src = "assets/phone/instagram/pause.png";
        r.play();
        r4.style.animationName = ("increaseWidth");
        r4.style.animationDuration = (r.duration + "s");
    } else {
        r3.src = "assets/phone/instagram/play.png";
        r.pause();
        r.currentTime = 0;
        r4.style.animationName = ("none");
        setTimeout(function (){
            var duration = r.duration;
            var minutes = Math.floor(duration / 60);
            var seconds = duration - minutes * 60;
            seconds = seconds.toFixed();
            var displayDuration = minutes + ":" + seconds;
            displayDuration = displayDuration.toString();
            rd.innerText = displayDuration;
        },100);
    }
    r.addEventListener("ended", function(){
        r3.src = "assets/phone/instagram/play.png";
        r4.style.animationName = ("none");
    });
};
//Plays audios in.
function playInstaAudio2() {
    console.log('playInstaAudio2()');
    var r = arguments[0];
    var rd = arguments[1];
    var r3 = arguments[2];
    var r4 = arguments[3];
    if (r.paused){
        r3.src = "assets/phone/instagram/pause.png";
        r.play();
        r4.style.animationName = ("increaseWidth");
        r4.style.animationDuration = (r.duration + "s");
    } else {
        r3.src = "assets/phone/instagram/play.png";
        r.pause();
        r.currentTime = 0;
        r4.style.animationName = ("none");
        setTimeout(function (){
            var duration = r.duration;
            var minutes = Math.floor(duration / 60);
            var seconds = duration - minutes * 60;
            seconds = seconds.toFixed();
            var displayDuration = minutes + ":" + seconds;
            displayDuration = displayDuration.toString();
            rd.innerText = displayDuration;
        },100);
    }
    r.addEventListener("ended", function(){
        r3.src = "assets/phone/instagram/play.png";
        r4.style.animationName = ("none");
    });
};
//turns new audios black if they were read.
function turnBlack(e) {
    console.log('turnBlack(e)');
    e.style.backgroundColor = ('black');
    e.style.backgroundImage = ('linear-gradient(black,black)');
}
//toggle between icons and send button in bottom input.
function transMessage() {
    console.log('transMessage()');
    var input = document.getElementById("messager");
    var output = document.getElementById("you");
    output.value = input.value;
    if (input && input.value) {
        var img = document.getElementById("microPic");
        img.src = "assets/phone/whatsapp/send.png";
    }
}
//close dialog of tooltips.
function formatDialog() {
    console.log('formatDialog()');
    var dialog = document.getElementById("tips");
    dialog.style.display = ("none");
}
//block account insta.
function insertBlockedInsta(e) {
    if(e.innerText == 'Block account') {
        document.getElementById('lastMessage').insertAdjacentHTML('beforebegin',`
        <div class="blockInsta">
            <div class="block-title">
                <h5>You blocked this account</h5>
                <p contenteditable="true" spellcheck="false">You can't message or video chat with "@user".</p>
            </div>
            <div class="block-buttons">
                <button style="border-right: 0.5px grey solid;">Unblock</button>
                <button style="color: red;">Delete</button>
            </div>
        </div>
    `);
    e.innerText = 'Unblock account';
    document.getElementById('lastMessage').style.marginBottom = ("80px");
    } else if (e.innerText == 'Unblock account') {
        var blocks = document.querySelectorAll('.blockInsta');
        for(let i = 0;i<blocks.length;i++) {
            blocks[i].remove();
        }
        e.innerText = 'Block account';
        document.getElementById('lastMessage').style.marginBottom = ("0px");
    }
}
//append missed calls.
function insertMissedVCallInsta() {
    document.getElementById('lastMessage').insertAdjacentHTML('beforebegin',`
    <div class="message-border" style="position: relative;">
    <div class="in-call">
        <img src="assets/phone/instagram/callStarted.png" alt="" style="border-radius: 50%;margin-left: 5px;">
        <h5 style="transform: translateY(-7px);">Audio call started</h5>
        <p style="font-size: 13px;position: absolute;top: 30%;left: 30%;">5:49 PM</p>
    </div>
</div>
<div class="message-border" style="position: relative;">
    <img src="assets/phone/whatsapp/defaultprofile.png" alt="" style="float: left; width: 28px;border-radius: 50%; height: 28px; margin-top: 4px;margin-right: -35px;position:absolute;bottom:6px; left:0px" class="repeat-pp" onclick="makeInvisible(this)">
    <div class="in-missed">
        <img src="assets/phone/instagram/callMissed.png" alt="" style="border-radius: 50%;margin-left: 5px;">
        <h5 style="transform: translateY(-7px);">Missed audio call</h5>
        <p style="font-size: 13px;position: absolute;top: 20%;left: 30%;">5:50 PM</p>
        <button style="width: 100%;background-color: transparent;color: white;border: none;border-radius: 9pt;margin-bottom: 10px;font-family:Verdana, Geneva, Tahoma, sans-serif;">Call back</button>
    </div>
</div>
    `);
}