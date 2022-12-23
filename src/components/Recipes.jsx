import { Link } from 'react-router-dom';

const Recipes = ({ recipeName, recipePhoto, id }) => {

    function capitaliseRecipeName(recipeName) {
        return recipeName.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    }

    return (
        <>
            <Link
                className="flex flex-col items-center py-2 px-2 mb-4 h-fit hover:text-mandarin hover:opacity-80"
                to={`/recipe/${id}`}
            >
                <h1 className="text-center text-sm sm:text-xl font-semibold pb-2 sm:py-4">{capitaliseRecipeName(recipeName)}</h1>
                <img
                    className="w-1/2 sm:w-4/6 max-w-md"
                    src={recipePhoto}
                    alt={recipeName}
                />
            </Link>
        </>
    );
};

export default Recipes;