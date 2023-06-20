var len = document.querySelectorAll(".headZ").length;
var i;

for(i=0;i<len;i++){
    document.querySelectorAll(".headZ")[i].addEventListener("click",function(){
        var buttonX = this.classList[1];
        headButton(buttonX);
        buttonAnimation(buttonX)
    })
}

for(i=0;i<len;i++){
    document.querySelectorAll(".bodyZ")[i].addEventListener("click",function(){
        var buttonX = this.classList[1];
        bodyButton(buttonX);
        buttonAnimation(buttonX)
    })
}

document.querySelector(".ResetButton").addEventListener("click",function(){
    resetStyle();
    var buttonX = this.classList[0];
    buttonAnimation(buttonX)
});

function buttonAnimation(buttonX){
    var active = document.querySelector("."+buttonX);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    },150)
}



function headButton(buttonX){
    switch(buttonX){
        case "hb1":
            document.querySelector("h1").style.background="#3AA6B9";
            document.querySelector("h1").style.color="white";
            break;

        case "hb2":
            document.querySelector("h1").style.background="#0A6EBD";
            document.querySelector("h1").style.color="black";
            break;
        
        case "hb3":
            document.querySelector("h1").style.background="#F86F03";
            document.querySelector("h1").style.color="black";
            break;

        case "hb4":
            document.querySelector("h1").style.background="#E966A0";
            document.querySelector("h1").style.color="black";
            break;

        case "hb5":
            document.querySelector("h1").style.background="#F2BE22";
            document.querySelector("h1").style.color="black";
            break;

        case "hb6":
            document.querySelector("h1").style.background="#9336B4";
            document.querySelector("h1").style.color="black";
            break;

        case "hb7":
            document.querySelector("h1").style.background="#F6FA70";
            document.querySelector("h1").style.color="black";
            break;

        case "hb8":
            document.querySelector("h1").style.background="black";
            document.querySelector("h1").style.color="white";
            break;
    }
}

function bodyButton(buttonX){
    switch(buttonX){
        case "bb1":
            document.querySelector(".body1").style.background="#C1ECE4";
            break;

        case "bb2":
            document.querySelector(".body1").style.background="#A2CDB0";
            break;
        
        case "bb3":
            document.querySelector(".body1").style.background="#FFD0D0";
            break;

        case "bb4":
            document.querySelector(".body1").style.background="#A0C49D";
            break;

        case "bb5":
            document.querySelector(".body1").style.background="#E8A9A9";
            break;

        case "bb6":
            document.querySelector(".body1").style.background="#E4A5FF";
            break;

        case "bb7":
            document.querySelector(".body1").style.background="#00DFA2";
            break;

        case "bb8":
            document.querySelector(".body1").style.background="black";
            break;
    }
}





function resetStyle(){
    document.querySelector("h1").style.background="white";
    document.querySelector("h1").style.color="black";
    document.querySelector(".body1").style.background="white";
}