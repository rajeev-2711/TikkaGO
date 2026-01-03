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
                Shop 4, Urban Square, Street 12
                <br />
                Indiranagar, Bangalore 560038
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
              href="https://maps.google.com"
              target="_blank"
              className="inline-block bg-white text-black font-black px-8 py-3 rounded hover:bg-red-600 hover:text-white transition uppercase"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="h-96 bg-zinc-800 rounded-2xl overflow-hidden grayscale contrast-125">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.922152862041!2d77.6385217!3d12.97675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a3f6507797%3A0xc3919e8c45479008!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000"
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
