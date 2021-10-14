/**
 * Scoreboard Homework
 * @author Jacob Ota
 */
//add and minus for + / - buttons on scoreboard
let add_run = document.querySelector("#adder");
let min_run = document.querySelector("#subtract");

//node for the total run column boxes
let a_runs = document.querySelector("#away_runs");
let h_runs = document.querySelector("#home_runs");

//a counter for both away and home run totals
let away_run_counter = 0;
let home_run_counter = 0;

//specify inning and who and utilize adders and subtractors
let hitting = document.querySelector("#hitting");
let inning = document.querySelector("#number");

const grid_boxes = {};

grid_boxes.first_away = document.querySelector("#first_a");
grid_boxes.first_home = document.querySelector("#first_home");
grid_boxes.second_away = document.querySelector("#second_away");
grid_boxes.second_home = document.querySelector("#second_home");
grid_boxes.third_away = document.querySelector("#third_away");
grid_boxes.third_home = document.querySelector("#third_home");
grid_boxes.fourth_away = document.querySelector("#fourth_away");
grid_boxes.fourth_home = document.querySelector("#fourth_home");
grid_boxes.fifth_away = document.querySelector("#fifth_away");
grid_boxes.fifth_home = document.querySelector("#fifth_home");
grid_boxes.sixth_away = document.querySelector("#sixth_away");
grid_boxes.sixth_home = document.querySelector("#sixth_home");
grid_boxes.seventh_away = document.querySelector("#seventh_away");
grid_boxes.seventh_home = document.querySelector("#seventh_home");

//implements adders and subtractors
//first inning without changes to the control console
if(inning.value == 1) {
    add_run.addEventListener("click", first_away_adder, false);
    min_run.addEventListener("click", first_away_subtractor, false);
    hitting.addEventListener("change", () => {
        if(hitting.value == "HOME") {
            add_run.removeEventListener("click", first_away_adder, false);
            min_run.removeEventListener("click", first_away_subtractor, false);
            add_run.addEventListener("click", first_home_adder, false);
            min_run.addEventListener("click", first_home_subtractor, false);
        }
        else if(hitting.value == "AWAY") {
            add_run.removeEventListener("click", first_home_adder, false);
            min_run.removeEventListener("click", first_home_subtractor, false);
            add_run.addEventListener("click", first_away_adder, false);
            min_run.addEventListener("click", first_away_subtractor, false);
        };
    });
};

