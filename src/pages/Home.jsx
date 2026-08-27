import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Faq from "../components/Faq";
import Sobre from "../components/Sobre";
import Contato from "../components/Contato";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";
import MiniCta from "../components/MiniCta";
import WhyChoose from "../components/WhyChoose";
import ProcessSection from "../components/ProcessSection";
import Pricing from "../components/Pricing";


function Home() {
    return (
        <main className="bg-[#030712] text-white">
            <Navbar />
            <Hero />
            <Benefits />
            <Services />
            <ProcessSection />
            <WhyChoose />
            <MiniCta />
            <Portfolio />
            <Pricing />
            <Faq />
            <Sobre />
            <Contato />
            <Footer />
            <WhatsappButton />
        </main>
    );
}

export default Home;