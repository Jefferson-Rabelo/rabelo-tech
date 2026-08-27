import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
        <section className="relative overflow-hidden py-24 bg-[#020617] border-t border-slate-800">
            <div className=" absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-sky-500/5 rounded-full blur-[100px]
" />

            <div className="max-w-4xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center text-white mb-5">
                    Dúvidas <span className="text-sky-400">Frequentes</span>
                </h2>
                <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
                    Respostas para as perguntas mais comuns sobre desenvolvimento de sites e sistemas.
                </p>

                <div className="space-y-5">

                    {questions.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#0F172A] border border-slate-700/60 rounded-2xl p-6 cursor-pointer hover:border-sky-500/40 transition"
                            onClick={() =>
                                setOpen(open === index ? null : index)
                            }
                        >
                            <h3 className="font-semibold text-white flex justify-between items-center">
                                {item.question}
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-300
                                ${open === index
                                            ? "rotate-180 text-sky-400"
                                            : "rotate-0 text-slate-400"
                                        }`}
                                />
                            </h3>

                            {open === index && (
                                <p className="text-slate-400 mt-3 leading-relaxed">
                                    {item.answer}
                                </p>
                            )}
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Faq;