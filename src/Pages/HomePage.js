import React, { useState, useEffect } from "react";
import Layout from "./../Components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../Redux/features/cocktailSlice";
import SpinnerAnim from "../Components/shared/SpinnerAnim";
import { Link } from "react-router-dom";
// import SearchBox from "../Components/SearchBox";
import { getCocktailImageOverride } from "../config/imageOverrides";

const HomePage = () => {
  const [modifiedCocktails, setmodifiedCocktails] = useState([]);
  const { loading, cocktails, error } = useSelector((state) => ({
    ...state.app,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCocktails());
  }, [dispatch]);
  useEffect(() => {
    if (Array.isArray(cocktails)) {
      const newCocktails = cocktails.map((item) => {
        const { idDrink, strAlcoholic, strDrinkThumb, strGlass, strDrink } =
          item;
        const overrideImg = getCocktailImageOverride(strDrink);
        return {
          id: idDrink,
          name: strDrink,
          img: overrideImg || strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setmodifiedCocktails(newCocktails);
    } else {
      setmodifiedCocktails([]);
    }
  }, [cocktails]);
  if (loading) {
    return <SpinnerAnim />;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (!cocktails) {
    return (
      <Layout>
        <h2>No Cocktail Found With THis Name</h2>
      </Layout>
    );
  }
  return (
    <>
      <div className="container">
        <div className="row">
          {modifiedCocktails.length === 0 && (
            <div className="col-12 mt-4">
              <h4>No cocktails to display.</h4>
            </div>
          )}
          {modifiedCocktails.map((item) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mt-3" key={item.id}>
              <div className="cocktail-card">
                <div className="cocktail-media-wrap">
                  <img src={item.img} className="cocktail-img" alt={item.name} loading="lazy" />
                </div>
                <div className="cocktail-body">
                  <h5 className="cocktail-title">{item.name}</h5>
                  <div className="cocktail-meta">
                    <span className="badge bg-outline">{item.glass}</span>
                    <span className="dot" />
                    <span className="text-muted">{item.info}</span>
                  </div>
                  <Link to={`/products/${item.id}`} className="btn btn-details">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
