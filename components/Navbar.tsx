export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 nav-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-black tracking-tighter text-red-600">
          TIKKAGO<span className="text-white">.</span>
        </div>

        <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-widest">
          <a href="#home" className="hover:text-red-500">Home</a>
          <a href="#about" className="hover:text-red-500">About</a>
          <a href="#menu" className="hover:text-red-500">Menu</a>
          <a href="#reviews" className="hover:text-red-500">Reviews</a>
          <a href="#location" className="hover:text-red-500">Location</a>
        </div>

        <a
          href="#order"
          className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full font-bold text-sm active:scale-95"
        >
          ORDER NOW
        </a>
      </div>
    </nav>
  );
}
