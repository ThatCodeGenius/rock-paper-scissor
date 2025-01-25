let computerMoveIcon = document.querySelector('.js-player-move-icon');

    let playerMoveIcon = document.querySelector('.js-computer-move-icon');

    const buttons = document.querySelectorAll('.js-Player-Button');

    /*The code listens for a click event on each button. When a button is clicked, it triggers the computerMove function. This function generates a random number between 0 and 15, then assigns a move ('Rock', 'Paper', or 'Scissors') to the variable computerChoice based on the number. The result is printed to the console.*/

    const resetGameButton = document.querySelector('.js-Reset-Button');


    buttons.forEach(button => button.addEventListener('click', () => {

      const playerMove = button.dataset.playerMove;



      let randomnumber = Math.floor(Math.random() * 16);

      let computerChoice;  // Determine the computer's choice based on the random number

      if (randomnumber >= 0 && randomnumber <= 5) {
        computerChoice = 'Rock';

      } else if (randomnumber > 5 && randomnumber <= 10) {
        computerChoice = 'Paper';

      } else if (randomnumber > 10 && randomnumber <= 15) {
        computerChoice = 'Scissors';
      }

      GameResult(computerChoice, playerMove);
    }

    ));



    function GameResult(computerChoice, playerMove, ) {

      // The first 'if statement' checks the player move to know which player button was clicked afterwhich, the second 'if statement' compared the computerChoice which is a result generated through the Math.random method. 
      let result = '';

      if (playerMove === 'Rock') {

        if (computerChoice === 'Rock') {
          result = 'Tie';
        } else if (computerChoice === 'Paper') {
          result = 'You lose';
        }
        else if (computerChoice === 'Scissors') {
          result = 'You win';
        }


      } else if (playerMove === 'Paper') {

        if (computerChoice === 'Paper') {
          result = 'Tie';
        } else if (computerChoice === 'Rock') {
          result = 'You win';
        }
        else if (computerChoice === 'Scissors') {
          result = 'You lose';
        }


      } else if (playerMove === 'Scissors') {

        if (computerChoice === 'Paper') {
          result = 'You win';
        } else if (computerChoice === 'Rock') {
          result = 'You lose';
        }
        else if (computerChoice === 'Scissors') {
          result = 'Tie';
        }

      };
      console.log(`You picked ${playerMove}, Computer picked ${computerChoice}`);

      const ScoreBoard = document.querySelector('.js-game-result').innerHTML = result;

      updateGameResult(result)

      document.querySelector('.js-game-Score').innerHTML = `Score: Wins: ${gameScore.win}, Losses: ${gameScore.losses}, Ties: ${gameScore.ties}`


      document.querySelector('.js-playerDashboard').innerHTML = `You  
      <img class="move-icon js-player-move-icon" src="images/icons8-${playerMove}.png">
      <img class="move-icon js-computer-move-icon" src="images/icons8-${computerChoice}.png">
      Computer`;
    };

    /*The below gameScore that has the or operator i.e || is same as using the if statement below*/
    let gameScore = JSON.parse(localStorage.getItem("gameScore"));
    // || {
    //   win: 0,
    //   losses: 0,
    //   ties: 0
    // };

    /* if (gameScore === null) {
       gameScore =
       {
         win: 0,
         losses: 0,
         ties: 0
       }
     };
 */
    function updateLocalStorage() {
      localStorage.setItem("gameScore", JSON.stringify(gameScore));
    }

    function updateGameResult(result) {

      if (result === 'You win') {
        gameScore.win += 1;

      } else if (result === 'You lose') {
        gameScore.losses += 1;

      } else if (result === 'Tie') {
        gameScore.ties += 1;
      }

      updateLocalStorage()
      // Update localStorage with the latest score
      // localStorage.setItem("gameScore", JSON.stringify(gameScore));
    };

    /* The below lines of codes stores the game scores to localStorage, but before storing the score to localStorage, we first have to convert the score to JSON uisng JSOn.stringify(), as localStorage only stores string and our scores contains numbers as well as javaScript object.
    Update score to localStorage
    */

    function resetGame() {
      gameScore.win = 0;
      gameScore.losses = 0;
      gameScore.ties = 0;

      document.querySelector('.js-game-Score').innerHTML = `Score: Wins: ${gameScore.win}, Losses: ${gameScore.losses}, Ties: ${gameScore.ties}`;

      updateLocalStorage()
      // Optionally update the score in localStorage
      // localStorage.setItem("gameScore", JSON.stringify(gameScore));

      const ScoreBoard = document.querySelector('.js-game-result').innerHTML = '';
    };

    resetGameButton.addEventListener('click', resetGame);
