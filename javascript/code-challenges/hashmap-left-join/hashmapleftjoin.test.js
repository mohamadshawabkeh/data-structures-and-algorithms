const leftJoin = require('./hashmap-left-join'); 

describe('leftJoin', () => {
  it('should perform a left join on two hash maps', () => {
    const synonyms = {
      'diligent': 'employed',
      'fond': 'enamored',
      'guide': 'usher',
      'outfit': 'garb',
      'wrath': 'anger'
    };

    const antonyms = {
      'diligent': 'idle',
      'fond': 'averse',
      'guide': 'follow',
      'flow': 'jam',
      'wrath': 'delight'
    };

    const expectedResult = [
      ['diligent', 'employed', 'idle'],
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', 'follow'],
      ['outfit', 'garb', null],
      ['wrath', 'anger', 'delight']
    ];

    const result = leftJoin(synonyms, antonyms);

    expect(result).toEqual(expectedResult);
  });

  it('should handle empty input hash maps', () => {
    const synonyms = {};
    const antonyms = {};

    const expectedResult = [];

    const result = leftJoin(synonyms, antonyms);

    expect(result).toEqual(expectedResult);
  });
});
