import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO title="Home" description="Shopall - Global Custom Design & POD Network." slug="" />
      <section className="px-6 py-32 max-w-7xl mx-auto">
        <header>
          <h1 className="text-[12vw] font-black leading-[0.8] uppercase tracking-tighter italic">
            Discover <br /> The New <br /> Standard.
          </h1>
        </header>
        <div className="mt-12 flex flex-col md:flex-row justify-between items-end gap-8">
          <p className="max-w-sm font-medium text-gray-500 italic">
            Explore our 300+ premium collection. Custom designs integrated with Alibaba POD suppliers for global shipping.
          </p>
          <nav>
            <a href="/all-products" className="bg-black text-white px-12 py-6 font-bold uppercase text-xs tracking-widest inline-block transition hover:invert">
              Shop All Products
            </a>
          </nav>
        </div>
      </section>
    </>
  );
}

