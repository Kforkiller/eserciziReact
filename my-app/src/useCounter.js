import { useCallback, useState } from "react";

export function useCounter(startV){
    let [counter, setCounter] = useState(startV)


    const increment = useCallback(() => {
        setCounter(c => c + 1)
    }, [])
    const decrement = useCallback(() => {
        setCounter(c => c - 1)
    }, [])
    const reset = useCallback(() => {
        setCounter(startV)
    }, [startV])

    return [counter, increment, decrement, reset]

}