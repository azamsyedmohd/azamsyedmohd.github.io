import Profile from "../assets/Profile Image.jpeg";
import { FaAlignJustify } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <section className="fixed w-full  flex justify-between items-center px-4 py-2 bg-[#a5b4fc]">
        <img
          className="w-[70px] h-[70px] rounded-lg bg-[#a5b4fc]"
          src={Profile}
          alt="Name-Logo"
        />
        <ul className="hidden md:flex md:flex-row  md:gap-x-3 lg:gap-x-7">
          <li className="text-white font-semibold text-xl hover:cursor-pointer hover:border-[1px] p-2 hover:rounded-md">
            Home
          </li>
          <li className="text-white font-semibold text-xl hover:cursor-pointer  hover:border-[1px] p-2 hover:rounded-md">
            About
          </li>
          <li className="text-white font-semibold text-xl hover:cursor-pointer  hover:border-[1px] p-2 hover:rounded-md">
            Skills
          </li>
          <li className="text-white font-semibold text-xl hover:cursor-pointer  hover:border-[1px] p-2 hover:rounded-md">
            Projects
          </li>
          <li className="text-white font-semibold text-xl hover:cursor-pointer hover:border-[1px] p-2 hover:rounded-md">
            Education
          </li>
          <li className="text-white font-semibold text-xl hover:cursor-pointer hover:border-[1px] p-2 hover:rounded-md">
            Contact
          </li>
        </ul>
        <article className="md:hidden">
          <FaAlignJustify className="h-6 w-6 text-white" />
        </article>
      </section>
    </>
  );
};
export default NavBar;
