
import { projects } from "../data/projects";
import SectionTitle from "./SelectionTitle";

function Portfolio() {
    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-[#1D1237] py-24 border-t border-white/10"
        >
            {/* Efeito de luz no fundo */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#7138E8]/10 blur-[130px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                <SectionTitle
                    title="Projetos que geram resultados"
                    subtitle="Conheça alguns exemplos de sites e sistemas desenvolvidos para ajudar empresas a crescer no ambiente digital."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl overflow-hidden bg-[#281B45] border border-white/10 hover:border-[#A47AF5]/50 hover:-translate-y-2 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
                        >

                            {/* IMAGE */}
                            <div className="overflow-hidden aspect-[16/10] bg-[#30204F]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="p-5">

                                <h3 className="font-semibold text-lg text-white">
                                    {project.title}
                                </h3>

                                <p className="text-[#B99AFB] text-sm mt-2 font-medium">
                                    {project.category}
                                </p>

                                <p className="text-[#C4BBD6] text-sm mt-3 leading-relaxed">
                                    {project.description}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Portfolio;
