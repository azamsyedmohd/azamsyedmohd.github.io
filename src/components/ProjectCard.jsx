import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ project }) => {
  const dark = useSelector((state) => state?.darkMode?.isDarkMode);
  // eslint-disable-next-line react/prop-types
  const { name, src, code, link } = project;
  return (
    <>
      <section className="max-w-96 max-h-80 hover:scale-110 ">
        <article
          className={
            dark === false
              ? "w-full h-3/6 p-1 border-[#6a1b9a] border-2 rounded-t-xl"
              : "w-full h-3/6 p-1 border-[#a5b4fc] border-2 rounded-t-xl"
          }
        >
          <img className="w-full h-full rounded-t-xl" src={src} alt="Image " />
        </article>
        <article
          className={
            dark === false
              ? "w-full h-3/6 bg-[#6a1b9a] px-10 py-6 rounded-b-xl"
              : "w-full h-3/6 bg-[#a5b4fc] px-10 py-6 rounded-b-xl"
          }
        >
          <article className="w-full h-full">
            <p
              className={
                dark === false
                  ? "text-lg text-white font-semibold lg:text-2xl mb-10"
                  : "text-lg text-white font-semibold lg:text-2xl mb-10"
              }
            >
              {name}
            </p>
            <article className="flex flex-row justify-between">
              <a href={code} target="_blank" rel="noreferrer">
                <p
                  className={
                    dark === false
                      ? "text-white text-lg lg:text-2xl font-semibold"
                      : "text-white text-lg lg:text-2xl font-semibold"
                  }
                >
                  {"</>"}
                </p>
              </a>
              <a href={link} target="_blank" rel="noreferrer">
                <p
                  className={
                    dark === false
                      ? "text-white text-lg lg:text-2xl font-semibold"
                      : "text-white text-lg lg:text-2xl font-semibold"
                  }
                >
                  Link
                </p>
              </a>
            </article>
          </article>
        </article>
      </section>
    </>
  );
};
export default ProjectCard;
