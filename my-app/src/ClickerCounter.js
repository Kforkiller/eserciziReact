import { useState } from "react";

export function ClickerCounter () {
    let [click , setClick] = useState(0)
    
    function handleClick(){
        setClick(a => a + 1)
    }

    return (
        <div>
            <h2>{click}</h2>
        <button onClick={handleClick}>ADD</button>
        </div>
    )
}
