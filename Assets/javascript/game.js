$(document ).ready(function(){
//random number generator between 19 - 120
var Random=Math.floor(Math.random()*101+19);

//reslt of the random number appended in randomNumber id html doc
$('#randomNumber').text(Random);

//random number generator for each crystal between 1 - 12
var num1 = Math.floor((Math.random() * 11) + 1);
var num2 = Math.floor((Math.random() * 11) + 1);
var num3 = Math.floor((Math.random() * 11) + 1);
var num4 = Math.floor((Math.random() * 11) + 1);

// declare variables for comparison


var wins = 0;
var losses = 0;
var playerTotal =0;

$('#numberWins').text(wins);
$('#numberLosses').text(losses);
$('#totalScore').text(playerTotal);

//reset the game 

function reset(){
	 Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);

		playerTotal = 0;

	$('#totalScore').text(playerTotal);
}

// add win to the userTotal

function winner(){
	alert('You Won!');
	wins++;
	$('#numberWins').text(wins);
	reset();
}


//add losses to the userTotal
function looser(){
	alert('You Lost!');
	losses++;
	$('#numberLosses').text(losses);
	reset();
}

//generate number on crystal click
$('#blue').on ('click', function(){
	playerTotal = playerTotal + num1;
	
	$('#totalScore').text(playerTotal);

	if(playerTotal == Random){
		winner();
	}
	else if(playerTotal > Random){
		looser();
	}
})

$('#green').on ('click', function(){
	playerTotal = playerTotal + num2;

	$('#totalScore').text(playerTotal);

	if(playerTotal == Random){
		winner();
	}
	else if(playerTotal > Random){
		looser();
	}
})

$('#red').on ('click', function(){
	playerTotal = playerTotal + num3;
	
	$('#totalScore').text(playerTotal);

	if(playerTotal == Random){
		winner();
	}
	else if(playerTotal > Random){
		looser();
	}
})
$('#yellow').on ('click', function(){
	playerTotal = playerTotal + num4;

	$('#totalScore').text(playerTotal);

	if(playerTotal == Random){
		winner();
	}
	else if(playerTotal > Random){
		looser();
	}
});
});
