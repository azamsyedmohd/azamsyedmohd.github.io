import { useSelector } from "react-redux";
import AMU from "../assets/AMU-Logo.png";
const Education = () => {
  const dark = useSelector((state) => state?.darkMode?.isDarkMode);
  const education =
    "Education is not the learning of facts, but the training of the mind to think";
  return (
    <>
      <section
        className={
          dark === false
            ? "min-h-screen w-full bg-[#4B0082] py-28"
            : "min-h-screen w-full bg-[#003153] py-28"
        }
      >
        <section
          className={
            dark === false
              ? "text-xl md:text-2xl lg:w-9/12 mx-auto lg:text-4xl text-white  mb-10 px-10 italic container"
              : "text-xl md:text-2xl lg:w-9/12 mx-auto lg:text-4xl text-[#a5b4fc]  mb-10 px-10 italic container"
          }
        >
          <span className="leading-relaxed">{"'" + education + " '"}</span>
          <span className="font-semibold"> -- Albert Einstein</span>
        </section>
        <section className="lg:w-9/12 container mx-auto flex flex-col lg:flex-row lg:justify-center lg:items-center pb-10">
          <section className="flex flex-row w-9/12 mx-auto  p-5 hover:scale-125">
            <article className="w-[400px] h-[430px] rounded-xl p-1">
              <section
                className={
                  dark === false
                    ? "h-2/5 bg-white flex justify-center items-center rounded-t-xl"
                    : "h-2/5 bg-[#a5b4fc] flex justify-center items-center rounded-t-xl"
                }
              >
                <img
                  src={AMU}
                  alt="AMU-Logo"
                  className="h-28 w-28 hover:scale-110 hover:cursor-pointer"
                />
              </section>
              <section className="h-3/5 p-4 flex flex-col gap-5  border-2 rounded-b-xl hover:cursor-pointer">
                <p
                  className={
                    dark === false
                      ? "text-white text-sm lg:text-lg font-semibold"
                      : "text-[#a5b4fc] text-sm lg:text-lg font-semibold"
                  }
                >
                  Aligarh Muslim University, Aligarh
                </p>
                <p
                  className={
                    dark === false
                      ? "text-white text-sm lg:text-lg font-semibold"
                      : "text-[#a5b4fc] text-sm lg:text-lg font-semibold"
                  }
                >
                  Master of Computer Application ( MCA )
                </p>
                <p
                  className={
                    dark === false
                      ? "text-white text-sm lg:text-lg font-semibold"
                      : "text-[#a5b4fc] text-sm lg:text-lg font-semibold"
                  }
                >
                  Grade: 7.75 CGPA
                </p>
                <p
                  className={
                    dark === false
                      ? "text-white text-sm lg:text-lg font-semibold"
                      : "text-[#a5b4fc] text-sm lg:text-lg font-semibold"
                  }
                >
                  Passed with First Division
                </p>
              </section>
            </article>
          </section>
          <section className="flex flex-row w-9/12 mx-auto  p-5 hover:scale-125">
            <article className="w-[400px] h-[430px] rounded-xl ">
              <section
                className={
                  dark === false
                    ? "h-2/5 bg-white flex justify-center items-center rounded-t-xl  cursor-pointer"
                    : "h-2/5 bg-[#a5b4fc] flex justify-center items-center rounded-t-xl  cursor-pointer"
                }
              >
                <img
                  src={AMU}
                  alt="AMU-Logo"
                  className="h-28 w-28 hover:scale-110"
                />
              </section>
              <section className="h-3/5 p-4 flex flex-col gap-5 bg-green border-2 rounded-b-xl hover:scale-120 hover:cursor-pointer ">
                <p
                  className={
                    dark === false
                      ? "text-white text-sm lg:text-lg font-semibold "
                      : "text-[#a5b4fc] text-sm lg:text-lg font-semibold "
                  }
                >
                  Aligarh Muslim University, Aligarh
                </p>
                <p
                  className={
                    dark === false
                      ? "text-white text-sm lg:text-lg font-semibold "
                      : "text-[#a5b4fc] text-sm lg:text-lg font-semibold "
                  }
                >
                  Bachelor of Science in Computer Application
                </p>
                <p
                  className={
                    dark === false
                      ? "text-white text-sm  lg:text-lg font-semibold "
                      : "text-[#a5b4fc] text-sm  lg:text-lg font-semibold "
                  }
                >
                  Percentage: 75.34 %
                </p>
                <p
                  className={
                    dark === false
                      ? "text-white text-sm lg:text-lg font-semibold"
                      : "text-[#a5b4fc] text-sm lg:text-lg font-semibold"
                  }
                >
                  Passed with First Division
                </p>
              </section>
            </article>
          </section>
        </section>
      </section>
    </>
  );
};
export default Education;
