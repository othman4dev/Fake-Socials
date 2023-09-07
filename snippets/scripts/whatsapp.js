
//Those styles are for WhatsApp template.

/*
|    | |   |       _______  ___           __    __
|    | |___|   /\     |    (       /\    |  )  |  )
| /\ | |   |  /__\    |      \    /__\   |_/   |_/
\/  \/ |   | /    \   |    ___)  /    \  |     |
|                                              script.
*/ 

//change Background image.
function changeBGImage() {
    console.log('changeBGImage()');
    var image = document.getElementById("customBG").files[0];
    var preview = document.getElementById('previewBGImage');
    var reader = new FileReader();

    reader.onload = function(e) {
    preview.src = e.target.result;
    }

    reader.readAsDataURL(image);
}
//Insert time popup for WhatsApp.
function insertTime2() {
    console.log('insertTime2()');
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
        <div class="day" style="margin-bottom: 5px;" class="generalInfo">
            <p contenteditable="true" spellcheck="false" style="outline: none;" >Today &nbsp;<p contenteditable="true">${fullTime}</p></p>
        </div>
    </div>`)
}
//deletes messages to all.
function deleteIt(e) {
    console.log("deleteIt()");
    e.style.display = ("none");
}
//bottom input for instagram and whatsapp.
function transmitValue() {
    console.log('transmitValue()')
    var input = document.getElementById('messager').value;
    var output = document.getElementById('you');
    output.value = input;
    setTimeout(function (){
        document.getElementById('insiderMes').click() ;
        document.getElementById('formOfInp').reset();
        transMessage2();
    },1);
}
//change Profile Pictures for messages in and the sender.
function handleImageWhat() {
    console.log('handleImageWhat()');
    var image = document.getElementById("pp-changer").files[0];
    var imagePlace = document.getElementById("dpp");
    var allImages = document.querySelectorAll('.audio-pp2');

    var reader = new FileReader();

    reader.onload = function(e) {
    imagePlace.src = e.target.result;
    for( let i= 0; i < allImages.length; i++){
        allImages[i].src = e.target.result;
    }
    }

    reader.readAsDataURL(image);
}
//change Profile Pictures for audios out for user.
function handleImageYou(e) {
    console.log('handleImageYou()');
    var image = document.getElementById("pp-changer2").files[0];
    var imageSaver = document.getElementById('special');
    var allImages = document.querySelectorAll('.audio-pp');

    var reader = new FileReader();

    reader.onload = function(e) {
        imageSaver.src = e.target.result;
        for(let i =0 ; i < allImages.length ; i++) {
            allImages[i].src = e.target.result;
        }
    }
    reader.readAsDataURL(image);
    e.value = null;
}
//send text messages from outside.
function outsiderMessage() {
    console.log('outsiderMessage()');
    var message = document.getElementById("sender").value;
    var placement = document.getElementById("firstMessage");
    placement.insertAdjacentHTML("beforebegin","<p>> " + message + "</p>");
    document.getElementById("format").reset();
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var suffix = 'AM';
    if(minutes < 10) {
        minutes = "0" + minutes; 
    }
    if(hours > 12) {
        hours = hours-12;
        suffix = 'PM';
    }
    var fullTime = hours + ':' + minutes +' '+ suffix;
    var lastMessage = document.getElementById('lastMessage');
    lastMessage.insertAdjacentHTML("beforebegin", `<div class='message-border' ondblclick="deleteIt(this)">
    <div class='in'>
        <span class="tooltip-text-first">Edit</span>
        <p class='talk' contenteditable="true" spellcheck="false">${message}</p>
        <p class='clock' contenteditable="true" spellcheck="false">${fullTime}</p>
        <div class='corner'></div>
    </div>
</div>`);
}
//receive text messages from outside.
function insiderMessage() {
    console.log('insiderMessage()');
    var message = document.getElementById("you").value;
    var placement = document.getElementById("firstMessage2");
    placement.insertAdjacentHTML("beforebegin","<p>> " + message + "</p>");
    document.getElementById("format2").reset();
    var lastMessage = document.getElementById('lastMessage');
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var suffix = 'AM';
    if(minutes < 10) {
        minutes = "0" + minutes; 
    }
    if(hours > 12) {
        hours = hours-12;
        suffix = 'PM';
    }
    var fullTime = hours + ':' + minutes +' '+ suffix;
    lastMessage.insertAdjacentHTML("beforebegin", `<div class='message-border' ondblclick="deleteIt(this)">
    <div class='out'>
        <span class="tooltip-text-second">Edit</span>
        <p class='talk' contenteditable="true" spellcheck="false" style="padding-right:23px;">${message}</p>
        <p class='myClock'>${fullTime}</p>
        <img src="assets/phone/whatsapp/read.png" class="myRead">
        <div class='corner'></div>
    </div>
</div>`);
}
//Used to handle the Image then transmit it to the next function.
function handleThePicture() {
    console.log("handleThePicture()");
    var image = document.getElementById("imagePort2").files[0];
    var imagePlace = document.getElementById("imagePlayer");

    var reader = new FileReader();

    reader.onload = function(e) {
    imagePlace.src = e.target.result;
    }

    reader.readAsDataURL(image);
}
//receive picture from outside.
function appendPic1() {
    console.log('appendPic1()');
    handleThePicture();
    setTimeout(function putImage(){
        var thePicture = document.getElementById("imagePlayer").src;
        imagePlace = document.getElementById("firstMessage");
        var time = new Date();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var suffix = 'AM';
        if(minutes < 10) {
            minutes = "0" + minutes; 
        }
        if(hours > 12) {
            hours = hours-12;
            suffix = 'PM';
        }
        var fullTime = hours + ':' + minutes +' '+ suffix;
        imagePlace.insertAdjacentHTML("beforebegin","<p>> " + "image was Posted." + "</p>");
        var lastMessage = document.getElementById('lastMessage');
        lastMessage.insertAdjacentHTML('beforebegin',`<div class='message-border' ondblclick="deleteIt(this)">
        <div class='in' style="padding-inline: 0px;padding-bottom:15px;">
            <img src="${thePicture}" id=""pptest class="thePicture" alt="Red dot">
            <p class='clock' id='clock1'>${fullTime}</p>
            <div class='corner'></div>
        </div>
    </div>`);
    document.getElementById("format1").reset();},1000);
}
//Used to handle the Image then transmit it to the next function.
function handleThePicture2() {
    console.log("handleThePicture()");
    var image = document.getElementById("imagePort").files[0];
    var imagePlace = document.getElementById("imagePlayer2");

    var reader = new FileReader();

    reader.onload = function(e) {
    imagePlace.src = e.target.result;
    }

    reader.readAsDataURL(image);
}
//send picture to outside.
function appendPic2() {
    console.log('appendPic2()');
    handleThePicture2();
    setTimeout(function putImage(){
        var thePicture = document.getElementById("imagePlayer2").src;
        imagePlace = document.getElementById("firstMessage2");
        var time = new Date();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var suffix = 'AM';
        if(minutes < 10) {
            minutes = "0" + minutes; 
        }
        if(hours > 12) {
            hours = hours-12;
            suffix = 'PM';
        }
        var fullTime = hours + ':' + minutes +' '+ suffix;
        imagePlace.insertAdjacentHTML("beforebegin","<p>> " + "image was Posted." + "</p>");
        var lastMessage = document.getElementById('lastMessage');
        lastMessage.insertAdjacentHTML('beforebegin',`<div class='message-border' ondblclick="deleteIt(this)">
        <div class='out' style="padding-inline: 0px;padding-bottom:15px;">
            <img src="${thePicture}" class="thePicture" alt="Red dot" width="150px">
            <p class='myClock'>${fullTime}</p>
            <img src="assets/phone/whatsapp/read.png" class="myRead">
            <div class='corner'></div>
        </div>
    </div>`);
    document.getElementById("format2").reset();},1000);
}
//Loads the audio file to be sent to outside.
function loadAudioFile(e) {
    console.log("loadAudioFile(e)");
    let r = "s"+ (Math.random() + 1).toString(36).substring(7);
    let rd = "s"+ (Math.random() + 1).toString(36).substring(7);
    let r3 = "s"+ (Math.random() + 1).toString(36).substring(7);
    let r4 = "s"+ (Math.random() + 1).toString(36).substring(7);
    let hiddenAudID = "s"+ (Math.random() + 1).toString(36).substring(7);
    var MyPp = document.getElementById("special").src;
    imagePlace = document.getElementById("firstMessage2");
    imagePlace.insertAdjacentHTML("beforebegin","<p>> " + "Audio was posted." + "</p>");
    var lastMessage = document.getElementById('lastMessage');
    var inserter = document.getElementById("inserter");
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var suffix = 'AM';
    if(minutes < 10) {
        minutes = "0" + minutes; 
    }
    if(hours > 12) {
        hours = hours-12;
        suffix = 'PM';
    }
    var fullTime = hours + ':' + minutes +' '+ suffix;
    inserter.insertAdjacentHTML('beforebegin',`<audio id="${hiddenAudID}" src="" style="display:none;"></audio>`)
    lastMessage.insertAdjacentHTML('beforebegin',`<div class="message-border" ondblclick="deleteIt(this)">
    <div class="out" id="message1" style="padding-right: 20px;">
        <div class="voiceAudio">
            <input type="file" accept=".png,.jpg,.jpeg,.gif,.webp" id="pp-changer2" style="display:none;" onchange="handleImageYou(this)">
            <label for="pp-changer2"><img src="${MyPp}" alt="" class="audio-pp" id="myPpAudio"></label>
            <img src="assets/phone/whatsapp/microold.png" alt="" class="moved">
            <img src="assets/phone/whatsapp/playingOld.png" onclick="playAudio(${r},${rd},${r3},${r4},${hiddenAudID})" id="${r3}" alt="" class="voiceCon">
            <img src="assets/phone/whatsapp/blueCircle.png" alt="" id="${r4}" class="blueCircle">
            <div class="line"></div>
            <img src="assets/phone/whatsapp/read.png" alt="" class="read">
            <p class="clock" style="right:10px;">${fullTime}</p>
            <p id="${rd}" class="duration">--:--</p>
            <audio src="" controls id="${r}" style="display: none;" ontimeupdate="updateTracktime(${r},${rd})"></audio>
        </div>
    </div>
    </div>`);
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
        e.value = null;
    },1000);
}
//Loads the audio file to be received from outside.
function loadAudioFile2(e) {
    console.log("loadAudioFile2()");
    let r = "s"+ (Math.random() + 1).toString(36).substring(7);
    let rd = "s"+ (Math.random() + 1).toString(36).substring(7);
    let r3 = "s"+ (Math.random() + 1).toString(36).substring(7);
    let r4 = "s"+ (Math.random() + 1).toString(36).substring(7);
    let hiddenAudID = "s"+ (Math.random() + 1).toString(36).substring(7);
    imagePlace = document.getElementById("firstMessage");
    var pp = document.getElementById("dpp").src;
    imagePlace.insertAdjacentHTML("beforebegin","<p>> " + "Audio was posted." + "</p>");
    var lastMessage = document.getElementById('lastMessage');
    var inserter = document.getElementById("inserter");
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var suffix = 'AM';
    if(minutes < 10) {
        minutes = "0" + minutes; 
    }
    if(hours > 12) {
        hours = hours-12;
        suffix = 'PM';
    }
    var fullTime = hours + ':' + minutes +' '+ suffix;
    inserter.insertAdjacentHTML('beforebegin',`<audio id="${hiddenAudID}" src="" style="display:none;"></audio>`)
    lastMessage.insertAdjacentHTML('beforebegin',`<div class="message-border" ondblclick="deleteIt(this)">
    <div class="in" id="message1" style="padding-right: 20px;">
        <div class="voiceAudio">
            <img src="assets/phone/whatsapp/playingOld.png" onclick="playAudio2(${r},${rd},${r3},${r4},${hiddenAudID})" id="${r3}" alt="" class="voiceCon2">
            <img src="assets/phone/whatsapp/blueCircle.png" alt="" id="${r4}" class="blueCircle2">
            <div class="line2"></div>
            <img src="${pp}" alt="" class="audio-pp2">
            <img src="assets/phone/whatsapp/microold.png" alt="" class="moved2">
            <p class="clock2" style="right:10px;">${fullTime}</p>
            <p id="${rd}" class="duration2">--:--</p>
            <audio src="" controls id="${r}" style="display: none;" ontimeupdate="updateTracktime(${r},${rd})"></audio>
        </div>
    </div>
    </div>`);
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
        e.value = null;
    },1000);
}
//Play audios out.
function playAudio() {
    console.log("playAudio()");
    var r = arguments[0];
    var r2 = arguments[1];
    var r3 = arguments[2];
    var r4 = arguments[3];
    if (r.paused){
        r3.src = "assets/phone/whatsapp/pause.png";
        r.play();
        r4.style.animationName = ("leftToRight");
        r4.style.animationDuration = (r.duration + "s");
    } else {
        r3.src = "assets/phone/whatsapp/playingOld.png";
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
            r2.innerText = displayDuration;
        },100);
    }

    r.addEventListener("ended", function(){
    r3.src = "assets/phone/whatsapp/playingOld.png";
});
}
//Play audios in.
function playAudio2() {
    console.log("playAudio2()");
    var r = arguments[0];
    var r2 = arguments[1];
    var r3 = arguments[2];
    var r4 = arguments[3];
    if (r.paused){
        r3.src = "assets/phone/whatsapp/pause.png";
        r.play();
        r4.style.animationName = ("leftToRight2");
        r4.style.animationDuration = (r.duration + "s");
    } else {
        r3.src = "assets/phone/whatsapp/playingOld.png";
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
            r2.innerText = displayDuration;
        },100);
    }
    
    r.addEventListener("ended", function(){
    r3.src = "assets/phone/whatsapp/playingOld.png";
});
}
//Update time for audio timer.
function updateTracktime(e,ed){
    console.log("updateTracktime(e,ed)");
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
//change between the micro icon and send icon on whatsapp input onchange.
function condition() {
    console.log("condition()");
    var img = document.getElementById("microPic");
    var input = document.getElementById("messager");
    if (input && input.value) {
        console.log("Typing...");
    } else {
        img.src = "assets/phone/whatsapp/micro.png"
    }
}
//transfer the text inside the bottom input to the top input.
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
//make dialog of tips disappear.
function formatDialog() {
    console.log('formatDialog()');
    var dialog = document.getElementById("tips");
    dialog.style.display = ("none");
}
//change logo while typing in bottom input.
function changeLogo() {
    var img = document.getElementById("microPic");
    var form = document.getElementById("formOfInp");
    var input = document.getElementById("messager");
    if (input && input.value) {
        img.src = "assets/phone/whatsapp/send.png";
    } else {
        img.src = "assets/phone/whatsapp/micro.png";
    }
    img.onclick = insiderMessage();
    form.reset();
    img.onclick = condition();
}
//Insert Missed voice call.
function insertMissedVCall() {
    document.getElementById('lastMessage').insertAdjacentHTML('beforebegin',`
    <div class="message-border" ondblclick="deleteIt(this)">
    <div class="missed">
        <img src="assets/phone/whatsapp/missedVoice.png" alt="" style="width: 15px;margin-inline: 3px;"><p contenteditable="true" spellcheck="false"> Missed voice call at 00:00 AM</p>
    </div>
</div>
    `)
}
function insertMissedViCall() {
    document.getElementById('lastMessage').insertAdjacentHTML('beforebegin',`
    <div class="message-border" ondblclick="deleteIt(this)" >
    <div class="missed">
        <img src="assets/phone/whatsapp/missedVideo.png" alt="" style="width: 15px;margin-inline: 3px;"><p contenteditable="true" spellcheck="false"> Missed voice call at 00:00 AM</p>
    </div>
</div>
    `)
}
function insertBlocked(e) {
    console.log('insertBlocked(e)');
    if (e.id == 'block'){
        document.getElementById('lastMessage').insertAdjacentHTML('beforebegin',`
        <div class="message-border" style="margin:4px;">
            <div class="day" style="width: 220px;padding: 0px;"><p style="font-size: 10px;padding: 0px;">You blocked this contact. Tap to unblock.</p></div>
        </div>
        `);
        e.id = 'unblock'
        e.innerText = 'Insert unblocked';
    } else if (e.id == 'unblock'){
        document.getElementById('lastMessage').insertAdjacentHTML('beforebegin',`
        <div class="message-border">
            <div class="day" style="width: 160px;padding: 0px;"><p style="font-size: 10px;padding: 0px;">You unblocked this contact.</p></div>
        </div>
        `);
        e.innerText = 'Insert blocked';
        e.id = 'block';
    }
}
//This script for whatsapp dashboard.


//change every user profile picture.
function inputIsOn(e) {
    console.log('inputIsOn(e)');
    var classes = e.className;
    var elements = document.querySelectorAll('.'+ classes);
    var image = e.files[0];
    var imagePlace = elements[1];
    
    var reader = new FileReader();
    
    reader.onload = function(a) {
    imagePlace.src = a.target.result;
    }
    reader.readAsDataURL(image);
}
//Insert a contact.
function insertContact() {
    var elements = document.querySelectorAll('.user');
    var inside = elements[elements.length - 1].childNodes;
    var tier = inside[1].className;
    var newname = tier.replace('user', '');
    newname = parseInt(newname, 10);
    newname = newname + 1;
    var num = newname
    newname = 'user' + newname;
    elements[elements.length - 1].insertAdjacentHTML('afterend',`
    <div class="user" style="width: 99%;height: 60px;margin-top: 0px;display: flex;align-items: center;position: relative;">
    <input type="file" style="display: none;" accept=".jpg,.png,.gif,.jpeg,.webp" id="inputUserPP${num}" onchange="inputIsOn(this)" class="${newname}">
    <label for="inputUserPP${num}" style="margin-left: 15px;margin-top: 10px;"><img src="assets/phone/whatsapp/defaultprofile.png" alt="" class="${newname}" style="border-radius: 50%;width: 45px;height: 45px;"></label>
    <div style="display: flex;flex-direction: column;width: 200px;text-align: left;height: 50px;align-items: left;">
        <h4 style="height: fit-content;font-weight: 500;font-family: Verdana, Geneva, Tahoma, sans-serif;color: white;margin-left: 20px;margin-top: 8px;" contenteditable="true" spellcheck="false">Name</h4>
        <p style="position: absolute;font-size:11px;right: 20px;top: 10%;color: grey;" contenteditable="true" spellcheck="false">11:09 PM</p>
        <p style="font-size: 11px;margin-top: -15px;margin-left: 20px;color: grey;font-family: Verdana, Geneva, Tahoma, sans-serif;" contenteditable="true" spellcheck="false">Hi</p>
    </div>
</div>
    `)
}