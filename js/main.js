// console.log("Hello World!");
// console.log(typeof "Umesh");
// console.log(typeof 42);
// console.log(typeof true);

// strings
//let myVariable = "Mathematics";

// String Method
//console.log(myVariable.charAt(4));
//console.log(myVariable.indexOf("em"));
//console.log(myVariable.lastIndexOf("at"));
//console.log(myVariable.slice(5, 8));
//console.log(myVariable.includes("mat")); // includes function gives Boolean Value.
//console.log(myVariable.split("e"));

// The length property
//console.log("umeshkumar".length);

// Numbers

// An integer is a whole number.
//const myNumber = 42;

// A number with a decimal point is a float which references the "Floating point"
//const myfloat = 42.015667 ;

//const myString = "42";
//console.log(Number(myString) + 3);

// Number Methods

//The Number.isInteger() method determines whether the passes value is an integer.
//console.log(Number.isInteger(myfloat));

//The Number.parseFloat() method parses an argument and returns a floating point number. if a number cannot be parsed from the argument, it returns NaN.
//console.log(Number.parseFloat(myfloat));

// The toFixed() method formats a number according to how many decimal points you provide as the parameter.

// Number.parseInt()

// The toString() method returns a string representing the number.
//console.log(typeof myString.toString());

// NaN is an acronym for Not a Number
//the Number.isNaN() method determines whether the passed value is NaN AND its type is NUmber.
//console.log(Number.isNaN("Dave"));


// Maths Methods and Properties


// console.log(Math.PI);
// console.log(Math.trunc(Math.PI));
//console.log(Math.max(2, 5));
// from 1 to 10
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

/*
Lect - 6
 Your First Code Challenge .
*/

// Q1. Write js code that will return a random letter from your name
//const myName = "Umesh";
//console.log(myName.length);
//var randomNum = Math.floor(Math.random() * myName.length);
//console.log(myName.charAt(randomNum));

/*
lect - 7
Conditionals : If Statements
*/
// Decision trees!
//if(playerOne === computer){
  // tie game!
//} else if(playerOne === "rock"){
//  if(computer === "paper"){
    // computer wins
//  } else{
    // playerOne wins
//  }
//} else if(playerOne === "paper"){
//  if(computer === "scissors"){
    // computer wins
//  } else{
    // playerOne wins
//  }
//} else{
//  if(computer === "rock"){
    // computer wins
//  } else {
    // playerOne wins
//  }
//}


/* 
Lect - 8
Conditionals : Switch Statements
*/
// let playerOne = "paper";
// let computer = "rock";

// switch(playerOne){
//   case computer :
//     console.log("Tie game!");
//     break;
//   case "rock":
//     if (computer === "paper"){
//       console.log("computer wins!");
//     } else {
//       console.log("playerOne wins!");
//     }
//     break;
//     case "paper":
//     if (computer === "scissors"){
//       console.log("computer wins!");
//     } else {
//       console.log("playerOne wins!");
//     }
//     break; 
//   default:
//     if (computer === "rock"){
//       console.log("computer wins!");
//     } else {
//       console.log("playerOne wins!");
//     }   
// } 


/* 
Lect - 9
Conditionals : Ternary Operators
*/
//syntax
// condition ? ifTrue : ifFalse;

// let soup = "Chicken Noodle Soup";
// let response = soup ? "Yes, we have soup." : "Sorry, no soup today.";
// console.log(response);

// let testScore = 79;
// let myGrade = 
//     testScore > 89 
//         ? "A" 
//         : testScore > 79 
//         ? "B"
//         : testScore > 69 
//         ? "c"
//         : testScore > 59 
//         ? "D"
//         : "F";
// console.log("My test grade is a" + myGrade);


/* 
Lect - 10
User Input
*/

//alert("Hello Wordl!");

// let myBoolean = confirm("Ok === true\nCancel === False");
// console.log(myBoolean);

//let name = prompt("Please enter your name.");
//console.log(name ?? "You didn't enter your name.");
// if (name){
//     console.log(name.length);
//     console.log(name.trim().length);
//     console.log(name.trim());
// } else {
//     console.log("You didn't enter your name.");
// }

/* 
Lect - 11
First js game Rock, Paper Or Scissors
*/

