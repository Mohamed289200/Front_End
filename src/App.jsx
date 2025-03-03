import { Routes, Route } from "react-router-dom";
import Main_Layout from "./layouts/Main_Layout";
import { Doctor_Dashboard_Layout } from "./layouts/doctor/Doctor_Dashboard_Layout";
import { Dashboard } from "./components/doctor/Dashboard/Dashboard";
import { Messages } from "./components/doctor/Messages/Messages";
import { Main_Grid } from "./components/doctor/Dashboard/Main_Grid";
function App() {
  return (
  <Routes>
      {/* layouts and inside them their children  */}

      {/* layout like down */}
      <Route path="/" element={<Main_Layout />}>
      <Route path="tasneem" element={<Doctor_Dashboard_Layout />}>
          <Route index element={<Main_Grid />} />
          <Route path="messages" element={<Messages />} />
        </Route>
        {/* children (pages that use this layout) like down */}
        {/* <Route index element={<Home/>}/> */}
      </Route>
    </Routes>    
  );
}

export default App;
