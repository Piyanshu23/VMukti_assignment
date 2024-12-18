import React, { useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: "1", name: "Laptop", price: 1000, category: "Electronics" },
    { id: "2", name: "Shoes", price: 50, category: "Fashion" },
    { id: "3", name: "Watch", price: 200, category: "Accessories" },
  ]);

  // Function to delete a product by ID
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold text-blue-600 mb-8 text-center">
        Product List
      </h2>
      <ul className="space-y-6">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex justify-between items-center p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div>
              <p className="text-2xl font-semibold text-gray-700">
                {product.name}
              </p>
              <p className="text-lg text-gray-500">
                ${product.price}{" "}
                <span className="text-sm text-gray-400 ml-2">
                  {product.category}
                </span>
              </p>
            </div>
            <button
              onClick={() => deleteProduct(product.id)}
              className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-medium px-5 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-200"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
