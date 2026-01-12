import { menu } from "@/lib/menu";

export default function FullMenuPage() {
  return (
    <main className="py-24 px-6 bg-black min-h-screen">
        
      <div className="max-w-7xl mx-auto">
        <div className="fixed top-0 left-0 right-0 z-20 bg-black border-b border-white/10"></div>
        <h1 className="text-5xl font-black uppercase mb-12">
          Full Menu
        </h1>
        <div className="mb-8">
          <a
            href="/"
            className="text-sm font-bold uppercase tracking-widest text-red-500 hover:underline"
          >
            ← Back to Home
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {menu.map((item) => (
            <div
              key={item.name}
              className="card-dark p-6 rounded-xl"
            >
              <h3 className="font-bold text-xl mb-2 italic">
                {item.name}
              </h3>

              <p className="text-gray-400 text-sm">
                {item.category}
              </p>

              <p className="text-red-500 font-bold mt-4">
                {item.price}
              </p>
            </div>
          ))}
        </div>
        <div className="mb-8 mt-3">
          <a
            href="/"
            className=" text-sm font-bold uppercase tracking-widest text-red-500 hover:underline"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
