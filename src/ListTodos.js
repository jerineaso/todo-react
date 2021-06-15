import React from 'react'
import "./ListTodos.css"
function ListTodos(props) {
//    Completed Date
  let newDate = new Date();
  let currentTime = `${newDate.getDate()}-${newDate.getMonth()+1}-${newDate.getFullYear()}`

return (
    <div className="list-section">
        <div className="main-list">
        <div className="list-left">
            <h1 className="headings">In Progress</h1>
            { 
            // For Data in Progress
            props.listtodos.filter((item)=>{
                return !item.status 
            }).map((value)=>{
                return(
                    <div className="list-text">
                        <p>{value.text}</p>
                        <p>Created At : {value.time}</p>
                    </div>
                )
            })
            }
        </div>
        <div className="list-right">
            <h1 className="headings">Completed</h1>
            {
                // For data on completion
                props.listtodos.filter((item)=>{
                return item.status 
            }).map((value)=>{
                return(
                    <div className="list-text">
                    <p>{value.text}</p>
                    <p>Completed At : {currentTime}</p>
                    </div>  
                )
            })
            }
        </div>
        </div>
    </div>
)
}

export default ListTodos
