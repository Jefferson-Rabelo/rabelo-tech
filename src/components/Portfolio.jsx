import { projects } from "../data/projects";
import SectionTitle from "./SelectionTitle";

function Portfolio() {
    return (
        <section id="projects" className="bg-[#000A3B] py-24 border-t border-slate-700/50">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    title="Projetos que geram resultados"
                    subtitle="Conheça alguns exemplos de sites e sistemas desenvolvidos para ajudar empresas a crescer no ambiente digital."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className=" group
        rounded-2xl
        overflow-hidden
        bg-[#0d2459]
        border
        border-slate-700/60
        hover:border-sky-500/40
        hover:-translate-y-2
        transition-all
        duration-300"
                        >

                            {/* IMAGE */}
                            <div className="overflow-hidden aspect-[16/10]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-container"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="p-5">

                                <h3 className="font-semibold text-lg text-white">
                                    {project.title}
                                </h3>

                                <p className="text-sky-400 text-sm mt-2">
                                    {project.category}
                                </p>
                                <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 transition"
                                >
                                    Ver Projeto
                                </a> */}

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Portfolio;