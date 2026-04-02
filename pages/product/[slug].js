import { useRouter } from 'next/router';
import products from '../../data/products.json';
import SEO from '../../components/SEO';

export default function ProductDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const product = products.find(p => p.slug === slug);

  if (!product) return <div className="p-20 text-center uppercase">Loading Product...</div>;

  return (
    <>
      <SEO 
        title={product.name} 
        description={`${product.name} - Premium ${product.category} item. Best quality custom designs at SHOPALL.`}
        slug={product.slug}
      />
      <article className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-16 italic">
        <div className="aspect-[4/5] bg-gray-50">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="flex flex-col justify-center">
          <nav className="text-[10px] mb-4 text-gray-400 uppercase tracking-widest">
            Home / {product.category} / {product.name}
          </nav>
          <h1 className="text-5xl font-black uppercase leading-none mb-6">{product.name}</h1>
          <p className="text-2xl font-light mb-10 text-blue-600 font-mono">${product.price} USD</p>
          <button className="w-full bg-black text-white py-6 font-bold uppercase text-xs tracking-[0.2em]">
            Add to Cart
          </button>
          <div className="mt-8 text-xs text-gray-500 leading-relaxed uppercase tracking-tighter border-t pt-8">
            <h2 className="font-bold text-black mb-2 italic underline">Product Information</h2>
            <p>Every piece is custom-made through our global POD network. 
               Ensuring sustainable production and premium quality for the {product.category} category.</p>
          </div>
        </div>
      </article>
    </>
  );
}
