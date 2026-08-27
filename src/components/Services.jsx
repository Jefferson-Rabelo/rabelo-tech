import { services } from "../data/services";

function Services() {

    return (
        <section
            id="servicos"
            className="bg-[#020617] lg:py-0 overflow-hidden border-t border-slate-700/50"
        >
            <div className="max-w-7xl mx-auto px-6 py-25">

                <h2 className="text-4xl font-bold text-center  text-white mb-12">
                    O que podemos fazer pelo <span className="text-sky-400">seu negócio</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {services.map((service, index) => {

                        const Icon = service.icon;

                        return (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-[#0F172A] border border border-slate-700/60 hover:border-sky-500/40 hover:scale-105 transition"
                            >
                                <Icon className="text-sky-400 text-3xl mb-4" />

                                <h3 className="text-xl font-semibold text-white">
                                    {service.title}
                                </h3>

                                <p className="text-slate-400 mt-2">
                                    {service.desc}
                                </p>
                            </div>
                        );
                    })}


                </div>

            </div>
        </section>
    );
}



export default Services;