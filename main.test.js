import { test, expect } from '@jest/globals';
//import { squatTotal } from './main';
import { findIndex } from './main';

/*test(`Given seconds, return correct squat count`, () => {
    const actual = squatTotal(120);
    const expected = 45;
  
    expect(actual).toBe(expected);
  });*/

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

  test(`Given a word and an array hiding that word, returns correct index of hidden word's first char`, () => {
    const actual = findIndex("pythagoras", ["p", "y", "p", "p", "p", "y", "t", "h", "p", "y", "t", "h", "a", "p", "y", "t", "h", "p", "y", "t", "h", "a", "g", "p", "p", "y", "t", "p", "y", "t", "h", "a", "g", "o", "r", "a", "s", "p", "y", "t"]);
    const expected = 27;
  
    expect(actual).toBe(expected);
  });