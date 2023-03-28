import { useEffect, useState } from "react";

export function ClickerCounter ({onClickChange}) {
    let [click , setClick] = useState(0)
    
    function handleClick(){
        setClick(a => a + 1)
    }

    useEffect(() => {
        onClickChange(click)
    }, [click, onClickChange])

    return (
        <div>
            <h2>{click}</h2>
        <button onClick={handleClick}>ADD</button>
        </div>
    )
}
