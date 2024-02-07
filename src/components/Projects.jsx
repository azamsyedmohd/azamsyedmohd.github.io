/* eslint-disable no-unused-vars */
import ProjectCard from "./ProjectCard";
import projects from "../utils/constants";
const Projects = () => {
  const project =
    "Projects are the poetry of hard work, the prose of dedication, and the epics of achievement !!";
  return (
    <>
      <section className="w-full min-h-screen py-20">
        <section className="w-9/12 mx-auto pt-24">
          <span>{"'"}</span>
          <span className="text-lg md:2xl leading-relaxed lg:text-4xl text-[#a5b4fc] italic  ">
            {project}
          </span>
          <span>{"'"}</span>
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
