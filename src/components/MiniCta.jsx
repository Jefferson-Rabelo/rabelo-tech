function MiniCta() {
    return (
        <section className="py-24 bg-[#00264B] border-t border-slate-700/50">

            <div className="max-w-5xl mx-auto px-6 text-center">

                <h2 className="text-4xl font-bold text-white">
                    Pronto para modernizar <span className="text-sky-400">sua empresa?</span>
                </h2>

                <p className="text-slate-400 mt-4 mb-10 max-w-2xl mx-auto">
                    Solicite um orçamento e descubra como um site profissional pode ajudar sua empresa a crescer.
                </p>

                <a
                    href="https://wa.me/55SEUNUMERO?text=Olá%20Jefferson!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20um%20site."
                    target="_blank"
                    className="inline-flex
        items-center
        justify-center
        mt-6
        bg-sky-400
        text-slate-950
        px-8
        py-4
        rounded-xl
        font-semibold
        hover:bg-sky-300
        hover:scale-105
        shadow-lg
        shadow-sky-500/10
        transition">
                    Solicitar Orçamento
                </a>

            </div>

        </section>
    );
}

export default MiniCta;