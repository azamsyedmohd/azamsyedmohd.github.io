import ProjectCard from "./ProjectCard";
const Projects = () => {
  const projects =
    "Projects are the poetry of hard work, the prose of dedication, and the epics of achievement !!";
  return (
    <>
      <section className="w-full min-h-screen">
        <section className="w-9/12 mx-auto text-4xl text-[#a5b4fc] italic tracking-wide pt-24">
          <span>{"'"}</span>
          <span className="leading-relaxed">{projects}</span>
          <span>{"'"}</span>
        </section>
        <section className="w-9/12 mx-auto  p-8 my-8 ">
          <ProjectCard />
        </section>
      </section>
    </>
  );
};
export default Projects;
