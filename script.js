var wins = 0; // Assigned score
var ties = 0;
var losses = 0;

var options = ["R", "P", "S"]; // array of options

var playGame = function () {
    // prompt of user choice to display type of choices 
    var userChoice = window.prompt("Enter R, P, or S to paly the game");

    if (!userChoice) {
        return;
    }
    // if user interned lowercase we can transfer it to uppercase to be red the correct way
    userChoice = userChoice.toUpperCase();
// create random choices by creating math.floor(math.random() * array of option)
    var math = Math.floor(Math.random() * options.length);
    var compareChoice = options[math]; // then we assigned it to computer choice

    window.alert("The computer choose " + compareChoice);

    if (userChoice === compareChoice) {
        ties++
        window.alert("It's a tie");
    } else if (
    (userChoice === "R" && compareChoice === "S") ||
    (userChoice === "P" && compareChoice === "R") ||
    (userChoice === "S" && compareChoice === "P") 
    ){
        wins++;
        window.alert("You Won");
    } else {
        losses++;
        window.alert("You Lost");
    }

    window.alert(
        "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies " + ties
    );


    var playAgain = window.confirm("Play Again ?!");

    if (playAgain) {
        playGame();
    }

};



playGame();