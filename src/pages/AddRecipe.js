import Header from "../components/Header";
import Footer from "../components/Footer";
import UrlAdd from "../components/UrlAdd";
import ManualAddRecipe from "../components/ManualAddRecipe";

const AddRecipe = ({
  getRecipesHandler,
  getImageUrl,
  photoURL,
  saveRecipeHandler,
  setUrlAdd,
}) => {

  return (
    <>
      <Header />
      <UrlAdd getRecipesHandler={getRecipesHandler} setUrlAdd={setUrlAdd} />
      <div className="flex flex-col items-center justify-center text-lg font-semibold pb-4">
        <ManualAddRecipe
          getRecipesHandler={getRecipesHandler}
          getImageUrl={getImageUrl}
          photoURL={photoURL}
          saveRecipeHandler={saveRecipeHandler}
          setUrlAdd={setUrlAdd}
        />
      </div>
      <Footer />
    </>
  );
};

export default AddRecipe;