inning.addEventListener("change", innings, false);
inning.oninput = () => {
    inning.removeEventListener("change", innings, false);
    inning.addEventListener("change", innings, false);
}
/**
 * A function that deals with the updates of the teams runs in the first inning
 * 
 * @param {*} identifier 
 */
 function innings() {
    if(inning.value == 1) {
        add_run.addEventListener("click", first_away_adder, false);
        min_run.addEventListener("click", first_away_subtractor, false);
        hitting.addEventListener("change", () => {
            if(hitting.value == "HOME") {
                add_run.removeEventListener("click", first_away_adder, false);
                min_run.removeEventListener("click", first_away_subtractor, false);
                add_run.addEventListener("click", first_home_adder, false);
                min_run.addEventListener("click", first_home_subtractor, false);
            }
            else if(hitting.value == "AWAY") {
                add_run.removeEventListener("click", first_home_adder, false);
                min_run.removeEventListener("click", first_home_subtractor, false);
                add_run.addEventListener("click", first_away_adder, false);
                min_run.addEventListener("click", first_away_subtractor, false);
            };
        });
    };
    if(inning.value == 2) {
        add_run.addEventListener("click", second_away_adder, false);
        min_run.addEventListener("click", second_away_subtractor, false);
        hitting.addEventListener("change", () => {
            if(hitting.value == "HOME") {
                add_run.removeEventListener("click", second_away_adder, false);
                min_run.removeEventListener("click", second_away_subtractor, false);
                add_run.addEventListener("click", second_home_adder, false);
                min_run.addEventListener("click", second_home_subtractor, false);
            }
            else if(hitting.value == "AWAY") {
                add_run.removeEventListener("click", second_home_adder, false);
                min_run.removeEventListener("click", second_home_subtractor, false);
                add_run.addEventListener("click", second_away_adder, false);
                min_run.addEventListener("click", second_away_subtractor, false);
            };
        });
    };
    if(inning.value == 3) {
        add_run.addEventListener("click", third_away_adder, false);
        min_run.addEventListener("click", third_away_subtractor, false);
        hitting.addEventListener("change", () => {
            if(hitting.value == "HOME") {
                add_run.removeEventListener("click", third_away_adder, false);
                min_run.removeEventListener("click", third_away_subtractor, false);
                add_run.addEventListener("click", third_home_adder, false);
                min_run.addEventListener("click", third_home_subtractor, false);
            }
            else if(hitting.value == "AWAY") {
                add_run.removeEventListener("click", third_home_adder, false);
                min_run.removeEventListener("click", third_home_subtractor, false);
                add_run.addEventListener("click", third_away_adder, false);
                min_run.addEventListener("click", third_away_subtractor, false);
            };
        });
    };
    if(inning.value == 4) {
        add_run.addEventListener("click", fourth_away_adder, false);
        min_run.addEventListener("click", fourth_away_subtractor, false);
        hitting.addEventListener("change", () => {
            if(hitting.value == "HOME") {
                add_run.removeEventListener("click", fourth_away_adder, false);
                min_run.removeEventListener("click", fourth_away_subtractor, false);
                add_run.addEventListener("click", fourth_home_adder, false);
                min_run.addEventListener("click", fourth_home_subtractor, false);
            }
            else if(hitting.value == "AWAY") {
                add_run.removeEventListener("click", fourth_home_adder, false);
                min_run.removeEventListener("click", fourth_home_subtractor, false);
                add_run.addEventListener("click", fourth_away_adder, false);
                min_run.addEventListener("click", fourth_away_subtractor, false);
            };
        });
    };
    if(inning.value == 5) {
        add_run.addEventListener("click", fifth_away_adder, false);
        min_run.addEventListener("click", fifth_away_subtractor, false);
        hitting.addEventListener("change", () => {
            if(hitting.value == "HOME") {
                add_run.removeEventListener("click", fifth_away_adder, false);
                min_run.removeEventListener("click", fifth_away_subtractor, false);
                add_run.addEventListener("click", fifth_home_adder, false);
                min_run.addEventListener("click", fifth_home_subtractor, false);
            }
            else if(hitting.value == "AWAY") {
                add_run.removeEventListener("click", fifth_home_adder, false);
                min_run.removeEventListener("click", fifth_home_subtractor, false);
                add_run.addEventListener("click", fifth_away_adder, false);
                min_run.addEventListener("click", fifth_away_subtractor, false);
            };
        });
    };
    if(inning.value == 6) {
        add_run.addEventListener("click", sixth_away_adder, false);
        min_run.addEventListener("click", sixth_away_subtractor, false);
        hitting.addEventListener("change", () => {
            if(hitting.value == "HOME") {
                add_run.removeEventListener("click", sixth_away_adder, false);
                min_run.removeEventListener("click", sixth_away_subtractor, false);
                add_run.addEventListener("click", sixth_home_adder, false);
                min_run.addEventListener("click", sixth_home_subtractor, false);
            }
            else if(hitting.value == "AWAY") {
                add_run.removeEventListener("click", sixth_home_adder, false);
                min_run.removeEventListener("click", sixth_home_subtractor, false);
                add_run.addEventListener("click", sixth_away_adder, false);
                min_run.addEventListener("click", sixth_away_subtractor, false);
            };
        });
    };
    if(inning.value == 7) {
        add_run.addEventListener("click", seventh_away_adder, false);
        min_run.addEventListener("click", seventh_away_subtractor, false);
        hitting.addEventListener("change", () => {
            if(hitting.value == "HOME") {
                add_run.removeEventListener("click", seventh_away_adder, false);
                min_run.removeEventListener("click", seventh_away_subtractor, false);
                    add_run.addEventListener("click", seventh_home_adder, false);
                min_run.addEventListener("click", seventh_home_subtractor, false);
            }
            else if(hitting.value == "AWAY") {
                add_run.removeEventListener("click", seventh_home_adder, false);
                min_run.removeEventListener("click", seventh_home_subtractor, false);
                add_run.addEventListener("click", seventh_away_adder, false);
                min_run.addEventListener("click", seventh_away_subtractor, false);
            };
        });
    };
}