// let playGame = confirm("Shall we play rock, paper, or scissors?");
// if (playGame) {
//     // play
//     let playerChoice = prompt("Please enter rock, paper, or scissors.");
//     if (playerChoice) {
//         let playerOne = playerChoice.trim().toLowerCase();
//         if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
//             let computerChoice = Math.floor(Math.random() * 3 + 1);
//             let computer = computerChoice === 1 ? "rock"
//                 : computerChoice === 2 ? "paper"
//                 : "scissors";
//             let result = 
//             playerOne === computer
//                 ? "Tie game!"
//                 : playerOne === "rock" && computer === "paper"
//                 ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//                 : playerOne === "paper" && computer === "scissors"
//                 ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//                 : playerOne === "scissors" && computer === "rock"
//                 ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!` 
//                 : `playerOne: ${playerOne}\nComputer: ${computer}\nPlayerOne wins!` ;
//             alert(result);
//             let playAgain = confirm("Play Again?");
//             playAgain ? location.reload() : alert("Ok, thanks for playing.");
//         } else {
//             alert("You didn't enter rock, paper, or scissors.");
//         }
//     } else {
//         alert("I guess you changed your mind. Maybe next time.");
//     }
// } else {
//     alert("Ok, no problem");
// }


/*
Lect - 12 
Loops
*/

//let myNumber = 0;
// while(myNumber <= 50){
//     console.log(myNumber);
//     myNumber++;
// }

// do{
//     console.log(myNumber);
//     myNumber++;
// } while(myNumber < 50);

// for(let i = 1; i <= 10; ++i){
//     console.log(i);
// }

// let name  = "dave";
// let counter = 0;
// let myLetter;
// while(counter <= 3){
//     myLetter = name[counter];
//     console.log(myLetter);
//     if(counter === 1){
//         counter += 2;
//         continue;
//     }
//     if(myLetter === "v") break;
//     counter++;
// }

// console.log(counter);

/*
Lect - 13
Functions
*/

// function sum(num1 , num2){
//     if(num2 === undefined){
//         return num1 + num1;
//     }
//     return num1+num2;
// }

// console.log(sum(2, 8));

// function getUserNameFromEmail(email) {
//     return email.slice(0, email.indexOf("@"));
// }
// console.log(getUserNameFromEmail("UmeshKumar@gmail.com"));

// anonymous function --->

// const getUserNameFromEmail = function (email) {
//     return email.slice(0, email.indexOf("@"));
// };

// console.log(getUserNameFromEmail("UmeshKumar@gmail.com"));

// Arrow functions --->

// const getUserNameFromEmail = (email) => {
//     return email.slice(0, email.indexOf("@" ));
// };

// console.log(getUserNameFromEmail("UmeshKumar@gmail.com"));

// const toProperCase = (name) => {
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// };
// console.log(toProperCase("umESH"));

/* 
Lect - 14
Const , Var , Let
*/

// Global scope
// var x = 1;
// let y = 2;
// const z = 3;

// local scope
// {
//     let y = 4;
//     console.log(y);
// }

// local scope
// function myFunc() {
//     const z = 5;
//     console.log(z);
// }
// myFunc();

// global scope Example 
// var x = 1; // function scoped
// let y = 2; // block scoped
// const z = 3;

// console.log(`global: ${x}`);
// console.log(`global: ${y}`);
// console.log(`global: ${z}`);

// function myFunct() {
//     var  x = 10;
//     const z = 5;
    
//     {
//         var  x = 11; // function scoped
//         const z = 6; // block scoped
//         console.log(`block: ${x}`);
//         console.log(`block: ${y}`);
//         console.log(`block: ${z}`);
//     }
//     console.log(`function: ${x}`);
//     console.log(`function: ${y}`);
//     console.log(`function: ${z}`);
// }
// myFunct();
// -> Avoid using of var. Stick with const and let;
// -> Use const unless you need to reassign value;
// -> Use let if you know you will reassign value.

/*
Lect - 15
Arrays -->
*/

/* The elements inside the array can be reassigned the are
mutable 
*/
// const myArray = [];

// add element to an array
// myArray[0] = "dave";
// myArray[1] = 1001;
// myArray[2] = false;
 
