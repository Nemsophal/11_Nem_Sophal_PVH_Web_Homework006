export default async function ProductDetailPage({ params }) {
  // Await params for Next.js 15
  const { id } = await params;

  // Fetch single product from API
  const response = await fetch(`https://homework-api.noevchanmakara.site/api/v1/products/${id}`, {
    cache: "no-store"
  });
  
  const data = await response.json();
  const product = data?.payload;

  if (!product) {
    return (
      <div className="p-20 text-center">
        <h1 className="text-2xl font-bold text-slate-800">Product Not Found</h1>
        <p className="text-slate-500">Could not find data for ID: {id}</p>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
        <div className="bg-slate-900 p-10 rounded-[2rem] flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto drop-shadow-2xl" 
          />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-5xl font-black italic text-slate-900">{product.name}</h1>
          <p className="text-3xl font-bold text-pink-500">${product.price}</p>
          <p className="text-slate-500 leading-relaxed">{product.description}</p>
          <button className="mt-6 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}