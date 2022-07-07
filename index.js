
var btn = document.querySelectorAll(".drum");

for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    btn[i].addEventListener("click",function(event){
        
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        addAnimation(buttonInnerHtml);
    });
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    addAnimation(event.key);

})

function makeSound(key){

    switch(key) {
        case "w":{
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        }
        case "a":{
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        }
        case "s":{
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        }
        case "d":{
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        }
        case "j":{
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        }
        case "k":{
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        }
        case "l":{
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        }
        default:
          console.log(`Sorry`);
      }
}

function addAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);

    activeButton.classList.add("pressed");

    var delay = 100; //1 second==1000ms
    setTimeout(function() {
    //your code to be executed after 1 second
    activeButton.classList.remove("pressed");
    }, delay);
}