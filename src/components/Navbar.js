
import React,{useState} from 'react'
import createTask from '../models/createTask'


const Todolist = () => {
 const [modal,setModal]=useState(false);
 const toggle=() =>{setModal(!modal);}
  return (
    <>
    <div className="header text-center">
    <h3>Taskmaster</h3>
    <button className="btn btn-primary">Add Task</button>
    
    </div>
    

    <div className='task-container'>


    </div>
   
    <createTask toggle={toggle} modal={modal}/>
    
    </>
  )
}

export default Todolist