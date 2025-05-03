import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import "./index.css";
import FilterList from "../FilterList";
import { PiGreaterThan, PiLessThanThin } from "react-icons/pi";
import Product from "../Product";
import Footer from "../Footer";
import cookie from "js-cookie";
import { Navigate } from "react-router-dom";
import ErrorBoundary from "../ErrorHandler";

const Home = () => {
  const [isFilter, setIsFilter] = useState(true);
  const [productList, setProductList] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOption, setSortOption] = useState("RECOMMENDED");
  const [searchInput, setSearchInput] = useState("");
  const jwt = cookie.get("jwtToken");
  const fetchData = async () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProductList(json));
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    sortProducts(sortOption);
  }, [sortOption, productList]);

  const sortProducts = (option) => {
    let sortedArray = [...productList];
    switch (option) {
      case "RECOMMENDED":
        sortedArray = productList;
        break;
      case "NEWEST FIRST":
        sortedArray.sort((a, b) => a.price - b.price);
        break;
      case "POPULAR":
        sortedArray.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      case "PRICE: HIGH TO LOW":
        sortedArray.sort((a, b) => b.price - a.price);
        break;
      case "PRICE: LOW TO HIGH":
        sortedArray.sort((a, b) => a.price - b.price);
        break;
      default:
        sortedArray = productList;
        break;
    }
    setSortedProducts(sortedArray);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  const sendingToHome = (data) => {
    setSearchInput(data);
  };
  const filteredProducts = sortedProducts.filter((each) =>
    each.title.includes(searchInput)
  );
  
  if (!jwt) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="home-container">
      <NavBar sendingToHome={sendingToHome} />
      <div className="home-div-container">
        <div className="main-text-container">
          <h1 className="home-discover-heading">DISCOVER OUR PRODUCTS</h1>
          <p className="home-lorem-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vel metus velit.
          </p>
        </div>
      </div>
      <div className="product-and-filter-container">
        <hr />
        <div className="filters-container">
          <div className="filter-section-container">
            <p>{filteredProducts.length} ITEMS</p>
            <div
              className="hide-filter-container"
              onClick={() => setIsFilter((prevState) => !prevState)}
            >
              {isFilter ? (
                <PiLessThanThin className="less-than-png" />
              ) : (
                <PiGreaterThan className="less-than-png" />
              )}
              <p className="filter-hide-heading">
                {isFilter ? "HIDE FILTERS" : "SHOW FILTERS"}
              </p>
            </div>
          </div>
          <select
            className="filter-select-option-container"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="RECOMMENDED">RECOMMENDED</option>
            <option value="NEWEST FIRST">NEWEST FIRST</option>
            <option value="POPULAR">POPULAR</option>
            <option value="PRICE: HIGH TO LOW">PRICE: HIGH TO LOW</option>
            <option value="PRICE: LOW TO HIGH">PRICE: LOW TO HIGH</option>
          </select>
        </div>
        <hr />
        <div className="customizble-container">
          <div className="filter-section-container responsive-filters">
            {isFilter && <FilterList />}
          </div>
          <ul className="product-unordered-container">
            {(!filteredProducts ? productList : filteredProducts).map(
              (eachProduct, index) => (
                <ErrorBoundary key={index}>
                  <Product product={eachProduct} />
                </ErrorBoundary>
              )
            )}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
