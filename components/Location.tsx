export default function Location() {
  return (
    <section
      id="location"
      
      className="py-24 px-6 bg-black border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-black uppercase mb-8 leading-none">
            Find Us <br />
            <span className="text-red-600">In The City.</span>
          </h2>

          <div className="space-y-6">
            <div>
              <h4 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-1">
                Address
              </h4>
              <p className="text-xl">
                Shop NO.10, TCS Gitanjali Park
                <br />
                 New Town, Kolkata - 700156
              </p>
            </div>

            <div>
              <h4 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-1">
                Hours
              </h4>
              <p className="text-xl text-gray-400">
                Daily: 12:00 PM – 11:30 PM
              </p>
            </div>

            <a
              href="https://www.google.com/maps/place/TikkaGO/@22.5817579,88.487541,20z/data=!4m6!3m5!1s0x3a020b76adc98a33:0xef9a286403efe14f!8m2!3d22.5816335!4d88.487446!16s%2Fg%2F11x_36bhv0!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="inline-block bg-white text-black font-black px-8 py-3 rounded hover:bg-red-600 hover:text-white transition uppercase"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="h-96 bg-zinc-800 rounded-2xl overflow-hidden  contrast-125">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.106913318645!2d88.486446!3d22.5816335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a020b76adc98a33%3A0xef9a286403efe14f!2sTikkaGO!5e0!3m2!1sen!2sin!4v1736250000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
