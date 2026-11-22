
import { useEffect, useState } from "react";
import MobileMenu from "../components/MobileNenu";
import Logo from "./Logo";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const linkClass = `
        relative text-sm font-medium text-[#D4C9E3]
        hover:text-[#B99AFB]
        transition-colors duration-300
        after:absolute after:left-0 after:-bottom-2
        after:w-0 after:h-[2px]
        after:bg-[#B99AFB]
        after:rounded-full
        after:transition-all after:duration-300
        hover:after:w-full
    `;

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl transition-all duration-300 ${
                scrolled
                    ? "bg-[#1E0E37]/95 border-b border-white/10 shadow-lg shadow-black/10"
                    : "bg-[#1E0E37]/70 border-b border-white/5"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* LOGO */}
                <Logo />

                {/* MENU DESKTOP */}
                <nav className="hidden lg:flex items-center gap-8">

                    <a href="/#inicio" className={linkClass}>
                        Início
                    </a>

                    <a href="/#servicos" className={linkClass}>
                        Serviços
                    </a>

                    <a href="/#projects" className={linkClass}>
                        Projetos
                    </a>

                    <a href="/#contato" className={linkClass}>
                        Contato
                    </a>

                    <a href="/sobre" className={linkClass}>
                        Sobre
                    </a>

                </nav>

                {/* BOTÃO ORÇAMENTO */}
                <a
                    href="https://wa.me/5544999847071?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20um%20projeto."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        hidden lg:inline-flex items-center justify-center
                        px-6 py-3 rounded-xl
                        bg-[#7138E8]
                        text-white text-sm font-semibold
                        hover:bg-[#824FF0]
                        hover:-translate-y-0.5
                        shadow-lg shadow-[#7138E8]/20
                        transition-all duration-300
                    "
                >
                    Solicitar orçamento
                </a>

                {/* MENU MOBILE */}
                <MobileMenu />

            </div>
        </header>
    );
}

export default Navbar;
