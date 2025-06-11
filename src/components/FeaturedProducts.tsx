import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Кроссовки для бега Nike Air Zoom",
      price: 8990,
      originalPrice: 12990,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      rating: 4.8,
      category: "Обувь",
    },
    {
      id: 2,
      name: "Гантели разборные 20кг",
      price: 4500,
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      rating: 4.6,
      category: "Фитнес",
    },
    {
      id: 3,
      name: "Футбольный мяч Adidas",
      price: 2890,
      originalPrice: 3490,
      image:
        "https://images.unsplash.com/photo-1614632537190-23e4b194b2ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      rating: 4.9,
      category: "Футбол",
    },
    {
      id: 4,
      name: "Теннисная ракетка Wilson Pro",
      price: 15900,
      image:
        "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      rating: 4.7,
      category: "Теннис",
    },
    {
      id: 5,
      name: "Баскетбольный мяч Spalding",
      price: 3200,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      rating: 4.5,
      category: "Баскетбол",
    },
    {
      id: 6,
      name: "Коврик для йоги Premium",
      price: 2100,
      originalPrice: 2800,
      image:
        "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      rating: 4.8,
      category: "Йога",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Популярные товары
          </h2>
          <p className="text-lg text-gray-600">
            Выбор наших покупателей — проверенное качество
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Посмотреть все товары
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
