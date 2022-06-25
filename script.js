const userInput = document.querySelector("input#userInput");
const userLabel = document.querySelector("label#userLabel");
const passwordInput = document.querySelector("input#passwordInput");
const passwordLabel = document.querySelector("label#passwordLabel");

function labelUserPosition(){
    
    if(userInput === document.activeElement || !(userInput.value === "")){
        userLabel.style.transform = "translateY(0px)"; 
        userLabel.style.fontSize  = "0.8rem";
    } else{
        userLabel.style.transform = "translateY(25px)"; 
        userLabel.style.fontSize  = "0.9rem";
    }
}

function labelPasswordPosition(){
    
    if(passwordInput === document.activeElement || !(passwordInput.value === "")){
        passwordLabel.style.transform = "translateY(0px)"; 
        passwordLabel.style.fontSize  = "0.8rem";
    } else{
        passwordLabel.style.transform = "translateY(25px)"; 
        passwordLabel.style.fontSize  = "0.9rem";
    }
}

function detect(){
    labelUserPosition();
    labelPasswordPosition();
}

