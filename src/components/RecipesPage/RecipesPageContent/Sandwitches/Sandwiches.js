import React from "react";
import Items from "./Items/Items";
import { Link } from "react-router-dom";
import "./Sandwiches.scss";
import Receipt from "../../../common/Receipt/Receipt";

const Sandwiches = ({ recipes, onClickSandwichItem }) => {
  return (
    <div className="Sandwiches">
      {recipes.map((receipt) => (
        <Link to={`/recipes/${receipt.id}`}>
          <Items
            key={receipt.id}
            receipt={receipt}
            onClickSandwichItem={onClickSandwichItem}
          />
        </Link>
      ))}
    </div>
  );
};

export default Sandwiches;
