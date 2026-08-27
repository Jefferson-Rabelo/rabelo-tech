import { FaArrowRight } from "react-icons/fa";
import imagemHero2 from "../assets/imagemHero2.webp";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

function Hero() {
    return (
        <section
            id="inicio"
            className="min-h-screen flex items-center justify-center py-20 bg-[#0f172a] lg:py-0 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-5 w-full -translate-y-6 lg:translate-y-0">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                    {/* ESQUERDA */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-center lg:text-left"
                    >
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-500/20 text-sky-400 text-sm mb-6
    "
                        >
                            Sites - Landing Pages - Sistemas Web
                        </div>
                        {/* TITULO */}
                        <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-white">
                            Sites e sistemas que ajudam sua empresa
                            <span className="block text-sky-400">
                                a crescer.
                            </span>

                        </h1>

                        {/* DESCRIÇÃO */}
                        <p className=" mt-6 text-slate-400 text-lg max-w-2xl mx-auto lg:mx-0">
                            Criamos sites profissionais, landing pages e sistemas web modernos para empresas que desejam crescer no ambiente digital.
                        </p>

                        {/* BOTÕES */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">

                            <a
                                href="https://wa.me/5544999847071?text=Olá Rabelo! Gostaria de solicitar um orçamento de um projeto."
                                target="_blank"
                                rel="noreferrer"
                                className="bg-sky-400 text-slate-950 hover:bg-sky-300 px-6 py-3 rounded-xl font-simibold flex items-center justify-center gap-2 hover:scale-105 transition"
                            >
                                Solicitar Orçamento
                                <FaArrowRight />
                            </a>

                        </div>


                    </motion.div>

                    {/* DIREITA (IMAGEM) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="hidden lg:flex justify-center relative"
                    >
                        <div className="absolute inset-0 bg-sky-500 blur-[180px] opacity-10" />

                        <img
                            src={imagemHero2}
                            alt="Dashboard"
                            className="relative z-10 w-full max-w-[500px] object-contain translate-x-8 translate-y-7"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default Hero;