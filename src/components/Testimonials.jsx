import { Star } from "lucide-react";

const testimonials = [
    {
        name: "João Silva",
        company: "Clínica Saúde+",
        image: "/testimonials/client-1.jpg",
        text: "O novo site trouxe muito mais credibilidade para nossa clínica. O atendimento foi excelente do início ao fim."
    },

    {
        name: "Mariana Costa",
        company: "Imobiliária Prime",
        image: "/testimonials/client-2.jpg",
        text: "Recebemos mais contatos pelo WhatsApp após o lançamento do site. O resultado superou nossas expectativas."
    },

    {
        name: "Rafael Mendes",
        company: "Academia PowerFit",
        image: "/testimonials/client-3.jpg",
        text: "Processo muito organizado, comunicação rápida e um design que realmente representa nossa marca."
    }
];

function Testimonials() {
    return (
        <section
            id="testimonials"
            className="
                py-20
                bg-[#020617]
            "
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">

                    <span
                        className="
                            text-sky-400
                            font-medium
                        "
                    >
                        Depoimentos
                    </span>

                    <h2
                        className="
                        text-white
                            text-4xl
                            md:text-5xl
                            font-bold
                            mt-4
                        "
                    >
                        A confiança dos nossos <span className="text-sky-400">clientes</span>
                    </h2>

                    <p
                        className="
                            text-slate-400
                            mt-4
                            max-w-2xl
                            mx-auto
                        "
                    >
                        Resultados reais e experiências de empresas que confiaram
                        em nosso trabalho.
                    </p>

                </div>

                <div
                    className="
                        grid
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-8
                    "
                >

                    {testimonials.map((item, index) => (

                        <div
                            key={index}
                            className="
                                group
                                p-8
                                rounded-3xl
                                bg-[#0B0F1A]
                                border
                                border-slate-700/60
hover:border-sky-500/30
                                hover:-translate-y-2
                                transition-all
                                duration-300
                            "
                        >

                            <div className="flex gap-1 mb-5">

                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        fill="currentColor"
                                        className="
                                            text-yellow-400
                                        "
                                    />
                                ))}

                            </div>

                            <p
                                className="
                                    text-slate-300
                                    leading-relaxed
                                    mb-8
                                "
                            >
                                "{item.text}"
                            </p>

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-4
                                "
                            >

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="
                                        w-14
                                        h-14
                                        rounded-full
                                        object-cover
                                        border
                                        border-sky-500/20
                                    "
                                />

                                <div>

                                    <h4
                                        className="
                                        text-white
                                            font-semibold
                                        "
                                    >
                                        {item.name}
                                    </h4>

                                    <span
                                        className="
                                            text-sm
                                            text-sky-400
                                        "
                                    >
                                        {item.company}
                                    </span>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Testimonials;