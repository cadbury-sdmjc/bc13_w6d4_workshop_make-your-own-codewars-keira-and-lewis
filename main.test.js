import { test, expect } from '@jest/globals';
import { findIndex } from './main';

  test(`Given night, returns 7`, () => {
    const actual = findIndex("night", ["e", "x", "p", "n", "i", "g", "a", "n", "i", "g", "h", "t", "m", "r", "w"]);
    const expected = 7;
  
    expect(actual).toBe(expected);
  });

  test(`Given hackathon, return 25`, () => {
    const actual = findIndex("hackathon", ["h", "k", "x", "r", "n", "x", "i", "h", "a", "g", "a", "n", "h", "g", "h", "t", "h", "c", "h", "a", "c", "k", "t", "r", "w", "h", "a", "c", "k", "a", "t", "h", "o", "n", "p", "r", "q", "z", "p", "t"]);
    const expected = 25;
  
    expect(actual).toBe(expected);
  });

  test(`Given pythagoras, return 27`, () => {
    const actual = findIndex("pythagoras", ["p", "y", "p", "p", "p", "y", "t", "h", "p", "y", "t", "h", "a", "p", "y", "t", "h", "p", "y", "t", "h", "a", "g", "p", "p", "y", "t", "p", "y", "t", "h", "a", "g", "o", "r", "a", "s", "p", "y", "t"]);
    const expected = 27;
  
    expect(actual).toBe(expected);
  });

  for (let i = 0; i < 10; i++) {
    test(`Given scissors, return randomised location`, () => {
    let word = 'scissors'
    let wordArray = word.split("")
    let array= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
    let num = getRandomNumber(0, 10);
    shuffle(array)
    array.splice(num, 0, ...wordArray)
    const expected = num;
    const actual = findIndex(word, array)
    expect(actual).toBe(expected);
  })
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }