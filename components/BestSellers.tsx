import { menu } from "@/lib/menu";

export default function BestSellers() {
  const bestSellers = menu.filter(item => item.bestseller);

  return (
    <section id="menu" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black uppercase">
              Best Sellers
            </h2>
            <p className="text-red-500 font-bold tracking-widest uppercase mt-2">
              Crowd Favorites
            </p>
          </div>

          {/* Navigation */}
          <a
            href="/menu"
            className="text-sm font-bold uppercase tracking-widest text-red-500 hover:underline"
          >
            See Full Menu →
          </a>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {bestSellers.map((item) => (
            <div key={item.name} className="card-dark p-6 rounded-xl">
              <h4 className="font-bold text-lg uppercase mb-2 italic">
                {item.name}
              </h4>
              <p className="text-gray-400 text-sm">
                {item.category}
              </p>
              <p className="text-red-500 font-bold mt-4">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
