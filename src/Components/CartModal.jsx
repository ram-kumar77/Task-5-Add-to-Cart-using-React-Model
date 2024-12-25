import React from "react";

const CartModal = ({ cart, setCart, removeFromCart, toggleModal }) => {
    // Function to increase quantity
    const increaseQuantity = (id) => {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      };
  
    // Function to decrease quantity
    const decreaseQuantity = (id) => {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      };
  
    // Calculate the total price
    const totalPrice = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  
    return (
      <div className="fixed inset-0 bg-teal-900 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-4 rounded w-3/4 max-w-md">
          <h2 className="text-lg font-bold mb-4">Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between items-center mb-2">
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
  
                  {/* Title and Price */}
                  <span>{item.title}</span>
                  <span>${item.price.toFixed(2)}</span>
  
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
 
                  <button
  onClick={() => decreaseQuantity(item.id)}
  className="px-2 py-1 bg-gray-300 rounded"
>
  -
</button>         
 
                    <span>{item.quantity}</span>
                    
                    <button
  onClick={() => increaseQuantity(item.id)}
  className="px-2 py-1 bg-gray-300 rounded"
>
  +
</button>

                  </div>
  
                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
  
          {/* Total Price */}
          <p className="text-lg font-bold mt-4">
            Total Price: ${totalPrice.toFixed(2)}
          </p>
  
          {/* Close Modal */}
          <button
            onClick={toggleModal}
            className="bg-red-700 text-white px-4 py-2 mt-4 rounded"
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  

export default CartModal;