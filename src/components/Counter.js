import {useState} from "react"

export default function Counter (){

    const [count, setCount] = useState(0) 

    const counter = () => {
        setCount(count + 1)
    }

    const reset = () => {
        setCount(count - count) //how to reset the state
    }

    // console.log(count)

    return <div>
       <h2> number: {count}</h2>
       <button onClick={reset}>reset</button>
       <button onClick={counter}>+1</button>
    </div>
}