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

