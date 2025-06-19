import Icon from "@/components/ui/icon";

const Rules = () => {
  const rules = [
    {
      icon: "Shield",
      title: "Читерство запрещено",
      description: "Использование модов, читов и багов карается баном",
    },
    {
      icon: "MessageCircle",
      title: "Уважение к игрокам",
      description: "Оскорбления, спам и реклама запрещены",
    },
    {
      icon: "Hammer",
      title: "Гриферство",
      description: "Ломать чужие постройки строго запрещено",
    },
    {
      icon: "Users",
      title: "Многоаккаунтинг",
      description: "Один игрок - один аккаунт",
    },
    {
      icon: "DollarSign",
      title: "Торговля",
      description: "Обман при торговле наказывается",
    },
    {
      icon: "Zap",
      title: "Администрация",
      description: "Решение администрации окончательно",
    },
  ];

  return (
    <section
      id="rules"
      className="py-20 bg-gradient-to-b from-black/80 to-black/40"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-montserrat font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          ПРАВИЛА СЕРВЕРА
        </h2>

        <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Ознакомьтесь с правилами сервера для комфортной игры всех участников
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mr-4">
                  <Icon name={rule.icon} size={24} className="text-black" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-white">
                  {rule.title}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {rule.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-red-400 mb-4">⚠️ ВАЖНО</h3>
            <p className="text-gray-300">
              Незнание правил не освобождает от ответственности. За нарушение
              правил предусмотрены наказания от предупреждения до перманентного
              бана.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
