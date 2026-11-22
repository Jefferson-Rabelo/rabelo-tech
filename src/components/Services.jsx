
import { services } from "../data/services";

function Services() {
    return (
        <section
            id="servicos"
            className="bg-[#F9F8FD] py-24 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* CABEÇALHO */}
                <div className="text-center mb-16">

                    <span className="
                        text-sm font-bold tracking-[0.2em]
                        uppercase text-[#7138E8]
                    ">
                        Nossas soluções
                    </span>

                    <h2 className="
                        mt-4 text-4xl md:text-5xl
                        font-bold text-[#1D1237]
                    ">
                        O que podemos fazer pelo{" "}
                        <span className="text-[#7138E8]">
                            seu negócio
                        </span>
                    </h2>

                    <p className="
                        text-lg text-[#655B7E]
                        max-w-3xl mx-auto mt-5
                    ">
                        Soluções digitais desenvolvidas para fortalecer
                        sua presença online, atrair clientes e facilitar
                        o crescimento da sua empresa.
                    </p>

                </div>

                {/* CARDS DE SERVIÇOS */}
                <div className="
                    grid md:grid-cols-2 lg:grid-cols-4 gap-6
                ">

                    {services.map((service, index) => {

                        const Icon = service.icon;

                        return (
                            <div
                                key={index}
                                className="
                                    group
                                    p-7
                                    rounded-2xl
                                    bg-white
                                    border border-[#E9E2F5]
                                    shadow-[0_8px_30px_rgba(29,18,55,0.06)]
                                    hover:shadow-[0_16px_40px_rgba(113,56,232,0.13)]
                                    hover:-translate-y-2
                                    hover:border-[#D8C7F7]
                                    transition-all duration-300
                                "
                            >

                                {/* ÍCONE */}
                                <div className="
                                    w-16 h-16
                                    rounded-2xl
                                    bg-[#F2EBFF]
                                    flex items-center justify-center
                                    mb-6
                                    group-hover:bg-[#7138E8]
                                    transition-colors duration-300
                                ">
                                    <Icon
                                        size={32}
                                        className="
                                            text-[#7138E8]
                                            group-hover:text-white
                                            transition-colors duration-300
                                        "
                                    />
                                </div>

                                {/* TÍTULO */}
                                <h3 className="
                                    text-xl font-bold text-[#1D1237]
                                ">
                                    {service.title}
                                </h3>

                                {/* DESCRIÇÃO */}
                                <p className="
                                    text-[#655B7E]
                                    mt-3 leading-relaxed
                                ">
                                    {service.desc}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}

export default Services;
