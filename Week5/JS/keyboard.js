// alert("Its working")

document.addEventListener("keydown",teclapresionada);
// document.addEventListener("keyup",keydown);
// document.addEventListener("keypress",keydown);

function teclapresionada(evt){
    console.log(evt.key)
    let audiofile = document.getElementById(evt.key.toLowerCase())
    
    if (audiofile!== null){        
        audiofile.addEventListener("play",addcss);
        audiofile.addEventListener("ended",removecss);
        audiofile.currentTime = 0;
        audiofile.play();
    }
}


function addcss(evt){
    let btnlist = document.getElementsByClassName(evt.srcElement.id);
    // console.log(btn);    
    btnlist[0].classList.add("playing");
}

function removecss(evt){
    let btnlist = document.getElementsByClassName(evt.srcElement.id);
    // console.log(btn);    
    btnlist[0].classList.remove("playing");
}