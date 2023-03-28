import { useState } from "react";

export function useCounter(startV){
    let [counter, setCounter] = useState(startV)

    function increment(){
        setCounter(c => c + 1)
    }

    function decrement(){
        setCounter(c => c - 1)
    }

    function reset(){
        setCounter(startV)
    }

    return [counter, increment, decrement, reset]

}