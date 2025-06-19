import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-cyan-500/20 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">⚡</span>
            </div>
            <h1 className="text-2xl font-montserrat font-bold text-cyan-400 glow-text">
              CyberCraft
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#main"
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              Главная
            </a>
            <a
              href="#donations"
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              Донаты
            </a>
            <a
              href="#rules"
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              Правила
            </a>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icon name={isOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <a
              href="#main"
              className="block text-white hover:text-cyan-400 transition-colors"
            >
              Главная
            </a>
            <a
              href="#donations"
              className="block text-white hover:text-cyan-400 transition-colors"
            >
              Донаты
            </a>
            <a
              href="#rules"
              className="block text-white hover:text-cyan-400 transition-colors"
            >
              Правила
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
