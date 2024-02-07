import { Link } from "react-router-dom";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <section className=" w-full bg-[#a5b4fc] py-6 px-16 flex flex-col gap-3 lg:flex-row lg:justify-between  items-center lg:gap-20 border-2 shadow-xl">
        <h1 className="text-white lg:text-2xl font-semibold tracking-wider italic">
          &#169; No Copyright
        </h1>
        <h1 className="text-white lg:text-2xl font-semibold tracking-wider italic">
          Made with Love 🧡!!
        </h1>

        <section>
          <p className="font-caveat text-white text-4xl ml-3">
            <span className="pr-1">Syed</span>
            <span className="pr-1 ">Mohd</span>
            <span className="pr-1">Azam</span>
            <Link to="/">
              <span
                className="p-2 bg-white text-[#a5b4fc] rounded-full ml-4 hover:cursor-pointer font-semibold animate-bounce inline-block "
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
