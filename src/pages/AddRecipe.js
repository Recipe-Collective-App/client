import Header from "../components/Header";
import Footer from "../components/Footer";
import UrlAdd from "../components/UrlAdd";
import ManualAddRecipe from "../components/ManualAddRecipe";

const AddRecipe = ({
  getRecipesHandler,
  getImageUrl,
  photoURL,
  saveRecipeHandler,
}) => {
  console.log("PhotoURL add Recipe" + photoURL);
  return (
    <>
      <Header />
      <UrlAdd getRecipesHandler={getRecipesHandler} />
      <div className="flex flex-col items-center justify-center text-lg font-semibold pb-4">
        <ManualAddRecipe
          getImageUrl={getImageUrl}
          photoURL={photoURL}
          saveRecipeHandler={saveRecipeHandler}
        />
      </div>
      <Footer />
    </>
  );
};

export default AddRecipe;
