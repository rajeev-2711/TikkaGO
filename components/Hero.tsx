export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 red-gradient" />
      </div>

      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 leading-none">
          INDIAN TIKKA.<br />
          <span className="text-red-600">GLOBAL TACO.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto font-medium">
          Authentic Indian charcoal-grilled tikka meet the iconic Mexican street taco.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="#menu" className="border-2 border-white px-10 py-4 font-bold hover:bg-white hover:text-black transition">
            VIEW MENU
          </a>
          <a href="#order" className="bg-red-600 px-10 py-4 font-bold hover:bg-red-700 transition">
            ORDER ONLINE
          </a>
        </div>
      </div>
    </section>
  );
}
