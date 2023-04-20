import PropTypes from 'prop-types';

const Movies = ({ movies }) => {
  return movies.map(movie => {
    return (
      <div key={movie.id}>
        <h2>{movie.title}</h2>
        <img src={movie.medium_cover_image} alt='' />
        <p>{movie.summary}</p>
        <ul>
          {movie.genres.map(g => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    );
  });
};

Movies.propTypes = {
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movies;
