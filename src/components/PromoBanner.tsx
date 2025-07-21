import React, { useState } from "react";
import { Timer, X } from "lucide-react";

const PromoBanner = () => {
  const [visible, setVisible] = useState(true);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!visible) return null;

  return (
    <div
      className={`
        fixed z-40 transition-transform duration-300 ease-in-out hover:scale-105
        w-[90vw] max-w-xs
        bottom-4 left-1/2 -translate-x-1/2
        md:top-16 md:right-8 md:left-auto md:bottom-auto md:translate-x-0
      `}
      style={{ fontSize: "90%" }} // 30% smaller
    >
      <div className="bg-gradient-to-br from-orange-400 to-orange-500 p-1 rounded-xl shadow-xl relative">
        {/* Close button */}
        <button
          className="absolute top-1 right-1 p-1 rounded-full hover:bg-orange-200 transition"
          onClick={() => setVisible(false)}
          aria-label="Banner schließen"
        >
          <X className="w-4 h-4 text-orange-700" />
        </button>
        <div className="bg-white dark:bg-gray-900 rounded-xl px-4 py-2 flex flex-col h-full">
          <div className="flex items-center gap-2 mb-1">
            <Timer className="w-5 h-5 text-orange-500" />
            <span
              className="text-xl font-extrabold tracking-wide text-orange-500"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Limitiertes Angebot!
            </span>
          </div>
          <h3
            className="text-sm font-extrabold mb-1 text-black dark:text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Probewoche
          </h3>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg font-extrabold text-orange-500">9€</span>
            <span className="text-xs text-gray-400 line-through">15€</span>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
              -60% gespart
            </span>
          </div>
          <p className="text-xs font-semibold text-black dark:text-white mb-2">
            Nur für kurze Zeit verfügbar!
          </p>
          <a
            href="#contact"
            onClick={handleScroll}
            className="mt-auto inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-1.5 px-3 rounded-lg transition-colors duration-200 text-center text-xs"
          >
            Jetzt starten
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;