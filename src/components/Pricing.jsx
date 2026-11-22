
import { Check, Star, ArrowRight, Clock3, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
    {
        title: "Landing Page",
        whatsappMessage: "Olá Rabelo! Tenho interesse em uma Landing Page e gostaria de receber um orçamento.",
        subtitle: "Para divulgar seu produto ou serviço",
        description:
            "Uma página estratégica criada para apresentar sua oferta, gerar contatos e transformar visitantes em clientes.",
        price: "A partir de R$ 300",
        deadline: "Entrega média: 5 a 7 dias",
        features: [
            "Responsivo para celular",
            "Integração com WhatsApp e Instagram",
            "Formulário de contato",
            "SEO básico",
            "Suporte após entrega",
            "+ 3 recursos incluídos"
        ],
        button: "Solicitar orçamento",
        featured: false,
    },
    {
        title: "Site Institucional",
        whatsappMessage: "Olá Rabelo! Tenho interesse em um Site Profissional e gostaria de receber um orçamento.",
        subtitle: "Perfeito para empresas que querem presença digital.",
        description:
            "Ideal para empresas que querem transmitir autoridade, confiança e conquistar novos clientes através da internet.",
        price: "A partir de R$ 849",
        deadline: "Entrega média: 10 a 20 dias",
        badge: "Mais contratado",
        features: [
            "Até 8 páginas",
            "Design personalizado",
            "Integração com WhatsApp e Instagram",
            "Google Maps",
            "SEO avançado",
            "Suporte após entrega",
            "+ Recursos adicionais inclusos"
        ],
        button: "Quero este plano",
        featured: true,
    },
    {
        title: "Sistema Web",
        whatsappMessage: "Olá Rabelo! Tenho interesse em um Sistema Web e gostaria de receber um orçamento.",
        subtitle: "Automatize processos e ganhe produtividade.",
        description:
            "Sistemas personalizados para automatizar processos e facilitar a gestão do seu negócio.",
        price: "Orçamento personalizado",
        deadline: "Prazo definido após análise",
        features: [
            "Área de usuários",
            "Painel administrativo",
            "Banco de dados",
            "Integrações com APIs",
            "Automação de processos",
            "Desenvolvimento exclusivo",
        ],
        button: "Conversar sobre projeto",
        featured: false,
    },
];

function Pricing() {
    return (
        <section
            id="pricing"
            className="relative overflow-hidden py-28 bg-[#1D1237]"
        >
            {/* Luzes decorativas */}
            <div className="absolute top-20 left-0 w-64 h-64 bg-[#7138E8]/15 rounded-full blur-[120px] pointer-events-none" />

            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#A47AF5]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* CABEÇALHO */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <span className="text-[#B99AFB] font-semibold tracking-[0.25em] uppercase text-sm">
                        Planos e Investimento
                    </span>

                    <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white leading-tight">
                        Soluções profissionais para
                        <span className="text-[#B99AFB]">
                            {" "}fortalecer seu negócio
                        </span>
                    </h2>

                    <p className="mt-6 text-[#C4BBD6] text-lg leading-relaxed">
                        Cada projeto é desenvolvido de forma personalizada,
                        unindo design moderno, tecnologia e estratégia para
                        entregar uma presença digital profissional.
                    </p>

                    {/* SELOS DE CONFIANÇA */}
                    <div className="mt-10 flex flex-col md:flex-row justify-center gap-5">
                        <div className="flex items-center justify-center gap-3 bg-[#281B45] border border-white/10 px-6 py-3 rounded-full text-[#C4BBD6]">
                            <Clock3 size={20} className="text-[#B99AFB]" />
                            Resposta em até 24 horas
                        </div>

                        <div className="flex items-center justify-center gap-3 bg-[#281B45] border border-white/10 px-6 py-3 rounded-full text-[#C4BBD6]">
                            <ShieldCheck size={20} className="text-[#B99AFB]" />
                            Projeto 100% Responsivo
                        </div>
                    </div>

                    <p className="mt-8 text-sm text-[#A99CBD]">
                        * Os valores apresentados são uma referência inicial.
                        O orçamento final pode variar conforme as funcionalidades
                        e necessidades específicas de cada projeto.
                    </p>
                </motion.div>

                {/* CARDS DE PLANOS */}
                <div className="grid lg:grid-cols-3 gap-8">

                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col
                                ${plan.featured
                                    ? "bg-gradient-to-b from-[#7138E8]/30 via-[#30204F] to-[#281B45] border border-[#B99AFB] shadow-[0_0_50px_rgba(164,122,245,0.15)]"
                                    : "bg-[#281B45] border border-white/10 hover:border-[#A47AF5]/50 shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
                                }`}
                        >

                            {/* BADGE */}
                            {plan.featured && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                                    <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#7138E8] text-white text-sm font-semibold shadow-lg shadow-purple-500/20">
                                        <Star size={16} />
                                        {plan.badge}
                                    </div>
                                </div>
                            )}

                            {/* CABEÇALHO DO CARD */}
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white">
                                    {plan.title}
                                </h3>

                                <p className="mt-2 text-[#B99AFB] text-sm font-medium">
                                    {plan.subtitle}
                                </p>

                                <p className="mt-5 text-[#C4BBD6] leading-relaxed">
                                    {plan.description}
                                </p>
                            </div>

                            {/* VALOR */}
                            <div className="mb-8 pb-8 border-b border-white/10">
                                <h4 className="text-3xl font-bold text-white">
                                    {plan.price}
                                </h4>

                                <div className="mt-3 flex items-center gap-2 text-[#A99CBD] text-sm">
                                    <Clock3 size={15} />
                                    {plan.deadline}
                                </div>
                            </div>

                            {/* BENEFÍCIOS */}
                            <div className="space-y-4 mb-10 flex-1">
                                {plan.features.map((feature, item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-3 text-[#C4BBD6] text-sm"
                                    >
                                        <div className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-[#7138E8]/20 shrink-0">
                                            <Check size={13} className="text-[#B99AFB]" />
                                        </div>

                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* BOTÃO */}
                            <a
                                href={`https://wa.me/5544999847071?text=${encodeURIComponent(plan.whatsappMessage)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold transition-all duration-300
                                    ${plan.featured
                                        ? "bg-[#7138E8] text-white hover:bg-[#6028D0] hover:scale-105 shadow-lg shadow-purple-500/20"
                                        : "border border-[#A47AF5]/50 text-[#B99AFB] hover:bg-[#7138E8] hover:text-white hover:border-[#7138E8]"
                                    }`}
                            >
                                {plan.button}
                                <ArrowRight size={18} />
                            </a>

                        </motion.div>
                    ))}

                </div>

                {/* CTA FINAL */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center max-w-4xl mx-auto"
                >
                    <h3 className="text-4xl md:text-5xl font-bold text-white">
                        Vamos transformar sua ideia em realidade?
                    </h3>

                    <p className="mt-6 text-lg text-[#C4BBD6] leading-relaxed">
                        Sites, landing pages e sistemas desenvolvidos para ajudar seu negócio a crescer.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
                        <a
                            href="https://wa.me/5544999847071?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20um%20projeto."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-[#7138E8] text-white font-semibold hover:bg-[#6028D0] hover:-translate-y-1 shadow-lg shadow-purple-500/20 transition-all duration-300"
                        >
                            Solicitar orçamento
                            <ArrowRight size={20} />
                        </a>
                    </div>

                    <p className="mt-8 text-sm text-[#A99CBD]">
                        Sem compromisso. Vamos analisar seu projeto e encontrar a melhor solução.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}

export default Pricing;
