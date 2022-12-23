import axios from "axios";

export const getAllRecipes = async (setAllRecipes, setError) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_GET}/3`);
        setAllRecipes(response.data);
    } catch (error) {
        setError(error.message)
    }
}
