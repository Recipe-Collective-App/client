import "tailwindcss/tailwind.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getAllRecipes,
  getImageData,
  saveRecipeData,
} from "./AsyncCallFunctions/AsyncCall.js";
import AddRecipe from "./pages/AddRecipe";
import PageNotFound from "./pages/PageNotFound";
import PublicHome from "./pages/PublicHome";
import UserHome from "./pages/UserHome";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  const [allRecipes, setAllRecipes] = useState([]);
  const [error, setError] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [userid, setUserid] = useState(3);
  const [urlAdd, setUrlAdd] = useState(false);

  const getRecipesHandler = () => {
    getAllRecipes(setAllRecipes, setError, userid);
  };
  const getImageUrl = (formData) => {
    getImageData(formData, setError, setPhotoURL);
  };
  const saveRecipeHandler = (getRecipes) => {
    saveRecipeData(getRecipes, setError);
  };

  useEffect(() => {
    getRecipesHandler();
  }, []);

  return (
    <>
      {!error ? (
        <Routes>
          <Route path="/" element={<UserHome allRecipes={allRecipes} userid={userid} />} />
          {/* <Route
            path="/home"
            element={<UserHome allRecipes={allRecipes} userid={userid} />}
          /> */}
          <Route
            path="/recipe/:id"
            element={<RecipeDetails allRecipes={allRecipes} urlAdd={urlAdd} />}
          />
          <Route
            path="/add-recipe"
            element={
              <AddRecipe
                getRecipesHandler={getRecipesHandler}
                photoURL={photoURL}
                getImageUrl={getImageUrl}
                saveRecipeHandler={saveRecipeHandler}
                setUrlAdd={setUrlAdd}
              />
            }
          />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<PageNotFound error={error} />} />
        </Routes>
      )}
    </>
  );
}

export default App;
