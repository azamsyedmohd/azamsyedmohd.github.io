import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Footer = () => {
  const dark = useSelector((state) => state?.darkMode?.isDarkMode);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <section
        className={
          dark === false
            ? " w-full bg-[#a5b4fc] py-6 px-16 flex flex-col gap-3 lg:flex-row lg:justify-between  items-center lg:gap-20 border-2 shadow-xl"
            : " w-full bg-[#121212] py-6 px-16 flex flex-col gap-3 lg:flex-row lg:justify-between  items-center lg:gap-20  shadow-xl"
        }
      >
        <h1
          className={
            dark === false
              ? "text-white lg:text-2xl font-semibold tracking-wider italic"
              : "text-[#a5b4fc] lg:text-2xl font-semibold tracking-wider italic"
          }
        >
          &#169; No Copyright
        </h1>
        <h1
          className={
            dark === false
              ? "text-white lg:text-2xl font-semibold tracking-wider italic"
              : "text-[#a5b4fc] lg:text-2xl font-semibold tracking-wider italic"
          }
        >
          🧡 Made with Love !! 🧡
        </h1>

        <section>
          <p
            className={
              dark === false
                ? "text-xl font-caveat text-white lg:text-4xl ml-3"
                : "text-xl font-caveat text-[#a5b4fc] lg:text-4xl ml-3"
            }
          >
            <span className="pr-1">Syed</span>
            <span className="pr-1 ">Mohd</span>
            <span className="pr-1">Azam</span>
            <Link to="/">
              <span
                className={
                  dark === false
                    ? "p-2 bg-white text-[#a5b4fc] rounded-full ml-4 hover:cursor-pointer font-semibold animate-bounce inline-block "
                    : "p-2 bg-[#a5b4fc] text-[#121212] rounded-full ml-4 hover:cursor-pointer font-semibold animate-bounce inline-block "
                }
                onClick={() => scrollToTop()}
              >
                Top
              </span>
            </Link>
          </p>
        </section>
      </section>
    </>
  );
};
export default Footer;
