import { Outlet } from "react-router-dom";

const Main_Layout = () => {
  return (
    <div>
      <div>nav</div>
      <Outlet />
      <div>footer</div>
    </div>
  );
};

export default Main_Layout;