//myArray.push('school');
//myArray.unshift(42);

// how to delete element
//myArray.pop();
//myArray.shift(42);
//myArray.splice(1, 1, 42);
// refer to an array
//console.log(myArray);


// length property
//console.log(myArray.length);

// last element in an array
//console.log(myArray[myArray.length - 1]);

//console.log(myArray[1]);

//console.log(Object.keys(myArray)); // return index of an array

//const myArray = ["A", "B", "c", "D", "E", "F"];
//console.log(myArray);
//const newArray = myArray.splice(2, 5);
//console.log(myArray);
// myArray.reverse();
// console.log(newArray);

// const newString = myArray.join();
// console.log(newString);

// Concatenate method
// const myArrayA = ["A", "B", "c"];
// const myArrayB = ["D", "E", "F"];

//const newArray = myArrayA.concat(myArrayB);
// const newArray = [...myArrayA, ...myArrayB]; // spread array
// console.log(newArray);

// const equipShelfA = ["baseball", "football", "vollyball"];
// const equipShelfB = ["basketball", "golf ball", "tennis ball"];

// const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
// const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

// console.log(equipShelfA[1]);
// or
//console.log(clothesShelfB[0]);
// Nested Arrays

// const equipDept = [equipShelfA, equipShelfB]; 
// const clothesDept = [clothesShelfA, clothesShelfB];

// console.log(equipDept[0][1]);
// console.log(clothesDept[1][0]);

// const sportsStore = [equipDept, clothesDept];
// console.log(sportsStore[0][0][1]);
// console.log(sportsStore[1][1][0]);

/*
Lect - 16
Refactoring Code using while loop and Array-> rock, paper and scissors
*/

// Rock, Paper, Scissors: Refactored with While Loop and an Array
// let playGame = confirm("Shall we play rock, paper, or scissors?");
// if (playGame) {
//   //play
//   while (playGame) {
//     const playerChoice = prompt("Please enter rock, paper, or scissors.");
//     if (playerChoice || playerChoice === "") {
//       const playerOne = playerChoice.trim().toLowerCase();
//       if (
//         playerOne === "rock" ||
//         playerOne === "paper" ||
//         playerOne === "scissors"
//       ) {
//         const computerChoice = Math.floor(Math.random() * 3);
//         const rpsArray = ["rock", "paper", "scissors"];
//         const computer = rpsArray[computerChoice];

//         const result =
//           playerOne === computer
//             ? "Tie game!"
//             : playerOne === "rock" && computer === "paper"
//             ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//             : playerOne === "paper" && computer === "scissors"
//             ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//             : playerOne === "scissors" && computer === "rock"
//             ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//             : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
//         alert(result);
//         playGame = confirm("Play Again?");
//         if (!playGame) alert("Ok, thanks for playing.");
//         continue;
//       } else {
//         alert("You didn't enter rock, paper, or scissors.");
//         continue;
//       }
//     } else {
//       alert("I guess you changed your mind. Maybe next time.");
//       break;
//     }
//   }
// } else {
//   alert("Ok, maybe next time.");
// }

// Rock, Paper, Scissors: Refactored with Functions
// const initGame = () => {
//     const startGame = confirm("Shall we play rock, paper, or scissors?");
//     startGame ? playGame() : alert("Ok, maybe next time.");
//   };
  
//   // Game flow function
//   const playGame = () => {
//     while (true) {
//       let playerChoice = getPlayerChoice();
//       playerChoice = formatPlayerChoice(playerChoice);
//       if (playerChoice === "") {
//         invalidChoice();
//         continue;
//       }
//       if (!playerChoice) {
//         decidedNotToPlay();
//         break;
//       }
//       playerChoice = evaluatePlayerChoice(playerChoice);
//       if (!playerChoice) {
//         invalidChoice();
//         continue;
//       }
//       const computerChoice = getComputerChoice();
//       const result = determineWinner(playerChoice, computerChoice);
//       displayResult(result);
//       if (askToPlayAgain()) {
//         continue;
//       } else {
//         thanksForPlaying();
//         break;
//       }
//     }
//   };
  
//   const getPlayerChoice = () => {
//     return prompt("Please enter rock, paper, or scissors.");
//   };
  
