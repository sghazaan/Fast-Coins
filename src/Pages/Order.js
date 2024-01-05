import React, { useState } from "react";
import "./styles.css";

const OrderProcessing = ({ menuItems }) => {
  const [selectedItems, setSelectedItems] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);

  const handleQuantityChange = (itemName, quantity) => {
    const updatedSelectedItems = { ...selectedItems, [itemName]: quantity };
    setSelectedItems(updatedSelectedItems);
    calculateTotalAmount(updatedSelectedItems);
  };

  const calculateTotalAmount = (selectedItems) => {
    let total = 0;
    for (const itemName in selectedItems) {
      const quantity = selectedItems[itemName];
      const item = menuItems.find((menuItem) => menuItem.name === itemName);
      if (item) {
        total += item.price * quantity;
      }
    }
    setTotalAmount(total);
  };

  const placeOrder = () => {
    // Replace this function with your actual order placement logic
    console.log("Placing order:", selectedItems);
  };

  return (
    <main className="container mx-auto p-6 standard-color">
      <h1 className="text-2xl font-bold mb-4 standard-color">Order Processing</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 standard-color">Select Items and Place Order</h2>
        <form className="grid gap-4">
          {menuItems.map((item, index) => (
            <div key={index} className="grid gap-2">
              <label className="standard-color" htmlFor={`quantity-${item.name}`}>
                {item.name}  {item.price} coins
              </label>
              <input
                id={`quantity-${item.name}`}
                type="number"
                placeholder="Enter quantity"
                value={selectedItems[item.name] || ""}
                onChange={(e) => handleQuantityChange(item.name, e.target.value)}
              />
            </div>
          ))}
          <button
            className="w-32 bg-light-red hover:bg-lighter-red focus:ring-lighter-red"
            type="button"
            onClick={placeOrder}
          >
            Place Order
          </button>
        </form>
      </section>
      <section>
        <h1 className="standard-color text-xl font-semibold mb-2 mt-3">Order Summary</h1>
        <p className="standard-color">
          Total Amount: ${totalAmount.toFixed(2)}
        </p>
      </section>
    </main>
  );
};

export default OrderProcessing;
