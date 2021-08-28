import React, { useState } from 'react'
import InputBox from '../InputBox/InputBox'
import Todo from '../Todo/Todo';

function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodo = [todo, ...todos];

        setTodos(newTodo);
    }

    const updatedTodo=(todoId,newValue)=>{
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev=>prev.map(item=>(item.id===todoId?newValue:item.id))
        );
    };

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    }

    const completeTodo = (id) => {
        let updatedTodo = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete

            }
            return todo;
        })
        setTodos(updatedTodo);
    }
    return (
        <div>
            <h1>Add Task. And Listen.. Be Productive!</h1>
            <InputBox onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updatedTodo={updatedTodo} />




        </div>
    )
}

export default TodoList