//   const formatPlayerChoice = (playerChoice) => {
//     if (playerChoice || playerChoice === "") {
//       return playerChoice.trim().toLowerCase();
//     } else {
//       return false;
//     }
//   };
  
//   const decidedNotToPlay = () => {
//     alert("I guess you changed your mind. Maybe next time.");
//   };
  
//   const evaluatePlayerChoice = (playerChoice) => {
//     if (
//       playerChoice === "rock" ||
//       playerChoice === "paper" ||
//       playerChoice === "scissors"
//     ) {
//       return playerChoice;
//     } else {
//       return false;
//     }
//   };
  
//   const invalidChoice = () => {
//     alert("You didn't enter rock, paper, or scissors.");
//   };
  
//   const getComputerChoice = () => {
//     const randomNumber = Math.floor(Math.random() * 3);
//     const rpsArray = ["rock", "paper", "scissors"];
//     return rpsArray[randomNumber];
//   };
  
//   const determineWinner = (player, computer) => {
//     const winner =
//       player === computer
//         ? "Tie game!"
//         : player === "rock" && computer === "paper"
//         ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
//         : player === "paper" && computer === "scissors"
//         ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
//         : player === "scissors" && computer === "rock"
//         ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
//         : `playerOne: ${player}\nComputer: ${computer}\nplayerOne wins!`;
  
//     return winner;
//   };
  
//   const displayResult = (result) => {
//     alert(result);
//   };
  
//   const askToPlayAgain = () => {
//     return confirm("Play Again?");
//   };
  
//   const thanksForPlaying = () => {
//     alert("Ok, thanks for playing.");
//   };
  
//   initGame();

/* 
Lect - 17
Objects
*/
// key- values pairs in curly bracese
// const myObj = {name : "umesh"};

// const anotherObj = {
//     alive: true,
//     answer: 42,
//     hobbies: ["Eat", "Sleep", "Code", "Repeat"],
//     beverage: {
//         morning: "Coffee",
//         after: "Iced Tea"
//     },
//     action: function() {               // anonymous function
//         //return "Hello, World!";
//         return `Time for ${this.beverage.morning}`; // this refers to the objects
//     }
// };
// console.log(anotherObj.action());

// const vehicles = {
//     Wheels: 4,
//     engine: function() {
//         return "Vrrooom";
//     }
// };

// const truct = Object.create(vehicles);
// truct.doors = 2;
// console.log(truct);
// console.log(truct.Wheels); // Inheritance
// console.log(truct.engine());

// const car = Object.create(vehicles);
// car.doors = 4;
// car.engine = function() {
//     return "Petrol engine";
// };
// console.log(car.engine());
// console.log(car.Wheels);

// const tesla = Object.create(car);
// tesla.engine = function () {
//     return "Electric engine";
// };
// console.log(tesla.Wheels);
// console.log(tesla.engine());

// const band = {
//     vocals: "Robert Plant",
//     guiter: "Jimmy Page",
//     bass: "John Paul Jones",
//     drums: "John Bonham"
// };
// delete properties
//delete band.drums;

// onsole.log(Object.keys(band));
// cconsole.log(Object.values(band));

//for(let job in band) {          // for in loop
    // console.log(band[job]); // only value returns
//     console.log(`On ${job}, it's ${band[job]}!`);
// }

// Destructing objects

// const { guiter: myVariable } = band;
// console.log(myVariable);

// Alternate of above line no. 643, 644 code

// const { guiter, vocals, bass } = band;
// console.log(guiter);
// console.log(bass);

// function sings ({ vocals}) { return `${vocals} sings`};
// console.log(sings(band));

/*
Lect - 18
Javascript Classes 
*/

// class Pizza {
//     constructor(pizzaType) {
//         this.type = pizzaType;
//         this.size = "medium";
//         this.crust = "original";
//     }
//     getCrust(){
//         return this.crust;
//     }
//     setCrust(pizzaCrust) {
//         this.crust = this.pizzaCrust;
//     }
//     bake() {
//         console.log(`Baking a ${this.size} ${this.crust} ${this.type} crust pizza`);
//     }
// }
// creating object
// const myPizza = new Pizza("pepperoni");
// myPizza.setCrust("thin");
// myPizza.bake();
// console.log(myPizza.getCrust());


