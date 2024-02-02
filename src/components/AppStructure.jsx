import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
const AppStructure = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
export default AppStructure;
