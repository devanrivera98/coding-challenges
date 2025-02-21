import { getConcatenation } from "../february-challenges/concat-of-array";

describe('getConcatenation', () => {
  test('if this works', () => {
    const argument1 = [1,2,3];
    const testVariable1 = getConcatenation(argument1);
    expect(testVariable1).toEqual([1,2,3,1,2,3]);
  });
});
