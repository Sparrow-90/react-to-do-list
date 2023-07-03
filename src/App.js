import {useState} from "react"
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask]= useState("");
  const handleChange = (event)=>{
    setNewTask(event.target.value)
  }

  const addTask = () =>{
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    }
    setTodoList([...todoList, task])
  }

  const deleteTask = (id)=>{
    const newTodoList = todoList.filter((task)=>{
      return task.id === id ? false : true
    })
    setTodoList(newTodoList)
  }
return(
  <div className='App'>
    <div className='addTask'>
      <input onChange={handleChange}/>
      <button className="taskBtn" onClick={addTask}>Add Task</button>
    </div>
    <ul className='list'>{todoList.map((task)=>{
      return <li>{task.taskName} <button className="remove" onClick={()=>deleteTask(task.id)}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg></button></li>
    })}</ul>
  </div>
)
}

export default App;
