function makeAble(e) {
    if (document.getElementById('agree').checked) {
        document.getElementById('start').disabled = false;
        document.getElementById('start').style.transition = '0.3s';
    } else {
        document.getElementById('start').disabled = true;
        document.getElementById('start').style.transition = '0.3s';
    }
}
function goto(address) {
    address = address + ".html";
    localStorage.setItem('agreed', true);
    window.location.href = address;
}
let recent;
setInterval(() => {
    let all = document.querySelectorAll('.socials-index');
    let rand = Math.floor(Math.random(1)*16);
    all[rand].style.animationName = "popUp";
    setTimeout(() => {
        all[rand].style.animationName = "none";
    }, 2000);
}, 200);
