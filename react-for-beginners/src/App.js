import Button from './Button.js';
import styles from './App.module.css';

function App() {
  return (
    <>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={'Continue'} />
    </>
  );
}

export default App;
