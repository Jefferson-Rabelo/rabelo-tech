import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
    return (
        <a
            href="https://wa.me/5544999847071"
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 right-6 z-50"
        >
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition">
                <FaWhatsapp />
            </div>
        </a>
    );
}

export default WhatsappButton;