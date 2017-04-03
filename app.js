var position = 0;
var test;
var test_status;
var question;
var choice;
var choices;
var chA;
var chB;
var chC;
var chD;
var correct = 0;

var questions = [
	['What is a nickname for Manchester United FC?', 'The Red Dragons', 'The Red Devils', 'The Blue Devils', 'The Deviled Eggs', 'B'],
	['The current manager of Manchester United FC is ____________?', 'Alexander Ferguson', 'Diego Maradona', 'Jose Mourinho', 'Landon Donovan', 'C'],
	['Which American goalie also played goalie for Manchester United FC?', 'Clint Dempsey', 'Pele', 'Tim Howard', 'Michael Scott', 'C'],
	['The home stadium of Manchester United FC is _____________?', 'The Thunder Dome', 'The Field of Dreams', 'Wembley Stadium', 'Old Trafford', 'D'],
	['The Manchester Derby is between two rival Manchester teams including Manchester United and what other team?', 'Manchester Town', 'Manchester City', 'Manchesterville', 'Manchesterville Town City', 'B'],
	['Which midfielder did Manchester United sign for a record fee from Italian club Juventus at the beginning of the season?', 'Po Paula', 'Pele', 'Paulo Pogo', 'Paul Pogba', 'D'],
	['Which player currently holds the record for most goals scored for Manchester United?', 'Wayne Rooney', 'Bobby Charlton', 'Denis Law', 'Jack Rowley', 'A'],
	['Which player currently holds the record for most career appearances for Manchester United?', 'Bobby Charlton', 'Paul Scholes', 'Ryan Giggs', 'Bill Foulkes', 'C'],
	['Which player won the FIFA World Player of the Year award while playing for Manchester United?', 'David Beckham', 'Cristiano Ronaldo', 'Christian Ronald', 'Ronald McDonald', 'B'],
	['Who has spent the longest amount of time managing Manchester United?', 'Alexander Ferguson', 'Jose Mourinho', 'David Moyes', 'Louis Van Gaal', 'A']
];

function get(x) {
	return document.getElementById(x);
}

function renderQuestion () {
	test = get('js-ques1');
	get('js-question-count').innerHTML = 'Question ' + (position + 1) + " of" + questions.length;
	question = questions[position][0];
	chA = questions[position][1];
	chB = questions[position][2];
	chC = questions[position][3];
	chD = questions[position][4];
	test.innerHTML = '<h3>' + question + '</h3>';
	test.innerHTML += "<input type='radio' name='choices' value='A'>" + chA + '<br>';
	test.innerHTML += "<input type='radio' name='choices' value='B'>" + chB + '<br>';
	test.innerHTML += "<input type='radio' name='choices' value='C'>" + chC + '<br>';
	test.innerHTML += "<input type='radio' name='choices' value='D'>" + chD + '<br><br>';
	test.innerHTML += "<button onlcick='checkAnswer()'>Submit Answer</button>";
}


function checkAnswer() {
	alert('testing');
}

$(function() {
	renderQuestion();
});
