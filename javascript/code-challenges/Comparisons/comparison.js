class Movie {
  constructor(title, year, genres) {
    this.title = title;
    this.year = year;
    this.genres = genres;
  }
}

function sortByYear(movies) {
  return movies.slice().sort((a, b) => b.year - a.year);
}

function sortByTitle(movies) {
  const stripLeadingArticle = (title) => {
    const strippedTitle = title.replace(/^(A|An|The)\s+/i, '');
    console.log(`Stripped: ${strippedTitle}`);
    return strippedTitle;
  };

  return movies.slice().sort((a, b) => {
    const titleA = stripLeadingArticle(a.title);
    const titleB = stripLeadingArticle(b.title);
    console.log(`Comparing ${titleA} with ${titleB}`);
    return titleA.localeCompare(titleB);
  });
}

const movies = [
  new Movie('The Avengers', 2012, ['Action', 'Adventure']),
  new Movie('An Inception', 2010, ['Sci-Fi', 'Thriller']),
  new Movie('A Titanic', 1997, ['Drama', 'Romance']),
  new Movie('Inception', 2010, ['Sci-Fi', 'Action']),
];

const sortedByYear = sortByYear(movies);
console.log('Movies sorted by year:');
sortedByYear.forEach(movie => {
  console.log(`${movie.title} (${movie.year}) - Genres: ${movie.genres.join(', ')}`);
});

const sortedByTitle = sortByTitle(movies);
console.log('\nMovies sorted by title:');
sortedByTitle.forEach(movie => {
  console.log(`${movie.title} (${movie.year}) - Genres: ${movie.genres.join(', ')}`);
});

module.exports = {
  Movie,
  sortByYear,
  sortByTitle,
};

