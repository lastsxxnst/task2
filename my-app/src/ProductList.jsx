import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch(() => setError("Failed to load products"));
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h1 className="text-xl font-bold">Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-item">
              <Link to={`/product/${product.id}`}>{product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
