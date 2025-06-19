interface PrivilegeCardProps {
  title: string;
  price: string;
  features: string[];
  color: string;
  isPopular?: boolean;
}

const PrivilegeCard = ({
  title,
  price,
  features,
  color,
  isPopular,
}: PrivilegeCardProps) => {
  const colorClasses = {
    green: "from-green-500 to-green-600 border-green-400",
    blue: "from-blue-500 to-blue-600 border-blue-400",
    purple: "from-purple-500 to-purple-600 border-purple-400",
    red: "from-red-500 to-red-600 border-red-400",
    yellow: "from-yellow-500 to-yellow-600 border-yellow-400",
    cyan: "from-cyan-500 to-cyan-600 border-cyan-400",
    orange: "from-orange-500 to-orange-600 border-orange-400",
  };

  return (
    <div
      className={`relative bg-black/50 backdrop-blur-sm border-2 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${colorClasses[color as keyof typeof colorClasses]} ${isPopular ? "ring-4 ring-cyan-400" : ""}`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-purple-400 text-black px-4 py-1 rounded-full text-sm font-bold">
          ПОПУЛЯРНО
        </div>
      )}

      <h3 className="text-2xl font-montserrat font-bold mb-4 text-center text-white glow-text">
        {title}
      </h3>

      <div className="text-center mb-6">
        <span className="text-3xl font-bold text-white">{price}</span>
        <span className="text-gray-400 ml-1">₽</span>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <span className="text-green-400 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`w-full bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} text-white font-bold py-3 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105`}
      >
        Купить привилегию
      </button>
    </div>
  );
};

export default PrivilegeCard;
