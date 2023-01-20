import axios from "axios";

export const getAllRecipes = async (setAllRecipes, setError, userid) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_GET}/${userid}`);
    setAllRecipes(response.data);
  } catch (error) {
    setError(error.message);
  }
};

export const getImageData = async (formData, setError, setPhotoURL) => {
  console.log("Inside Async Call");
  console.log(formData);
  try {
    const responseIMG = await axios.post(
      process.env.REACT_APP_UPLOAD_IMAGE,
      formData
    );
    if (responseIMG.data === "You must select a file.") {
      setError(responseIMG.data);
    } else {
      setPhotoURL(responseIMG.data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const saveRecipeData = async (getRecipes, setError) => {
  console.log("Inside Recipe Call");
  console.log(getRecipes);
  const {
    userid,
    recipeName,
    cookingTime,
    serveSize,
    source,
    ingredients,
    instructions,
    category,
    photoURL,
  } = getRecipes;
  try {
    if (
      userid &&
      recipeName &&
      cookingTime &&
      serveSize &&
      source &&
      ingredients &&
      instructions &&
      category &&
      photoURL
    ) {
      console.log("Hiiiii");
      const responseAddURL = await axios.post(
        process.env.REACT_APP_MANUAL_ADD,
        getRecipes
      );
      console.log(responseAddURL.data);
    } else {
      console.log("Data is not Added");
    }
  } catch (error) {
    console.log(error.message);
  }
};
