import PrivilegeCard from "./PrivilegeCard";

const Donations = () => {
  const privileges = [
    {
      title: "FREE",
      price: "0",
      features: ["Базовые команды", "Чат", "Стандартная защита"],
      color: "green",
    },
    {
      title: "HELPER",
      price: "199",
      features: [
        "Команды модерации",
        "Цветной ник",
        "Кик игроков",
        "Доступ к логам",
      ],
      color: "blue",
    },
    {
      title: "MODER",
      price: "399",
      features: ["Бан/мут игроков", "Телепорт", "Невидимость", "WorldEdit"],
      color: "purple",
    },
    {
      title: "VIP",
      price: "699",
      features: [
        "Приватные регионы",
        "Эксклюзивные предметы",
        "VIP чат",
        "Удвоенный опыт",
      ],
      color: "yellow",
      isPopular: true,
    },
    {
      title: "ADMIN",
      price: "1299",
      features: [
        "Полный доступ",
        "Управление сервером",
        "Креативный режим",
        "Все команды",
      ],
      color: "red",
    },
    {
      title: "FLY",
      price: "299",
      features: [
        "Полет в выживании",
        "Ускоренный полет",
        "Беспредел в воздухе",
      ],
      color: "cyan",
    },
    {
      title: "DRAGON",
      price: "1999",
      features: [
        "Превращение в дракона",
        "Огненное дыхание",
        "Полет дракона",
        "Эксклюзивные способности",
      ],
      color: "orange",
    },
  ];

  return (
    <section
      id="donations"
      className="py-20 bg-gradient-to-b from-black/40 to-black/80"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-montserrat font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          ПРИВИЛЕГИИ
        </h2>

        <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Выберите привилегию, которая подходит именно вам и получите
          эксклюзивные возможности
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {privileges.map((privilege, index) => (
            <PrivilegeCard
              key={index}
              title={privilege.title}
              price={privilege.price}
              features={privilege.features}
              color={privilege.color}
              isPopular={privilege.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Donations;
