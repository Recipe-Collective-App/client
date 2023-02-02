import { Link } from "react-router-dom"

const Header = () => {

    return (
        <>
            <div className="flex flex-row items-center justify-between px-6 sm:px-14 xl:px-20 pt-6 pb-4 lg:pt-8 lg:pb-6 font-semibold">
                <Link to="/">
                    <h1 className="lg:text-2xl">The Recipe Collective</h1>
                </Link>
                <Link to="/add-recipe">
                    <button className="bg-mandarin text-white px-2 py-1 rounded-lg lg:text-xl hover:opacity-80">Add Recipe</button>
                </Link>
            </div>
        </>
    )
}

export default Header