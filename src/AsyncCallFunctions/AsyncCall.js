import axios from "axios";

export const getAllRecipes = async (setAllRecipes, setError, userid) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_GET}/${userid}`);
    setAllRecipes(response.data);
  } catch (error) {
    setError(error.message);
  }
};