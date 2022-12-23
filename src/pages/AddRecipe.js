import Header from "../components/Header"
import Footer from "../components/Footer"
import UrlAdd from "../components/UrlAdd";

const AddRecipe = ({ getRecipesHandler }) => {

    return (
        <>
            <Header />
            <UrlAdd getRecipesHandler={getRecipesHandler} />
            <div className="flex flex-col items-center justify-center text-lg font-semibold pb-4">
                <h2>Or</h2>
                <h2>Add your own</h2>
            </div>
            {/* To Add Manually Add A Recipe */}
            <Footer />
        </>
    )
}

export default AddRecipe;