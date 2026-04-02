export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 italic">
      <h1 className="text-6xl font-black uppercase tracking-tighter mb-12">Contact Us</h1>
      <form className="flex flex-col gap-6">
        <input type="text" placeholder="FULL NAME" className="border-b border-black py-4 outline-none uppercase text-xs font-bold" required />
        <input type="email" placeholder="EMAIL ADDRESS" className="border-b border-black py-4 outline-none uppercase text-xs font-bold" required />
        <textarea placeholder="YOUR MESSAGE" className="border-b border-black py-4 outline-none uppercase text-xs font-bold h-32"></textarea>
        <button className="mt-6 bg-black text-white py-4 font-bold uppercase text-[10px] tracking-widest hover:invert transition">
          Submit Inquiry
        </button>
      </form>
      <p className="mt-12 text-[10px] text-gray-400 uppercase leading-loose">
        Automatic confirmation email will be sent upon form submission. Powered by SHOPALL Support.
      </p>
    </div>
  );
}

