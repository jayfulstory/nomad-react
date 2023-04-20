import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movies = ({ movies }) => {
  return movies.map(movie => {
    return (
      <div key={movie.id}>
        <h2>
          <Link to='/movie'> {movie.title}</Link>
        </h2>
        <img src={movie.medium_cover_image} alt={movie.title} />
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
