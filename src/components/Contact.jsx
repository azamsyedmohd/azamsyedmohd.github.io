const Contact = () => {
  return (
    <>
      <section className="w-full min-h-screen mb-20 pt-28">
        <section className="w-9/12 mx-auto ">
          <p className="text-[#a5b4fc] text-4xl py-3 italic font-semibold text-center pb-7 tracking-wider">
            Get in Touch !!
          </p>
        </section>
        <section className="w-9/12  mx-auto py-3">
          <section className="w-6/12 mx-auto  px-10 flex flex-col gap-5">
            <article className="flex flex-col gap-2">
              <p className="text-[#a5b4fc] font-semibold text-2xl italic">
                Name :{" "}
              </p>
              <input
                className="border-[#a5b4fc] border-2 px-4 py-2 outline-0 rounded-md italic tracking-widest text-lg"
                type="text"
                placeholder="Name Please!"
              />
            </article>
            <article className="flex flex-col gap-2">
              <p className="text-[#a5b4fc] font-semibold text-2xl italic">
                Email :{" "}
              </p>
              <input
                className="outline outline-0 border-2 border-[#a5b4fc] py-2 px-4 rounded-md text-lg italic tracking-widest"
                type="email"
                placeholder="Email Please!"
              />
            </article>
            <article className="flex flex-col gap-2 ">
              <p className="text-[#a5b4fc] font-semibold text-2xl italic">
                Message :{" "}
              </p>
              <textarea
                className="p-5 border-2 border-[#a5b4fc] outline outline-0 text-lg italic font-lighter text-gray-500 tracking-widest rounded-md overflow-auto"
                cols="30"
                rows="8"
                placeholder="Message Please!"
              ></textarea>
            </article>
            <article>
              <button className="bg-[#a5b4fc] py-2 px-3 text-white rounded-md font-semibold text-xl ml-2 mt-2 tracking-wider italic">
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
