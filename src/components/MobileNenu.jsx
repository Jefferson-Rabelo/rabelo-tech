import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function MobileMenu() {

    const [open, setOpen] = useState(false);

    const closeMenu = () => {
        setOpen(false);
    };

    return (

        <div className="lg:hidden relative">

            {/* BOTÃO */}

            <button
                onClick={() => setOpen(!open)}
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                className="w-11 h-11 flex items-center justify-center
                           rounded-xl
                           border border-slate-700
                           bg-slate-900/80
                           text-slate-200
                           hover:text-sky-400
                           hover:border-sky-400
                           transition-all duration-300"
            >

                {open ? (
                    <FaTimes size={20} />
                ) : (
                    <FaBars size={20} />
                )}

            </button>


            {/* MENU */}

            <AnimatePresence>

                {open && (

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -15
                        }}

                        animate={{
                            opacity: 1,
                            y: 0
                        }}

                        exit={{
                            opacity: 0,
                            y: -15
                        }}

                        transition={{
                            duration: 0.25
                        }}

                        className="absolute top-full right-0 mt-3
                                   w-[calc(100vw-2rem)]
                                   max-w-sm
                                   bg-[#020617]
                                   border border-slate-800
                                   rounded-2xl
                                   shadow-2xl
                                   overflow-hidden"
                    >

                        <nav className="p-4 flex flex-col gap-1">

                            <a
                                href="#inicio"
                                onClick={closeMenu}
                                className="px-4 py-3.5 rounded-xl
                                           text-white
                                           bg-sky-600
                                           hover:text-sky-400
                                           hover:bg-sky-400/10
                                           transition"
                            >
                                Início
                            </a>

                            <a
                                href="#servicos"
                                onClick={closeMenu}
                                className="px-4 py-3.5 rounded-xl
                                           text-white
                                           bg-sky-600
                                           hover:text-sky-400
                                           hover:bg-sky-400/10
                                           transition"
                            >
                                Serviços
                            </a>

                            <a
                                href="#projects"
                                onClick={closeMenu}
                                className="px-4 py-3.5 rounded-xl
                                           text-white
                                           bg-sky-600
                                           hover:text-sky-400
                                           hover:bg-sky-400/10
                                           transition"
                            >
                                Projetos
                            </a>

                            <a
                                href="#sobre"
                                onClick={closeMenu}
                                className="px-4 py-3.5 rounded-xl
                                           text-white
                                           bg-sky-600
                                           hover:text-sky-400
                                           hover:bg-sky-400/10
                                           transition"
                            >
                                Sobre
                            </a>

                            <a
                                href="#contato"
                                onClick={closeMenu}
                                className="px-4 py-3.5 rounded-xl
                                           text-white
                                           bg-sky-600
                                           hover:text-sky-400
                                           hover:bg-sky-400/10
                                           transition"
                            >
                                Contato
                            </a>

                        </nav>

                    </motion.div>

                )}

            </AnimatePresence>

        </div>
    );
}

export default MobileMenu;