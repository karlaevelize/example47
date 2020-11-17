import {useState} from "react"

export default function Counter (){

    const [count, setCount] = useState(0) 

    const counter = () => {
        setCount(count + 1)
    }

    console.log(count)

    return <div>
       <h2> number: {count}</h2>
       <button onClick={counter}>+1</button>
    </div>
}