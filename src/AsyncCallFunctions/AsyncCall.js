import axios from "axios";

export const getAllRecipes = async (setAllRecipes, setError, userid) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_GET}/${userid}`);
    setAllRecipes(response.data);
  } catch (error) {
    setError(error.message);
  }
};
export const getSearchRecipes = async (
  setSearchRecipes,
  setError,
  userid,
  category
) => {
  try {
    if (category) {
      const response = await axios.get(
        `${process.env.REACT_APP_SEARCH}/${userid}/${category}`
      );
      if (response.status === 200) {
        setSearchRecipes(response.data);
      } else {
        setError(response.data.message);
      }
    }
  } catch (error) {
    setError(error.message);
  }
};
