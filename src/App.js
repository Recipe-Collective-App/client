import "tailwindcss/tailwind.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getAllRecipes,
  getSearchRecipes,
} from "./AsyncCallFunctions/AsyncCall.js";
import AddRecipe from "./pages/AddRecipe";
import PageNotFound from "./pages/PageNotFound";
import PublicHome from "./pages/PublicHome";
import UserHome from "./pages/UserHome";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  const [allRecipes, setAllRecipes] = useState([]);
  const [error, setError] = useState("");
  const [userid, setUserid] = useState(3);

  const getRecipesHandler = () => {
    getAllRecipes(setAllRecipes, setError, userid);
  };

  useEffect(() => {
    if (!error) {
      getRecipesHandler();
    }
  }, [error]);

  return (
    <>
      {!error ? (
        <Routes>
          <Route path="/" element={<PublicHome />} />
          <Route
            path="/home"
            element={
              <UserHome
                allRecipes={allRecipes}
                userid={userid}
              />
            }
          />
          <Route
            path="/recipe/:id"
            element={<RecipeDetails allRecipes={allRecipes} />}
          />
          <Route
            path="/add-recipe"
            element={<AddRecipe getRecipesHandler={getRecipesHandler} />}
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
