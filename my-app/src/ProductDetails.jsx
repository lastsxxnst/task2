import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(() => setError("Failed to load product details"));
  }, [id]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-xl font-bold">{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} className="w-32" />
      <p>{product.description}</p>
      <p className="font-bold">${product.price}</p>
      <Link to="/" className="back-button">Back to Products</Link>
    </div>
  );
};

export default ProductDetail;
