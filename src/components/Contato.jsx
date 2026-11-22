
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

function Contato() {
    return (
        <section
            id="contato"
            className="relative overflow-hidden py-24 bg-[#1D1237] border-t border-white/10"
        >
            {/* Efeito decorativo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#7138E8]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

                {/* CABEÇALHO */}
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#B99AFB]">
                    Entre em contato
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-5">
                    Vamos conversar sobre
                    <span className="text-[#B99AFB]"> seu projeto?</span>
                </h2>

                <p className="text-[#C4BBD6] text-lg max-w-2xl mx-auto mb-14">
                    Entre em contato e receba um orçamento personalizado.
                    Estamos prontos para transformar sua ideia em uma solução digital.
                </p>

                {/* CARDS DE CONTATO */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">

                    {/* WHATSAPP */}
                    <a
                        href="https://wa.me/5544999847071"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-[#281B45] border border-white/10 rounded-2xl p-7 hover:border-[#A47AF5]/50 hover:-translate-y-2 transition-all duration-300"
                    >
                        <Phone
                            size={28}
                            className="text-[#B99AFB] mx-auto mb-5 group-hover:scale-110 transition-transform"
                        />

                        <h3 className="text-white font-semibold mb-2">
                            WhatsApp
                        </h3>

                        <p className="text-[#C4BBD6]">
                            (44) 99984-7071
                        </p>
                    </a>

                    {/* E-MAIL */}
                    <a
                        href="mailto:SEUEMAIL@rabelotech.com.br"
                        className="group bg-[#281B45] border border-white/10 rounded-2xl p-7 hover:border-[#A47AF5]/50 hover:-translate-y-2 transition-all duration-300"
                    >
                        <Mail
                            size={28}
                            className="text-[#B99AFB] mx-auto mb-5 group-hover:scale-110 transition-transform"
                        />

                        <h3 className="text-white font-semibold mb-2">
                            E-mail
                        </h3>

                        <p className="text-[#C4BBD6]">
                            @rabelotech.com.br
                        </p>
                    </a>

                    {/* LOCALIZAÇÃO */}
                    <div className="group bg-[#281B45] border border-white/10 rounded-2xl p-7 hover:border-[#A47AF5]/50 hover:-translate-y-2 transition-all duration-300">
                        <MapPin
                            size={28}
                            className="text-[#B99AFB] mx-auto mb-5 group-hover:scale-110 transition-transform"
                        />

                        <h3 className="text-white font-semibold mb-2">
                            Localização
                        </h3>

                        <p className="text-[#C4BBD6]">
                            Peabiru - Paraná
                        </p>
                    </div>

                </div>

                {/* BOTÃO */}
                <a
                    href="https://wa.me/5544999847071?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20um%20projeto."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl bg-[#7138E8] text-white font-semibold hover:bg-[#6028D0] hover:-translate-y-1 shadow-lg shadow-purple-500/20 transition-all duration-300"
                >
                    Solicitar orçamento
                    <ArrowRight size={20} />
                </a>

            </div>
        </section>
    );
}

export default Contato;
