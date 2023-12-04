function handleThisProfile(e) {
  let imagePlace = e;
  var image = e.files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    imagePlace.nextElementSibling.style.backgroundImage = `url(${e.target.result})`;
  };
  reader.readAsDataURL(image);
  e.value = "";
}
function addContact() {
  document.getElementById('messanger').insertAdjacentHTML('beforeend',
  `
  <div class="block-full">
  <div class="contact">
      <label><input type="file" accept=".png,.jpg,.jpeg,.gif,.webp,.svg,.bmp" onchange="handleThisProfile(this)" style="display: none;"><div class="profile"></div></label>
      <div class="name-message">
          <p class="contact-name" contenteditable="true" spellcheck="false">Contact name</p>
          <p class="last-message" contenteditable="true" spellcheck="false">Last message</p>
      </div>
      <div class="time-contact">
          <p contenteditable="true" spellcheck="false" class="time-text">10:40</p>
      </div>
  </div>
</div>
  `
  )
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
function addContactUnread() {
  document.getElementById('messanger').insertAdjacentHTML('beforeend',
  `
  <div class="block-full">
  <div class="contact">
      <label><input type="file" accept=".png,.jpg,.jpeg,.gif,.webp,.svg,.bmp" onchange="handleThisProfile(this)" style="display: none;"><div class="profile"></div></label>
      <div class="name-message">
          <p class="contact-name" contenteditable="true" spellcheck="false">Contact name</p>
          <p class="last-message" contenteditable="true" spellcheck="false">Last message</p>
      </div>
      <div class="time-contact unreaded">
          <p contenteditable="true" spellcheck="false" class="time-text">10:40</p>
          <div class="unread" contenteditable="true" spellcheck="false">1</div>
      </div>
  </div>
</div>
  `
  )
}
function addContactSeen() {
  document.getElementById('messanger').insertAdjacentHTML('beforeend',
  `
  <div class="block-full">
  <div class="contact">
      <label><input type="file" accept=".png,.jpg,.jpeg,.gif,.webp,.svg,.bmp" onchange="handleThisProfile(this)" style="display: none;"><div class="profile"></div></label>
      <div class="name-message">
          <p class="contact-name" contenteditable="true" spellcheck="false">Contact name</p>
          <p class="last-message" contenteditable="true" spellcheck="false"><img src="../assets/phone/whatsapp/read.svg" class="seen" alt="">Last message</p>
      </div>
      <div class="time-contact">
        <p contenteditable="true" spellcheck="false" class="time-text">10:40</p>
      </div>
  </div>
</div>
  `
  )
}