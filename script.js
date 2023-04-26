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

// Define an array of objects that contain the quiz questions, answer choices, and correct answer.
const queArr = [
  {
    question: "1 + 1?",
    answer: 2,
    options: [3, 4, 5, 6],
  },
  {
    question: " 2 + 2?",
    answer: 4,
    options: [3, 4, 5, 6],
  },
  {
    question: " 2 + 3?",
    answer: 5,
    options: [3, 4, 5, 6],
  },
  {
    question: " 1 + 4?",
    answer: 5,
    options: [3, 4, 5, 6],
  },
  {
    question: " 1 + 5?",
    answer: 6,
    options: [3, 4, 5, 6],
  },
];

questionDisplay.innerHTML = queArr[0].question;

function randomNum4() {
  console.log(Math.floor(Math.random() * 4 + 1));
}

function randomNum5() {
  console.log(Math.floor(Math.random() * 5));
}

// Write a function to display the questions and answer choices from the array onto the webpage.
