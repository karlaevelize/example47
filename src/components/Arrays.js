import hogwartsStudents from "../data"
import { useState } from "react"

export default function Array(){

    //console.log(hogwartsStudents) //always console.log the data to see what kind of data you have

    const [students, setStudents] = useState(hogwartsStudents)

    //console.log("students", students) //checking if the data was assigned correctly

    const toggle = () => {
        students === hogwartsStudents 
            ? setStudents([]) 
            : setStudents(hogwartsStudents)
    }

    //console.log("rendered") 
    //every time setState updates students the page is rendered, but only if it updates

    return <div>
        <br/>
        <button onClick={toggle}>toggle</button> {/* we did the function outside because it took more than one line, so it's nicer for reading */}
        <button onClick={() => setStudents([])}>hide students</button>
        <button onClick={() => setStudents(hogwartsStudents)}>show students</button>
        {students.map((student, index) => { {/* we can always pass an id or the index as the key, id is better practice, since the index can change */}
            return <div key={index}>
                <p>
                  <li>{student.firstName} {student.lastName}</li>
                </p>
            </div>
        })}
    </div>
}