import "tailwindcss/tailwind.css";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import PageNotFound from "./pages/PageNotFound";
import PublicHome from "./pages/PublicHome";
import UserHome from "./pages/UserHome";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  const [allRecipes, setAllRecipes] = useState([]);
  const [error, setError] = useState("");

  const getAllRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:4000/getRecipe/3");
      setAllRecipes(response.data);
    } catch (error) {
      setError(error.message)
      console.log(error.message)
    }
  }

  useEffect(() => {
    getAllRecipes()
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
