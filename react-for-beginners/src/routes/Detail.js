import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

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
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>{movie.title}</h1>
          <img src={movie.large_cover_image} />
          <p>{movie.summary}</p>
        </>
      )}
      <Link to='/'>back</Link>
      <h2></h2>
    </>
  );
};

export default Detail;
