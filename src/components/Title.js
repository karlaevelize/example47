import { useState } from "react"

export default function Title(props){

    const { title } = props
    const [getTitle, setTitle] = useState(title)

    console.log(getTitle)

    const changeTitle = () => {
        getTitle === title ? setTitle("My new title") : setTitle(title)
    }

  return <div>
    <h1>{getTitle}</h1>
      <button onClick={changeTitle}>change title</button>
  </div>
}