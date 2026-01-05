import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{textAlign:"center", marginTop: "50px"}}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={increase} style={{margin:"5px"}}>
        Increase
      </button>
      <button onClick={decrease} style={{margin:"5px"}}>
        Decrease
      </button>
      <button onClick={reset} style={{margin:"5px"}}>
        Reset
      </button>
    </div>
  );
}

export default App;