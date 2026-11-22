
const items = [
    {
        title: "Atendimento Personalizado",
        desc: "Cada projeto é planejado para o seu negócio."
    },
    {
        title: "Tecnologia Moderna",
        desc: "Utilizamos ferramentas e tecnologias atuais para garantir qualidade e desempenho."
    },
    {
        title: "Alta Performance",
        desc: "Sites rápidos e responsivos."
    },
    {
        title: "Suporte",
        desc: "Suporte mesmo após a entrega do projeto."
    }
];

function WhyChoose() {
    return (
        <section className="relative bg-[#1D1237] py-24 overflow-hidden">

            {/* Efeito de luz no fundo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#7138E8]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#B99AFB]">
                        Nosso diferencial
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                        Por que escolher a
                        <span className="text-[#B99AFB]"> Rabelo.Tec?</span>
                    </h2>

                    <p className="text-[#C4BBD6] text-lg max-w-2xl mx-auto mt-5">
                        Mais do que desenvolver sites, queremos criar soluções
                        digitais que contribuam para o crescimento do seu negócio.
                    </p>
                </div>

                {/* CARDS */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="group p-7 rounded-2xl bg-[#281B45] border border-white/10 hover:border-[#A47AF5]/50 hover:bg-[#30204F] hover:-translate-y-2 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                        >
                            <div className="w-10 h-1 rounded-full bg-[#7138E8] mb-6 group-hover:w-16 transition-all duration-300" />

                            <h3 className="text-white text-xl font-semibold">
                                {item.title}
                            </h3>

                            <p className="text-[#C4BBD6] mt-3 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default WhyChoose;
