import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Food() {
    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [API_URL, setAPI_URL] = useState(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=16639a4d0b8641df8b2d5d35f831433e`
    );

    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true);
            try {
                const response = await axios.get(API_URL);
                setRecipes(response.data.results); // Update based on the actual response structure
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, [API_URL]); // Re-run the effect when API_URL changes

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearch(query);
        
        // Construct the new API_URL based on the search query
        const newURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=16639a4d0b8641df8b2d5d35f831433e&query=${query}`;
        setAPI_URL(newURL);
    };

    const handleDetail = async (id) => {
        try {
            const response = await axios.get(
                `https://api.spoonacular.com/recipes/${id}/information?apiKey=16639a4d0b8641df8b2d5d35f831433e&includeNutrition=true`
            );
            console.log(response.data); // Debugging line
            setSelectedRecipe(response.data);
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div className="layout container mb-5">
            <div className="row">
                <input
                    className="form-control w-50 mx-auto m-5"
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={handleSearchChange}
                />
            </div>
            {loading ? (
                <div className="row mx-auto">
                    <div className="spinner-border m-5 mx-auto" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            ) : (
                <div className="row">
                    {error && <p>Error fetching data: {error.message}</p>}
                    <div className={(selectedRecipe || search) ? "col-8" : "col-12"}>
                        <div className="row">
                            {recipes.map((recipe) => (
                                <div className="col-5 m-1 p-1 mx-auto" key={recipe.id}>
                                    <div className="card">
                                        <img
                                            src={recipe.image}
                                            alt={recipe.title}
                                            className="card-img-top"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{recipe.title}</h5>
                                            <button
                                                className="btn btn-info"
                                                onClick={() => handleDetail(recipe.id)} // Update onClick handler
                                            >
                                                Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-4">
                        {selectedRecipe && (
                            <div className="card">
                                <img
                                    src={selectedRecipe.image}
                                    alt={selectedRecipe.title}
                                    className="card-img-top"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{selectedRecipe.title}</h5>
                                    <p><strong>ID:</strong> {selectedRecipe.id}</p>
                                    <p><strong>Nutrition:</strong></p>
                                    {selectedRecipe.nutrition ? (
                                        <ul>
                                            {selectedRecipe.nutrition.nutrients.map((nutrient, index) => (
                                                <li key={index}>
                                                    {nutrient.name}: {nutrient.amount} {nutrient.unit}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No nutrition information available.</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
