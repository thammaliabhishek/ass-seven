import React, { createContext, useState } from 'react'

export const store = createContext()
const Details = (props) => {
    const [students, setStudents] = useState([
        {
            "Name":"Abhishek",
            "Age" : "23",
            "Course" : "FullStack",
            "Batch" : 'Apr',
            "id" : "1"
        }
    ])
  return (
    <div>
        <store.Provider value={[students,setStudents]} >
             {props.children}
        </store.Provider>
    </div>
  )
}

export default Details