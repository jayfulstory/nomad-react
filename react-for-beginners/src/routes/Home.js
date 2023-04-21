import { useEffect, useState } from 'react';
import Movies from '../components/Movies.js';
import styles from './Home.module.css';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();
  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.8&sort_by=year`
    )
      .then(res => res.json())
      .then(data => {
        setMovies(data.data.movies.slice(1, 11));
        setLoading(false);
      });
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          <Movies movies={movies} />
        </div>
      )}
    </div>
  );
};

export default Home;
