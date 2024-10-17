//random code start
let randomNumber = Math.floor(Math.random() * 100000) + 1;


let Guess = prompt("Guess a number between 1 to 100000:");
if (parseInt(Guess) === randomNumber) {
    alert("You are right!");
} else {
    alert("wrong The correct number was" + randomNumber + ".");
}
//random code end


//date work
// let date = new Date()

// extra
// console.log(date);
//extra

// let day = date.getDay();
// let days = ["Sunday","Monday","Tuesday","thursday","Friday","Sataday",]
// console.log(days[day]);
