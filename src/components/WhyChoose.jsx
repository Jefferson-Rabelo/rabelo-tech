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
        <section className="bg-[#020617] py-24">

            <div className="max-w-7xl mx-auto px-6" >

                <h2 className="text-4xl font-bold text-center  text-white mb-12">
                    Por que escolher a
                    <span className="text-cyan-500"> Rabelo.Tech?</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-[#0a1931] border border-purple-500/10 hover:scale-105 transition duration-300"
                        >
                            <h3 className="text-white text-xl font-semibold white">
                                {item.title}
                            </h3>

                            <p className="text-gray-300 mt-3">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>

            </div >

        </section >
    );
}

export default WhyChoose;