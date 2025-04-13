import React, { useState, useEffect } from 'react';


function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState("");
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (savedTasks) {
            setTasks(savedTasks);
        }
    }, []);

    useEffect(() => {
        if (tasks.length > 0) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks]);

    const handleAddTask = () => {
        if (taskInput.trim()) {
            const newTask = {
                id: Date.now(),
                text: taskInput,
                completed: false
            };
            setTasks([...tasks, newTask]);
            setTaskInput("");
        }
    };

    const handleRemoveTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleToggleComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <div>
                <input
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    placeholder="Enter a new task"
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>

            <ul>
                {tasks.map(task => (
                    <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        <span onClick={() => handleToggleComplete(task.id)} style={{ cursor: 'pointer' }}>
                            {task.completed ? '+' : '-'}
                        </span>
                        {task.text}
                        <span onClick={() => handleRemoveTask(task.id)} style={{ cursor: 'pointer', marginLeft: '10px' }}>
                            -
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList