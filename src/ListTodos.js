import React from 'react'
import "./ListTodos.css"
function ListTodos(props) {
    return (
        <div className="list-section">
            <div className="list-left">
                <h1 className="headings">In Progress&nbsp;&nbsp;|</h1>
                {
                    
                        props.listtodos.filter((item)=>{
                         return !item.status 
                     }).map((value)=>{
                         return(
                             <p className="list-text">{value.text}</p>
                         )
                     })
                }
            </div>
            <div className="list-right">
                <h1 className="headings">Completed</h1>
                {
                   props.listtodos.filter((item)=>{
                    return item.status 
                }).map((value)=>{
                    return(
                        <p className="list-text">{value.text}</p>
                    )
                })
                    
                }
            </div>
        </div>
    )
}

export default ListTodos
