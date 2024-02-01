import AMU from "../assets/AMU-Logo.png";
const Education = () => {
  return (
    <>
      <section className="min-h-screen w-full bg-[#a5b4fc] py-20">
        <section className="text-4xl w-9/12 mx-auto lg:text-5xl text-white underline underline-offset-8 mb-20">
          Education
        </section>
        <section className="w-9/12 mx-auto flex justify-center items-center">
          <section className="flex flex-row w-9/12 mx-auto  p-5">
            <article className="w-[400px] h-96 rounded-xl ">
              <section className="h-2/5 bg-white flex justify-center items-center rounded-t-xl">
                <img
                  src={AMU}
                  alt="AMU-Logo"
                  className="h-28 w-28 hover:scale-110 hover:cursor-pointer"
                />
              </section>
              <section className="h-3/5 p-4 flex flex-col gap-5  border-2 rounded-b-xl hover:cursor-pointer">
                <p className="text-white text-lg font-semibold">
                  Aligarh Muslim University, Aligarh
                </p>
                <p className="text-white text-lg font-semibold">
                  Master of Computer Application ( MCA )
                </p>
                <p className="text-white text-lg font-semibold">
                  Grade: 7.75 CGPA
                </p>
                <p className="text-white text-lg font-semibold">
                  Passed with First Division
                </p>
              </section>
            </article>
            <article></article>
          </section>
          <section className="flex flex-row w-9/12 mx-auto  p-5">
            <article className="w-[400px] h-96 rounded-xl ">
              <section className="h-2/5 bg-white flex justify-center items-center rounded-t-xl  cursor-pointer">
                <img
                  src={AMU}
                  alt="AMU-Logo"
                  className="h-28 w-28 hover:scale-110"
                />
              </section>
              <section className="h-3/5 p-4 flex flex-col gap-5 bg-green border-2 rounded-b-xl hover:scale-120 hover:cursor-pointer ">
                <p className="text-white text-lg font-semibold ">
                  Aligarh Muslim University, Aligarh
                </p>
                <p className="text-white text-lg font-semibold ">
                  Bachelor of Science in Computer Application
                </p>
                <p className="text-white text-lg font-semibold ">
                  Percentage: 75.34 %
                </p>
                <p className="text-white text-lg font-semibold">
                  Passed with First Division
                </p>
              </section>
            </article>
            <article></article>
          </section>
        </section>
      </section>
    </>
  );
};
export default Education;