//run adder and subtractors

/**
 * A function that adds runs to the away team's first inning by adding to the specific inning, 
 * identified by the param indentifier, and also counts up the total runs and 
 * displays them to the away team's total run column.
 * 
 * @param {*} identifier 
 */
function first_away_adder() {
    let inning = document.getElementById(grid_boxes.first_away.id);
    let inningCounter = inning.innerHTML;
    //adjust inning and total runs
    inningCounter++;
    inning.innerHTML = inningCounter;
    away_run_counter++;
    a_runs.innerHTML = away_run_counter;
}

/**
 * A function that adds runs to the home team's first inning by adding to the specific inning, 
 * identified by the param indentifier, and also counts up the total runs and 
 * displays them to the home team's total run column.
 * 
 * @param {*} identifier 
 */
function first_home_adder() {
    let inning = document.getElementById(grid_boxes.first_home.id);
    let inningCounter = inning.innerHTML;
    //adjust inning and total runs
    inningCounter++;
    inning.innerHTML = inningCounter;
    home_run_counter++;
    h_runs.innerHTML = home_run_counter;
}

/**
 * A function that adds runs to the away team's second inning by adding to the specific inning, 
 * identified by the param indentifier, and also counts up the total runs and 
 * displays them to the away team's total run column.
 * 
 * @param {*} identifier 
 */
 function second_away_adder() {
    let inning = document.getElementById(grid_boxes.second_away.id);
    let inningCounter = inning.innerHTML;
    //adjust inning and total runs
    inningCounter++;
    inning.innerHTML = inningCounter;
    away_run_counter++;
    a_runs.innerHTML = away_run_counter;
}

/**
 * A function that adds runs to the home team's second inning by adding to the specific inning, 
 * identified by the param indentifier, and also counts up the total runs and 
 * displays them to the home team's total run column.
 * 
 * @param {*} identifier 
 */
function second_home_adder() {
    let inning = document.getElementById(grid_boxes.second_home.id);
    let inningCounter = inning.innerHTML;
    //adjust inning and total runs
    inningCounter++;
    inning.innerHTML = inningCounter;
    home_run_counter++;
    h_runs.innerHTML = home_run_counter;
}

/**
 * A function that adds runs to the away team's third inning by adding to the specific inning, 
 * identified by the param indentifier, and also counts up the total runs and 
 * displays them to the away team's total run column.
 * 
 * @param {*} identifier 
 */
 function third_away_adder() {
    let inning = document.getElementById(grid_boxes.third_away.id);
    let inningCounter = inning.innerHTML;
    //adjust inning and total runs
    inningCounter++;
    inning.innerHTML = inningCounter;
    away_run_counter++;
    a_runs.innerHTML = away_run_counter;
}

/**
 * A function that adds runs to the home team's third inning by adding to the specific inning, 
 * identified by the param indentifier, and also counts up the total runs and 
 * displays them to the home team's total run column.
 * 
 * @param {*} identifier 
 */
function third_home_adder() {
    let inning = document.getElementById(grid_boxes.third_home.id);
    let inningCounter = inning.innerHTML;
    //adjust inning and total runs
    inningCounter++;
    inning.innerHTML = inningCounter;
    home_run_counter++;
    h_runs.innerHTML = home_run_counter;
}

/**
 * A function that adds runs to the away team's fourth inning by adding to the specific inning, 
 * identified by the param indentifier, and also counts up the total runs and 
 * displays them to the away team's total run column.
 * 
 * @param {*} identifier 
 */
 function fourth_away_adder() {
    let inning = document.getElementById(grid_boxes.fourth_away.id);
    let inningCounter = inning.innerHTML;
    //adjust inning and total runs
    inningCounter++;
    inning.innerHTML = inningCounter;
    away_run_counter++;
    a_runs.innerHTML = away_run_counter;
}

/**
 * A function that adds runs to the home team's fourth inning by adding to the specific inning, 
 * identified by the param indentifier, and also counts up the total runs and 
 * displays them to the home team's total run column.
 * 
 * @param {*} identifier 
 */
