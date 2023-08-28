const repeatedWord = require('./hashmap-repeated-word');

describe('repeatedWord', () => {
  it('should return the first repeated word', () => {
    const input = "Once upon a time, there was a brave princess who...";
    const result = repeatedWord(input);
    expect(result).toBe("a");
  });

  it('should return the first repeated word (case insensitive)', () => {
    const input = "It was the best of times, it was the worst of times...";
    const result = repeatedWord(input);
    expect(result).toBe("it");
  });

  it('should return null if no repeated word is found', () => {
    const input = "This is a test sentence without any repeated words.";
    const result = repeatedWord(input);
    expect(result).toBeNull();
  });
});
