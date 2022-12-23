import { Link } from "react-router-dom"

const Header = () => {

    return (
        <>
            <div className="flex flex-row items-center justify-between px-6 sm:px-14 xl:px-20 pt-6 pb-4 lg:pt-8 lg:pb-6 font-semibold lg:text-xl">
                <Link to="/home">
                    <h1>The Recipe Collective</h1>
                </Link>
                <div className="flex flex-row gap-2.5 lg:gap-6">
                    <button className="hover:text-mandarin">Sign Up</button>
                    <button className="hover:text-mandarin">Log In</button>
                </div>
            </div>
        </>
    )
}

export default Header