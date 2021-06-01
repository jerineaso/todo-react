import {useState} from 'react';
import './App.css';
import ListTodos from './ListTodos';

function App() {
  const [todos,setTodos] = useState([]);
  const [todo,setTodo] = useState('');

  // Date
  let newDate = new Date();
  let todayDate = newDate.getDay();
  let arr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  
  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's  {arr[todayDate]}🌝 ☕ </h2>
    </div>
    <div className="input">
      <input value={todo} onChange={(e)=> setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={(e)=> setTodos([...todos,{id:Date.now(),text:todo,status:false}])} className="fas fa-plus"></i>
    </div>
    <div className="todos">
      { 
        todos.map((obj)=>{
          console.log(todos);
          return(
              <div className="todo">
              <div className="left">
                <input onChange={
                  (e)=>{
                    setTodos(todos.filter(obj2=>{
                      if(obj2.id === obj.id){
                        obj2.status=e.target.checked;     
                      }
                      return obj2
                    }))
                   }
                } type="checkbox" name="" id="" />
                <p className={
                  (obj.status?"strike":null)
                }>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick= {
                 ()=>{
                   setTodos(todos.filter(items =>{
                     return items.id !== obj.id
                   }))
                 }
                }className="fas fa-times"></i>
              </div>
            </div>
          )
        })
      }   
    </div>
    <ListTodos listtodos={todos}/>
  </div>
  );
}

export default App;
