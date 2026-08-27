const techs = [
    "React",
    "Node.js",
    "Express",
    "Tailwind",
    "JavaScript",
    "MySQL",
    "PostgreSQL",
    "Git",
    "APIs"
];

function Technologies() {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-center mb-10">
                    Tecnologias que utilizamos
                </h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {techs.map((tech, index) => (
                        <span
                            key={index}
                            className="px-5 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Technologies;