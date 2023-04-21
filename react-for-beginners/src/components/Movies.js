import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';

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
      <div key={movie.id} id={movie.id} className={styles.movie}>
        <img
          src={movie.medium_cover_image}
          className={styles.movie__img}
          alt={movie.title}
        />
        <div>
          <h2 className={styles.movie__title}>
            <Link to={`/movie/${movie.id}`}> {movie.title}</Link>
          </h2>
          <h3 className={styles.movie__year}>{movie.year}</h3>
          <p>
            {movie.summary.length > 235
              ? `${movie.summary.slice(0, 235)}...`
              : movie.summary}
          </p>
          <ul className={styles.movie__genres}>
            {movie.genres.map(g => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  });
};

export default Movies;
