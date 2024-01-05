import React from "react";
import "./styles.css"; // Import your global styles or use inline styles

const Menu = () => {
  const menuItems = [
    { name: "Burger", price: "5.00 coins", availability: "Available" },
    { name: "Pizza", price: "7.00 coins", availability: "Unavailable" },
    // Add more menu items as needed
  ];
  return (
    <main className="container mx-auto p-6 standard-color">
      <h1 className="text-2xl font-bold mb-4 standard-color">Cafeteria Menu Management</h1>
      <section className="mb-8">
        <h1 className="text-xl font-semibold mb-2">Add New Menu Item</h1>
        <form className="grid gap-4">
          <div className="grid gap-2">
            <label className="standard-color" htmlFor="itemName">
              Item Name
            </label>
            <input
              id="itemName"
              type="text"
              placeholder="Enter item name"
            />
          </div>
          <div className="grid gap-2">
            <label className="standard-color" htmlFor="itemPrice">
              Item Price
            </label>
            <input
              id="itemPrice"
              type="number"
              placeholder="Enter item price"
            />
          </div>
          <div className="grid gap-2">
            <label className="standard-color" htmlFor="itemAvailability">
              Availability
            </label>
            <select id="itemAvailability" >
              <option disabled className="select-value">Select</option>
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </div>
          <button className="w-32 bg-light-red hover:bg-lighter-red focus:ring-lighter-red" type="submit">
            Add Item
          </button>
        </form>
      </section>
      <section>
        <h1 className="standard-color text-xl font-semibold mb-2 mt-3">Existing Menu Items</h1>
        <table className="table">
          <thead>
            <tr>
              <th className="text-light-red">Item Name</th>
              <th className="text-light-red">Price</th>
              <th className="text-light-red">Availability</th>
              <th className="text-light-red">Actions</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item, index) => (
              <tr key={index}>
                <td className="font-medium">{item.name}</td>
                <td>{item.price}</td>
                <td>{item.availability}</td>
                <td>
                  <button
                    className="button border-light-red text-light-red hover-light-red focus-ring-light-red"
                    type="button"
                  >
                    Update Price
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          </section>
    </main>
  );
};

export default Menu;
