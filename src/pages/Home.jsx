import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Faq from "../components/Faq";
import Contato from "../components/Contato";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";
import MiniCta from "../components/MiniCta";
import WhyChoose from "../components/WhyChoose";
import ProcessSection from "../components/ProcessSection";
import Pricing from "../components/Pricing";
import DigitalPresence from "../components/DigitalPresense";
function Home() {
    return (
        <main className="bg-[#030712] text-white">
            <Navbar />
            <Hero />
            <Benefits />
            <DigitalPresence/>
            <Services />
            <ProcessSection />
            <WhyChoose />
            <MiniCta />
            <Portfolio />
            <Pricing />
            <Faq />
            <Contato />
            <Footer />
            <WhatsappButton />
        </main>
    );
}

export default Home;