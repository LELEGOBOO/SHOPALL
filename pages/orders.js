import SEO from '../components/SEO';

export default function Orders() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 italic">
      <SEO title="My Orders" description="Track your SHOPALL custom design orders." slug="orders" />
      <h1 className="text-5xl font-black uppercase tracking-tighter mb-12">Order History</h1>
      <div className="border-t border-b border-black py-20 text-center uppercase tracking-widest text-xs opacity-40">
        No active orders found. Your custom designs will appear here after payment.
      </div>
    </div>
  );
}

