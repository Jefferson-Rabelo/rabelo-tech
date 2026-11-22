
import {
    Rocket,
    ShieldCheck,
    Search,
    Cog,
    ArrowRight,
    Check
} from "lucide-react";

import { motion } from "framer-motion";
import monitor from "../assets/imagem/monitor-beneficios.png";

const items = [
    {
        icon: Rocket,
        title: "Mais clientes",
        desc: "Seu site trabalha 24 horas por dia apresentando seu negócio e captando oportunidades."
    },
    {
        icon: ShieldCheck,
        title: "Mais credibilidade",
        desc: "Transmita profissionalismo e conquiste a confiança dos seus clientes."
    },
    {
        icon: Search,
        title: "Mais visibilidade",
        desc: "Facilite que pessoas interessadas encontrem os serviços que sua empresa oferece."
    },
    {
        icon: Cog,
        title: "Mais organização",
        desc: "Apresente informações, facilite atendimentos e otimize processos."
    }
];

function Benefits() {
    return (
<section className="relative overflow-hidden bg-[#F9F8FD] py-14 lg:py-16">
            {/* Efeito decorativo */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-[#7138E8]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">

                    {/* MONITOR */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                            className="relative flex items-center justify-center lg:-translate-y-8 lg:-ml-12"                    >
                        <div className="absolute w-80 h-80 bg-[#7138E8]/15 rounded-full blur-[100px]" />

                        <img
                            src={monitor}
                    alt="Exemplo de site profissional exibido em um monitor"
                    className="relative z-10 w-[115%] max-w-none object-contain drop-shadow-[0_25px_35px_rgba(29,18,55,0.12)]"
                        />
                    </motion.div>

                    {/* CONTEÚDO */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >

                        <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#7138E8]">
                            Nossos benefícios
                        </span>

                        <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight text-[#1D1237]">
                            Por que sua empresa precisa de{" "}
                            <span className="text-[#7138E8]">
                                um site profissional?
                            </span>
                        </h2>

                        <p className="mt-4 text-base md:text-lg leading-snug text-[#655B7E]">                            Tenha uma presença digital que transmite confiança,
                            atrai novos clientes e gera mais oportunidades
                            para o seu negócio.
                        </p>

                        {/* LISTA DE BENEFÍCIOS */}
                        <div className="mt-6 space-y-4">

                            {items.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="w-12 h-12 shrink-0 rounded-xl bg-[#F2EBFF] flex items-center justify-center">
                                            <Icon
                                                size={24}
                                                className="text-[#7138E8]"
                                            />
                                        </div>

                                        <div>
                                                <h3 className="text-base md:text-lg font-bold text-[#1D1237]">                                                {item.title}
                                            </h3>

                                            <p className="mt-1 text-[#655B7E] leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>

                        {/* CTA */}
                        <a
                            href="https://wa.me/5544999847071?text=Ol%C3%A1!%20Gostaria%20de%20ter%20um%20site%20profissional."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 mt-7 px-8 py-4 rounded-xl bg-[#7138E8] text-white font-semibold hover:bg-[#6028D0] hover:-translate-y-1 shadow-lg shadow-purple-500/20 transition-all duration-300"
                        >
                            Quero ter meu site
                            <ArrowRight size={20} />
                        </a>

                        <p className="mt-4 text-sm text-[#8B7D9F] flex items-center gap-2">
                            <Check size={16} className="text-[#7138E8]" />
                            Atendimento personalizado e sem compromisso.
                        </p>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default Benefits;
