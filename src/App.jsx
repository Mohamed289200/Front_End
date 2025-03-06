import { Routes, Route } from "react-router-dom";
import Main_Layout from "./layouts/Main_Layout";
import { Doctor_Dashboard_Layout } from "./layouts/doctor/Doctor_Dashboard_Layout";
import { Dashboard } from "./components/doctor/Dashboard/Dashboard";
import { Messages } from "./components/doctor/Messages/Messages";
import { Main_Grid } from "./components/doctor/Dashboard/Main_Grid";
import Admin_Layout from "./layouts/Admin_Layout";
import Overview from "./pages/admin/Overview";
import Appointments from "./pages/admin/Appointments";
import Diseases from "./pages/admin/Diseases";
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
      <Route path="/admin" element={<Admin_Layout />}>
        <Route index element={<Overview />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="diseases" element={<Diseases />} />
      </Route>
    </Routes>
  );
}

export default App;
