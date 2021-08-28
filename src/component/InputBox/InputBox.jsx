import React, { useState, useEffect, useRef } from 'react'

function InputBox(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('');

    }
    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                {props.edit ? <><input type='text'
                    placeholder='Add updated'
                    name='text'
                    value={input}
                    className='todo-input edit'
                    onChange={handleChange}
                    ref={inputRef}
                />
                    <button type='submit' className='todo-button edit'>Update</button>
                </>:
                <><input type='text'
                    placeholder='Add new task'
                    name='text'
                    value={input}
                    className='todo-input'
                    onChange={handleChange}
                    ref={inputRef}
                />
                    <button type='submit' className='todo-button'>Add Task</button></>
}
            </form>
    
        </div>
    )
}

export default InputBox
