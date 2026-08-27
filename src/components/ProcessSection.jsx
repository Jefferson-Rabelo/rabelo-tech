import { processSteps } from "../data/process";
import {
    MessageSquareMore,
    RefreshCw,
    Eye,
    Smartphone
} from "lucide-react";

function ProcessSection() {
    return (
        <section
            id="process"
            className="bg-[#0F172A] py-24 border-t border-slate-700/50"
        >
            <div className="max-w-5xl mx-auto px-6">

                {/* HEADER */}

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Como funciona o desenvolvimento  <span className="text-sky-400">do seu projeto?</span>
                    </h2>

                    <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                        Um processo simples, transparente e com acompanhamento
                        em cada etapa.
                    </p>
                </div>

                {/* TIMELINE */}

                <div className="space-y-8">

                    {processSteps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={index}
                                className="relative flex gap-6"
                            >
                                <div className="flex flex-col items-center">

                                    <div className="w-14 h-14 rounded-full  bg-sky-500/10 border border-sky-500/20 flex items-center justify-center
                  ">
                                        <Icon
                                            size={24}
                                            className="text-cyan-400"
                                        />
                                    </div>

                                    {index !== processSteps.length - 1 && (
                                        <div className="w-px h-24 bg-slate-700 mt-2" />
                                    )}
                                </div>

                                <div
                                    className="bg-[#020617] border border-slate-700/60 hover:border-sky-500/30 rounded-2xl p-6 flex-1"
                                >

                                    <h3 className="text-xl font-semibold text-sky-400 mb-2">
                                        {step.title}
                                    </h3>

                                    <p className="text-slate-100">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}

                <div className="text-center mt-16">

                    <h3 className="text-2xl font-bold text-white mb-6">
                        Pronto para transformar sua ideia em um projeto profissional?
                    </h3>

                    <a
                        href="https://wa.me/SEUNUMERO"
                        className="
            inline-flex
            items-center
            px-8
            py-4
            rounded-xl
            bg-cyan-400
            hover:bg-sky-300
            text-slate-950
            font-semibold
            hover:scale-105
            transition
            "
                    >
                        Solicitar orçamento
                    </a>

                </div>

            </div>
        </section>
    );
}

export default ProcessSection;