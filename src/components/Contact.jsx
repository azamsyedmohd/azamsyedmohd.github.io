import { useSelector } from "react-redux";

const Contact = () => {
  const dark = useSelector((state) => state?.darkMode?.isDarkMode);
  return (
    <>
      <section
        className={
          dark === false
            ? "w-full min-h-screen pb-20 pt-28"
            : "w-full min-h-screen pb-20 pt-28 bg-black"
        }
      >
        <section className="md:w-9/12 md:mx-auto w-full ">
          <p className="text-[#a5b4fc] lg:text-4xl py-3 italic font-semibold text-center pb-7 tracking-wider md:text-3xl text-2xl">
            Get in Touch !!
          </p>
        </section>
        <section className="lg:w-9/12  lg:mx-auto py-3 w-full">
          <section className="lg:w-6/12 mx-auto w-9/12 px-10 flex flex-col gap-5">
            <article className="flex flex-col gap-2">
              <p className="text-[#a5b4fc] font-semibold text-lg md:text-xl lg:text-2xl italic tracking-wide">
                Name :{" "}
              </p>
              <input
                className={
                  dark === false
                    ? "border-[#a5b4fc] border-2 px-4 py-2 outline-0 rounded-md italic tracking-widest text-md lg:text-lg"
                    : " px-4 py-2 outline-0 rounded-md italic tracking-widest text-md lg:text-lg"
                }
                type="text"
                placeholder="Name Please!"
              />
            </article>
            <article className="flex flex-col gap-2">
              <p className="text-[#a5b4fc] font-semibold text-lg md:text-xl lg:text-2xl italic tracking-wide">
                Email :{" "}
              </p>
              <input
                className={
                  dark === false
                    ? "outline outline-0 border-2 border-[#a5b4fc] py-2 px-4 rounded-md text-md text-md lg:text-lg italic tracking-widest"
                    : "outline outline-0  py-2 px-4 rounded-md text-md text-md lg:text-lg italic tracking-widest"
                }
                type="email"
                placeholder="Email Please!"
              />
            </article>
            <article className="flex flex-col gap-2 ">
              <p className="text-[#a5b4fc] font-semibold text-lg md:text-xl lg:text-2xl italic tracking-wide">
                Message :{" "}
              </p>
              <textarea
                className={
                  dark === false
                    ? "p-5 border-2 border-[#a5b4fc] outline outline-0 text-lg italic font-lighter text-gray-500 tracking-widest rounded-md overflow-auto"
                    : "p-5  outline outline-0 text-lg italic font-lighter text-gray-500 tracking-widest rounded-md overflow-auto"
                }
                cols="30"
                rows="8"
                placeholder="Message Please!"
              ></textarea>
            </article>
            <article>
              <button
                className={
                  dark === false
                    ? "bg-[#a5b4fc] py-2 px-3 text-white rounded-md font-semibold text-lg lg:text-xl ml-2 mt-2 tracking-wider italic"
                    : "bg-[#a5b4fc] py-2 px-3 text-black rounded-md font-semibold text-lg lg:text-xl ml-2 mt-2 tracking-wider italic"
                }
              >
                Submit
              </button>
            </article>
          </section>
        </section>
      </section>
    </>
  );
};
export default Contact;
