
let scoreObject; 
let highscoresFromStorage = [];

// Create a function to display user initials and score
function displayScoreInitials () {
    let highscoresFromLocalStorage = JSON.parse(localStorage.getItem('highscores'));
    console.log(highscoresFromLocalStorage);
    // Get saved initials and score from localStorage
    let initials = localStorage.getItem('saved-initials');
    let score = localStorage.getItem('saved-finalScore');

    console.log(initials , score);
    // initials = null --> falsy value
    if(initials && score){
        scoreObject = { initials: initials, score: score };
        // if the user plays for the first time
        if (highscoresFromLocalStorage === null) {
            highscoresFromLocalStorage = [];
            highscoresFromLocalStorage.push(scoreObject);
            localStorage.setItem('highscores', JSON.stringify(highscoresFromLocalStorage));
        } else {
            highscoresFromLocalStorage.push(scoreObject);
            localStorage.setItem('highscores', JSON.stringify(highscoresFromLocalStorage));
        }
        
    }
    
    // highscoresFromStorage.push(scoreObject);
    // Select parent ol element 
    if (highscoresFromLocalStorage) {
        let olEl = document.querySelector("#highscores");
        // loop through highscores array and create li for each user input
        highscoresFromLocalStorage.forEach((key) => {
            // Create ul for each result in the ol tag
            let liEl = document.createElement('li');
            // Add content to each ul element from user input: initials and score
            liEl.textContent = key.initials + ' - ' + key.score;
            olEl.appendChild(liEl);
});
    }
    console.log(scoreObject);
}

displayScoreInitials();


// Clear highscores
// Select Clear Highscores button 
let clearBtn = document.querySelector("#clear");
// Add eventListener to a buton
clearBtn.addEventListener('click', function() {
    
     // Clear existing content
     let finalScore = document.querySelector('#highscores');
     localStorage.removeItem("highscores");
     localStorage.removeItem("saved-initials");
     localStorage.removeItem("saved-finalScore");
     finalScore.innerHTML = '';

});