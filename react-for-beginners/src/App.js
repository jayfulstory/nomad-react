import { useEffect, useState } from 'react';

function App() {
  const [showing, setShowing] = useState(false);
  function Hello() {
    // Cleanup
    useEffect(() => {
      console.log('created :)');
      return () => console.log('bye :(');
    }, []);
    return <h1>Hello</h1>;
  }
  function onClick() {
    setShowing(prev => !prev);
  }
  return (
    <>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'hide' : 'show'}</button>
    </>
  );
}
export default App;
