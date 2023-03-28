import React, { useEffect, useState } from "react";


export function Counter(){
    let [count, setCount] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {
            setCount(c => c + 2)
        }, 1000)
        return () => {clearInterval(id)}
    }, [])

    return <h1>{count}</h1>
}
