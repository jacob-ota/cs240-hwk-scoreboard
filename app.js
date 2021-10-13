/**
 * Scoreboard Homework
 * @author Jacob Ota
 */
//add and minus for + / - buttons on scoreboard
let add_run = document.querySelector("#add");
let min_run = document.querySelector("#subtract");

//node for the total run column boxes
let a_runs = document.querySelector("#away_runs");
let h_runs = document.querySelector("#home_runs");

//a counter for both away and home run totals
let away_run_counter = 0;
let home_run_counter = 0;

//run adder and subtractors

/**
 * A function that adds runs to the away team by adding to the specific inning, 
 * identified by the param indentifier, and also counts up the total runs and 
 * displays them to the away team's total run column.
 * 
 * @param {*} identifier 
 */
function away_adder(identifier) {
    add_run.addEventListener("click", () => {
        let inning = document.querySelector(identifier);
        let inningCounter = inning.innerHTML;
        //adjust inning and total runs
        inningCounter++;
        inning.innerHTML = inningCounter;
        away_run_counter++;
        a_runs.innerHTML = away_run_counter;
    });
}

/**
 * A function that subtracts runs away from the away team at a specific inning, 
 * identified by the param indentifier, unless the run number in that inning is 
 * at 0, and it also adjusts the away team's total run column.
 * 
 * @param {*} identifier 
 */
function away_subtractor(identifier) {
    min_run.addEventListener("click", () => {
        let inning = document.querySelector(identifier);
        let inningCounter = inning.innerHTML;
        //checks if inning runs are already at 0
        if(inning.innerHTML != 0) {
            //adjust inning and total runs
            inningCounter--;
            inning.innerHTML = inningCounter;
            away_run_counter--;
            a_runs.innerHTML = away_run_counter;
        }
    });
}

/**
 * A function that adds runs to the home team by adding to the specific inning, 
 * identified by the param indentifier, and also counts up the total runs and 
 * displays them to the home team's total run column.
 * 
 * @param {*} identifier 
 */
function home_adder(identifier) {
    add_run.addEventListener("click", () => {
        let inning = document.querySelector(identifier);
        let inningCounter = inning.innerHTML;
        //adjust inning and total runs
        inningCounter++;
        inning.innerHTML = inningCounter;
        home_run_counter++;
        h_runs.innerHTML = home_run_counter;
    });
}

/**
 * A function that subtracts runs away from the home team at a specific inning, 
 * identified by the param indentifier, unless the run number in that inning is 
 * at 0, and it also adjusts the home team's total run column.
 * 
 * @param {*} identifier 
 */
function home_subtractor(identifier) {
    min_run.addEventListener("click", () => {
        let inning = document.querySelector(identifier);
        let inningCounter = inning.innerHTML;
        //checks if inning runs is at 0
        if(inning.innerHTML != 0) {
            //adjust inning and total runs
            inningCounter--;
            inning.innerHTML = inningCounter;
            home_run_counter--;
            h_runs.innerHTML = home_run_counter;
        };
    });
}

//specify inning and who and utilize adders and subtractors
//add code


//songs and picture changes

let pic = document.querySelector("img");
//create audio for the three mp3's
let buildup = new Audio("sounds/buildup.mp3");
let charge1 = new Audio("sounds/charge1.mp3");
let charge2 = new Audio("sounds/charge2.mp3");
let music = document.querySelector("#charge");
//on click play a random song and randomly display the megaphone image
music.addEventListener("click", () => {
    let rand = Math.floor(Math.random()*3) + 1;
    let pic_rand = Math.random();
    //random chance that a megaphone image replaces the ups logo
    if(pic_rand < .5) {
        pic.src = "images/megaphone.png";
    }
    //play random song, and replace ups logo back if megaphone is used
    //looked into W3schools website and learned about the .onended()
    if(rand == 1) {
        buildup.play();
        buildup.onended = () => {
            pic.src = "images/ups.png";
        };
    }
    else if(rand == 2) {
        charge1.play();
        charge1.onended = () => {
            pic.src = "images/ups.png";
        };
    }
    else if(rand == 3) {
        charge2.play();
        charge2.onended = () => {
            pic.src = "images/ups.png";
        };
    }
});

//create an audio for the chicken song
let chicken = document.querySelector("#chicken");
let chicken_song = new Audio("sounds/chickendance.mp3");
chicken.addEventListener("click", () => {
    pic.src = "images/sdchicken.jpg";
    chicken_song.play();
    //after song has played replace the chicken jpg with the ups logo
    chicken_song.onended = () => {
        pic.src = "images/ups.png";
    };
});
