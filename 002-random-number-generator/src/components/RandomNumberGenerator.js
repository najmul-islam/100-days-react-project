import React, { useState } from "react";

const RandomNumberGenerator = () => {
  const [number, setNumber] = useState(0);

  const genNumber = () => {
    setNumber(Math.floor(Math.random() * (100 - 1)) + 1);
  };
  return (
    <div className="container text-center pt-5">
      <h1>Generate Random Number</h1>

      <div className="row">
        <div className="col">
          <h1 className="my-3">{number}</h1>
          <button className="btn btn-success mt-3" onClick={() => genNumber()}>
            Generate Number
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomNumberGenerator;
