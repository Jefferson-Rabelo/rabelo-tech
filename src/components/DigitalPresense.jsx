
import {
    MonitorSmartphone,
    Smartphone,
    MessageCircle,
    Check
} from "lucide-react";

import { motion } from "framer-motion";
import celularSite from "../assets/imagem/celular-site-cafe.png";

const benefits = [
    {
        icon: MonitorSmartphone,
        title: "Design profissional e moderno",
        desc: "Um site com a identidade da sua empresa."
    },
    {
        icon: Smartphone,
        title: "Adaptação para todos os dispositivos",
        desc: "Experiência agradável em celulares e computadores."
    },
    {
        icon: MessageCircle,
        title: "Facilidade de contato com seus clientes",
        desc: "Mais oportunidades de negócio para sua empresa."
    }
];

function DigitalPresence() {
    return (
        <section className="bg-[#F9F8FD] py-24 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LADO ESQUERDO */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >

                        <span className="
                            text-sm font-bold tracking-[0.2em]
                            uppercase text-[#7138E8]
                        ">
                            Presença digital
                        </span>

                        <h2 className="
                            mt-5 text-4xl md:text-5xl
                            font-bold leading-tight text-[#1D1237]
                        ">
                            Sua empresa merece um site que transmita{" "}
                            <span className="text-[#7138E8]">
                                confiança.
                            </span>
                        </h2>

                        <p className="
                            mt-6 text-lg leading-relaxed
                            text-[#655B7E]
                        ">
                            Tenha uma presença profissional na internet,
                            apresente seus serviços e facilite o contato
                            com seus clientes através de um site moderno
                            e responsivo.
                        </p>

                        {/* BENEFÍCIOS */}
                        <div className="mt-9 space-y-6">

                            {benefits.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="
                                            w-12 h-12 shrink-0
                                            rounded-xl bg-[#F0E9FF]
                                            flex items-center justify-center
                                        ">
                                            <Icon
                                                size={24}
                                                className="text-[#7138E8]"
                                            />
                                        </div>

                                        <div>
                                            <h3 className="
                                                text-lg font-bold
                                                text-[#1D1237]
                                            ">
                                                {item.title}
                                            </h3>

                                            <p className="
                                                mt-1 text-[#655B7E]
                                            ">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>

                        {/* BOTÃO */}
                        <a
                            href="https://wa.me/5544999847071?text=Olá! Gostaria de solicitar um orçamento para desenvolver meu site."
                            target="_blank"
                            rel="noreferrer"
                            className="
                                inline-flex items-center gap-3
                                mt-10 px-8 py-4
                                rounded-xl bg-[#7138E8]
                                text-white font-semibold
                                shadow-lg shadow-purple-500/20
                                hover:bg-[#6028D0]
                                hover:-translate-y-1
                                transition-all duration-300
                            "
                        >
                            Quero ter meu site
                            <Check size={20} />
                        </a>

                    </motion.div>

                    {/* LADO DIREITO */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="
                            relative flex justify-center
                            items-center
                        "
                    >

                        {/* ILUMINAÇÃO */}
                        <div className="
                            absolute w-80 h-80
                            bg-purple-300/30
                            rounded-full blur-[100px]
                        "/>

                        {/* IMAGEM */}
                        <img
                            src={celularSite}
                            alt="Exemplo de site responsivo para uma cafeteria exibido em um smartphone"
                            className="
                                relative z-10
                                w-full max-w-[420px]
                                object-contain
                                drop-shadow-[0_25px_35px_rgba(29,18,55,0.12)]
                                hover:scale-[1.03]
                                transition-transform duration-500
                            "
                        />

                    </motion.div>

                </div>

            </div>

        </section>
    );
}

export default DigitalPresence;
