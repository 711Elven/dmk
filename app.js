let styled = false;
document.querySelector('.block1').onclick = function() {
  if (!styled) {
    document.querySelector('.block1').style.background = 'white';
    styled = true;
  }
}
let styled2 = false;
document.querySelector('.block2').onclick = function() {
  if (!styled2) {
    document.querySelector('.block2').style.background = 'white';
    styled2 = true;
  }
}let styled3 = false;
document.querySelector('.block3').onclick = function() {
  if (!styled3) {
    document.querySelector('.block3').style.background = 'white';
    styled3 = true;
  }
}let styled4 = false;
document.querySelector('.block4').onclick = function() {
  if (!styled4) {
    document.querySelector('.block4').style.background = 'white';
    styled4 = true;
  }
}
let styled5 = false;
document.querySelector('.block5').onclick = function() {
  if (!styled5) {
    document.querySelector('.block5').style.background = 'white';
    styled5 = true;
  }
}
let styled6 = false;
document.querySelector('.block6').onclick = function() {
  if (!styled6) {
    document.querySelector('.block6').style.background = 'white';
    styled6 = true;
  }
}let styled7 = false;
document.querySelector('.block7').onclick = function() {
  if (!styled7) {
    document.querySelector('.block7').style.background = 'white';
    styled7 = true;
  }
}let styled8 = false;
document.querySelector('.block8').onclick = function() {
  if (!styled8) {
    document.querySelector('.block8').style.background = 'white';
    styled8 = true;
  }
}
let styled9 = false;
document.querySelector('.block9').onclick = function() {
  if (!styled9) {
    document.querySelector('.block9').style.background = 'white';
    styled9 = true;
  }
}

let randomNumber = (Math.floor(Math.random()*8));

console.log(randomNumber);
if (randomNumber === 0) {
  console.log('Without a doubt.');
} else if (randomNumber === 1) {
  console.log('Outlook good.');
} else if (randomNumber === 2) {
  console.log('Better not tell you now.');
} else if (randomNumber === 3) {
  console.log('My reply is no.'); 
} else if (randomNumber === 4) {
  console.log('Ask again later.');
} else if (randomNumber === 5) {
  console.log("Can't predict now.");
} else if (randomNumber === 6) {
  console.log('My sources say no.');
} else if (randomNumber === 7) {
  console.log('Very doubtful.');
} else {
  console.log('Concentrate and ask again.');
}
    
  