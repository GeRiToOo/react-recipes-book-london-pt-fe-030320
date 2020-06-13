import React, { Component, useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";

import RecipesPage from "./components/RecipesPage/RecipesPage";
import ReceiptPage from "./components/ReceiptPage/ReceiptPage";
import Home from "./components/HomePage/Home";
import OrderFormPage from "./components/OrderFormPage/OrderFormPage";
import ThankYouPage from "./components/ThankYouPage/ThankYouPage";

import "./App.scss";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipesFetched = await fetch(
        "http://localhost:3000/recipes"
      ).then((response) => response.json());
      setRecipes([...recipes, ...recipesFetched]);
    };
    fetchRecipes();
  }, []);

  return (
    <div className="App">
      {/* <Home /> */}
      {/* <ul>
        <li>
          <Link to="/home">on the menu</Link>
        </li>
        <li>
          <Link to="/recipes">recipes</Link>
        </li>
      </ul> */}
      <Route path="/home" component={Home} />
      <Route path="/recipes" exact>
        <RecipesPage recipes={recipes} />
      </Route>
      <Route path="/recipes/:id">
        <ReceiptPage />
      </Route>

      {/* <ReceiptPage /> */}
      {/* <OrderFormPage /> */}
      {/* <ThankYouPage /> */}
    </div>
  );
}

export default App;
