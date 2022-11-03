/* 
👉 Write your kata here!

- array of words


- squats for duration of song
(setup description scenario: x person can do a squat every 8 seconds, work out how many squats the person can do in the time of the song)
-- take in song length in seconds
-- you need to return the total squats the person could do as a whole number. 
-- the squat total can only include squats completed during the song duration
-- all times passed in will be a positive whole number


*/

//👉 Write the function your CodeWarriors will start with below here:

let seconds = 360

export function squatTotal(seconds) {
    return seconds / 8;
} 