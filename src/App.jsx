import { Routes, Route } from "react-router-dom";
import Main_Layout from "./layouts/Main_Layout";

function App() {
  return (
    <Routes>
      {/* layouts and inside them their children  */}

      {/* layout like down */}
      <Route path="/" element={<Main_Layout />}>
        {/* children (pages that use this layout) like down */}
        {/* <Route index element={<Home/>}/> */}
      </Route>
    </Routes>
  );
}

export default App;
