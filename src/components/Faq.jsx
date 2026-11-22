
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
    {
        question: "Quanto custa um site?",
        answer: "O investimento varia de acordo com a complexidade do projeto. Solicite um orçamento gratuito e receba uma proposta personalizada para o seu negócio."
    },
    {
        question: "Quanto tempo leva?",
        answer: "O prazo médio varia entre 7 e 30 dias, dependendo do tipo de projeto e das funcionalidades necessárias."
    },
    {
        question: "Funciona em celular?",
        answer: "Sim. Todos os projetos são desenvolvidos para funcionar perfeitamente em celulares, tablets e computadores."
    },
    {
        question: "Vocês oferecem suporte após a entrega?",
        answer: "Sim. Após a entrega do projeto você recebe suporte para ajustes e orientações de utilização."
    },
    {
        question: "Posso solicitar alterações durante o desenvolvimento?",
        answer: "Sim. Você acompanha o projeto e pode solicitar ajustes conforme o desenvolvimento avança."
    },
    {
        question: "Meu site aparecerá no Google?",
        answer: "Todos os projetos recebem otimizações básicas de SEO para facilitar o posicionamento nos mecanismos de busca."
    }
];

function Faq() {
    const [open, setOpen] = useState(null);

    return (
        <section className="relative overflow-hidden py-24 bg-[#F9F8FD] border-t border-[#E9E2F5]">

            {/* Efeito decorativo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#7138E8]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">

                {/* CABEÇALHO */}
                <div className="text-center mb-14">
                    <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#7138E8]">
                        Central de dúvidas
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#1D1237] mt-4">
                        Dúvidas
                        <span className="text-[#7138E8]"> Frequentes</span>
                    </h2>

                    <p className="text-[#655B7E] text-lg max-w-2xl mx-auto mt-5">
                        Respostas para as perguntas mais comuns sobre desenvolvimento de sites e sistemas.
                    </p>
                </div>

                {/* PERGUNTAS */}
                <div className="space-y-4">

                    {questions.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_8px_30px_rgba(29,18,55,0.04)]
                                ${open === index
                                    ? "border-[#B99AFB] shadow-[0_12px_35px_rgba(113,56,232,0.10)]"
                                    : "border-[#E9E2F5] hover:border-[#C9B2F5]"
                                }`}
                        >

                            <button
                                type="button"
                                onClick={() => setOpen(open === index ? null : index)}
                                aria-expanded={open === index}
                                className="w-full p-6 flex justify-between items-center gap-4 text-left"
                            >
                                <h3 className="font-semibold text-[#1D1237] text-base md:text-lg">
                                    {item.question}
                                </h3>

                                <ChevronDown
                                    size={22}
                                    className={`shrink-0 transition-transform duration-300
                                        ${open === index
                                            ? "rotate-180 text-[#7138E8]"
                                            : "text-[#A99CBD]"
                                        }`}
                                />
                            </button>

                            <AnimatePresence initial={false}>
                                {open === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p className="px-6 pb-6 text-[#655B7E] leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Faq;
