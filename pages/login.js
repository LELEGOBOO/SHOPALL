export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] px-6 italic">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-4xl font-black uppercase mb-8 tracking-tighter">Login</h1>
        <div className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="border border-black p-4 text-xs font-bold outline-none" />
          <input type="password" placeholder="Password" className="border border-black p-4 text-xs font-bold outline-none" />
          <button className="bg-black text-white py-4 font-bold uppercase text-[10px] tracking-widest hover:invert transition">
            Sign In
          </button>
        </div>
        <p className="mt-6 text-[10px] uppercase font-bold text-gray-400">No account? Contact support for membership.</p>
      </div>
    </div>
  );
}

