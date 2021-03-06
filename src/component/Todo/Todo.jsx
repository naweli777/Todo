import React,{useState} from 'react'
import{RiCloseCircleLine} from 'react-icons/ri'
import{TiEdit} from 'react-icons/ti'
import InputBox from '../InputBox/InputBox';

function Todo({todos,completeTodo,removeTodo,updatedTodo}) {

    const[edit,setEdit]= useState({
        id:null,
        value:''
    });
    const submitUpdate=(value)=>{
        updatedTodo(edit.id,value)
        setEdit({
            id:null,
            value:''
        })
    }

    if(edit.id) {
        return<InputBox edit={edit} onSubmit={submitUpdate}/>
    }
    return todos.map((todo,index)=>
        <div className={todo.isComplete?'todo-row complete':'todo-row'} key={index}>
            <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
                {todo.text}

            </div>
            <div classNames='icons'>
                <RiCloseCircleLine 
                onClick={()=>removeTodo(todo.id)}
                className={'delete-icons'}
                />


                <TiEdit
                onClick={()=>setEdit({id:todo.id, value:todo.text})}
                className="edit-icons"/>
            </div>
            
        </div>
    )
}

export default Todo
