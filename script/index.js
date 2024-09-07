for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        addSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });

}
    document.addEventListener("keydown",function(event){
        addSound(event.key);
        buttonAnimation(event.key);
    })

function addSound(char){
    switch(char){
        case "w":
            var soundW=new Audio("./sounds/tom-1.mp3");
            soundW.play();
            break;
        case "a":
            var soundA=new Audio("./sounds/tom-2.mp3");
            soundA.play();
            break;     
        case "s":
            var soundS=new Audio("./sounds/tom-3.mp3");
            soundS.play();
            break;
        case "d":
            var soundD=new Audio("./sounds/tom-4.mp3");
            soundD.play();
            break;
        case "j":
            var soundJ=new Audio("./sounds/snare.mp3");
            soundJ.play();
            break;
        case "k":
            var soundK=new Audio("./sounds/crash.mp3");
            soundK.play();
            break;
        case "l":
            var soundL=new Audio("./sounds/kick-bass.mp3");
            soundL.play();
            break;
        default:

            break;

        }

}

function buttonAnimation(char){
        var activeButton=document.getElementsByClassName(char)[0];
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },100);
}