import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-black/90 border-t border-cyan-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">⚡</span>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-cyan-400">
                CyberCraft
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Лучший Minecraft сервер с киберспорт атмосферой
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Icon name="Users" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#main"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#donations"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Донаты
                </a>
              </li>
              <li>
                <a
                  href="#rules"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Правила
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Поддержка</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Форум
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Тех. поддержка
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Подключение
            </h4>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-2">IP сервера:</p>
              <p className="text-cyan-400 font-mono text-lg">
                play.cybercraft.ru
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 CyberCraft. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
