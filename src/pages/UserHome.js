import Header from "../components/Header";
import Footer from "../components/Footer";
import Recipes from "../components/Recipes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserHome({ allRecipes, searchRecipesHandler, searchRecipes }) {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function searchReceipeEvent(e) {
    e.preventDefault();
    searchRecipesHandler(category);
    navigate(`/home`);
  }

  return (
    <>
      <Header />
      <div className="flex justify-center gap-4 pt-10 pb-4">
        <input
          className="border rounded-lg p-2.5 sm:py-2 sm:px-2.5 md:py-2.5 md:px-3.5 sm:text-lg"
          id="url"
          type="url"
          placeholder="Search"
          size="50"
          spellCheck="false"
          value={category}
          onChange={(e) => {
            e.preventDefault();
            setCategory(e.target.value);
          }}
        />
        <button
          className="bg-black text-white sm:text-lg rounded-lg py-1.5 px-3"
          type="button"
          onClick={searchReceipeEvent}
        >
          Filter
        </button>
      </div>
      <p className="text-red-500">{errorMessage}</p>
      <div className="px-6 sm:px-14 xl:px-20">
        <h1 className="text-mandarin text-center text-3xl sm:text-4xl lg:text-5xltext-3xl sm:text-4xl lg:text-5xl font-light py-2 sm:py-6 md:py-10 md:pt-6">
          Your Saved Recipes:
        </h1>
      </div>
      <div className="h-full grid grid-cols-2 md:grid-cols-3 justify-center md:justify-center px-6 pb-10">
        {category
          ? searchRecipes.map((recipe) => (
              <Recipes
                key={recipe._id.toString()}
                id={recipe._id.toString()}
                recipeName={recipe.recipeName}
                recipePhoto={recipe.photoURL}
              />
            ))
          : allRecipes.map((recipe) => (
              <Recipes
                key={recipe._id.toString()}
                id={recipe._id.toString()}
                recipeName={recipe.recipeName}
                recipePhoto={recipe.photoURL}
              />
            ))}
      </div>
      <Footer />
    </>
  );
}

export default UserHome;
