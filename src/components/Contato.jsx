import { Mail, Phone, MapPin } from "lucide-react";

function Contato() {
    return (
        <section
            id="contato"
            className="py-24 border-t border-slate-800"
        >
            <div className="max-w-4xl mx-auto px-6 text-center">

                <h2 className="text-4xl font-bold text-white mb-4">
                    Vamos conversar sobre seu projeto?
                </h2>

                <p className="text-slate-300 mb-12">
                    Entre em contato e receba um orçamento personalizado.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-12">

                    <div className="
                        bg-[#0F172A]
                        border
                        border-slate-700
                        rounded-2xl
                        p-6
                    ">
                        <Phone className="text-sky-400 mx-auto mb-4" />

                        <h3 className="text-white font-semibold mb-2">
                            WhatsApp
                        </h3>

                        <p className="text-slate-300">
                            (44) 99984-7071
                        </p>
                    </div>

                    <div className="
                        bg-[#0F172A]
                        border
                        border-slate-700
                        rounded-2xl
                        p-6
                    ">
                        <Mail className="text-sky-400 mx-auto mb-4" />

                        <h3 className="text-white font-semibold mb-2">
                            E-mail
                        </h3>

                        <p className="text-slate-300">
                            @rabelotech.com.br
                        </p>
                    </div>

                    <div className="
                        bg-[#0F172A]
                        border
                        border-slate-700
                        rounded-2xl
                        p-6
                    ">
                        <MapPin className="text-sky-400 mx-auto mb-4" />

                        <h3 className="text-white font-semibold mb-2">
                            Localização
                        </h3>

                        <p className="text-slate-300">
                            Peabiru - Paraná
                        </p>
                    </div>

                </div>

                <a
                    href="https://wa.me/5544999847071?text=Olá Rabelo! Gostaria de solicitar um orçamento de um projeto."
                    target="_blank"
                    rel="noreferrer"
                    className="
                    inline-flex
                    items-center
                    px-8
                    py-4
                    rounded-xl
                    bg-sky-400
                    text-slate-950
                    font-semibold
                    hover:scale-105
                    transition
                    "
                >
                    Solicitar orçamento
                </a>

            </div>
        </section>
    );
}

export default Contato;