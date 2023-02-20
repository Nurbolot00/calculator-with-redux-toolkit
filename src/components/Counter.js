import { useDispatch, useSelector } from 'react-redux';
import { calculatorActions } from '../store/calculator/CalculatorReducer';
import classes from './Counter.module.css';

const Counter = () => {

  const result = useSelector((state)=>state.calculator.result)
  const dispatch = useDispatch()

  const addHandler = ()=>{
    dispatch(calculatorActions.add(5))
  }
  const myltiplyHandler = ()=>{
    dispatch(calculatorActions.multiply(2))
  }

  const subtractHandler = ()=>{
  dispatch(calculatorActions.subtract(10))
  }

  const divideHandler = ()=>{
    dispatch(calculatorActions.divide(4))
  }

  return (
    <>
    <main className={classes.counter}>
      <h1>Redux Calculator</h1>
      <div className={classes.value}>Result: {result}</div>
      <button onClick={addHandler}>+5</button>
      <button onClick={subtractHandler}>-10</button>
      <button onClick={myltiplyHandler}>*2</button>
      <button onClick={divideHandler}>/4</button>
    </main>
    </>
  );

};

export default Counter;
