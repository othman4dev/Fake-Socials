let instagram = `<div class="instagram">
<img src="../assets/phone/scale.svg" class="scale" onclick="scalePhone(this)">
<div class="top-bar">
  <p class="time" contenteditable="true">12:00 PM</p>
  <div class="notch"></div>
  <img src="../assets/phone/top-icons.svg" class="icons-3">
</div>
<div class="app-top-bar">
  <img src="../assets/phone/whatsapp/arrow.png" alt="" class="arrow" />
  <label for="profile-port"><div class="profile-pic"></div></label>
  <div class="names">
    <p class="name" contenteditable="true" onkeyup="matchNames(this)">
      Name
      <img
        src="../assets/phone/instagram/verified.png"
        id="verified2"
        alt=""
      />
    </p>
    <p class="userName" contenteditable="true" onkeyup="matchUserNames(this)">
      Username
    </p>
  </div>
  <div class="app-top-bar-icons">
    <img
      src="../assets/phone/instagram/instagramCall.png"
      alt=""
      class="app-top-bar-icon"
    />
    <img
      src="../assets/phone/instagram/instaVideo.png"
      alt=""
      class="app-top-bar-icon"
    />
    <img
      src="../assets/phone/instagram/label.png"
      alt=""
      class="app-top-bar-icon"
    />
  </div>
</div>
<div class="messanger" id="messanger">
  <div class="profile-chat">
    <label for="profile-port"><div class="profile-pic big"></div></label>
    <p class="name" contenteditable="true" onkeyup="matchNames(this)">
      Name
      <img
        src="../assets/phone/instagram/verified.png"
        id="verified"
        alt=""
      />
    </p>
    <p class="instaName" contenteditable="true">
      Instagram .
      <span
        class="userName"
        style="color: white; font-size: medium"
        contenteditable="true"
        onkeyup="matchUserNames(this)"
        >Username</span
      >
    </p>
    <p class="profile-discription" contenteditable="true">
      4.7K followers . 7 posts
    </p>
    <p class="profile-discription" contenteditable="true">
      followed this Instagram account since 2023
    </p>
    <p class="profile-discription" contenteditable="true">
      You both follow acccutienyla
    </p>
    <button class="view-profile">View Profile</button>
  </div>
</div>
<div class="message-input">
  <img
    src="../assets/phone/instagram/insta-camera.svg"
    alt=""
    class="message-input-icons"
  />
  <input
    type="text"
    class="text-message-inp"
    placeholder="Message..."
    onkeyup="bottomInput(this)"
  />
  <img
    src="../assets/phone/instagram/Send.svg"
    alt=""
    class="send"
    onclick="transferFunction(this.previousElementSibling)"
  />
  <img
    src="../assets/phone/instagram/instaMic.png"
    alt=""
    class="message-input-icons smaller"
  />
  <img
    src="../assets/phone/instagram/image.png"
    alt=""
    class="message-input-icons smaller"
  />
  <img
    src="../assets/phone/instagram/plus.png"
    alt=""
    class="message-input-icons smaller"
  />
</div>
<div class="bottom-bar">
  <div class="white-bar"></div>
</div>
</div>
`;
let instagramPost = ``;
let whatsapp = `<div class="whatsapp">
<img src="../assets/phone/scale.svg" class="scale" onclick="scalePhone(this)">
<div class="top-bar-w">
  <p class="time" contenteditable="true">12:00 PM</p>
  <div class="notch-whats"></div>
  <divv class="top-bar-icons">
  <img src="../assets/phone/top-icons.svg" class="icons-3">
  </divv>
</div>
<div class="app-top-bar what">
  <img src="../assets/phone/whatsapp/arrow.png" alt="" class="arrow" />
  <label for="profile-port"><div class="profile-pic"></div></label>
  <div class="names">
    <p class="name" contenteditable="true" onkeyup="matchNames(this)">
      Name
      <img
        src="../assets/phone/instagram/verified.png"
        id="verified2"
        alt=""
      />
    </p>
  </div>
  <div class="app-top-bar-icons">
    <img
      src="../assets/phone/whatsapp/voice.png"
      alt=""
      class="app-top-bar-icon"
    />
    <img
      src="../assets/phone/whatsapp/videocall.png"
      alt=""
      class="app-top-bar-icon"
    />
    <img
      src="../assets/phone/whatsapp/dots.png"
      alt=""
      class="app-top-bar-icon -w-small"
    />
  </div>
</div>
<div class="messanger-w" id="messanger">
  <div class="block-i">
    <div class="info">
      <p class="info-text">
        <img
          src="../assets/phone/whatsapp/lock.svg"
          class="lock"
          alt=""
        />Messages and calls are end-to-end encrypted. No one outside of this
        chat,not even Whatsapp, can read or listento them. Tap to learn more
      </p>
    </div>
  </div>
</div>
<div class="bottom-input-w">
  <div class="input-and-icons">
    <img
      src="../assets/phone/whatsapp/emogies.svg"
      class="input-icon-w"
      alt=""
    />
    <input
      type="text"
      class="bottom-input-w-inp"
      placeholder="Message"
      onkeyup="bottomInput(this)"
    />
    <img
      src="../assets/phone/whatsapp/attachement.svg"
      class="input-icon-w"
      alt=""
    />
    <img
      src="../assets/phone/whatsapp/camera2.svg"
      class="input-icon-w"
      alt=""
    />
  </div>
  <div class="mic-or-send">
    <img
      src="../assets/phone/whatsapp/micro.png"
      class="mic-or-send-icon"
      alt=""
      id="mic-send"
      onclick="transferFunction(document.querySelectorAll('.bottom-input-w-inp')[0])"
    />
  </div>
</div>
<div class="phone-bottom-bar">
  <div class="black-bar"></div>
</div>
</div>
`;
let whatsappDash = `<div class="whatsapp">
<img src="../assets/phone/scale.svg" class="scale" onclick="scalePhone(this)">
<div class="top-bar-w">
  <p class="time" contenteditable="true">12:00 PM</p>
  <div class="notch-whats"></div>
  <divv class="top-bar-icons">
  <img src="../assets/phone/top-icons.svg" class="icons-3">
  </divv>
</div>
<div class="app-top-bar what">
  <p class="whatsapp-name">Whatsapp</p>
  <div class="app-top-bar-icons">
    <img
      src="../assets/phone/whatsapp/voice.png"
      alt=""
      class="app-top-bar-icon"
    />
    <img
      src="../assets/phone/whatsapp/videocall.png"
      alt=""
      class="app-top-bar-icon"
    />
    <img
      src="../assets/phone/whatsapp/dots.png"
      alt=""
      class="app-top-bar-icon -w-small"
    />
  </div>
</div>
<div class="down-top-bar">
    <img src="../assets/phone/whatsapp/group.svg" class="what-groups" alt="G">
    <div class="down-top-choices choosen">Chats</div>
    <div class="down-top-choices">Updates</div>
    <div class="down-top-choices">Calls</div>
</div>
<div class="messanger-w" id="messanger">
    <div class="block-full">
        <div class="contact">
            <label><input type="file" accept=".png,.jpg,.jpeg,.gif,.webp,.svg,.bmp" onchange="handleThisProfile(this)" style="display: none;"><div class="profile"></div></label>
            <div class="name-message">
                <p class="contact-name" contenteditable="true" spellcheck="false">Contact Name</p>
                <p class="last-message" contenteditable="true" spellcheck="false">Last message</p>
            </div>
            <div class="time-contact">
                <p contenteditable="true" spellcheck="false" class="time-text">10:40</p>
            </div>
        </div>
    </div>
</div>
<div class="fixed-mark">
  <img src="../assets/phone/whatsapp/newchat.svg" class"new-chat">
</div>
<div class="phone-bottom-bar">
  <div class="black-bar"></div>
</div>
</div>`;