let whatsappChatTools = `
<div class="optional-options">
<div class="in">
    <div class="messanger-new-in">
        <h1 class="in-h1">In</h1>
        <div class="wrap-1">
            <input type="text" autocomplete="off" spellcheck="false" placeholder="Here type the message you want to receive">
            <img src="../assets/phone/instagram/rec-new.svg"  class="new-imgs" alt="" onclick="receiveMSG(this.previousElementSibling)">
        </div>
        <input type="file" accept=".mp3" id="audio-in" onchange="handleAudioIn(this)" style="display: none;">
        <input id="image-in" type="file" accept=".png,.jpg,.jpeg,.gif,.webp,.svg,.bmp" style="display: none;" onchange="handleImageIn(this)">
        <div class="wrap-2">
            <label for="image-in"><img src="../assets/phone/instagram/cam-new.svg"  class="new-imgs"alt=""></label>
            <label for="audio-in"><img src="../assets/phone/instagram/mic-new.svg" class="new-imgs" alt=""></label>
        </div>
    </div>
    <div class="tools-in-wrap">
        <div class="tools-in" onclick="videoCall()">Video call<img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
        <div class="tools-in" onclick="voiceCall()">Voice call<img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
        <div class="tools-in" onclick="missVoiceCall()">Missed voice call <img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
        <div class="tools-in" onclick="missVideoCall()">Missed video call <img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
        <div class="tools-in">One time see image <img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
        <div class="tools-in">link <img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
    </div>
</div>
<div class="out-d">
    <div class="messanger-new-in">
        <h1 class="in-h1">Out</h1>
        <div class="wrap-1">
            <input type="text" autocomplete="off" spellcheck="false" placeholder="Here type the message you want to send">
            <img src="../assets/phone/instagram/send-new.svg"  class="new-imgs" alt="" onclick="sendMSG(this.previousElementSibling)">
        </div>
        <input type="file" accept=".mp3" id="audio-out" onchange="handleAudioOut(this)" style="display: none;">
        <input id="image-out" type="file" accept=".png,.jpg,.jpeg,.gif,.webp,.svg,.bmp" style="display: none;" onchange="handleImageOut(this)">
        <div class="wrap-2">
            <label for="image-out"><img src="../assets/phone/instagram/cam-new.svg"  class="new-imgs"alt=""></label>
            <label for="audio-out"><img src="../assets/phone/instagram/mic-new.svg" class="new-imgs" alt=""></label>
        </div>
    </div>
    <div class="tools-in-wrap">
        <div class="tools-in" onclick="videoCall()">Video call<img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
        <div class="tools-in" onclick="voiceCall()">Voice call<img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
        <div class="tools-in" onclick="missedVoiceCall()">Missed voice call <img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
        <div class="tools-in" onclick="missedVideoCall()">Missed video call <img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
        <div class="tools-in">One time see image <img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
        <div class="tools-in">link <img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
    </div>
</div>
<div class="out-d">
    <h1 class="in-h1 mt-20">General</h1>
    <div class="tools-in-wrap">
        <label for="verify-inp" class="label-tools"><div class="tools-g"><input type="checkbox" name="" id="verify-inp" onchange="verify(this)">Verified user</div></label>
        <label for="block-inp" class="label-tools"><div class="tools-g"><input type="checkbox" name="" id="block-inp" onchange="insertBlocked(this)">Block user</div></label>
        <label for="status-inp" class="label-tools"><div class="tools-g"><input type="checkbox" name="" id="status-inp" onchange="status(this)">Story updated</div></label>
        <div class="tools-g" onclick="insertTime()">Time indicator</div>
        <div class="tools-g" onclick="getBlocked()">Defaul profile picture</div>
    </div>
</div>
<br><br><br>
<div class="export">
    <button class="export-btn"><img src="../assets/export.svg" alt="">Export&nbsp;&nbsp;&nbsp;(PDF)</button>
    <button class="export-btn" id="erase" onclick="confirmErase()"><img src="../assets/drop.svg" alt="" id="drop"><img src="../assets/erase.svg" alt="">Erase</button>
</div>
</div>
`;
let instagramChatTools = `
<div class="optional-options">
<div class="in">
    <div class="messanger-new-in">
        <h1 class="in-h1">In</h1>
        <div class="wrap-1">
            <input type="text" autocomplete="off" spellcheck="false" placeholder="Here type the message you want to receive">
            <img src="../assets/phone/instagram/rec-new.svg"  class="new-imgs" alt="" onclick="receiveMSG(this.previousElementSibling)">
        </div>
        <input type="file" accept=".mp3" id="audio-in" onchange="handleAudioIn(this)" style="display: none;">
        <input id="image-in" type="file" accept=".png,.jpg,.jpeg,.gif,.webp,.svg,.bmp" style="display: none;" onchange="handleImageIn(this)">
        <div class="wrap-2">
            <label for="image-in"><img src="../assets/phone/instagram/cam-new.svg"  class="new-imgs"alt=""></label>
            <label for="audio-in"><img src="../assets/phone/instagram/mic-new.svg" class="new-imgs" alt=""></label>
        </div>
    </div>
    <div class="tools-in-wrap">
        <div class="tools-in" onclick="videoCall()">Video call<img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
        <div class="tools-in" onclick="voiceCall()">Voice call<img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
        <div class="tools-in" onclick="missVoiceCall()">Missed voice call <img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
        <div class="tools-in" onclick="missVideoCall()">Missed video call <img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
        <div class="tools-in">One time see image <img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
        <div class="tools-in">link <img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
    </div>
</div>
<div class="out-d">
    <div class="messanger-new-in">
        <h1 class="in-h1">Out</h1>
        <div class="wrap-1">
            <input type="text" autocomplete="off" spellcheck="false" placeholder="Here type the message you want to send">
            <img src="../assets/phone/instagram/send-new.svg"  class="new-imgs" alt="" onclick="sendMSG(this.previousElementSibling)">
        </div>
        <input type="file" accept=".mp3" id="audio-out" onchange="handleAudioOut(this)" style="display: none;">
        <input id="image-out" type="file" accept=".png,.jpg,.jpeg,.gif,.webp,.svg,.bmp" style="display: none;" onchange="handleImageOut(this)">
        <div class="wrap-2">
            <label for="image-out"><img src="../assets/phone/instagram/cam-new.svg"  class="new-imgs"alt=""></label>
            <label for="audio-out"><img src="../assets/phone/instagram/mic-new.svg" class="new-imgs" alt=""></label>
        </div>
    </div>
    <div class="tools-in-wrap">
        <div class="tools-in" onclick="videoCall()">Video call<img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
        <div class="tools-in" onclick="voiceCall()">Voice call<img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
        <div class="tools-in" onclick="missedVoiceCall()">Missed voice call <img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
        <div class="tools-in" onclick="missedVideoCall()">Missed video call <img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
        <div class="tools-in">One time see image <img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
        <div class="tools-in">link <img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
    </div>
</div>
<div class="out-d">
    <h1 class="in-h1 mt-20">General</h1>
    <div class="tools-in-wrap">
        <label for="verify-inp" class="label-tools"><div class="tools-g"><input type="checkbox" name="" id="verify-inp" onchange="verify(this)">Verified user</div></label>
        <label for="block-inp" class="label-tools"><div class="tools-g"><input type="checkbox" name="" id="block-inp" onchange="insertBlocked(this)">Block user</div></label>
        <label for="status-inp" class="label-tools"><div class="tools-g"><input type="checkbox" name="" id="status-inp" onchange="status(this)">Story updated</div></label>
        <div class="tools-g" onclick="insertTime()">Time indicator</div>
        <div class="tools-g" onclick="getBlocked()">Defaul profile picture</div>
    </div>
</div>
<br><br><br>
<div class="export">
    <button class="export-btn"><img src="../assets/export.svg" alt="">Export&nbsp;&nbsp;&nbsp;(PDF)</button>
    <button class="export-btn" id="erase" onclick="confirmErase()"><img src="../assets/drop.svg" alt="" id="drop"><img src="../assets/erase.svg" alt="">Erase</button>
</div>
</div>
`;
let whatsappDashTools = `
<div class="optional-options">
<div class="out-d">
    <h1 class="in-h1 mt-20">General</h1>
    <div class="tools-in-wrap">
    <div class="tools-g" onclick="addContact()">Add contact<img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
    <div class="tools-g" onclick="addContactUnread()">Add contact with unread messages<img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
    <div class="tools-g" onclick="addContactSeen()">Add contact with seen messages<img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
    </div>
</div>
<br><br><br>
<div class="export">
    <button class="export-btn"><img src="../assets/export.svg" alt="">Export&nbsp;&nbsp;&nbsp;(PDF)</button>
    <button class="export-btn" id="erase" onclick="confirmErase()"><img src="../assets/drop.svg" alt="" id="drop"><img src="../assets/erase.svg" alt="">Erase</button>
</div>
</div>
`;
let instagramPostTools = `
<div class="optional-options">
<div class="out-d">
    <h1 class="in-h1 mt-20">General</h1>
    <div class="tools-in-wrap">
    <div class="tools-g" onclick="addPost()">Add Post<img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
    <div class="tools-g" onclick="addContactSeen()">Add Verified post<img src="../assets/phone/instagram/verified.png" alt="" class="plus-verified"></div>
    <div class="tools-g" onclick="addStory()">Add Story<img src="../assets/phone/instagram/plus1.svg" alt="" class="plus-plus"></div>
    <div class="tools-g" onclick="addStory()">Add verified Story<img src="../assets/phone/instagram/verified.png" alt="" class="plus-plus"></div>
    </div>
</div>
<br><br><br>
<div class="export">
    <button class="export-btn"><img src="../assets/export.svg" alt="">Export&nbsp;&nbsp;&nbsp;(PDF)</button>
    <button class="export-btn" id="erase" onclick="confirmErase()"><img src="../assets/drop.svg" alt="" id="drop"><img src="../assets/erase.svg" alt="">Erase</button>
</div>
</div>
`;