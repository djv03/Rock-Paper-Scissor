let arr=document.querySelectorAll(".userinput");

for (const iterator of arr) {
    
    // document.querySelector(".btn").addEventListener("click",()=>{
    iterator.addEventListener("click",()=>{

//function to generate the random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let computer = randomNumber(1, 4);

if (computer==1) {
    computer="Rock";
}
else if(computer==2){
     computer="Paper";

} 
else {
    computer="Scissor";
}
console.log("computer chose:"+computer)

//function to get user input from input tga
function getData() {
    let inputdata=iterator.value;
    return (inputdata);
}

let user=getData()

console.log("you chose:"+user);

    if (user == computer) {
        console.log("tie");
        document.querySelector("#resulttext").innerHTML="Tie";
        document.querySelector("#resulttext2").innerHTML="It was neck to neck!";
        
        
    } 
    else if (user == "Rock" && computer == "Scissor" || user == "Paper" && computer == "Rock" || user == "Scissor" && computer == "Paper"  )
    {
        console.log("YOU WON!!");
        document.querySelector("#resulttext").innerHTML="YOU WON!!";
        document.querySelector("#resulttext2").innerHTML="";
    }
    else {
        console.log("SORRY!!! YOU LOSE");
        document.querySelector("#resulttext").innerHTML="ohho!!! YOU LOSE";
        document.querySelector("#resulttext2").innerHTML="Computer is smarter than you!";
    }
    document.querySelector("#computertext").innerHTML="Computer has chosen: "+computer;
    document.querySelector("#usertext").innerHTML="You chose : "+user;
    
    console.log(" " );
    
    
    
})

}

