import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
const AppStructure = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
export default AppStructure;
