import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Спорт — это
              <span className="text-orange-400 block">твоя жизнь</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Найди идеальное снаряжение для достижения своих спортивных целей.
              Качественные товары от ведущих брендов по лучшим ценам.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                <Icon name="ShoppingBag" className="mr-2" size={20} />
                Смотреть товары
              </button>
              <button className="border border-white hover:bg-white hover:text-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Узнать больше
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
              alt="Спортивное снаряжение"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <Icon name="Star" className="text-yellow-300 mr-2" size={20} />
                <span className="font-bold">4.9/5</span>
              </div>
              <p className="text-sm">Отзывы клиентов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
