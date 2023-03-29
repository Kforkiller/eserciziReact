import { useCounter } from "./useCounter";

export function Counter({ startV = 0 }){

    const [counter, handleIncrement, handleDecrement, handleReset] = useCounter(startV)

    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={handleIncrement}>increment</button>
            <button onClick={handleDecrement}>decrement</button>
            <button onClick={handleReset}>reset</button>
        </div>
    )
}