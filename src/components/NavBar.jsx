import Profile from "../assets/Profile Image.jpeg";
const NavBar = () => {
  return (
    <>
      <section className="fixed w-full  flex justify-between items-center px-4 py-2 bg-[#a5b4fc]">
        <article>
          <img
            className="w-[70px] h-[70px] rounded-lg bg-[#a5b4fc]"
            src={Profile}
            alt="Name-Logo"
          />
        </article>
      </section>
    </>
  );
};
export default NavBar;
