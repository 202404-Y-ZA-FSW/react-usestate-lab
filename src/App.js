import style from './App.css'

const Counter = () => {
  const count = 0;

  return (
    <div className="container">
      <button>Increment!</button>
      <button>Decrement!</button>
      <button>Reset</button>
      <h1>Current Count: {count}</h1>
    </div>
  );
};

export default Counter;
