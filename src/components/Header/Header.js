import { useState } from "react";

const Header = ({data, setData}) => {
    const [text, setTent] = useState('');
    const addTodo = () =>{
        if (text.trim().length > 0){

            setData([{

                completed: false,

                important: false,

                deleted: false,

                correct: false,

                id: Math.random(),

                text: text.trim(),
                text,
            }, ...data])
            
            setTent('')
        }
    }

    return (
        <div className="header">
            <button onClick={addTodo} className="circle-btn">+</button>
            <input value={text} onChange={e =>{
                setTent(e.target.value)
            }} type="text" />
            
        </div>
    );
}

export default Header;


// import React, {useState} from 'react';

// const Header = ({data, setData}) => {
//   const [task, setTask] = useState('');

//   const handleTaskChange = (e) => {
//     setTask(e.target.value)
//   };
//   const handleSaveTask = () => {
//     if(task.trim() !== ''){
//       const newTask = {
//         id: Math.random(), 
//         text: task,
//         deleted: false
//       }
//       setData([...data, newTask])
//       setTask('');
//     }
//   }
//   return(
//     <div className = 'header'>
//       <input type = 'text' value = {task} onChange = {handleTaskChange} />
//       <button className='circle-btn' onClick = {handleSaveTask}>+</button>
//     </div>
//   )
// }

// export default Header;
