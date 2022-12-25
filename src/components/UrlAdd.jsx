import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";

const UrlAdd = ({ getRecipesHandler }) => {
    const navigate = useNavigate();
    const [url, setUrl] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    async function handleGetRecipe(e) {
        e.preventDefault();
        const regex = new RegExp(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig)

        if (url && url.match(regex)) {
            const response = await axios.post(process.env.REACT_APP_ADD, { url: url });
            setErrorMessage(response.data.message);
            if (response.data.message === "Recipe added!") {
                getRecipesHandler();
                navigate("/home")
            }
        } else {
            setErrorMessage("Please enter a valid URL")
        }
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center sm:justify-evenly h-5/6 py-10">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold pb-0.5 md:pb-2">Add Recipe</h1>
                <div className="flex flex-1 gap-4 pt-10 pb-4">
                    <input
                        className="border rounded-lg p-2.5 sm:py-2 sm:px-2.5 md:py-2.5 md:px-3.5 sm:text-lg"
                        id="url"
                        type="url"
                        placeholder="https://examplerecipe.com"
                        size="50"
                        spellCheck="false"
                        onChange={(e) => {
                            setUrl(e.target.value);
                        }}
                    />
                    <button
                        className="bg-mandarin text-white sm:text-lg rounded-lg py-1.5 px-3"
                        type="button"
                        onClick={handleGetRecipe}
                    >Get Recipe</button>
                </div>
                <p className="text-red-500">
                    {errorMessage}
                </p>
            </div>
        </>
    )
}

export default UrlAdd;