/* class Pizza {
    constructor(pizzaSize) {
        this._size = pizzaSize;    // UnderScore indicates that is it private, not change the value of these memmber outside the class
        this._crust = "original";
    }
    getCrust(){
        return this._crust;
    }
    setCrust(pizzaCrust) {
        this._crust = this.pizzaCrust;
    }
} */

// Factory Function -> another method to create objects

/* function pizzaFactory(pizzaSize) {
    const crust = "original";
    const size = pizzaSize;
    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza`)
    };
}

const myPizza = pizzaFactory("smal");
myPizza.bake();
*/

// Classes

/* class Pizza {
    crust = "original";
    #souce = "traditional";     // # indicates Private Field
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize;
    }
    getCrust(){
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = this.pizzaCrust;
    }
    hereYouGo() {
        console.log(
            `Here's your ${this.crust} ${this.#souce} souce ${this.#size} pizza.`
        );
    }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo(); */

/* 
Lect - 19
JSON -> Javascript Object Notation
*/

/*
JSON is used to send and receive data.
JSON is a text format that is completely language independent
Meaning JSON is used to send & receive data in many languages
...not just in JavaScript.
*/
/*
const myObj = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    hello: () =>  {
        console.log("Hello");
    }
};
console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

// Object to String
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);
console.log(sendJSON.name);

// String to Object
const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);
console.log(receiveJSON.name);
*/


/*
Lect - 20
Handle Error
*/

/*
Lect - 21
DOM -> Document Object Model
*/

/*
const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2);
view1.style.display = "flex";
view2.style.display = "none";

const views = document.getElementsByClassName(".view");
console.log(views);
const sameView = document.querySelectorAll(".view");
console.log(sameView);

const divs = view1.querySelectorAll("div");
console.log(divs);
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

for(let i = 0; i < evenDivs.length; ++i) {
    evenDivs[i].style.backgroundColor = "darkblue";
}

const navbar = document.querySelector("nav");
navbar.innerHTML = "Hello";

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());

view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

while(view2.lastChild) {
    view2.lastChild.remove();
}

const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "#000";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.borderRadius = "4px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
};
//createDivs(view2, 10);
for(let i =1; i <= 12; ++i){
    createDivs(view2, i);
}
*/

/* 
Lect - 22
EVENT LISTENER 
*/

/* const view = document.querySelector("#view2");
//console.log(view);
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

// Syntax: addEventListener(event, function, useCapture)

const doSomething = () => {
    alert("doing something");
}

h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false);

h2.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.textContent = "Clicked";
});*/

/* document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }

}); */

/* const initApp = () => {
    const view = document.querySelector("#view2");
    const div= view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener(
        "click",
        (event) => {
            view.style.backgroundColor = "purple";
        },
        true
    );
    
    div.addEventListener(
        "click",
        (event) => {
            div.style.backgroundColor = "blue";
        },
        true
    );

    h2.addEventListener(
        "click",
        (event) => {
            event.target.textContent = "Clicked";
        },
        true
    );
}*/

/* const initApp = () => {
    const view = document.querySelector("#view2");
    const div= view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener(
        "click",
        (event) => {
            view.classList.toggle("purple");
            view.classList.toggle("darkblue");
        },
        false
    );
    
    div.addEventListener(
        "click",
        (event) => {
            div.classList.toggle("black");
            div.classList.toggle("blue");
        },
        false
    );

    h2.addEventListener(
        "click",
        (event) => {
            const myText = event.target.textContent;
            myText === "My 2nd View"
                ? (event.target.textContent = "Clicked")
                : (event.target.textContent = "My 2nd View");
        },
        false
    );

    const nav = document.querySelector("nav");
    nav.addEventListener("mouseover", (event) => {
        event.target.classList.add("height100");
    });
    nav.addEventListener("mouseout", (event) => {
        event.target.classList.remove("height100");
    });
}*/

/* const initApp = () => {
    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("submit event");
    });
}; */

/*
Lect - 23 
Web Storage API
*/

// Not part of the DOM - refers to the Window API
// Available to JS via the global variable: window

// We do not have to type window. It is implied:

// window.alert(Window.location);
// alert(location);


