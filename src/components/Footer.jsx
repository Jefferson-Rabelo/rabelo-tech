import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Logo from "./Logo";

function Footer() {
    return (
        <footer className="border-t border-purple-500/10 bg-[#020617]">

            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* LOGO */}

                    <div>

                        <div className="mb-4">
                            <Logo />
                        </div>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            Desenvolvemos sites, landing pages e sistemas web para empresas que desejam fortalecer sua presença digital e atrair mais clientes.
                        </p>

                        <div className="flex gap-4">

                            <a
                                href="https://github.com/Jefferson-Rabelo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition"
                            >
                                <FaGithub size={20} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/jefferson-rabelo-70098b262/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition"
                            >
                                <FaLinkedin size={20} />
                            </a>

                            <a
                                href="https://www.instagram.com/jefferson_rabelloo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition"
                            >
                                <FaInstagram size={20} />
                            </a>

                        </div>

                    </div>

                    {/* NAVEGAÇÃO */}

                    <div>

                        <h4 className="text-white font-semibold mb-5">
                            Navegação
                        </h4>

                        <ul className="space-y-3 text-slate-400">

                            <li><a href="#inicio" className="hover:text-cyan-400">Início</a></li>
                            <li><a href="#servicos" className="hover:text-cyan-400">Serviços</a></li>
                            <li><a href="#projects" className="hover:text-cyan-400">Projetos</a></li>
                            <li><a href="#process" className="hover:text-cyan-400">Como Funciona</a></li>
                            <li><a href="#sobre" className="hover:text-cyan-400">Sobre Mim</a></li>
                            <li><a href="#contato" className="hover:text-cyan-400">Contato</a></li>

                        </ul>

                    </div>

                    {/* SERVIÇOS */}

                    <div>

                        <h4 className="text-white font-semibold mb-5">
                            Serviços
                        </h4>

                        <ul className="space-y-3 text-slate-400">

                            <li>Criação de Sites</li>
                            <li>Landing Pages</li>
                            <li>Sistemas Web</li>
                            <li>Automações</li>
                            <li>Integração WhatsApp</li>
                            <li>Suporte</li>

                        </ul>

                    </div>

                    {/* CONTATO */}

                    <div>

                        <h4 className="text-white font-semibold mb-5">
                            Contato
                        </h4>

                        <ul className="space-y-4">

                            <li className="flex items-center gap-3 text-slate-400">
                                <Phone size={18} className="text-cyan-400" />
                                (44) 9-9984-7071
                            </li>

                            <li className="flex items-center gap-3 text-slate-400">
                                <Mail size={18} className="text-cyan-400" />
                                rabelotech@gmail.com.br
                            </li>

                            <li className="flex items-center gap-3 text-slate-400">
                                <MapPin size={18} className="text-cyan-400" />
                                Peabiru - PR, Brasil
                            </li>

                        </ul>

                    </div>

                </div>

            </div>

            {/* COPYRIGHT */}

            <div className="border-t border-purple-500/10">

                <div className="max-w-7xl mx-auto px-6 py-6">

                    <p className="text-center text-slate-500 text-sm">
                        © {new Date().getFullYear()} Rabelo.Tech. Todos os direitos reservados.
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;