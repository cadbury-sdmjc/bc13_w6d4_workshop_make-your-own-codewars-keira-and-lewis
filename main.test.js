import {jest} from '@jest/globals';

import { squatTotal } from './main';

test(`Given seconds, return correct squat count`, () => {
    const actual = squatTotal(360);
    const expected = 45;
  
    expect(actual).toBe(expected);
  });