function fourth_home_adder() {
    let inning = document.getElementById(grid_boxes.fourth_home.id);
    let inningCounter = inning.innerHTML;
    //adjust inning and total runs
    inningCounter++;
    inning.innerHTML = inningCounter;
    home_run_counter++;
    h_runs.innerHTML = home_run_counter;
}

/**
 * A function that adds runs to the away team's fifth inning by adding to the specific inning, 
 * identified by the param indentifier, and also counts up the total runs and 
 * displays them to the away team's total run column.
 * 
 * @param {*} identifier 
 */
 function fifth_away_adder() {
    let inning = document.getElementById(grid_boxes.fifth_away.id);
    let inningCounter = inning.innerHTML;
    //adjust inning and total runs
    inningCounter++;
    inning.innerHTML = inningCounter;
    away_run_counter++;
    a_runs.innerHTML = away_run_counter;
}

/**
 * A function that adds runs to the home team's fifth inning by adding to the specific inning, 
 * identified by the param indentifier, and also counts up the total runs and 
 * displays them to the home team's total run column.
 * 
 * @param {*} identifier 
 */
function fifth_home_adder() {
    let inning = document.getElementById(grid_boxes.fifth_home.id);
    let inningCounter = inning.innerHTML;
    //adjust inning and total runs
    inningCounter++;
    inning.innerHTML = inningCounter;
    home_run_counter++;
    h_runs.innerHTML = home_run_counter;
}

/**
 * A function that adds runs to the away team's sixth inning by adding to the specific inning, 
 * identified by the param indentifier, and also counts up the total runs and 
 * displays them to the away team's total run column.
 * 
 * @param {*} identifier 
 */
 function sixth_away_adder() {
    let inning = document.getElementById(grid_boxes.sixth_away.id);
    let inningCounter = inning.innerHTML;
    //adjust inning and total runs
    inningCounter++;
    inning.innerHTML = inningCounter;
    away_run_counter++;
    a_runs.innerHTML = away_run_counter;
}

/**
 * A function that adds runs to the home team's sixth inning by adding to the specific inning, 
 * identified by the param indentifier, and also counts up the total runs and 
 * displays them to the home team's total run column.
 * 
 * @param {*} identifier 
 */
function sixth_home_adder() {
    let inning = document.getElementById(grid_boxes.sixth_home.id);
    let inningCounter = inning.innerHTML;
    //adjust inning and total runs
    inningCounter++;
    inning.innerHTML = inningCounter;
    home_run_counter++;
    h_runs.innerHTML = home_run_counter;
}

/**
 * A function that adds runs to the away team's seventh inning by adding to the specific inning, 
 * identified by the param indentifier, and also counts up the total runs and 
 * displays them to the away team's total run column.
 * 
 * @param {*} identifier 
 */
 function seventh_away_adder() {
    let inning = document.getElementById(grid_boxes.seventh_away.id);
    let inningCounter = inning.innerHTML;
    //adjust inning and total runs
    inningCounter++;
    inning.innerHTML = inningCounter;
    away_run_counter++;
    a_runs.innerHTML = away_run_counter;
}

/**
 * A function that adds runs to the home team's seventh inning by adding to the specific inning, 
 * identified by the param indentifier, and also counts up the total runs and 
 * displays them to the home team's total run column.
 * 
 * @param {*} identifier 
 */
function seventh_home_adder() {
    let inning = document.getElementById(grid_boxes.seventh_home.id);
    let inningCounter = inning.innerHTML;
    //adjust inning and total runs
    inningCounter++;
    inning.innerHTML = inningCounter;
    home_run_counter++;
    h_runs.innerHTML = home_run_counter;
}

/**
 * A function that subtracts runs away from the away team at the first inning, 
 * identified by the param indentifier, unless the run number in that inning is 
 * at 0, and it also adjusts the away team's total run column.
 * 
 * @param {*} identifier 
 */
function first_away_subtractor() {
    let inning = document.getElementById(grid_boxes.first_away.id);
    let inningCounter = inning.innerHTML;
    //checks if inning runs are already at 0
    if(inning.innerHTML != 0) {
        //adjust inning and total runs
        inningCounter--;
        inning.innerHTML = inningCounter;
        away_run_counter--;
        a_runs.innerHTML = away_run_counter;
    }
}


