import { Outlet } from "react-router-dom";

function App() {
  return (
    // this is example for layout we will make we add static components and add outlet that add layout children
    <div>
      <h1>My App Navbar</h1>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}

export default App;
