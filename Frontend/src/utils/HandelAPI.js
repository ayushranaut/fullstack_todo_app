import axios from "axios";

const BaseURL = "http://localhost:3000"

const getallTodos = async (setTodos) => {
    try {
        const { data } = await axios.get(BaseURL);
        console.log("API Response:", data);
        setTodos(data.todos); 
    } catch (error) {
        console.error("Error fetching todos:", error.message);
    }
};


 const addTodo = (text, setText, setTodos) => {
    axios.post(`${BaseURL}/addTodo`, { title: text })
        .then((response) => {
            console.log(response.data);
            setText("");  
            getallTodos(setTodos); 
        })
        .catch((error) => {
            console.error("Error adding todo:", error);
        });
};


const updateTodo = (toDoId, title, setText, setTodos, setUpdate) => {
    axios.put(`${BaseURL}/editTodo/${toDoId}`, { title }) 
        .then((response) => {
            console.log(response.data);
            setText("");  
            setUpdate(false);
            getallTodos(setTodos); 
        })
        .catch((error) => {
            console.error("Error updating todo:", error);
        });
};

const deleteTodo = (toDoId, setTodos) => {
    axios.delete(`${BaseURL}/deleteTodo/${toDoId}`) 
        .then((response) => {
            console.log(response.data);
            getallTodos(setTodos); 
        })
        .catch((error) => {
            console.error("Error deleting todo:", error);
        });
};



export {getallTodos ,addTodo ,updateTodo ,deleteTodo}