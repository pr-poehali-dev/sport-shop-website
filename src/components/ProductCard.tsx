import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  category: string;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  rating,
  category,
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {originalPrice && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
            -{Math.round((1 - price / originalPrice) * 100)}%
          </div>
        )}
        <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
          <Icon
            name="Heart"
            size={16}
            className="text-gray-600 hover:text-red-500"
          />
        </button>
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{category}</p>
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {name}
        </h3>

        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                className={
                  i < Math.floor(rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">({rating})</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">
              {price.toLocaleString()} ₽
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {originalPrice.toLocaleString()} ₽
              </span>
            )}
          </div>
        </div>

        <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
          <Icon name="ShoppingCart" size={16} className="mr-2" />В корзину
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
