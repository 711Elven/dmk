let styled = false;
let value = 0;

document.querySelector('#value').innerHTML = value.toString();
document.querySelector('.block1').onclick = function() {
  if (styled) {
    document.querySelector('.block1').style.background = 'white';
    mold();
    styled = false;
    value++;
    document.querySelector('#value').innerHTML = value.toString();
  }
}
let styled2 = false;
document.querySelector('.block2').onclick = function() {
  if (styled2) {
    document.querySelector('.block2').style.background = 'white';
    mold();
    styled2 = false;
    value++;
    document.querySelector('#value').innerHTML = value.toString();
  }
}
let styled3 = false;
document.querySelector('.block3').onclick = function() {
  if (styled3) {
    document.querySelector('.block3').style.background = 'white';
    mold();
    styled3 = false;
    value++;
    document.querySelector('#value').innerHTML = value.toString();
  }
}
let styled4 = false;
document.querySelector('.block4').onclick = function() {
  if (styled4) {
    document.querySelector('.block4').style.background = 'white';
    mold();
    styled4= false;
    value++;
    document.querySelector('#value').innerHTML = value.toString();
  }
}
let styled5 = false;
document.querySelector('.block5').onclick = function() {
  if (styled5) {
    document.querySelector('.block5').style.background = 'white';
    mold();
    styled5 = false;
    value++;
    document.querySelector('#value').innerHTML = value.toString();
  }
}
let styled6 = false;
document.querySelector('.block6').onclick = function() {
  if (styled6) {
    document.querySelector('.block6').style.background = 'white';
    mold();
    styled6 = false;
    value++;
    document.querySelector('#value').innerHTML = value.toString();
  }
}
let styled7 = false;
document.querySelector('.block7').onclick = function() {
  if (styled7) {
    document.querySelector('.block7').style.background = 'white';
    mold();
    styled7 = false;
    value++;
    document.querySelector('#value').innerHTML = value.toString();
  }
}
let styled8 = false;
document.querySelector('.block8').onclick = function() {
  if (styled8) {
    document.querySelector('.block8').style.background = 'white';
    mold();
    styled8 = false;
    value++;
    document.querySelector('#value').innerHTML = value.toString();
  }
}
let styled9 = false;
document.querySelector('.block9').onclick = function() {
  if (styled9) {
    document.querySelector('.block9').style.background = 'white';
    mold();
    styled9 = false;
    value++;
    document.querySelector('#value').innerHTML = value.toString();
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

function startTimer(duration, display) {
  var start = Date.now(),
      diff,
      minutes,
      seconds;
  function timer() {
      // get the number of seconds that have elapsed since 
      // startTimer() was called
      diff = duration - (((Date.now() - start) / 1000) | 0);

      // does the same job as parseInt truncates the float
      minutes = (diff / 60) | 0;
      seconds = (diff % 60) | 0;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds; 

      if (diff <= 0) {
          // add one second so that the count down starts at the full duration
          // example 05:00 not 04:59
          start = Date.now() + 1000;
          alert('Game Over! Refresh the page to play again.');
          
          value = 0;
          document.querySelector('#value').innerHTML = value.toString();
         

      }
  };
  // we don't want to wait a full second before the timer starts
  timer();
  setInterval(timer, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 0.5,
      display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
};


// Grid to help re-position the score
// Styling if u want
