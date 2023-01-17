import axios from "axios";

export const getAllRecipes = async (setAllRecipes, setError, userid) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_GET}/${userid}`);
    setAllRecipes(response.data);
  } catch (error) {
    setError(error.message);
  }
};

export const getImageData = async (getFormData, setError, setPhotoURL) => {
  console.log("Inside Async Call");
  console.log(getFormData);
  try {
    const responseIMG = await axios.post(
      process.env.REACT_APP_UPLOAD_IMAGE,
      getFormData
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
