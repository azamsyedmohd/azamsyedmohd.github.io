/* eslint-disable no-unused-vars */
import ProjectCard from "./ProjectCard";
import projects from "../utils/constants";
import { useSelector } from "react-redux";
const Projects = () => {
  const dark = useSelector((state) => state?.darkMode?.isDarkMode);
  const project =
    "Projects are the poetry of hard work, the prose of dedication, and the epics of achievement !!";
  return (
    <>
      <section
        className={
          dark === false
            ? "w-full min-h-screen py-20"
            : "bg-black w-full min-h-screen py-20"
        }
      >
        <section className="w-9/12 mx-auto pt-24">
          <span className="text-lg md:2xl leading-relaxed lg:text-4xl text-[#6a1b9a] italic">
            {"'"}
          </span>
          <span className="text-lg md:2xl leading-relaxed lg:text-4xl text-[#6a1b9a] italic ">
            {project}
          </span>
          <span className="text-lg md:2xl leading-relaxed lg:text-4xl text-[#6a1b9a] italic">
            {"'"}
          </span>
        </section>
        <section className="w-9/12 mx-auto  p-8 my-8 flex lg:flex-row lg:grow  lg:gap-20 justify-center flex-col gap-10 pb-10">
          {projects?.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </section>
      </section>
    </>
  );
};
export default Projects;
