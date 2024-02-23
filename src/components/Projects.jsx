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
            ? "w-full min-h-screen py-20 relative"
            : "w-full bg-[#1b2431]  min-h-screen py-20 "
        }
      >
        <section className=" pt-24 w-4/5 mx-auto">
          <span
            className={
              dark === false
                ? "text-lg md:2xl leading-relaxed lg:text-4xl text-[#6a1b9a] italic"
                : "text-lg md:2xl leading-relaxed lg:text-4xl text-[#a5b4fc] italic"
            }
          >
            {"'"}
          </span>
          <span
            className={
              dark === false
                ? "text-lg md:2xl leading-relaxed lg:text-4xl text-[#6a1b9a] italic "
                : "text-lg md:2xl leading-relaxed lg:text-4xl text-[#a5b4fc] italic "
            }
          >
            {project}
          </span>
          <span
            className={
              dark === false
                ? "text-lg md:2xl leading-relaxed lg:text-4xl text-[#6a1b9a] italic"
                : "text-lg md:2xl leading-relaxed lg:text-4xl text-[#a5b4fc] italic"
            }
          >
            {"'"}
          </span>
        </section>
        <section className="w-4/5 mx-auto p-5 my-8 flex flex-row gap-8 flex-wrap ">
          {projects?.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </section>
      </section>
    </>
  );
};
export default Projects;
