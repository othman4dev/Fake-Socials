function showPoly(e) {
    for (let i = 0; i < 5; i++) {
        let all = document.querySelectorAll('.poly');
        all[i].style.display = 'none';
    }
    e.nextElementSibling.style.display = "block";
    document.querySelectorAll('.module-choose').forEach( (element) => {
        element.style.display = 'none';
    })
    showModule(e.parentNode);
}
function showModule(el) {
    if (el.id == 'instagram') {
        document.getElementById('temp').insertAdjacentHTML('afterend',
            instagram
        )
    } else if (el.id == 'whatsapp') {
        document.getElementById('temp').insertAdjacentHTML('afterend',
            whatsapp
        )
    }
    var platform = el.id;
    document.getElementById(platform).childNodes[1].style.display = "block";
    document.querySelectorAll('.option-choice').forEach(element => {
        element.id = platform;
    });
    document.getElementById('temp').style.display = 'none';
    document.getElementById('module').style.display = 'flex';
    document.getElementById('module').style.transition = '0.5s';
    document.getElementById('module').style.opacity = '1';
    document.getElementById('module').style.animationName = 'higher';
}

let el = null;

const source = document.getElementsByClassName("platform-circle");
source[0].addEventListener("dragstart", (event) => {
    el = source[0];
});
source[1].addEventListener("dragstart", (event) => {
    el = source[1];
});
source[2].addEventListener("dragstart", (event) => {
    el = source[2];
});
source[3].addEventListener("dragstart", (event) => {
    el = source[3];
});
source[4].addEventListener("dragstart", (event) => {
    el = source[4];
});
const target = document.getElementById("temp");
target.addEventListener("dragover", (event) => {
  event.preventDefault();
});
const target2 = document.getElementById("module");
target.addEventListener("dragover", (event) => {
    event.preventDefault();
});
target.addEventListener("drop", (event) => {
    event.preventDefault();
    showModule(el);
});
target2.addEventListener("drop", (event) => {
    event.preventDefault();
    showModule(el);
});
function makeUpLocation(id,type) {
    document.getElementById('loading-body').style.display="flex";
    if (localStorage.getItem('choice')) {
        localStorage.removeItem('choice');
    }
    if (localStorage.getItem('type')) {
        localStorage.removeItem('type');
    }
    localStorage.setItem('choice',id);
    localStorage.setItem('type',type);
    setTimeout(() => {
        window.location.href = "platform.html";
    }, 2000);
}