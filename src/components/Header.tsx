import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">SportShop</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Главная
            </a>
            <a
              href="/products"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Товары
            </a>
            <a
              href="/categories"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Категории
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              О нас
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Поиск товаров..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Icon
                name="Search"
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              />
            </div>
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Icon name="ShoppingCart" size={24} />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <a href="/" className="py-2 text-gray-700 hover:text-blue-600">
                Главная
              </a>
              <a
                href="/products"
                className="py-2 text-gray-700 hover:text-blue-600"
              >
                Товары
              </a>
              <a
                href="/categories"
                className="py-2 text-gray-700 hover:text-blue-600"
              >
                Категории
              </a>
              <a
                href="/about"
                className="py-2 text-gray-700 hover:text-blue-600"
              >
                О нас
              </a>
            </nav>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Поиск товаров..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
