// the highscore should be ordered and should save all user data 
// the highscores should be saved to localStorage so that if I refresh, the data stays, and later 
// I can clear the data

// Display user initials and score
// Get the value of saved-initials and saved-score from localStorage
let savedInitials = localStorage.getItem('saved-initials');
let savedScore = localStorage.getItem('saved-finalScore');


const resultFromStorage = JSON.parse(localStorage.getItem('highscores'));
// Create an object
const newResult = {
    initials: savedInitials,
    score: savedScore,
};

resultFromStorage.push(newResult);

// Create a function to display user initials and score
function displayScoreInitials () {
    // Create ul for each result in the ol tag
    let result = document.createElement('ul');
    // Add content to each ul element from user input: initials and score
    result.textContent = initials;
    // result.textContent = 
}

