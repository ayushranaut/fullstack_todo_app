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
            setText("");  // Clear input after success
            getallTodos(setTodos);  // Refresh todos list
        })
        .catch((error) => {
            console.error("Error adding todo:", error);
        });
};



export {getallTodos ,addTodo}