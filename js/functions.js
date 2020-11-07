function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(randomNumber){
	if(randomNumber == 1){
		return 'kamień';
	}else if (randomNumber == 2){
		return 'papier';
	}else if (randomNumber == 3){
		return 'nożyce';
	}
}

function displayResult(argComputerMove, argPlayerMove){
	console.log('moves:', argComputerMove, argPlayerMove);
	
	if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
		return 'Ty wygrywasz!';
	}else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
		return 'Ty przegrywasz :(';
	}else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
		return 'Remis';
	}else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
		return 'Remis';
	}else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
		return 'Ty wygrywasz!';
	}else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
		return 'Ty przegrywasz ;(';
	}else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
		return 'Remis';
	}else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
		return 'Ty przegrywasz ;(';
	}else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
		return 'Ty wygrywasz!';
	}else{
		return 'Żle wybrałeś!';
	}
}
