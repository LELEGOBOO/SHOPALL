import products from '../data/products.json';
import Link from 'next/link';

export default function AllProducts() {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h2 className="text-xs font-black uppercase tracking-[0.4em] mb-12 border-b pb-4">All Products ({products.length})</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.slug}`} className="group">
            <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
              <img src={product.image} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
            </div>
            <div className="mt-4 flex justify-between items-start text-[11px] font-bold uppercase">
              <div>
                <h3>{product.name}</h3>
                <p className="text-gray-400 mt-1">{product.category}</p>
              </div>
              <span>${product.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
