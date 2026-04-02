import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">{children}</main>
      <footer className="p-10 bg-black text-white text-center text-sm">
        © 2026 GLAMM2 | All Rights Reserved
      </footer>
    </>
  );
}

