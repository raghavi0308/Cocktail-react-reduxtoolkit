import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchSingleCocktails } from "../Redux/features/cocktailSlice";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Components/Layout";
import SpinnerAnim from "../Components/shared/SpinnerAnim";
import { getCocktailImageOverride } from "../config/imageOverrides";

const ProductDetails = () => {
  const [modifendCocktail, setmodifendCocktail] = useState([]);
  const { loading, cocktail } = useSelector((state) => ({ ...state.app }));
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchSingleCocktails({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: img,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {
        name,
        img: getCocktailImageOverride(name) || img,
        info,
        category,
        glass,
        ingredients,
      };
      setmodifendCocktail(newCocktail);
    } else {
      setmodifendCocktail(null);
    }
  }, [id, cocktail]);

  if (!modifendCocktail) {
    return <h2>No Cocktail Details</h2>;
  } else {
    const { name, img, info, category, glass, ingredients } = modifendCocktail;
    return (
      <>
        {loading ? (
          <SpinnerAnim />
        ) : (
          <Layout>
            <div className="container mt-4">
              <Link to="/" className="btn btn-details">
                GO BACK
              </Link>
              <div className="details-hero mt-4">
                <div>
                  <img src={img} alt={name} className="details-img" loading="lazy" />
                </div>
                <div>
                  <h2 className="details-title">{name}</h2>
                  <div className="details-meta">{category} • {glass} • {info}</div>
                  <div>
                    {ingredients && ingredients.filter(Boolean).map((ing, idx) => (
                      <span key={idx} className="pill">{ing}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        )}
      </>
    );
  }
};

export default ProductDetails;
