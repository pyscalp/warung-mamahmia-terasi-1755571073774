import React from 'react';
import { Star } from 'lucide-react';

const MenuItemCard = ({ image, name, description, price, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={image} alt={name} className="w-full h-48 object-cover object-center" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-secondary font-bold text-lg">{price}</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                className={i < rating ? 'text-accent fill-accent' : 'text-gray-300'}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;