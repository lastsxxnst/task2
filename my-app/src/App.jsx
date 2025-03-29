import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetails";
import { ThemeProvider } from "./ThemeProvider";
import ThemeToggle from "./ThemeToggle";


const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="p-4">
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
