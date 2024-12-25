import React from "react";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className=" translate-y-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="border shadow-md rounded p-4 flex flex-col items-center"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-32 object-contain mb-2"
          />
          <h2 className="text-center text-lg font-bold">{product.title}</h2>
          <p className="text-green-500 font-bold">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-400 "
          >
            Add to Cart
          </button>
        </div>  
      ))}
    </div>
  );
};

export default ProductList;