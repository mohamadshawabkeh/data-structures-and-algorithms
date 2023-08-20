const { Movie, sortByYear, sortByTitle } = require('./comparison'); 

describe('Movie Sorting', () => {
  const movies = [
    new Movie("The Avengers", 2012, ["Action", "Adventure"]),
    new Movie("An Inception", 2010, ["Sci-Fi", "Thriller"]),
    new Movie("A Titanic", 1997, ["Drama", "Romance"]),
    new Movie("Inception", 2010, ["Sci-Fi", "Action"]),
  ];

  it('should sort movies by year', () => {
    const sortedByYear = sortByYear(movies);
    expect(sortedByYear[0].title).toBe("The Avengers");
    expect(sortedByYear[sortedByYear.length - 1].title).toBe("A Titanic");
  });
  it('should sort movies by title, ignoring articles', () => {
    const sortedByTitle = sortByTitle(movies);
    expect(sortedByTitle[0].title).toBe("The Avengers"); // Corrected expected title
    expect(sortedByTitle[sortedByTitle.length - 1].title).toBe("A Titanic");
  });
});
