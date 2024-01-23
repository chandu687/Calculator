var random = Math.floor(Math.random()*100);
console.log(random)

// input by prompt and total  10 chances
let input;
let chances = 0;
let tries = 0;
do {
    input = Number.parseInt(prompt("enter your guess")); 

    if(random<input){
        console.log("guess number is less than " +input);

    } else if(random>input){
        console.log("guessed number is greater than "+input);

    }
    chances+=1;
    tries+=1
}
while(random != input){
    console.log("Good! you have gussed the number in "+tries+" tries")
    console.log(`your have earned ${100-chances} points`);

}
