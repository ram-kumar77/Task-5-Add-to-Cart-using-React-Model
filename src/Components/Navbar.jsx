import React from "react";

const Navbar = ({ cartCount, toggleModal }) => {
  return (
    <nav className=" z-50 bg-gray-800 p-4 text-white flex justify-between fixed w-full">
      <h1 className="text-lg font-bold">OneStore</h1>
      <button
        className="bg-blue-500 px-4 py-2 rounded"
        onClick={toggleModal}
      >
        Cart ({cartCount})
      </button>
    </nav>  
  );
};

export default Navbar;
