import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movies = ({ movies }) => {
  return movies.map(movie => {
    movie.propTypes = {
      id: PropTypes.number.isRequired,
      medium_cover_image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    };
    return (
      <div key={movie.id} id={movie.id}>
        <h2>
          <Link to={`/movie/${movie.id}`}> {movie.title}</Link>
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

export default Movies;
