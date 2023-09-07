if ( image.value != "") {
    var reader = new FileReader();

    reader.onload = function(e) {
    imagePlace.src = e.target.result;
    }

    reader.readAsDataURL(image);
    console.log("condition 1 affirmed");
} else {
    var reader = new FileReader();

    reader.onload = function(e) {
    imagePlace.src = "assets/phone/whatsapp/defaultprofile.png";
    console.log("condition not 1 affirmed");
    }
}
if(image2.value != "") {
    var reader2 = new FileReader();
    reader2.onload = function(e) {
        imagePlace2.src = e.target.result;
    }
    
    reader2.readAsDataURL(image2);
    console.log("condition 2 affirmed")
} else {
    image2.value = imagePlace2 ;
    console.log("condition not 2 affirmed");
}