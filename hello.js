let card = document.querySelector(".trend");
let card2 = document.getElementById("trendsec");
let blob = document.querySelector(".trends");
let mainPage = document.querySelector(".main");
let flash = document.querySelector(".about");
let contactso = document.querySelector(".contact")


function shops(){
mainPage.style.display="none"
blob.style.display="none"
flash.style.display="none"
card.style.display="block"
card2.style.display="block"
document.getElementById("clog").style.color="black"
document.getElementById("home").style.color="black"
document.getElementById("shop").style.color="rgb(2, 173, 173)"
document.getElementById("contact").style.color="black"
document.getElementById("abouts").style.color="black"
    
}
function homes(){
    mainPage.style.display="flex"
    card.style.display="block"
    card2.style.display="block"
    blob.style.display="block"
    flash.style.display="none"
    
    document.getElementById("clog").style.color="black"
    document.getElementById("home").style.color="rgb(2, 173, 173)"
    document.getElementById("shop").style.color="black"
    document.getElementById("contact").style.color="black"
    document.getElementById("abouts").style.color="black"
    
}
function blog(){
    mainPage.style.display="none"
    card.style.display="none"
    card2.style.display="none"
    blob.style.display="block"
    flash.style.display="none"
    
document.getElementById("clog").style.color="rgb(2, 173, 173)"
document.getElementById("home").style.color="black"
document.getElementById("shop").style.color="black"
document.getElementById("contact").style.color="black"
document.getElementById("abouts").style.color="black"


}
function about(){
    mainPage.style.display="none"
    card.style.display="none"
    card2.style.display="none"
    blob.style.display="none"
    flash.style.display="block"
document.getElementById("clog").style.color="black"
document.getElementById("home").style.color="black"
document.getElementById("shop").style.color="black"
document.getElementById("contact").style.color="black"
document.getElementById("abouts").style.color="rgb(2, 173, 173)"

}
function contacts(){
    mainPage.style.display="none"
    card.style.display="none"
    card2.style.display="none"
    blob.style.display="none"
    flash.style.display="none"
    contactso.style.display="block"
document.getElementById("clog").style.color="black"
document.getElementById("home").style.color="black"
document.getElementById("shop").style.color="black"
document.getElementById("contact").style.color="rgb(2, 173, 173)"
document.getElementById("abouts").style.color="black"

}
function show(img){
    let newImg = document.getElementById("newImg");
    console.log(img);
    newImg.src=img.src;
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    flash.style.display="none"
    blob.style.display="none"
    contactso.style.display="none"
    document.querySelector(".cart").style.display="flex"
}
function addCart(){
    alert("Added To Cart");
    location.reload()
}
