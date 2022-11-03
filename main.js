/* 
👉 Write your kata here!

- array of words


- squats for duration of song
(setup description scenario: x person can do a squat every 8 seconds, work out how many squats the person can do in the time of the song)
-- take in song length in seconds
-- you need to return the total squats the person could do as a whole number. 
-- the squat total can only include squats completed during the song duration
-- all times passed in will be a positive whole number

Diana can do a squat every 8 seconds but every 30 seconds she gets more tired. This means every 30 seconds she takes 1 second longer to complete a squat. Your job is to calculate the number of squats Diana during a given song. Your function is given the song's duration in seconds as input. 

Remember:
-- Only squats completed during the song's runtime should be counted. This means only whole numbers should be returned.(e.g. no half squats!)

*/

//👉 Write the function your CodeWarriors will start with below here:

let seconds = 360

/* export function squatTotal(seconds) {
    return seconds / 8;
} */

/*export function squatTotal(seconds) {
    //Squatting once every 8 seconds until 30 seconds
    //THEN
        //Every 9 seconds until 60 seconds
    //THEN 
        //Every 10 seconds until 90 seconds
    //etc.
    let squatProgress = 0;
    let squatCount = 0;
    let squatTime = 8;

    for (let i = 0; i < seconds; i++){
        squatProgress++;
        if (i % 30 === 0){
            squatTime++;
        }
        if (squatProgress === squatTime){
            squatCount++;
            squatProgress = 0;
        }
    }
return squatCount;
}*/

/*
Given a word and an array as input, user must find the index of the first character of the chosen word inside the array
*/
let word = "night"
let array = ["e", "x", "p", "n", "i", "g", "a", "n", "i", "g", "h", "t", "m", "r", "w"]

export function findIndex(word, array){

    for (let i = 0; i < array.length; i++){
        if (array[i] === word[0]){
            for (let j = 1; j < word.length; j++){
                if (word[j] === array[i + j]){
                    if (j === word.length - 1){
                        return i;
                    }
                }
            }
        }
    }
}
