import AMU from "../assets/AMU-Logo.png";
const Education = () => {
  return (
    <>
      <section className="min-h-screen w-full bg-[#a5b4fc] py-20">
        <section className="text-4xl w-9/12 mx-auto lg:text-5xl text-white underline underline-offset-8 mb-20">
          Education
        </section>
        <section className=" w-9/12 mx-auto flex flex-col gap-8">
          <article className="border-2 flex flex-row">
            <article className="border-2">
              <img className="w-36 h-36" src={AMU} alt="AMU-Logo" />
            </article>
            <article></article>
          </article>
          <article className="border-2 flex flex-row">
            <article className="border-2">
              <img className="w-36 h-36" src={AMU} alt="AMU-Logo" />
            </article>
            <article></article>
          </article>
        </section>
      </section>
    </>
  );
};
export default Education;
