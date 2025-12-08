import React from 'react';
import type { Product } from "../api";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
        >
            <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${product.predicted_status === 'Authentic'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                        }`}>
                        {product.predicted_status}
                    </div>
                    <span className="font-bold text-lg text-green-600">₹{product.price}</span>
                </div>

                <h3 className="font-bold text-gray-900 text-lg mb-1 truncate" title={product.name}>
                    {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">ID: {product.id}</p>

                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                    <div className="bg-gray-50 p-2 rounded">
                        <span className="block text-xs text-gray-400">Color</span>
                        {product.color}
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                        <span className="block text-xs text-gray-400">Year</span>
                        {product.year}
                    </div>
                </div>

                <Link
                    to={`/product/${product.id}`}
                    className="block w-full text-center bg-gray-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                    View Details
                </Link>
            </div>
        </motion.div>
    );
};
