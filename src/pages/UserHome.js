import Header from "../components/Header";
import Footer from "../components/Footer";
import Recipes from "../components/Recipes";
import { useState } from "react";

function UserHome({ allRecipes }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center gap-4 pt-10 pb-4">
        <div className="w-3/4 flex flex-col items-center">
          <label htmlFor="search" className="uppercase text-sm font-semibold mb-2">Search for recipe</label>
          <input
            className="w-4/5 md:w-3/5 border border-mid-grey focus:border-mandarin rounded-lg p-2.5 sm:py-2 sm:px-2.5 md:py-2.5 md:px-3.5 sm:text-lg mb-2"
            id="search"
            type="text"
            placeholder="Start typing to search by category"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </div>
      </div>
      <p className="text-red-500">{errorMessage}</p>
      <div className="px-6 sm:px-14 xl:px-20">
        <h1 className="text-mandarin text-center text-3xl sm:text-4xl lg:text-5xltext-3xl sm:text-4xl lg:text-5xl font-light py-2 sm:py-6 md:py-10 md:pt-6">
          Your Saved Recipes:
        </h1>
      </div>
      <div className="h-full grid grid-cols-2 md:grid-cols-3 justify-center md:justify-center px-6 pb-10">
        {allRecipes
          .filter((recipe) => {
            if (searchQuery === "") {
              return recipe;
            }

            if (recipe.category.includes(searchQuery.toLowerCase())) {
              return recipe;
            }
          })
          .map((recipe, i) => (
            <Recipes
              key={i}
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
