export default function Pay() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 italic">
      <h1 className="text-4xl font-black uppercase mb-10 tracking-tighter">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Sol: Form */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xs font-bold uppercase tracking-widest border-b pb-2">Shipping Information</h2>
          <input type="text" placeholder="Address" className="border-b py-3 outline-none uppercase text-[10px]" />
          <input type="text" placeholder="City" className="border-b py-3 outline-none uppercase text-[10px]" />
          <input type="text" placeholder="Card Number" className="border-b py-3 mt-6 outline-none uppercase text-[10px]" />
        </div>
        {/* Sağ: Özet */}
        <div className="bg-gray-50 p-8">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-6">Order Summary</h2>
          <div className="flex justify-between uppercase text-[10px] font-bold border-b pb-4">
            <span>Subtotal</span>
            <span>$00.00</span>
          </div>
          <button className="w-full bg-black text-white py-4 mt-10 text-[10px] font-bold uppercase tracking-[0.2em]">
            Complete Purchase
          </button>
        </div>
      </div>
    </div>
  );
}

