const loadSnippet = fileName => {
    fetch(`./snippets/${fileName}.html`)
    .then(res=> {
        if(res.ok) {
            return res.text();
        }
    })
    .then(htmlSnippet => {
        document.getElementById('engine').innerHTML = htmlSnippet;
});
};
function reduce() {
    var header = document.getElementById('engine');
    var choose = document.getElementById('choose');
    header.style.transition = ("1s");
    choose.style.transition = ("1s");
    header.style.filter = ('blur(0px)');
    choose.style.filter = ('blur(0px)');
    var terms = document.getElementById("terms");
    terms.style.animationName = ("makeSmall");
    setTimeout(function change() {terms.innerText = "\xa0\xa0\xa0\xa0" + "Thank You For agreeing. Enjoy!";terms.style.animationName = ("makeBig")},2000);
}
function whatsapp() {
    var whatsapp = document.getElementById("whatsappList");
    var top = document.getElementById("top1");
    top.style.borderBottom = ("none");
    whatsapp.style.opacity = ("1");
    whatsapp.style.animationName = ("goDown");
    var carret = document.getElementById("carret1");
    carret.style.transition = ("0.5s");
    carret.style.transform = ("translate(-50%,-50%)rotate(180deg)"); 
}
function noList1() {
    var whatsapp = document.getElementById("whatsappList");
    var top = document.getElementById("top1");
    top.style.borderBottom = ("white solid 1px");
    whatsapp.style.opacity = ("0");
    whatsapp.style.animationName = ("goUp");
    var carret = document.getElementById("carret1");
    carret.style.transition = ("0.5s");
    carret.style.transform = ("translate(-50%,-50%)rotate(0deg)"); 
}
function facebook() {
    var facebook = document.getElementById("facebookList");
    var top = document.getElementById("top2");
    top.style.borderBottom = ("none");
    facebook.style.opacity = ("1");
    facebook.style.animationName = ("goDown");
    var carret = document.getElementById("carret2");
    carret.style.transition = ("0.5s");
    carret.style.transform = ("translate(-50%,-50%)rotate(180deg)"); 
}
function noList6() {
    var facebook = document.getElementById("facebookList");
    var top = document.getElementById("top2");
    top.style.borderBottom = ("white solid 1px");
    facebook.style.opacity = "0";
    facebook.style.animationName = ("goUp");
    var carret = document.getElementById("carret2");
    carret.style.transition = ("0.5s");
    carret.style.transform = ("translate(-50%,-50%)rotate(0deg)"); 
}
function instagram() {
    var instagram = document.getElementById("instagramList");
    var top = document.getElementById("top3");
    top.style.borderBottom = ("none");
    instagram.style.opacity = ("1");
    instagram.style.animationName = ("goDown");
    var carret = document.getElementById("carret3");
    carret.style.transition = ("0.5s");
    carret.style.transform = ("translate(-50%,-50%)rotate(180deg)"); 
}
function noList2() {
    var instagram = document.getElementById("instagramList");
    var top = document.getElementById("top3");
    top.style.borderBottom = ("white solid 1px");
    instagram.style.opacity = ("0");
    instagram.style.animationName = ("goUp");
    var carret = document.getElementById("carret3");
    carret.style.transition = ("0.5s");
    carret.style.transform = ("translate(-50%,-50%)rotate(0deg)"); 
}
function tiktok() {
    var tiktok = document.getElementById("tiktokList");
    var top = document.getElementById("top5");
    top.style.borderBottom = ("none");
    tiktok.style.opacity = ("1");
    tiktok.style.animationName = ("goDown");
    var carret = document.getElementById("carret5");
    carret.style.transition = ("0.5s");
    carret.style.transform = ("translate(-50%,-50%)rotate(180deg)"); 
}
function noList3() {
    var tiktok = document.getElementById("tiktokList");
    var top = document.getElementById("top5");
    top.style.borderBottom = ("white solid 1px");
    tiktok.style.opacity = ("0");
    tiktok.style.animationName = ("goUp");
    var carret = document.getElementById("carret5");
    carret.style.transition = ("0.5s");
    carret.style.transform = ("translate(-50%,-50%)rotate(0deg)"); 
}
function twitter() {
    var twitter = document.getElementById("twitterList");
    var top = document.getElementById("top4");
    top.style.borderBottom = ("none");
    twitter.style.opacity = ("1");
    twitter.style.animationName = ("goDown");
    var carret = document.getElementById("carret4");
    carret.style.transition = ("0.5s");
    carret.style.transform = ("translate(-50%,-50%)rotate(180deg)"); 
}
function noList4() {
    var twitter = document.getElementById("twitterList");
    var top = document.getElementById("top4");
    top.style.borderBottom = ("white solid 1px");
    twitter.style.opacity = ("0");
    twitter.style.animationName = ("goUp");
    var carret = document.getElementById("carret4");
    carret.style.transition = ("0.5s");
    carret.style.transform = ("translate(-50%,-50%)rotate(0deg)"); 
}
function youtube() {
    var youtube = document.getElementById("youtubeList");
    var top = document.getElementById("top6");
    top.style.borderBottom = ("none");
    youtube.style.opacity = ("1");
    youtube.style.animationName = ("goDown");
    var carret = document.getElementById("carret6");
    carret.style.transition = ("0.5s");
    carret.style.transform = ("translate(-50%,-50%)rotate(180deg)"); 
}
function noList5() {
    var youtube = document.getElementById("youtubeList");
    var top = document.getElementById("top6");
    top.style.borderBottom = ("white solid 1px");
    youtube.style.opacity = ("0");
    youtube.style.animationName = ("goUp");
    var carret = document.getElementById("carret6");
    carret.style.transition = ("0.5s");
    carret.style.transform = ("translate(-50%,-50%)rotate(0deg)"); 
}
//Blur all if not agreed on terms and conditions
function blurAll() {
    if(document.getElementById('box') && document.getElementById("box").checked == false) {
        var header = document.getElementById('engine');
        var choose = document.getElementById('choose');
        var wrapper = document.getElementById('terms');
        wrapper.style.animationName = ('alert');
        header.style.transition = ("1s");
        choose.style.transition = ("1s");
        header.style.filter = ('blur(5px)');
        choose.style.filter = ('blur(5px)');
    } 
}
//rating .
function rateVeryBad() {
    var star = document.getElementById("star1");
    var rating = document.getElementById("rating");
    var submit = document.getElementById("subm");
    submit.style.display = ("block");
    rating.innerText = ("Very Bad");
}
function rateBad() {
    var star = document.getElementById("star2");
    var rating = document.getElementById("rating");
    var submit = document.getElementById("subm");
    submit.style.display = ("block");
    rating.innerText = ("Bad");
}
function rateOrdinary() {
    var star = document.getElementById("star3");
    var rating = document.getElementById("rating");
    var submit = document.getElementById("subm");
    submit.style.display = ("block");
    rating.innerText = ("Ordinary");
}
function rateGood() {
    var star = document.getElementById("star4");
    var rating = document.getElementById("rating");
    var submit = document.getElementById("subm");
    submit.style.display = ("block");
    rating.innerText = ("Good");
}
function rateExcellent() {
    var star = document.getElementById("star5");
    var rating = document.getElementById("rating");
    var submit = document.getElementById("subm");
    submit.style.display = ("block");
    rating.innerText = ("Excellent");
}
function showThanks() {
    var ratingForm = document.getElementById("rateform");
    ratingForm.style.animationName =("makeDisappear");
    setTimeout(function (){
        ratingForm.innerHTML = `<h2 class="thanks">Thank you for your feedback.</h2>`;
        ratingForm.style.animationName =("makeAppear");

    },1500);
}