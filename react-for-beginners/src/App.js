import Button from './Button.js';
import styles from './App.module.css';
import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');
  function onClick() {
    setCounter(prev => prev + 1);
  }
  function onChange(e) {
    setKeyword(e.target.value);
  }
  useEffect(() => {
    console.log("i run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    if (keyword !== '' && keyword.length > 4) {
      console.log("i run when 'keyword' changes.");
    }
  }, [keyword]);

  useEffect(() => {
    console.log('i run when keyword & counter change');
  }, [keyword, counter]);

  useEffect(() => {
    console.log('i run only once');
  }, []);
  return (
    <>
      <input
        value={keyword}
        onChange={onChange}
        type='text'
        placeholder='Search here...'
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      {/* <h1 className={styles.title}>Welcome back!</h1> */}
      {/* <Button text={'Continue'} /> */}
    </>
  );
}

export default App;
