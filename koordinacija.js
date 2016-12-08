var startTime = new Date().getTime();

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function makeShapeAppear() {

  // TO DO: Nisi dovoljno brz, nisi dovoljno lud

  // TO DO: High score

  var top = Math.random() * 400;

  var left = Math.random() * 1300;

  var width = ((Math.random() * 200) + 100);

  if (Math.random() > 0.5) {

    document.getElementById('shape').style.borderRadius = "50%";

  } else {

    document.getElementById('shape').style.borderRadius = "0";

  }

  document.getElementById('shape').style.width = width + "px";

  document.getElementById('shape').style.height = width + "px";

  document.getElementById('shape').style.top = top + "px";

  document.getElementById('shape').style.left = left + "px";

  document.getElementById('shape').style.display = "block";

  document.getElementById('shape').style.backgroundColor = getRandomColor();

  startTime = new Date().getTime();

}

function appearDelay() {

  setTimeout (makeShapeAppear, (Math.random() * 2) * 800);

}

appearDelay();

document.getElementById('shape').onclick = function() {

  document.getElementById('shape').style.display = "none";

  var endTime = new Date().getTime();

  var elapsedTime = (endTime - startTime) / 1000;

  document.getElementById('timer').innerHTML = elapsedTime + " seconds";

  appearDelay();

}
