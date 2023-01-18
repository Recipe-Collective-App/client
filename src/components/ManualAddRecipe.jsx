import { useState,useNavigate} from "react";
import axios from "axios";
import {FiPlusSquare,FiX} from "react-icons/fi"
const ManualAddRecipe = (getImageUrl, photoURL) => { 
    //const navigate = useNavigate();
    //console.log("PhotoURL" + photoURL);
    //userid is hardcoded need to change 
    const userid = 3;
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [recipeName, setRecipeName] = useState("");
    const [serveSize, setServeSize] = useState(0);
    const [cookingTime, setCookingTime] = useState("");
    const [source, setSource] = useState("");
    const [ingredients, setIngredients] = useState([{ingredientName:""}]);
    const [instructions, setInstructions] = useState("");
    const [category, setCategory] = useState([{categoryName:""}]);
    const [errosStatus, setErrorStatus] = useState("");

    const addMultipleCategory = () => {
        const addedCategory = [...category, [{categoryName:""}]];
        setCategory(addedCategory);
    }
    const handleCategoryChange = (e, i) => {
        const data = [...category];
        data[i] = e.target.value;
        setCategory(data);
        
    }
    const deleteCategory = (i) => {
        const delVal = [...category];
        delVal.splice(i, 1);
        setCategory(delVal);
    };
    const addMultipleIngredients = () => {
        const addedIngredients = [...ingredients, [{ingredientName:""}]];
        setIngredients(addedIngredients);
    }
    const handleIngredientsChange = (e, i) => {
        const data = [...ingredients];
        data[i] = e.target.value;
        setIngredients(data);
        
    }
    const deleteIngredients = (i) => {
        const delVal = [...ingredients];
        delVal.splice(i, 1);
        setIngredients(delVal);
    };

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };
    const addRecipeData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        //getImageUrl(formData);
        console.log("Entering into Add receipe")
         let recipeData = {
             userid,
             recipeName,
             serveSize,
             cookingTime,
             source,
             ingredients,
             instructions,
             category,
             photoURL   
        };
        setRecipeName("");
        setServeSize(0);
        setCookingTime("")
        setSource("");
        Array.from(document.querySelectorAll('input')).forEach(
            input => (input.value = "")
         );    
        setIngredients([{ingredientName:""}])
        setInstructions("")
        Array.from(document.querySelectorAll('input')).forEach(
            input => (input.value = "")
         );    
        setCategory([{categoryName:""}]);
        console.log("Photos Link"+photoURL);
        console.log(recipeData);
        try {
            if (userid && recipeName && cookingTime && serveSize && source && ingredients && instructions && category && photoURL) {
                console.log("Hiiiii")
              const responseAddURL = await axios.post(process.env.REACT_APP_MANUAL_ADD, recipeData);
            console.log(responseAddURL.data);  
            } else {
                console.log("Data is not Added")
            }
            
        } catch (error) {
            console.log(error.message);
        }
      };
    return (
        <>
        <div className="flex flex-auto items-center justify-center text-lg font-semibold pb-3">
            {/* <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold pb-0.5 md:pb-2 text-center">OR</h1> */}
            <h1 className="text-1xl sm:text-2xl lg:text-3xl font-semibold pb-0.5 md:pb-2">Add Your Own Recipe</h1>
            </div>
            <form onSubmit={addRecipeData}>
            <div className="p-6 rounded-lg shadow-lg bg-white max-w-lg">
                <div className="form-group mb-6">
                    <label htmlFor="recipeName" className="form-label inline-block mb-2 text-gray-700 text-md font-semibold">Recipe Name:</label>
                    <input type="text" className="form-control w-full px-3 py-1.5 text-base font-normal   text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
                    focus:text-gray-700 focus:bg-white focus:border-black-600 focus:outline-none" placeholder="Enter Recipe Name" required onChange={(e) => {
                    setRecipeName(e.target.value)}} value = { recipeName }/>  
                        
                    <label htmlFor="serveSize" className="form-label inline-block mb-2 text-gray-700 text-md font-semibold mt-3">Serving Size:</label>
                    <input type="number" className="form-control w-full px-3 py-1.5 text-base font-normal   text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
                    focus:text-gray-700 focus:bg-white focus:border-black-600 focus:outline-none" placeholder="Enter Serve Size" required onChange={(e) => {setServeSize(e.target.value) 
                            }} value = { serveSize }/>
                        
                    <label htmlFor="estimatedTime" className="form-label inline-block mb-2 text-gray-700 text-md font-semibold mt-3">Estimated Time:</label>
                    <input type="text" className="form-control w-full px-3 py-1.5 text-base font-normal   text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
                    focus:text-gray-700 focus:bg-white focus:border-black-600 focus:outline-none" placeholder="Estimated Time Of cooking" required onChange={(e) => {setCookingTime(e.target.value)}}  value = { cookingTime }/>
                        
                    <label htmlFor="source" className="form-label inline-block mb-2 text-gray-700 text-md font-semibold mt-3">Source:</label>
                    <input type="text" className="form-control w-full px-3 py-1.5 text-base font-normal   text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
                    focus:text-gray-700 focus:bg-white focus:border-black-600 focus:outline-none" placeholder="" required onChange={(e) => {setSource(e.target.value)}} value = { source }/>
                     <div className="w-full flex flex-row items-center justify-between mt-3 mb-2">   
                    <label htmlFor="ingredients" className="form-label inline-block  text-gray-700 text-md font-semibold ">Ingredients:</label>
                    <FiPlusSquare onClick={() => addMultipleIngredients()} /></div>
                    {ingredients.map((data,i)=>{ return(<div key={i} className="w-full flex flex-row items-center justify-between gap-2">
                    <input type="text" name = "ingredientName"className="form-control w-full px-3 py-1.5 text-base font-normal   text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
                    focus:text-gray-700 focus:bg-white focus:border-black-600 focus:outline-none my-2" placeholder="Please Add Multiple Ingredients with + Sign" required onChange={(e) => handleIngredientsChange(e, i)} /><FiX onClick={() => deleteIngredients(i)}></FiX> </div>)
                    })}  
                        
                    <label htmlFor="instructions" className="form-label inline-block mb-2 text-gray-700 text-md font-semibold mt-3">Instructions:</label>
                    <textarea row="5" className="form-control w-full px-3 py-1.5 text-base font-normal   text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
                    focus:text-gray-700 focus:bg-white focus:border-black-600 focus:outline-none" placeholder="Please Enter Recipe Instructions" required onChange={(e) => { setInstructions(e.target.value) }} value={instructions} />
                     <div className="w-full flex flex-row items-center justify-between mt-3 mb-2">      
                    <label htmlFor="category" className="form-label inline-block mb-2 text-gray-700 text-md font-semibold">Category:</label>
                    <FiPlusSquare onClick={()=>addMultipleCategory() } /></div> 
                    {category.map((data,i)=>{ return(<div key={i} className="w-full flex flex-row items-center justify-between gap-2">
                    <input type="text" name ="categoryName" className="form-control w-full px-3 py-1.5 text-base font-normal   text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
                    focus:text-gray-700 focus:bg-white focus:border-black-600 focus:outline-none my-2" placeholder="Please Add Multiple Catogory with + Sign" required onChange={(e) => handleCategoryChange(e, i)} /><FiX onClick={() => deleteCategory(i)}></FiX> </div>)
                    })} 
                        
                    <label htmlFor="formFile" className="form-label inline-block mb-2 text-gray-700 mt-3">Photo:</label>
                    <input className="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                     border border-solid border-gray-300 rounded transition ease-in-out m-0
                     focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="file" name="file" onChange={saveFile}/>
                    </div>
                    <div  className="flex flex-row items-center justify-center">
                    <button
                    className="bg-mandarin text-white sm:text-lg rounded-lg py-1.5 px-3"
                    type="submit">Add Recipe</button>
                </div>
                <p className="text-red-500">
                    {errosStatus}
                </p>
            </div>
            </form>
        </>

    );
};

export default ManualAddRecipe;