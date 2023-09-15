import { useContext } from "react";
import { ourServices } from "../../constants";
import { LanguageContext } from "../../context/LanguageContext";
import { ProjectCard } from "../../hoc";

export default function OurServices() {
  const { lang } = useContext(LanguageContext);
  return (
    <section className="relatieve w-full mx-auto p-20">
      <h1 className={`text-4xl text-white  mb-12 text-center`}>
        {ourServices.title[lang]}
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {ourServices.developments.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            description={project.description?.[lang]}
            image={project.image}
            name={project.name?.[lang]}
          />
        ))}
      </div>
    </section>
  );
}
