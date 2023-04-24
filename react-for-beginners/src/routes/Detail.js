import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import styles from './Detail.module.css';
// import { useLocation } from 'react-router-dom';

const Detail = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then(res => res.json())
      .then(json => {
        setMovie(json.data.movie);
        setLoading(false);
      });
  }, []);
  movie.propTypes = {
    large_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <>
          <h1>{movie.title}</h1>
          <img className={styles.movie__img} src={movie.large_cover_image} />
        </>
      )}
      <h2 className={styles.back}>
        <Link to='/'>back</Link>
      </h2>
    </div>
  );
};

export default Detail;
