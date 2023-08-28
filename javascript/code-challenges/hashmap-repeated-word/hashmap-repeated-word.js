function repeatedWord(str) {
  const words = str.toLowerCase().match(/\b\w+\b/g);

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    if (words.indexOf(currentWord) !== i) {
      return currentWord;
    }
  }

  return null;
}

module.exports = repeatedWord;
