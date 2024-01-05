import Menu from './Pages/Menu'
import Order from './Pages/Order'

function App() {
  const menuItems = [
    { name: "Burger", price: 5.0 },
    { name: "Pizza", price: 7.0 },
    // Add more menu items as needed
  ];
  return (
    <div className="App">
      <Menu></Menu>
      {/* <Order menuItems={menuItems}/> */}
    </div>
  );
}

export default App;
