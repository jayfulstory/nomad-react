import { useEffect, useState } from 'react';
import Movies from '../components/Movies.js';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();
  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.8&sort_by=year`
    )
      .then(res => res.json())
      .then(data => {
        setMovies(data.data.movies.slice(1, 5));
        setLoading(false);
      });
  }, []);
  return <>{loading ? <h1>Loading...</h1> : <Movies movies={movies} />}</>;
};

export default Home;
