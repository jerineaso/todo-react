import React,{useState,useEffect} from 'react';
import './App.css';
import ListTodos from './ListTodos';

function App() {
  // Global Todo Array and Added Localstorage data as initial value if not then array will be passed
  const [todos,setTodos] = useState(()=>{
    const localData = localStorage.getItem('Todos');
    return localData ? JSON.parse(localData) : []
  });
  // Input Todos
  const [todo,setTodo] = useState('');

  // Date will change on each day
  let newDate = new Date();
  let todayDate = newDate.getDay();

  // Created Date
  let currentTime = `${newDate.getDate()}-${newDate.getMonth()+1}-${newDate.getFullYear()}`

  // Each Days in a week & Dynamically shows each day 
  const [dateToday, setDateToday] = useState(["Sunday",
                                              "Monday",
                                              "Tuesday",
                                              "Wednesday",
                                              "Thursday",
                                              "Friday",
                                              "Saturday"]);

  // Remaining Items
  const [todoLeft, setTodoLeft] = useState(0);
  
  useEffect(() => {
  // For Remaining items on mounting
  let totalLeft = todos.filter(item=>!item.status).length;
  setTodoLeft(totalLeft);

  // Saving the values to storage
  localStorage.setItem("Todos",JSON.stringify(todos))
  }, [todos]);

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's  {dateToday[todayDate]}🌝 ☕ </h2>
      </div>
      <div className="input">
        <input onKeyDown={(e)=>{
          // Enter Key Function
          if(e.keyCode=== 13){
            setTodos([...todos,{id:Date.now(),text:todo,status:false,time:currentTime}]); 
            setTodo(""); 
          }
        }} value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={(e)=>{ 
          // On Click Function
          setTodos([...todos,{id:Date.now(),text:todo,status:false,time:currentTime}]); 
          setTodo(""); }} className="fas fa-plus">
        </i>
      </div> 
      <div className="leftTodos"><p>{todoLeft} items remaining to be done</p></div>
      <div className="todos">
        { 
        // Dynamic to add the input data to be listed
          todos.map((obj)=>{
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
    {/* Passing data to another components for next section */}
    <ListTodos listtodos={todos} />
    </div>
  );
}

export default App;
