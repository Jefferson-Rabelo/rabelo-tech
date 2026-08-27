function Sobre() {
    return (
        <section
            id="sobre"
            className="py-24 bg-[#0B1220] border-t border-slate-800"
        >
            <div className="max-w-6xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* FOTO */}

                    <div className="flex justify-center">

                        <div className="
                            w-72
                            h-72
                            rounded-3xl
                            bg-slate-800
                            border
                            border-slate-700
                            flex
                            items-center
                            justify-center
                        ">
                            <span className="text-slate-500">
                                Sua foto aqui
                            </span>
                        </div>

                    </div>

                    {/* TEXTO */}

                    <div>

                        <h2 className="text-4xl font-bold text-white mb-6">
                            Quem está por trás da
                            <span className="text-sky-400">
                                {" "}Rabelo.Tech?
                            </span>
                        </h2>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            Olá, sou Jefferson Rabelo, desenvolvedor web focado
                            na criação de sites, landing pages e sistemas web
                            modernos para empresas que desejam crescer no ambiente digital.
                        </p>

                        <p className="text-slate-400 leading-relaxed mb-8">
                            Meu objetivo é transformar ideias em soluções digitais
                            profissionais, rápidas e responsivas, sempre com
                            foco na experiência do usuário e nos resultados do negócio.
                        </p>

                        <div className="space-y-3">

                            <div className="text-slate-300">
                                ✓ Atendimento personalizado
                            </div>

                            <div className="text-slate-300">
                                ✓ Comunicação transparente
                            </div>

                            <div className="text-slate-300">
                                ✓ Projetos sob medida
                            </div>

                            <div className="text-slate-300">
                                ✓ Suporte durante o desenvolvimento
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Sobre;