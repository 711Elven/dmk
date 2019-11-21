let styled = false;
document.querySelector('.block1').onclick = function() {
  if (styled) {
    document.querySelector('.block1').style.background = 'white';
    mold();
    styled = false;
  }
}
let styled2 = false;
document.querySelector('.block2').onclick = function() {
  if (styled2) {
    document.querySelector('.block2').style.background = 'white';
    mold();
    styled2 = false;
  }
}
let styled3 = false;
document.querySelector('.block3').onclick = function() {
  if (styled3) {
    document.querySelector('.block3').style.background = 'white';
    mold();
    styled3 = false;
  }
}
let styled4 = false;
document.querySelector('.block4').onclick = function() {
  if (styled4) {
    document.querySelector('.block4').style.background = 'white';
    mold();
    styled4= false;
  }
}
let styled5 = false;
document.querySelector('.block5').onclick = function() {
  if (styled5) {
    document.querySelector('.block5').style.background = 'white';
    mold();
    styled5 = false;
  }
}
let styled6 = false;
document.querySelector('.block6').onclick = function() {
  if (styled6) {
    document.querySelector('.block6').style.background = 'white';
    mold();
    styled6 = false;
  }
}
let styled7 = false;
document.querySelector('.block7').onclick = function() {
  if (styled7) {
    document.querySelector('.block7').style.background = 'white';
    mold();
    styled7 = false;
  }
}
let styled8 = false;
document.querySelector('.block8').onclick = function() {
  if (styled8) {
    document.querySelector('.block8').style.background = 'white';
    mold();
    styled8 = false;
  }
}
let styled9 = false;
document.querySelector('.block9').onclick = function() {
  if (styled9) {
    document.querySelector('.block9').style.background = 'white';
    mold();
    styled9 = false;
  }
}

let previousRandomNumber;
let randomNumber = Math.floor(Math.random()*9);

function mold() { 
  previousRandomNumber = randomNumber;
  console.log(randomNumber);

  while (randomNumber === previousRandomNumber) {
    randomNumber = Math.floor(Math.random()*9);
  }

  if (randomNumber === 0) {
      document.querySelector('.block1').style.background = 'black';
      styled = true;
  } else if (randomNumber === 1) {
      document.querySelector('.block2').style.background = 'black';
      styled2 = true;
  } else if (randomNumber === 2) {
      document.querySelector('.block3').style.background = 'black';
      styled3 = true;
  } else if (randomNumber === 3) {
      document.querySelector('.block4').style.background = 'black';
      styled4 = true;
  } else if (randomNumber === 4) {
      document.querySelector('.block5').style.background = 'black';
      styled5 = true;
  } else if (randomNumber === 5) {
      document.querySelector('.block6').style.background = 'black';
      styled6 = true;
  } else if (randomNumber === 6) {
      document.querySelector('.block7').style.background = 'black';
      styled7 = true;
  } else if (randomNumber === 7) {
      document.querySelector('.block8').style.background = 'black';
      styled8 = true;
  } else {
      document.querySelector('.block9').style.background = 'black';
      styled9 = true;
  }

} 
mold();
