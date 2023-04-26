"use strict";

/* Define an array of objects that contain the quiz questions, answer choices, and correct answer.
Write a function to display the questions and answer choices from the array onto the webpage.
Write a function to check the user's answer and display the result.
Write a function to keep track of the user's score.
*/

// Dom access
const questionDisplay = document.querySelector(".question");
const answerOption = document.querySelector(".option");
const checkBtn = document.querySelector(".check-btn");
const score = document.querySelector(".score");
const option1 = document.querySelector(".grid-item-1");
const option2 = document.querySelector(".grid-item-2");
const option3 = document.querySelector(".grid-item-3");
const option4 = document.querySelector(".grid-item-4");

// Define an array of objects that contain the quiz questions, answer choices, and correct answer.
const queArr = [
  {
    question: "1 + 1 ?",
    answer: 2,
    options: [2, 3, 4, 5],
  },
  {
    question: " 2 + 2 ?",
    answer: 4,
    options: [3, 4, 5, 6],
  },
  {
    question: " 2 + 3 ?",
    answer: 5,
    options: [3, 4, 5, 6],
  },
  {
    question: " 1 + 4 ?",
    answer: 5,
    options: [3, 4, 5, 6],
  },
  {
    question: " 1 + 5 ?",
    answer: 6,
    options: [3, 4, 5, 6],
  },
];

const randomNum4 = () => Math.floor(Math.random() * 4 + 1);

const randomNum5 = () => Math.floor(Math.random() * queArr.length);

let randomIndex;
// Write a function to display the questions and answer choices from the array onto the webpage.

function newQuestion() {
  // Choose a questions out of the queArr array
  randomIndex = randomNum5();
  //   Dsiplay the question on the dom
  questionDisplay.innerHTML = queArr[randomIndex].question;

  //   Show the possible answers related to the specific question
  if (randomIndex === 0) {
    option1.innerHTML = queArr.at(0).options[0];
    option2.innerHTML = queArr.at(0).options[1];
    option3.innerHTML = queArr.at(0).options[2];
    option4.innerHTML = queArr.at(0).options[3];
  } else if (randomIndex === 1) {
    option1.innerHTML = queArr.at(1).options[0];
    option2.innerHTML = queArr.at(1).options[1];
    option3.innerHTML = queArr.at(1).options[2];
    option4.innerHTML = queArr.at(1).options[3];
  } else if (randomIndex === 2) {
    option1.innerHTML = queArr.at(2).options[0];
    option2.innerHTML = queArr.at(2).options[1];
    option3.innerHTML = queArr.at(2).options[2];
    option4.innerHTML = queArr.at(2).options[3];
  } else if (randomIndex === 3) {
    option1.innerHTML = queArr.at(3).options[0];
    option2.innerHTML = queArr.at(3).options[1];
    option3.innerHTML = queArr.at(3).options[2];
    option4.innerHTML = queArr.at(3).options[3];
  }
}
newQuestion();

// // Highlight the chosen option
// document.querySelectorAll(".option").forEach((option, i) =>
//   addEventListener("click", function () {
//     eval(option + i).classList.add("selected");
//   })

let answer;

window.addEventListener("click", function (e) {
  answer = e.target.innerHTML;
  if (Number(answer) === queArr[randomIndex].answer) {
    console.log("Correct!");
    queArr.splice(randomIndex, 1);
    newQuestion();
  } else console.log("Wrong");
  console.log(queArr[randomIndex].answer);
});
