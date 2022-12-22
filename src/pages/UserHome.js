import Header from "../components/Header";
import Footer from "../components/Footer";
import Recipes from "../components/Recipes";

function UserHome({ allRecipes }) {

    return (
        <>
            <div className="h-screen">
                <Header />
                <div className="px-6 sm:px-14 xl:px-20">
                    <h1 className="text-mandarin text-center text-lg sm:text-xl md:text-2xl font-light py-2 sm:py-4 md:pt-6">Your Saved Recipes:</h1>
                </div>
                <div className="h-full flex flex-grid grid-cols-2 md:grid-cols-3 justify-center md:justify-center px-6">
                    {allRecipes.map(recipe => (
                        <Recipes
                            key={recipe._id.toString()}
                            id={recipe._id.toString()}
                            recipeName={recipe.recipeName}
                            recipePhoto={recipe.photoURL}
                        />
                    ))}
                </div>
                <Footer />
            </div>
        </>
    )
};

export default UserHome;