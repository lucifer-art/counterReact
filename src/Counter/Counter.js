import { useState,useEffect,Fragment } from 'react';
import classes from './Counter.module.css';

const Counter = props => {

    const [MIN_VALUE] = useState(8);
    const [MAX_VALUE] = useState(800);

    let [inputValue, setinputValue] = useState(MIN_VALUE || 1);

    const [maxEnable, setmaxEnable] = useState(false);
    const [minEnable, setminEnable] = useState(false);

    useEffect(() => {}, [inputValue])

    useEffect(() => {
        setTimeout(() => {
            setmaxEnable(false);
            setminEnable(false);
        }, 2000);
    }, [maxEnable,minEnable])

    const changeInputHandler = event => {
        event.preventDefault();
        const reg = /^[0-9\b]+$/;
        let { value, min, max } = event.target;
        if (event.target.value === '' || reg.test(event.target.value)) {
            setinputValue(Math.max(Number(min), Math.min(Number(max), Number(value))));
        }
    }

    const incrementHandler = () => {
        if (MAX_VALUE) {
            if (+(inputValue) >= MAX_VALUE) {
                setmaxEnable(true);
                return;
            } else {
                setinputValue(inputValue => +(inputValue) + 1);
            }
        } else {
            if (+(inputValue) >= 1000) {
                setmaxEnable(true);
                return;
            } else {
                setinputValue(inputValue => +(inputValue) + 1);
            }
        }
    }

    const decrementHandler = () => {
        if (MIN_VALUE) {
            if (+(inputValue) <= MIN_VALUE) {
                setminEnable(true);
                return;
            } else {
                setinputValue(inputValue => +(inputValue) - 1);
            }
        } else {
            if (+(inputValue) <= 1) {
                setminEnable(true);
                return;
            } else {
                setinputValue(inputValue => +(inputValue) - 1);
            }
        }
    }

    return(
        <Fragment>
            <div className={classes.Counter}>
                <button className={classes.decrement} onClick={decrementHandler}>-</button>
                <input name="counter" type="number" className={classes.counter_input} value={inputValue} min={MIN_VALUE || 1} max={MAX_VALUE || 1000} onChange={changeInputHandler} />
                <button className={classes.increment} onClick={incrementHandler}>+</button>
            </div>
            <div className={classes.Counter}>
                {maxEnable && <p>It can't exceeds maximum value!</p>}
                {minEnable && <p>It can't go below minimum value!</p>}
            </div>
        </Fragment>
        
    )
}

export default Counter;

