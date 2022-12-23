import Header from "../components/Header";
import Footer from "../components/Footer";
import Recipes from "../components/Recipes";

function UserHome({ allRecipes }) {

    return (
        <>
            <Header />
            <div className="px-6 sm:px-14 xl:px-20">
                <h1 className="text-mandarin text-center text-3xl sm:text-4xl lg:text-5xltext-3xl sm:text-4xl lg:text-5xl font-light py-2 sm:py-6 md:py-10 md:pt-6">Your Saved Recipes:</h1>
            </div>
            <div className="h-full grid grid-cols-2 md:grid-cols-3 justify-center md:justify-center px-6 pb-10">
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
        </>
    )
};

export default UserHome;