/**
 * A function that subtracts runs away from the home team at the first inning, 
 * identified by the param indentifier, unless the run number in that inning is 
 * at 0, and it also adjusts the home team's total run column.
 * 
 * @param {*} identifier 
 */
 function first_home_subtractor() {
    let inning = document.getElementById(grid_boxes.first_home.id);
    let inningCounter = inning.innerHTML;
    //checks if inning runs are already at 0
    if(inning.innerHTML != 0) {
        //adjust inning and total runs
        inningCounter--;
        inning.innerHTML = inningCounter;
        home_run_counter--;
        h_runs.innerHTML = home_run_counter;
    }
}

/**
 * A function that subtracts runs away from the away team at the second inning, 
 * identified by the param indentifier, unless the run number in that inning is 
 * at 0, and it also adjusts the away team's total run column.
 * 
 * @param {*} identifier 
 */
 function second_away_subtractor() {
    let inning = document.getElementById(grid_boxes.second_away.id);
    let inningCounter = inning.innerHTML;
    //checks if inning runs are already at 0
    if(inning.innerHTML != 0) {
        //adjust inning and total runs
        inningCounter--;
        inning.innerHTML = inningCounter;
        away_run_counter--;
        a_runs.innerHTML = away_run_counter;
    }
}


/**
 * A function that subtracts runs away from the home team at the second inning, 
 * identified by the param indentifier, unless the run number in that inning is 
 * at 0, and it also adjusts the home team's total run column.
 * 
 * @param {*} identifier 
 */
 function second_home_subtractor() {
    let inning = document.getElementById(grid_boxes.second_home.id);
    let inningCounter = inning.innerHTML;
    //checks if inning runs are already at 0
    if(inning.innerHTML != 0) {
        //adjust inning and total runs
        inningCounter--;
        inning.innerHTML = inningCounter;
        home_run_counter--;
        h_runs.innerHTML = home_run_counter;
    }
}

/**
 * A function that subtracts runs away from the away team at the third inning, 
 * identified by the param indentifier, unless the run number in that inning is 
 * at 0, and it also adjusts the away team's total run column.
 * 
 * @param {*} identifier 
 */
 function third_away_subtractor() {
    let inning = document.getElementById(grid_boxes.third_away.id);
    let inningCounter = inning.innerHTML;
    //checks if inning runs are already at 0
    if(inning.innerHTML != 0) {
        //adjust inning and total runs
        inningCounter--;
        inning.innerHTML = inningCounter;
        away_run_counter--;
        a_runs.innerHTML = away_run_counter;
    }
}


/**
 * A function that subtracts runs away from the home team at the third inning, 
 * identified by the param indentifier, unless the run number in that inning is 
 * at 0, and it also adjusts the home team's total run column.
 * 
 * @param {*} identifier 
 */
 function third_home_subtractor() {
    let inning = document.getElementById(grid_boxes.third_home.id);
    let inningCounter = inning.innerHTML;
    //checks if inning runs are already at 0
    if(inning.innerHTML != 0) {
        //adjust inning and total runs
        inningCounter--;
        inning.innerHTML = inningCounter;
        home_run_counter--;
        h_runs.innerHTML = home_run_counter;
    }
}

/**
 * A function that subtracts runs away from the away team at the fourth inning, 
 * identified by the param indentifier, unless the run number in that inning is 
 * at 0, and it also adjusts the away team's total run column.
 * 
 * @param {*} identifier 
 */
 function fourth_away_subtractor() {
    let inning = document.getElementById(grid_boxes.fourth_away.id);
    let inningCounter = inning.innerHTML;
    //checks if inning runs are already at 0
    if(inning.innerHTML != 0) {
        //adjust inning and total runs
        inningCounter--;
        inning.innerHTML = inningCounter;
        away_run_counter--;
        a_runs.innerHTML = away_run_counter;
    }
}


/**
 * A function that subtracts runs away from the home team at the fourth inning, 
 * identified by the param indentifier, unless the run number in that inning is 
 * at 0, and it also adjusts the home team's total run column.
 * 
 * @param {*} identifier 
 */
 function fourth_home_subtractor() {
    let inning = document.getElementById(grid_boxes.fourth_home.id);
    let inningCounter = inning.innerHTML;
    //checks if inning runs are already at 0
    if(inning.innerHTML != 0) {
        //adjust inning and total runs
        inningCounter--;
        inning.innerHTML = inningCounter;
        home_run_counter--;
        h_runs.innerHTML = home_run_counter;
    }
}

