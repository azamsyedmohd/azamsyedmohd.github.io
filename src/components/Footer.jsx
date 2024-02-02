const Footer = () => {
  return (
    <>
      <section className="w-full bg-[#a5b4fc] py-6 px-16 flex flex-col gap-3 lg:flex-row lg:justify-between  items-center lg:gap-20">
        <h1 className="text-white lg:text-2xl font-semibold tracking-wider">
          &#169; No Copyright
        </h1>
        <h1 className="text-white lg:text-2xl font-semibold tracking-wider">
          Made with Love 🧡!!
        </h1>

        <section>
          <p className="font-caveat text-white text-4xl ml-3">
            <span className="pr-1">Syed</span>
            <span className="pr-1 ">Mohd</span>
            <span className="pr-1">Azam</span>
          </p>
        </section>
      </section>
    </>
  );
};
export default Footer;
