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



export {getallTodos}