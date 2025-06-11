import Icon from "@/components/ui/icon";

const Categories = () => {
  const categories = [
    {
      name: "Футбол",
      icon: "Zap",
      image:
        "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=300&h=200&fit=crop",
      count: "150+ товаров",
    },
    {
      name: "Баскетбол",
      icon: "Circle",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=200&fit=crop",
      count: "80+ товаров",
    },
    {
      name: "Теннис",
      icon: "Target",
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop",
      count: "60+ товаров",
    },
    {
      name: "Фитнес",
      icon: "Activity",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      count: "200+ товаров",
    },
    {
      name: "Плавание",
      icon: "Waves",
      image:
        "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=300&h=200&fit=crop",
      count: "45+ товаров",
    },
    {
      name: "Йога",
      icon: "Heart",
      image:
        "https://images.unsplash.com/photo-1506629905496-f2fc841af9b5?w=300&h=200&fit=crop",
      count: "35+ товаров",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Категории товаров
          </h2>
          <p className="text-lg text-gray-600">
            Найди снаряжение для своего вида спорта
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Icon
                      name={category.icon as any}
                      size={40}
                      className="mx-auto mb-3"
                    />
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.count}</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-2 px-4 rounded-lg font-semibold transition-colors border border-white/20">
                  Перейти в категорию
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
