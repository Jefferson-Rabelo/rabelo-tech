
import { FaArrowRight } from "react-icons/fa";
import monitor from "../assets/imagem/Mockup.png";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

function Hero() {
    return (
        <section
            id="inicio"
            className="relative min-h-[85vh] flex items-center justify-center py-20 bg-[#1E0E37] overflow-hidden"
        >

            {/* ILUMINAÇÃO DECORATIVA */}
            <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#7138E8]/15 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">

                    {/* ESQUERDA - CONTEÚDO */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-center lg:text-left"
                    >

                        {/* IDENTIFICAÇÃO */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7138E8]/20 border border-[#B99AFB]/20 text-[#C9B2FF] font-bold text-sm mb-6">
                            Sites - Landing Pages - Sistemas Web
                        </div>

                        {/* TÍTULO */}
                        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight text-white">
                            Sites e sistemas que ajudam sua empresa
                            <span className="block text-[#B99AFB]">
                                a crescer.
                            </span>
                        </h1>

                        {/* DESCRIÇÃO */}
                        <p className="mt-6 text-[#D4C9E3] text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Criamos sites profissionais, landing pages e sistemas web modernos para empresas que desejam crescer no ambiente digital.
                        </p>

                        {/* BOTÃO */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-9 justify-center lg:justify-start">

                            <a
                                href="https://wa.me/5544999847071?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20um%20projeto."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#7138E8] text-white hover:bg-[#824FF0] px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:-translate-y-1 shadow-lg shadow-[#7138E8]/25 transition-all duration-300"
                            >
                                Solicitar orçamento
                                <FaArrowRight />
                            </a>

                        </div>

                        {/* TEXTO DE APOIO */}
                        <p className="mt-5 text-sm text-[#B8A9CC]">
                            Atendimento personalizado para o seu projeto.
                        </p>

                    </motion.div>

                    {/* DIREITA - MONITOR */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="hidden lg:flex relative items-center justify-end -mr-8 xl:-mr-16"
                    >

                        {/* BRILHO ATRÁS DO MONITOR */}
                        <div className="absolute w-[80%] h-[75%] right-10 top-1/2 -translate-y-1/2 bg-[#7138E8]/35 blur-[130px] rounded-full pointer-events-none" />

                        <img
                            src={monitor}
                            alt="Sites profissionais exibidos em computador, notebook e celular"
                            className="relative z-10 w-full max-w-none object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.30)]"
                        />

                    </motion.div>

                </div>

            </div>
        </section>
    );
}

export default Hero;