/**
 * A function that subtracts runs away from the away team at the fifth inning, 
 * identified by the param indentifier, unless the run number in that inning is 
 * at 0, and it also adjusts the away team's total run column.
 * 
 * @param {*} identifier 
 */
 function fifth_away_subtractor() {
    let inning = document.getElementById(grid_boxes.fifth_away.id);
    let inningCounter = inning.innerHTML;
    //checks if inning runs are already at 0
    if(inning.innerHTML != 0) {
        //adjust inning and total runs
        inningCounter--;
        inning.innerHTML = inningCounter;
        away_run_counter--;
        a_runs.innerHTML = away_run_counter;
    }
}

/**
 * A function that subtracts runs away from the home team at the fifth inning, 
 * identified by the param indentifier, unless the run number in that inning is 
 * at 0, and it also adjusts the home team's total run column.
 * 
 * @param {*} identifier 
 */
 function fifth_home_subtractor() {
    let inning = document.getElementById(grid_boxes.fifth_home.id);
    let inningCounter = inning.innerHTML;
    //checks if inning runs are already at 0
    if(inning.innerHTML != 0) {
        //adjust inning and total runs
        inningCounter--;
        inning.innerHTML = inningCounter;
        home_run_counter--;
        h_runs.innerHTML = home_run_counter;
    }
}

/**
 * A function that subtracts runs away from the away team at the sixth inning, 
 * identified by the param indentifier, unless the run number in that inning is 
 * at 0, and it also adjusts the away team's total run column.
 * 
 * @param {*} identifier 
 */
 function sixth_away_subtractor() {
    let inning = document.getElementById(grid_boxes.sixth_away.id);
    let inningCounter = inning.innerHTML;
    //checks if inning runs are already at 0
    if(inning.innerHTML != 0) {
        //adjust inning and total runs
        inningCounter--;
        inning.innerHTML = inningCounter;
        away_run_counter--;
        a_runs.innerHTML = away_run_counter;
    }
}

/**
 * A function that subtracts runs away from the home team at the seventh inning, 
 * identified by the param indentifier, unless the run number in that inning is 
 * at 0, and it also adjusts the home team's total run column.
 * 
 * @param {*} identifier 
 */
 function sixth_home_subtractor() {
    let inning = document.getElementById(grid_boxes.sixth_home.id);
    let inningCounter = inning.innerHTML;
    //checks if inning runs are already at 0
    if(inning.innerHTML != 0) {
        //adjust inning and total runs
        inningCounter--;
        inning.innerHTML = inningCounter;
        home_run_counter--;
        h_runs.innerHTML = home_run_counter;
    }
}

/**
 * A function that subtracts runs away from the away team at the seventh inning, 
 * identified by the param indentifier, unless the run number in that inning is 
 * at 0, and it also adjusts the away team's total run column.
 * 
 * @param {*} identifier 
 */
 function seventh_away_subtractor() {
    let inning = document.getElementById(grid_boxes.seventh_away.id);
    let inningCounter = inning.innerHTML;
    //checks if inning runs are already at 0
    if(inning.innerHTML != 0) {
        //adjust inning and total runs
        inningCounter--;
        inning.innerHTML = inningCounter;
        away_run_counter--;
        a_runs.innerHTML = away_run_counter;
    }

    /**
    * A function that subtracts runs away from the home team at the seventh inning, 
    * identified by the param indentifier, unless the run number in that inning is 
    * at 0, and it also adjusts the home team's total run column.
    * 
    * @param {*} identifier 
    */
    function seventh_home_subtractor() {
        let inning = document.getElementById(grid_boxes.seventh_home.id);
        let inningCounter = inning.innerHTML;
        //checks if inning runs are already at 0
        if(inning.innerHTML != 0) {
            //adjust inning and total runs
            inningCounter--;
            inning.innerHTML = inningCounter;
            away_run_counter--;
            a_runs.innerHTML = away_run_counter;
        }
    }
}

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
    let pic_rand = Math.floor(Math.random()*10);
    //random chance that a megaphone image replaces the ups logo
    if(pic_rand < 5) {
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