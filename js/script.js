function playGame(playerInput){

	clearMessages();

	let randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Wylosowana liczba to: ' + randomNumber);


	let computerMove = getMoveName(randomNumber);

	printMessage('Mój ruch to: ' + computerMove);

	/*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

	console.log('Gracz wpisał: ' + playerInput);

	let playerMove = getMoveName(playerInput);

	printMessage('Twój ruch to: ' + playerMove);

	let argComputerMove = computerMove;
	let argPalyerMove = playerMove;

	printMessage('Wynik = ' + displayResult(argComputerMove, argPalyerMove));
}

document.getElementById('play-rock').addEventListener('click', function(){
	playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
	playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
	playGame(3);
});
