
import { processSteps } from "../data/process";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

function ProcessSection() {
    return (
        <section
            id="process"
            className="bg-[#F9F8FD] py-24 overflow-hidden"
        >
            <div className="max-w-5xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-16">

                    <span className="
                        text-sm font-bold tracking-[0.2em]
                        uppercase text-[#7138E8]
                    ">
                        Nosso processo
                    </span>

                    <h2 className="
                        mt-4 text-4xl md:text-5xl
                        font-bold text-[#1D1237] mb-5
                    ">
                        Como funciona o desenvolvimento{" "}
                        <span className="text-[#7138E8]">
                            do seu projeto?
                        </span>
                    </h2>

                    <p className="
                        text-[#655B7E] text-lg
                        max-w-3xl mx-auto
                    ">
                        Um processo simples, transparente e com
                        acompanhamento em cada etapa.
                    </p>

                </div>

                {/* TIMELINE */}
                <div className="space-y-8">

                    {processSteps.map((step, index) => {

                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1
                                }}
                                className="relative flex gap-5 md:gap-7"
                            >

                                {/* ÍCONE E LINHA */}
                                <div className="flex flex-col items-center">

                                    <div className="
                                        w-14 h-14 shrink-0
                                        rounded-2xl
                                        bg-[#F0E9FF]
                                        border border-[#E3D6FA]
                                        flex items-center justify-center
                                    ">
                                        <Icon
                                            size={25}
                                            className="text-[#7138E8]"
                                        />
                                    </div>

                                    {index !== processSteps.length - 1 && (
                                        <div className="
                                            w-0.5 flex-1 min-h-16
                                            bg-[#DED0F8]
                                            mt-3
                                        " />
                                    )}

                                </div>

                                {/* CARD */}
                                <div className="
                                    flex-1 mb-2
                                    bg-white
                                    border border-[#E9E2F5]
                                    rounded-2xl p-6 md:p-7
                                    shadow-[0_8px_30px_rgba(29,18,55,0.05)]
                                    hover:shadow-[0_16px_40px_rgba(113,56,232,0.12)]
                                    hover:-translate-y-1
                                    hover:border-[#D8C7F7]
                                    transition-all duration-300
                                ">

                                    <div className="flex items-center gap-3 mb-3">

                                        <span className="
                                            text-sm font-bold
                                            text-[#7138E8]
                                            bg-[#F2EBFF]
                                            px-3 py-1 rounded-full
                                        ">
                                            Etapa {index + 1}
                                        </span>

                                    </div>

                                    <h3 className="
                                        text-xl md:text-2xl
                                        font-bold text-[#1D1237]
                                        mb-2
                                    ">
                                        {step.title}
                                    </h3>

                                    <p className="
                                        text-[#655B7E]
                                        leading-relaxed
                                    ">
                                        {step.description}
                                    </p>

                                </div>

                            </motion.div>
                        );
                    })}

                </div>

                {/* CTA */}
                <div className="text-center mt-20">

                    <h3 className="
                        text-2xl md:text-3xl
                        font-bold text-[#1D1237]
                        mb-6
                    ">
                        Pronto para transformar sua ideia em um projeto profissional?
                    </h3>

                    <a
                        href="https://wa.me/5544999847071?text=Olá! Gostaria de solicitar um orçamento para meu projeto."
                        target="_blank"
                        rel="noreferrer"
                        className="
                            inline-flex items-center gap-3
                            px-8 py-4
                            rounded-xl
                            bg-[#7138E8]
                            hover:bg-[#6028D0]
                            text-white font-semibold
                            shadow-lg shadow-purple-500/20
                            hover:scale-105
                            transition-all duration-300
                        "
                    >
                        Solicitar orçamento
                        <CheckCircle2 size={20} />
                    </a>

                </div>

            </div>
        </section>
    );
}

export default ProcessSection;