/*
Lect - 24 
JavaScript Modules
*/

// import playGuiter from "./guiter.js";
// import { shredding, plucking } from "./guiter.js";

// import { shredding as shred, plucking as fingerpicking } from "./guiter.js"; // we able to change function name as we import

// Another way to import functions

// import * as Guiters from "./guiter.js";

// console.log(Guiters.default());
// console.log(Guiters.shredding());
// console.log(Guiters.plucking());

// import User from "./user.js";
// const me =  new User("email@email.com", "umesh");
// console.log(me);
// console.log(me.greeting());

/*
Lect - 25
Higher Order Functions
*/

// A higher Order Function is a function that does at least one of the following
// --> Takse one or more functions as an argument (parameter)
// --> Returns a function as the result

// forEach()

/* import { posts } from "./post.js";

posts.forEach((post) => {
    console.log(post);
});
console.clear();

const filteredPosts = posts.filter(post => {
    return post.userId === 5;
});
console.log(filteredPosts);

const mappedPosts = filteredPosts.map((post => {
    return post.id * 10;
}));
console.log(mappedPosts);

const reducePostsValue = mappedPosts.reduce((sum, post) => {
  return sum + post;
});
console.log(reducePostsValue); */


/*
Lect - 26
Fetch API
*/
// Fetch API requires a discussion of ...
// Callbacks, Promises, Thenables, and Async/Await

// Callbacks
/* function firstFunction(parameter, callback) {
  // do stuff
  callback();
}

//AKA "callback hell"
firstFunction(para, function() {
  // do stuff
  seconFunction(para, function() {
    thirdFunction(para, function() {

    });
  });
}); */

// Promises
// 3 states: Pending, Fulfilled, Rejected

/* const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if(!error) {
    resolve("Yes! resolved the promise!");
  } else {
    reject("No! rejected the promise.");
  }
}); */
// console.log(myPromise);

/* myPromise.then(value => {
  return value + 1;
})
.then(newValue => {
  console.log(newValue);
})
.catch(err => {
  console.error(err);
}) */

/* const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve("myNextPromise resolved!");
  }, 3000);
});

myNextPromise.then(value => {
  console.log(value);
});

myPromise.then(value => {
  console.log(value);
}); */

// Pending

/* const users = fetch("https://jsonplaceholder.typicode.com/users");

// console.log(users);

fetch("https://jsonplaceholder.typicode.com/users")
  .then(Response => {
    return Response.json();
  })
  .then(data => {
    data.forEach(user => {
      console.log(user);
    })
  }); */

// Async / Await

/* const myUsers = {
  userList: []
}

const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  return jsonUserData;
}

const anotherFunc = async () => {
  const data = await myCoolFunction();
  myUsers.userList = data;
  console.log(myUsers.userList);
}

anotherFunc();
console.log(myUsers.userList); */

// Workflow function

/* const getAllUserEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  const userEmailArray = jsonUserData.map(user => {
    return user.email;
  });
  postToWebPage(userEmailArray); 
  //console.log(userEmailArray);

}

const postToWebPage = (data) => {
  console.log(data);
}

getAllUserEmails(); */


// 2nd parameter of Fetch is a object

/* const getDadJoke = async () => {

  const response  = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      accept: "application/json"
    }
  });
  const jsonJokeData = await response.json();

  console.log(jsonJokeData);
}

getDadJoke(); */


/*
const jokeObject = {
  id: '0oO71TSv4Ed',
  joke: 'Why was it called the dark ages? Because of all the knights.'
}

const postData = async (jokeObj) => {

  const response  = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "content-Type": "application/json"
    },
    body: JSON.stringify(jokeObj)
  });
  const jsonResponse = await response.json();

  console.log(jsonResponse.headers);
}

postData(jokeObject);
*/


// abstract into functions

// maybe from to form
const getDataFromForm = () => {
  const requestObj = {
    firstName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"]
  };
  return requestObj;
}

const buildRequestUrl = (requestData) => {
  return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;

}

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value.joke;
  postJokeToPage(joke);
}

const postJokeToPage = (joke) => {
  console.log(joke);
}

// Procedural "workflow" function 
const processsJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoke(requestUrl);
  console.log("finsihed!");
}

processsJokeRequest();