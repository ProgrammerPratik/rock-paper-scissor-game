'use strict';
let userPoint = 0;
let botPoint = 0;
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissor = document.querySelector('.scissor');
let userNumber = 0;
let botRandomNumber = 0;
let botNumber = 0;

const botChoiceRandomizer = function () {
  botRandomNumber = Math.trunc(Math.random() * 3) + 1;
  if (botRandomNumber === 1) {
    document.querySelector('.itemSelectedB').src = 'assets/rock.png';
  } else if (botRandomNumber === 2) {
    document.querySelector('.itemSelectedB').src = 'assets/paper.png';
  } else if (botRandomNumber === 3) {
    document.querySelector('.itemSelectedB').src = 'assets/scissor.png';
  }
};

const winner = function (userVal, botVal) {
  let userWinner;
  if (userVal === 1 && botVal === 2) {
    userWinner = false;
  } else if (userVal === 1 && botVal === 3) {
    userWinner = true;
  } else if (userVal === 2 && botVal === 1) {
    userWinner = true;
  } else if (userVal === 2 && botVal === 3) {
    userWinner = false;
  } else if (userVal === 3 && botVal === 1) {
    userWinner = false;
  } else if (userVal === 3 && botVal === 2) {
    userWinner = true; //====================
  }
  //   return userPoint > botPoint ? userPoint : botPoint;
  return userWinner;
};

console.log(botRandomNumber);
rock.addEventListener('click', () => {
  document.querySelector('.itemSelected').src = 'assets/rock.png';
  userNumber = 1;
  botChoiceRandomizer();
  let win = winner(userNumber, botRandomNumber);
  if (typeof win !== 'undefined') {
    document.querySelector('.vs').textContent = 'D';

    if (win) {
      document.querySelector('.vs').textContent = '1';
    } else {
      document.querySelector('.vs').textContent = '2';
    }
  }
});

paper.addEventListener('click', () => {
  document.querySelector('.itemSelected').src = 'assets/paper.png';
  userNumber = 2;
  botChoiceRandomizer();
  let win = winner(userNumber, botRandomNumber);
  if (typeof win !== 'undefined') {
    document.querySelector('.vs').textContent = 'D';

    if (win) {
      document.querySelector('.vs').textContent = '1';
    } else {
      document.querySelector('.vs').textContent = '2';
    }
  }
});

scissor.addEventListener('click', () => {
  document.querySelector('.itemSelected').src = 'assets/scissor.png';
  userNumber = 3;
  botChoiceRandomizer();
  let win = winner(userNumber, botRandomNumber);
  if (typeof win !== 'undefined') {
    document.querySelector('.vs').textContent = 'D';

    if (win) {
      document.querySelector('.vs').textContent = '1';
    } else {
      document.querySelector('.vs').textContent = '2';
    }
  }
});
