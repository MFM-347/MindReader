let body = document.body,
  btn = document.getElementById('btn'),
  mode = document.querySelector('.mode');

body.setAttribute('data-bs-theme', 'light');
btn.classList.add('btn-outline-dark');
mode.innerText = 'Light'

btn.onclick = () => {
  const isDark = body.getAttribute('data-bs-theme') === 'dark';
  body.setAttribute('data-bs-theme', isDark ? 'light' : 'dark');
  btn.classList.toggle('btn-outline-dark', isDark);
  btn.classList.toggle('btn-outline-light', !isDark);
  mode.innerText = isDark ? "light" : "Dark"
}
body = document.body,
  btn = document.getElementById('btn'),
  mode = document.querySelector('.mode');

body.setAttribute('data-bs-theme', 'light');
btn.classList.add('btn-outline-dark');
mode.innerText = 'Light'

btn.onclick = () => {
  const isDark = body.getAttribute('data-bs-theme') === 'dark';
  body.setAttribute('data-bs-theme', isDark ? 'light' : 'dark');
  btn.classList.toggle('btn-outline-dark', isDark);
  btn.classList.toggle('btn-outline-light', !isDark);
  mode.innerText = isDark ? "Light" : "Dark";
}

var x = 0,
  step = 0;
var steps = [];

function startGame() {
  x = 0;
  step = 0;
  var today = new Date();
  var sec = today.getSeconds();
  steps = [];
  steps.push("Please think of a number first.");
  for (var i = 1; i <= 5; i++) {
    var rand1 = 31;
    while (rand1 > 30) {
      rand1 = Math.ceil(Math.random() * sec * 100);
    }
    var rand2 = Math.random();
    var y = rand2 > 0.5 ? rand1 : -rand1;
    var mes = y > 0 ? "add " : "subtract ";
    var mes1 = y > 0 ? " to " : " from ";
    var x1 = x;
    x += y;

    if (x < 0) {
      mes = "add ";
      mes1 = " to ";
      x = x1 + rand1;
    }

    steps.push(`Please ${mes}${Math.abs(rand1)}${mes1}your number.`);
  }
  steps.push("Please subtract the original number you thought of.");
  steps.push(`Now you have the number ${x} in your mind, don't you?`);

  showStep();
}

function showStep() {
  if (step < steps.length) {
    $('#gameMessage').text(steps[step]);
    $('#gameModal').modal('show');
    step++;
  } else {
    $('#gameModal').modal('hide');
  }
}

$(document).ready(function () {
  $('#startGame').click(function () {
    startGame();
  });

  $('#nextStep').click(function () {
    showStep();
  });
});