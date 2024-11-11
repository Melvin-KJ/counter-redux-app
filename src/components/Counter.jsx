import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice';

const Counter = () => {
  const [amount,setAmount] = useState(0)
  const {count} = useSelector(state=> state.counterReducer)
  const dispatch = useDispatch()

  const handleIncrementAmount = ()=>{
    if(amount){
      //dispatch action
      dispatch(incrementByAmount(+amount))
    }else{
      alert("Please enter a valid amount!!");
    }
  }

  return (
    <div className="border rounded p-5 text-center container mt-5">
      <h1 style={{fontSize:'100px'}} className="text-white">{count}</h1>
      <div style={{width:'500px'}} className="d-flex align-items-center justify-content-center w-100 gap-5">
        <button
          onClick={() => dispatch(decrement())}
          className="mx-5 bg-warning rounded px-3 py-1 border border-0"
        >
          DECREMENT
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="text-white mx-5 bg-danger border border-0 rounded px-3 py-1"
        >
          RESET
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="text-white mx-5 bg-success border border-0 rounded px-3 py-1"
        >
          INCREMENT
        </button>
      </div>
      <div className="d-flex align-items-center justify-content-center gap-4">
        <input
          onChange={(e) => setAmount(e.target.value)}
          type="text"
          className="mt-5 py-2 rounded w-25"
        />
        <button
          onClick={handleIncrementAmount}
          className="mt-5 bg-primary text-white border border-0 rounded px-2 py-2"
        >
          INCREMENT BY AMOUNT
        </button>
      </div>
    </div>
  );
};

export default Counter;
