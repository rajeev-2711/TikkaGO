export default function Menu() {
  return (
    <section id="menu" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-5xl font-black uppercase">The Lineup</h2>
            <p className="text-red-500 font-bold tracking-widest uppercase mt-2">
              Smoky. Spicy. Fresh.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* CHICKEN */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold border-l-4 border-red-600 pl-4 mb-8">
              CHICKEN
            </h3>

            <div className="card-dark p-6 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-xl uppercase italic">
                  The OG Butter Chicken
                </h4>
                <span className="text-red-500 font-bold">₹249</span>
              </div>
              <p className="text-gray-400 text-sm">
                Classic makhani gravy, pulled tandoori chicken, pickled onions,
                lime crema.
              </p>
              <span className="inline-block mt-4 text-[10px] bg-red-600 px-2 py-1 font-bold">
                BESTSELLER
              </span>
            </div>

            <div className="card-dark p-6 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-xl uppercase italic">
                  Fiery Peri-Peri Tikka
                </h4>
                <span className="text-red-500 font-bold">₹269</span>
              </div>
              <p className="text-gray-400 text-sm">
                Ghost pepper infused chicken tikka, habanero salsa, cool mint yogurt.
              </p>
            </div>
          </div>

          {/* PANEER */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold border-l-4 border-red-600 pl-4 mb-8">
              PANEER
            </h3>

            <div className="card-dark p-6 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-xl uppercase italic">
                  Achari Paneer Pop
                </h4>
                <span className="text-red-500 font-bold">₹229</span>
              </div>
              <p className="text-gray-400 text-sm">
                Pickle-marinated cottage cheese cubes, charred peppers,
                mango ginger chutney.
              </p>
            </div>

            <div className="card-dark p-6 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-xl uppercase italic">
                  Smoky Malai Paneer
                </h4>
                <span className="text-red-500 font-bold">₹239</span>
              </div>
              <p className="text-gray-400 text-sm">
                Cardamom-spiced creamy paneer, toasted cashews,
                pomegranate seeds.
              </p>
            </div>
          </div>

          {/* VEG & SIDES */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold border-l-4 border-red-600 pl-4 mb-8">
              VEG & SIDES
            </h3>

            <div className="card-dark p-6 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-xl uppercase italic">
                  Masala Soya Chaap
                </h4>
                <span className="text-red-500 font-bold">₹219</span>
              </div>
              <p className="text-gray-400 text-sm">
                Belted soya chunks, heavy spice rub, cabbage slaw,
                garlic mayo.
              </p>
            </div>

            <div className="card-dark p-6 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-xl uppercase italic">
                  Gunpowder Fries
                </h4>
                <span className="text-red-500 font-bold">₹149</span>
              </div>
              <p className="text-gray-400 text-sm">
                Triple-fried potatoes dusted with southern spice mix.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
