import { useEffect, useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  function onChange(e) {
    setToDo(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDos(prev => [...prev, toDo]);
    setToDo('');
    console.log(toDos);
  }
  function Todos() {
    return (
      <ul>
        {toDos.map((ele, index) => {
          return <li key={index}>{ele}</li>;
        })}
      </ul>
    );
  }
  return (
    <>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type='text'
          placeholder='Write your to do...'
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <Todos />
    </>
  );
}
export default App;
