import { useEffect, useState } from "react";
import MobileMenu from "../components/MobileNenu";
import Logo from "./Logo";

function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${scrolled
                ? "bg-[#020617]/95 shadow-lg shadow-sky-500/5"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* LOGO */}
                <Logo />

                {/* DESKTOP MENU */}
                <nav className="hidden lg:flex gap-8">
                    <a href="#inicio" className="text-slate-300 hover:text-sky-400 relative transition">
                        Início
                    </a>

                    <a href="#servicos" className="text-slate-300 hover:text-sky-400 relative transition">
                        Serviços
                    </a>

                    <a href="#projects" className="text-slate-300 hover:text-sky-400 relative transition">
                        Projetos
                    </a>

                    <a href="#contato" className="text-slate-300 hover:text-sky-400 relative transition">
                        Contato
                    </a>
                    <a href="#sobre" className="text-slate-300 hover:text-sky-400 relative transition">
                        Sobre
                    </a>
                </nav>

                {/* BOTÃO ORÇAMENTO (desktop) */}
                <a
                    href="https://wa.me/5544999847071?text=Olá Rabelo! Gostaria de solicitar um orçamento de um projeto."
                    target="_blank"
                    className="hidden lg:block bg-sky-400 text-slate-950 px-5 py-3 rounded-xl font-medium hover:bg-sky-300 hover:scale-105 transition">
                    Solicitar Orçamento
                </a>

                {/* MOBILE MENU */}
                <MobileMenu />

            </div>
        </header>
    );
}

export default Navbar;