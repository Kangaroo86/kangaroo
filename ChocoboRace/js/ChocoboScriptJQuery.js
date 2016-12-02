/**
 * Created by Cang Le on 10/9/2016.
 */


//get width of Chocobo and roadTrack
var chocoboWidth = $('#ChocoboKnight').width();
var raceTrackWidth = $('#raceTrack').width() - chocoboWidth;

//genearating random number between 1 and 5
var raceTime1 = Math.floor(Math.random()*(5000 - 1000) + 1000);
var raceTime2 = Math.floor(Math.random()*(5000 - 1000) + 1000);


//generate random number
function dancerInitalSpeed() {
  return Math.floor(Math.random()*(5000 - 1000) + 1000);
}

function knightInitalSpeed() {
  return Math.floor(Math.random()*(5000 - 1000) + 1000);
}

function dancerTurboSpeed() {
  return Math.floor(Math.random() * 401 + 200); //will generate random # between 200 - 500
}

function knightTurboSpeed() {
  return Math.floor(Math.random() * 401 + 200); //will generate random # between 200 - 500
}


//check if race is finish
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


//Go button
$('#go').click(function() {
    $('#ChocoboDancer').animate({
        left: raceTrackWidth
    },raceTime1, function() {
        finishLine();
        $('#span1').html('Chocobo Dancer comes in ' + result + ' place' + ' @ ' + raceTime1/1000 + ' seconds!!');
    });

    $('#ChocoboKnight').animate({
        left: raceTrackWidth
    },raceTime2, function() {
        finishLine();
        $('#span2').html('Chocobo Knight comes in ' + result + ' place' + ' @ ' + raceTime2/1000 + ' seconds!!');

    });

});
