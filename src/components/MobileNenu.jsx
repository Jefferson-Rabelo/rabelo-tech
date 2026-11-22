
import { useState } from "react";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function MobileMenu() {
    const [open, setOpen] = useState(false);

    const closeMenu = () => {
        setOpen(false);
    };

    const linkClass = `
        px-4 py-3.5 rounded-xl
        text-[#D4C9E3]
        font-medium
        hover:text-white
        hover:bg-[#7138E8]/20
        active:bg-[#7138E8]/30
        transition-all duration-300
    `;

    return (
        <div className="lg:hidden relative">

            {/* BOTÃO DO MENU */}
            <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                aria-expanded={open}
                className={`
                    w-11 h-11 flex items-center justify-center
                    rounded-xl
                    border
                    transition-all duration-300
                    ${open
                        ? "bg-[#7138E8] border-[#7138E8] text-white"
                        : "bg-white/5 border-white/15 text-[#D4C9E3] hover:bg-[#7138E8]/20 hover:border-[#B99AFB]/40 hover:text-white"
                    }
                `}
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                        key={open ? "close" : "open"}
                        initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                        transition={{ duration: 0.2 }}
                    >
                        {open ? <FaTimes size={19} /> : <FaBars size={19} />}
                    </motion.span>
                </AnimatePresence>
            </button>

            {/* MENU MOBILE */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -12, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        className="
                            absolute top-full right-0 mt-4
                            w-[calc(100vw-2rem)]
                            max-w-sm
                            bg-[#1E0E37]
                            border border-white/10
                            rounded-2xl
                            shadow-2xl shadow-black/30
                            overflow-hidden
                        "
                    >

                        {/* CABEÇALHO DO MENU */}
                        <div className="px-5 pt-5 pb-3">
                            <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#B99AFB]">
                                Navegação
                            </span>
                        </div>

                        {/* LINKS */}
                        <nav className="px-3 pb-3 flex flex-col gap-1">

                            <a
                                href="/#inicio"
                                onClick={closeMenu}
                                className={linkClass}
                            >
                                Início
                            </a>

                            <a
                                href="/#servicos"
                                onClick={closeMenu}
                                className={linkClass}
                            >
                                Serviços
                            </a>

                            <a
                                href="/#projects"
                                onClick={closeMenu}
                                className={linkClass}
                            >
                                Projetos
                            </a>

                            <a
                                href="/sobre"
                                onClick={closeMenu}
                                className={linkClass}
                            >
                                Sobre
                            </a>

                            <a
                                href="/#contato"
                                onClick={closeMenu}
                                className={linkClass}
                            >
                                Contato
                            </a>

                        </nav>

                        {/* DIVISOR */}
                        <div className="h-px bg-white/10 mx-5" />

                        {/* BOTÃO ORÇAMENTO */}
                        <div className="p-4">
                            <a
                                href="https://wa.me/5544999847071?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20um%20projeto."
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMenu}
                                className="
                                    flex items-center justify-center gap-3
                                    w-full px-5 py-3.5
                                    rounded-xl
                                    bg-[#7138E8]
                                    text-white
                                    font-semibold
                                    hover:bg-[#824FF0]
                                    hover:-translate-y-0.5
                                    shadow-lg shadow-[#7138E8]/20
                                    transition-all duration-300
                                "
                            >
                                Solicitar orçamento
                                <FaArrowRight size={14} />
                            </a>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}

export default MobileMenu;
