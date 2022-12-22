const Details = ({ recipeName, serveSize, source, cookingTime, ingredients, instructions, category, recipePhoto }) => {
    return (
        <>
            <div className="flex flex-col items-center py-2 px-2 mb-4">
                <div className="flex flex-row">
                    <img
                        className="w-1/2 sm:w-4/6 max-w-md"
                        src={recipePhoto}
                        alt={recipeName}
                    />
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-center text-sm sm:text-xl font-semibold pb-2 sm:py-4">{recipeName}</h1>
                        <p>Serves: {serveSize}</p>
                        <p>Total time: {cookingTime}</p>
                        <p>Source:
                            <a href={source}>{source}</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;