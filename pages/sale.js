import products from '../data/products.json';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function Sale() {
  const saleProducts = products.filter(p => p.isSale);

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto italic">
      <SEO title="Sale" description="Limited time offers on premium custom designs." slug="sale" />
      <h1 className="text-6xl font-black uppercase tracking-tighter mb-12">Flash Sale</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {saleProducts.map((product) => (
          <Link key={product.id} href={`/product/${product.slug}`} className="group border p-4 hover:bg-black hover:text-white transition-all">
            <div className="aspect-square bg-gray-100 mb-4 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
            </div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold uppercase text-xs">{product.name}</h3>
              <span className="text-red-600 font-mono">ON SALE</span>
            </div>
            <p className="mt-2 font-light">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

