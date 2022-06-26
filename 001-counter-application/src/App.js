import { useState } from "react";
import "./app.css";

const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="row">
        <div>
          <h1>counter app</h1>
        </div>
        <div>
          <h1>{count}</h1>
        </div>
        <div>
          <button
            type="button"
            onClick={decrease}
            className="btn btn-outline-success mx-1"
          >
            Decrease
          </button>
          <button type="button" onClick={reset} className="btn btn-danger mx-1">
            Reset
          </button>
          <button
            type="button"
            onClick={increase}
            className="btn btn-outline-success mx-1"
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
