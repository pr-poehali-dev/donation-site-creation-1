import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [formData, setFormData] = useState({
    nickname: "",
    email: "",
    paymentMethod: "",
  });

  const colorClasses = {
    green: "from-green-500 to-green-600 border-green-400",
    blue: "from-blue-500 to-blue-600 border-blue-400",
    purple: "from-purple-500 to-purple-600 border-purple-400",
    red: "from-red-500 to-red-600 border-red-400",
    yellow: "from-yellow-500 to-yellow-600 border-yellow-400",
    cyan: "from-cyan-500 to-cyan-600 border-cyan-400",
    orange: "from-orange-500 to-orange-600 border-orange-400",
  };

  const handlePurchase = () => {
    setIsModalOpen(false);
    setIsConfirmOpen(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
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
          onClick={() => setIsModalOpen(true)}
          className={`w-full bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} text-white font-bold py-3 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105`}
        >
          Купить привилегию
        </button>
      </div>

      {/* Purchase Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Покупка привилегии {title}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="text-center mb-4">
              <span className="text-3xl font-bold">{price} ₽</span>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Игровой ник
              </label>
              <Input
                value={formData.nickname}
                onChange={(e) => handleInputChange("nickname", e.target.value)}
                placeholder="Введите ваш игровой ник"
                className="bg-gray-800 border-gray-600 text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Введите ваш email"
                className="bg-gray-800 border-gray-600 text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Способ оплаты
              </label>
              <Select
                onValueChange={(value) =>
                  handleInputChange("paymentMethod", value)
                }
              >
                <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                  <SelectValue placeholder="Выберите способ оплаты" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  <SelectItem value="card">Банковская карта</SelectItem>
                  <SelectItem value="qiwi">QIWI кошелек</SelectItem>
                  <SelectItem value="yandex">Яндекс.Деньги</SelectItem>
                  <SelectItem value="steam">Steam кошелек</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter className="mt-6">
            <Button
              variant="outline"
              onClick={() => setIsModalOpen(false)}
              className="border-gray-600 text-white hover:bg-gray-800"
            >
              Отмена
            </Button>
            <Button
              onClick={handlePurchase}
              disabled={
                !formData.nickname || !formData.email || !formData.paymentMethod
              }
              className={`bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} hover:opacity-90`}
            >
              Купить за {price} ₽
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Confirmation Dialog */}
      <Dialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
        <DialogContent className="bg-gray-900 border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-green-400">
              ✅ Заказ оформлен!
            </DialogTitle>
          </DialogHeader>

          <div className="text-center space-y-4">
            <p className="text-lg">
              Ваша привилегия{" "}
              <span className="font-bold text-cyan-400">{title}</span> успешно
              заказана!
            </p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p>
                <strong>Игрок:</strong> {formData.nickname}
              </p>
              <p>
                <strong>Email:</strong> {formData.email}
              </p>
              <p>
                <strong>Сумма:</strong> {price} ₽
              </p>
            </div>
            <p className="text-sm text-gray-400">
              Привилегия будет выдана в течение 15 минут после подтверждения
              оплаты
            </p>
          </div>

          <DialogFooter>
            <Button
              onClick={() => {
                setIsConfirmOpen(false);
                setFormData({ nickname: "", email: "", paymentMethod: "" });
              }}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              Понятно
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PrivilegeCard;
