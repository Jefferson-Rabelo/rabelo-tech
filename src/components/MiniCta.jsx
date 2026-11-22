
function MiniCta() {
    return (
        <section className="relative overflow-hidden py-24 bg-[#F9F8FD] border-t border-[#E9E2F5]">

            {/* Efeito de fundo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#7138E8]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

                <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#7138E8]">
                    Vamos começar?
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-[#1D1237] mt-4">
                    Pronto para modernizar
                    <span className="text-[#7138E8]"> sua empresa?</span>
                </h2>

                <p className="text-[#655B7E] text-lg mt-5 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Solicite um orçamento e descubra como um site profissional
                    pode ajudar sua empresa a crescer.
                </p>

                <a
                    href="https://wa.me/5544999847071?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20site."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center mt-2 bg-[#7138E8] text-white px-9 py-4 rounded-xl font-semibold hover:bg-[#6028D0] hover:-translate-y-1 shadow-lg shadow-purple-500/20 transition-all duration-300"
                >
                    Solicitar orçamento
                </a>

            </div>
        </section>
    );
}

export default MiniCta;
