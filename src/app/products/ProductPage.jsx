import { getProducts } from "@/lib/api"; // Path to where you saved getProducts
import ProductHomepageCardComponent from "@/components/ProductHomepageCardComponent";
import { Search } from "lucide-react";

export default async function ProductPage() {
  const products = await getProducts();

  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-black text-slate-900">List of All Product</h1>
        
        <div className="relative w-96">
          <Search className="absolute left-4 top-3 size-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-pink-500/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products && products.length > 0 ? (
          products.map((item) => (
        
            <ProductHomepageCardComponent key={item.id} product={item} />
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <p className="text-slate-400 font-medium">No products found in the database.</p>
          </div>
        )}
      </div>
    </div>
  );
}