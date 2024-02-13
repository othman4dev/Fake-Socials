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
  function turnRed(e) {
    if (e.src == "http://127.0.0.1:3000/NewDesign/assets/phone/instagram/heart.png") {
      e.src = "http://127.0.0.1:3000/NewDesign/assets/phone/instagram/redheart.png"
    } else if (e.src == "http://127.0.0.1:3000/NewDesign/assets/phone/instagram/redheart.png"){
      e.src = "http://127.0.0.1:3000/NewDesign/assets/phone/instagram/heart.png"
    }
  }
  function turnGold(e) {
    if (e.src == "http://127.0.0.1:3000/NewDesign/assets/phone/instagram/save.svg") {
      e.src = "http://127.0.0.1:3000/NewDesign/assets/phone/instagram/savegold.svg"
    } else if (e.src == "http://127.0.0.1:3000/NewDesign/assets/phone/instagram/savegold.svg"){
      e.src = "http://127.0.0.1:3000/NewDesign/assets/phone/instagram/save.svg"
    }
  }
  