import { developments } from "../../constants";
import { ProjectCard } from "../../hoc";

export default function OurServices() {
  return (
    <section className="relatieve w-full mx-auto p-20">
      <h1 className={`text-4xl text-white  mb-12 text-center`}>Developments</h1>
      <div className="grid grid-cols-3 gap-4">
        {developments.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}
