import React, {useEffect, useState} from 'react';
import axios from "axios";

export const Todo = () => {
    // const [value, setValue] = useState('')
    // const [todos, setTodos] = useState([])
    const [data, setData] = useState([])


    useEffect(() => {
        const getPosts = async () => {
            const result = await axios("https://jsonplaceholder.typicode.com/posts")
            setData(result.data)
        }
        getPosts()
    }, [])




    // const addTodo = (event) => {
    //     event.preventDefault();
    //     if (value) {
    //         setTodos((prev) => (
    //             [...prev, {
    //                 id: Date.now(),
    //                 title: value,
    //                 completed: false
    //             }]
    //         ))
    //         setValue('')
    //     }
    // }
    // const removeTodo = (id) => {
    //     setTodos((prev) => (
    //         prev.filter(todo => todo.id !== id)
    //     ));
    // }
    // const toggleTodo = (id) => {
    //     setTodos(todos.map(todo => todo.id === id ? {
    //         ...todo,
    //         completed: !todo.completed
    //     } : todo))
    // }

    const [formData, setFormData] = useState({
        title: '',
        body: '',
        userId: 1,
    });

    const createPost = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
            setData((prev) => [response.data, ...prev])
        }catch (error) {
            console.log("Error>>>", error)
        }
    };

    // const updatePost = async (event) => {
    //     event.preventDefault();
    //     const response = await axios.patch('https://jsonplaceholder.typicode.com/posts', formData);
    //     setData((prev) => [response.data, ...prev])
    // };

    const setFormDataValue = (event) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    return (
        <div style={{color: "white"}}>
            <form onSubmit={createPost}>
                <label>
                    <div>Титл</div>
                    <input value={formData.title} name="title" onChange={setFormDataValue}/>
                </label>
                <label>
                    <div>Боди</div>
                    <input value={formData.body} name="body" onChange={setFormDataValue}/>
                </label>

                <button type="submit">Add</button>
            </form>
            {
                data.map(item => (
                    <div key={item.id}>
                        {item.title}
                        {item.body}
                        <hr/>
                    </div>
                ))
            }

        </div>
    );
};


//     <form onSubmit={addTodo}>
//         <input type="text" onChange={event => setValue(event.target.value)} value={value}/>
//         <button type="submit">add task</button>
//     </form>
//     {
//         todos.map(todo => <div key={todo.id}>
//             <span onClick={() => toggleTodo(todo.id)}
//                   style={{textDecoration: todo.completed ? "line-through" : "none"}}>
//                 <input type="checkbox" checked={todo.completed}/>
//                 {todo.title}
//             </span>
//             <span onClick={() => removeTodo(todo.id)}>x</span>
//         </div>)
//     }