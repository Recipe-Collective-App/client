import "tailwindcss/tailwind.css";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from "react";
import { getAllRecipes } from "./components/AsyncCall";
import AddRecipe from "./pages/AddRecipe";
import PageNotFound from "./pages/PageNotFound";
import PublicHome from "./pages/PublicHome";
import UserHome from "./pages/UserHome";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  const [allRecipes, setAllRecipes] = useState([]);
  const [error, setError] = useState("");

  const getRecipesHandler = () => {
    getAllRecipes(setAllRecipes, setError)
  }

  useEffect(() => {
    getRecipesHandler();
  }, [])

  if (error) {
    setError({ error })
  }

  return (
    <>
      {!error ? (
        <Router>
          <Routes>
            <Route path='/' element={<PublicHome />} />
            <Route path='/home' element={<UserHome allRecipes={allRecipes} />} />
            <Route path='/recipe/:id' element={<RecipeDetails allRecipes={allRecipes} />} />
            <Route path='/add-recipe' element={<AddRecipe getRecipesHandler={getRecipesHandler} />} />
          </Routes>
        </Router>
      ) : (
        <Routes>
          <Route path='*' element={<PageNotFound error={error} />} />
        </Routes>
      )}
    </>
  );
}

export default App;
