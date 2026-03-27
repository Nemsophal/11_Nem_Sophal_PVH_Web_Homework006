"use client";
import Link from "next/link";
import { Star } from "lucide-react";

export default function ProductItems({ product }) {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-[#0F172A] p-6 m-2 rounded-2xl relative aspect-square flex items-center justify-center">
        <span className="absolute top-3 left-3 bg-white text-[10px] font-bold px-2 py-0.5 rounded-full">NEW</span>
        <span className="absolute top-8 left-3 text-white text-[10px] flex items-center gap-1">
          <Star className="size-3 text-yellow-400 fill-yellow-400" /> 4.9
        </span>
        <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-blue-500 text-[10px] font-bold uppercase">Flagship Series</p>
            <h3 className="font-bold text-gray-900 truncate max-w-[140px]">{product.name}</h3>
          </div>
          <p className="font-bold">${product.price}</p>
        </div>
        
        <p className="text-gray-400 text-xs line-clamp-2 mb-4">
          {product.description || "The future of workflow starts here."}
        </p>
        <Link href={`/products/${product.id}`}>
          <button className="w-full bg-[#0F172A] text-white py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2">
            View Product ↗
          </button>
        </Link>
      </div>
    </div>
  );
}