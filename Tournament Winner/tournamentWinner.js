const HOME_TEAM_WON = 1; //define a global variable to store a 1 to signify that the home team won

function tournamentWinner(competitions, results) {
  // Write your code here.
	let currentWinningTeam = "";// define a variable that will store an empty array and eventually 
	//store the current team with the most points
	const scoreCount = {[currentWinningTeam]: 0};//declare an object that will store the current
	//winning team and it's score
	for (let i = 0; i < competitions.length; i++) {//iterate through the competions array
		const result = results[i]//define a variable that will store the value of current index 
		const [home, away] = competitions[i]; //deconstruct the variables home and away from the current
		//value of the index in the competitions array
		const winningTeam = result === HOME_TEAM_WON ? home : away;//define a variable that will be either
		//the home team or the away team depending on the value of the current index at the results array
		
		updateScores(winningTeam, 3, scoreCount);//call the helper function defined below
		
		if (scoreCount[winningTeam] > scoreCount[currentWinningTeam]) {//compare the value of the winning team
			//key in the score count obj. If it is greater than the value of the current winning team at the 
			//score count object...
			currentWinningTeam = winningTeam; //... switch the current winning team with the winning team
		}
		
	}
	
  return currentWinningTeam; //return the current winning team
}

function updateScores(team, points, scores) {
	if (!(team in scores)) scores[team] = 0;//if the winning team is not in the score count object, 
	//add a new key value pair where the winning team has a value of 0
	scores[team] += points;//otherwise, add 3 points to the winning team in the score count object
}