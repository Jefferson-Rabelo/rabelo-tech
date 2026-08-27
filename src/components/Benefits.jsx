import { Rocket, ShieldCheck, Search, Cog } from "lucide-react";
const items = [
    {
        icon: Rocket,
        color: "text-sky-400",
        bgColor: "bg-sky-500/10",
        borderColor: "border-sky-500/20",
        title: "Mais clientes",
        desc: "Seu site trabalha 24h por dia captando oportunidades."
    },
    {
        icon: ShieldCheck,
        color: "text-sky-400",
        bgColor: "bg-sky-500/10",
        borderColor: "border-sky-500/20",
        title: "Mais credibilidade",
        desc: "Transmita profissionalismo imediato para seu negócio."
    },
    {
        icon: Search,
        color: "text-sky-400",
        bgColor: "bg-sky-500/10",
        borderColor: "border-sky-500/20",
        title: "Mais visibilidade",
        title: "Mais visibilidade",
        desc: "Seja encontrado por pessoas que estão procurando exatamente os serviços que sua empresa oferece."
    },
    {
        icon: Cog,
        color: "text-sky-400",
        bgColor: "bg-sky-500/10",
        borderColor: "border-sky-500/20",
        title: "Mais organização",
        desc: "Automatize processos e facilite atendimentos."
    }
];

function Benefits() {
    return (
        <section className="min-h-screen flex items-center bg-[#020617] border-t border-purple-500/10">

            <div className="max-w-7xl mx-auto px-6">

                <h2 className="py-5 text-4xl font-bold text-center text-white mb-5">
                    Por que sua empresa precisa de <span className="text-sky-400">um site?</span>
                </h2>
                <p className="text-lg text-center text-slate-400 max-w-3xl mx-auto mb-16">
                    Transforme visitantes em clientes com uma presença digital profissional disponível 24 horas por dia.</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {items.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700 hover:border-sky-500/40 hover:scale-105 transition duration-300 text-center"
                            >
                                <div
                                    className={`w-14 h-14 rounded-xl ${item.bgColor} ${item.borderColor} border flex items-center justify-center mx-auto mb-4`}
                                >
                                    <Icon size={32} className={item.color} />
                                </div>
                                <h3 className="text-xl font-semibold text-[#FFFFFF]">
                                    {item.title}
                                </h3>

                                <p className="text-gray-300 mt-2">{item.desc}</p>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}

export default Benefits;