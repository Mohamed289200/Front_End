import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";

const router = createBrowserRouter([
  // make layouts and add their children
  { path: "/", element: <App />, children: [{ path: "/" }] },
  // { path: "/", element: <MainLayout />, children: [{ path: "/" }] },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
