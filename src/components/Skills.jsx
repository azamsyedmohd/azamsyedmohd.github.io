import Marquee from "react-fast-marquee";
import HTML5 from "../assets/HTML5.png";
import CSS3 from "../assets/CSS3.png";
import JavaScript from "../assets/JavaScript.png";
import React from "../assets/React.png";
import GitHub from "../assets/Github.png";
import ReduxToolkit from "../assets/Redux.png";
import Tailwind from "../assets/tailwind.png";
const Skills = () => {
  return (
    <>
      <section className="w-full min-h-screen bg-[#a5b4fc]">
        <section className="w-3/4 mx-auto  flex flex-col gap-12">
          <article className="w-full">
            <p className="text-5xl font-roboto font-semibold tracking-wide underline underline-offset-8  w-fit mt-20 text-white">
              Skills
            </p>
          </article>
          <article className="w-full mt-28">
            <Marquee>
              <img
                className="h-24 w-48 rounded-2xl px-8"
                src={HTML5}
                alt="HTML-Image"
              />
              <img
                className="h-24 w-48 rounded-2xl  px-8"
                src={CSS3}
                alt="CSS3-Image"
              />
              <img
                className="h-24 w-48 rounded-3xl px-8"
                src={JavaScript}
                alt="JavaScript-Image"
              />
              <img
                className="h-24 w-48 rounded-2xl px-8"
                src={React}
                alt="React-Image"
              />
              <img
                className="h-24 w-48 rounded-2xl px-8"
                src={GitHub}
                alt="GitHub-Image"
              />
              <img
                className="h-24 w-48 rounded-2xl px-8"
                src={ReduxToolkit}
                alt="Redux-Toolkit-Image"
              />
            </Marquee>
          </article>
        </section>
      </section>
    </>
  );
};
export default Skills;
