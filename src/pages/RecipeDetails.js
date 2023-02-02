import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

function RecipeDetails({ allRecipes, urlAdd }) {
  const { id } = useParams();

  function extractDomain(url) {
    let domain = new URL(url);
    domain = domain.hostname;

    return domain;
  }

  function capitaliseRecipeName(recipeName) {
    return recipeName.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    );
  }

  function splitInstructions(recipeInstructions) {
    return recipeInstructions
      .match(/[^\.!\?]+[\.!\?]+/g)
      .map((sentence, index) => {
        return (
          <li className="text-justify md:text-lg p-1" key={index}>
            {sentence}
          </li>
        );
      });
  }

  return (
    <>
      <div className="">
        <Header />
        <div className="h-full flex flex-grid grid-cols-2 md:grid-cols-3 justify-center md:justify-center px-6">
          {allRecipes.map((recipe) =>
            recipe._id === id ? (
              <div
                className="flex flex-col items-center py-6 md:py-10 px-2 mb-4"
                key={recipe._id}
              >
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-16">
                  <img
                    className="w-1/3 sm:w-1/6 md:w-1/5 rounded"
                    src={recipe.photoURL}
                    alt={"The Recipe Collective: " + recipe.recipeName}
                  />
                  <div className="flex flex-col items-center justify-center">
                    <h1 className="text-center sm:text-xl md:text-2xl font-semibold pb-2 sm:py-4">
                      {capitaliseRecipeName(recipe.recipeName)}
                    </h1>
                    <p className="text-center text-mandarin md:text-lg">
                      Serves: {recipe.serveSize}
                    </p>
                    <p className="text-center text-mandarin md:text-lg italic">
                      Total time: {recipe.cookingTime}
                    </p>
                    <p className="text-center text-mandarin md:text-lg italic">
                      Source:
                      {urlAdd ? (
                        <>
                          <a className="underline ml-1" href={recipe.source}>
                            {extractDomain(recipe.source)}/...
                          </a>
                        </>
                      ) : (
                        <>
                          {recipe.source}
                        </>
                      )}
                    </p>
                    <div className="flex flex-row gap-2 sm:gap-4 py-2 sm:py-4">
                      <button className="bg-black text-white md:text-xl py-1 px-3 sm:py-1.5 sm:px-5 rounded-lg">
                        Edit
                      </button>
                      <button className="border border-black md:text-xl py-1 px-2 sm:py-1.5 sm:px-4 rounded-lg">
                        Share
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-full max-w-5xl flex flex-col sm:flex-row justify-between gap-6 sm:gap-0 py-2 md:py-4 lg:py-10">
                  <div className="w-full sm:w-1/3 flex flex-col sm:mr-4">
                    <h2 className="text-lg md:text-xl font-semibold border-b py-1 my-4">
                      Ingredients
                    </h2>
                    {recipe.ingredients.map((eachIngredient, index) => {
                      return (
                        <div key={index}>
                          <input
                            id={eachIngredient}
                            type="checkbox"
                            value={eachIngredient}
                          />
                          <label
                            className="pl-2 md:text-lg"
                            htmlFor={eachIngredient}
                          >
                            {eachIngredient}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                  <div className="w-full sm:w-2/3 sm:ml-20">
                    <h2 className="text-lg md:text-xl font-semibold border-b py-1 my-4">
                      Instructions
                    </h2>
                    <ol className="list-decimal">
                      {splitInstructions(recipe.instructions)}
                    </ol>
                  </div>
                </div>
              </div>
            ) : (
              <p key={recipe._id}></p>
            )
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default RecipeDetails;
