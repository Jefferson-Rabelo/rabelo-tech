import { FaCode } from "react-icons/fa";

function Logo() {
    return (
        <a href="#" className="flex items-center gap-3">

            <div className="text-sky-500 text-3xl">
                <FaCode />
            </div>

            <div className="leading-tight">

                <h1 className="text-white font-bold text-lg">
                    Rabelo
                    <span className="text-sky-400">.Tech</span>
                </h1>

                <p className="text-xs text-slate-400">
                    Sites • Sistemas Web
                    {/* Sites • Sistemas Web • Landing Pages */}
                </p>

            </div>

        </a>
    );
}

export default Logo;