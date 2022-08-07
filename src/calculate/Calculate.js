import React, { useState } from "react";

import { square, cube, biquadrate } from "./calculateSlice";

import { useSelector, useDispatch } from "react-redux";

const Calculate = () => {
  const value = useSelector((state) => state.calculate.result);
  const dispatch = useDispatch();
  const [num, setNum] = useState("");
  return (
    <div className="container text-center bg-dark">
      <input
        className="m-4 text-center shadow border-top border-bottom "
        placeholder="Enter Number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <h1 className="display-1">{value}</h1>
      <div className="m-3">
        <button
          className="btn bg-white m-2 shadow border btn-lg"
          onClick={() => dispatch(square(num))}
        >
          Square
        </button>
        <button
          className="btn bg-white m-2 shadow border btn-lg"
          onClick={() => dispatch(cube(num))}
        >
          Cube
        </button>
        <button
          className="btn bg-white m-2 shadow border btn-lg"
          onClick={() => dispatch(biquadrate(num))}
        >
          Biquadrate
        </button>
      </div>
    </div>
  );
};

export default Calculate;
