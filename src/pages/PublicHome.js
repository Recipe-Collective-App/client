import Header from "../components/Header"
import Footer from "../components/Footer"
import placeholder from "../assets/placeholder.png"

const PublicHome = () => {
    return (
        <div className="h-screen">
            <Header />
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-evenly h-5/6">
                <div className="pb-20 text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold pb-0.5 md:pb-2">Save the recipes you like</h1>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold pb-3 md:pb-5">Just the recipe, none of the noise</h1>
                    <p className="sm:text-xl lg:text-2xl font-medium">
                        <button className="bg-mandarin rounded text-white py-1 px-2 sm:px-2.5 hover:opacity-80">Sign up</button> to start. Have an account? <button className="text-mandarin hover:opacity-80">Log in</button></p>
                </div>
                <img
                    className="w-1/2 sm:w-1/3 max-w-sm"
                    src={placeholder}
                    alt="recipe collective"
                />
            </div>
            <Footer />
        </div>
    )
}

export default PublicHome