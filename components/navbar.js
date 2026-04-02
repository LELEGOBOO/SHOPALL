import { useState } from 'react';
import Link from 'next/link';

const menuItems = [
  { name: 'Discover', path: '/' },
  { name: 'All Products', path: '/all-products' },
  { name: 'Sale', path: '/sale' },
  { name: 'Custom Designs', path: '/custom' },
  { name: 'Orders', path: '/orders' },
  { name: 'Pay', path: '/pay' },
  { name: 'Login', path: '/login' },
  { name: 'Contact Us', path: '/contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed w-full bg-white border-b z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter">SHOPALL</div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-sm font-bold">MENU</button>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wider">
          {menuItems.map((item) => (
            <Link key={item.path} href={item.path} className="hover:opacity-50 transition">{item.name}</Link>
          ))}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 text-xl font-bold uppercase">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-sm">CLOSE</button>
          {menuItems.map((item) => (
            <Link key={item.path} href={item.path} onClick={() => setIsOpen(false)}>{item.name}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}

