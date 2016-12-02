/**
 * Created by Cang Le on 8/17/2016.
 */



//get width of Chocobo
var ChocoboWidth = document.getElementById("ChocoboKnight").offsetWidth;

//get the width of the race track
var raceTrackWidth = (document.getElementById("raceTrack").offsetWidth) - ChocoboWidth;

//generate random number
function dancerInitalSpeed() {
  return Math.floor(Math.random() * 10 + 1);
}

function knightInitalSpeed() {
  return Math.floor(Math.random() * 10 + 1);
}

function dancerTurboSpeed() {
  return Math.floor(Math.random() * 401 + 200); //will generate random # between 200 - 500
}

function knightTurboSpeed() {
  return Math.floor(Math.random() * 401 + 200); //will generate random # between 200 - 500
}


//check result for winner
var completeRace = false;
var result = '1st';

function finishLine() {
  if (completeRace == false) {
    completeRace = true
  }
  else {
    result = '2nd';
  }
}

//check result on halfway
var halfWay = true;
var halfWayResult = 'This one is winning!!';

function halfwayLine() {
  if (halfWay == true) {
    halfWay = false;
  }
  else {
    return halfWayResult = 'oh no..this one needs to catch up!!'
  }
}



//start button
function startRace() {

  var dancerPosition = 0; //positioning the image
  var chocoboDancer = document.getElementById('ChocoboDancer');
  var dancerInterval = setInterval(dancerParameter, dancerInitalSpeed() ); //frame between 1-10ms
  function dancerParameter() {
    dancerPosition++;
    chocoboDancer.style.left = dancerPosition + 'px'; // show frame
    if (dancerPosition == 400) {
      halfwayLine();
      document.getElementById('span1').innerHTML = halfWayResult;
    }
    else if (dancerPosition > 400 && dancerPosition < 900) {
      if (knightPosition > dancerPosition) {
        dancerPosition = dancerPosition + dancerTurboSpeed();
      }
    }
    else if (dancerPosition == raceTrackWidth ) {
      clearInterval(dancerInterval); // check finish condition
        finishLine();
      document.getElementById('span1').innerHTML = 'Chocobo Dancer comes in ' + result + ' place' + ' @ ' + dancerInitalSpeed() + ' milliseconds';
    }
  }

  var knightPosition = 0; //positioning the image
  var chocoboKnight = document.getElementById('ChocoboKnight');
  var knightInterval = setInterval(knightParameter, knightInitalSpeed() ); //frame between 1-10ms
  function knightParameter() {
    knightPosition++;  // update parameters
    chocoboKnight.style.left = knightPosition + 'px'; // show frame

    if (knightPosition == 400) {
      halfwayLine();
      document.getElementById('span2').innerHTML = halfWayResult;
    }
    else if (knightPosition > 400 && knightPosition < 900) {
      if (dancerPosition > knightPosition) {
        knightPosition = knightPosition + knightTurboSpeed();
      }
    }
    else if (knightPosition == raceTrackWidth) {
      clearInterval(knightInterval); // check finish condition
      finishLine();
      document.getElementById('span2').innerHTML = 'Chocobo knight comes in ' + result + ' place' + ' @ ' + knightInitalSpeed() + ' milliseconds';
    }
  }
}

//var  time = raceTrackWidth / (1 / (dancerSpeed/1000))



function reset() {
  var targett = document.getElementsByClassName('Chocobo');
  targett.css('left','0');
  var chocoboDancer = document.getElementById('ChocoboDancer');
  chocoboDancer.style.right = 0 + 'px'; // show frame
}



//reset button
//function reset() {
//  var targett = document.getElementsByClassName('Chocobo');
//  targett.css('left','0');
//}

