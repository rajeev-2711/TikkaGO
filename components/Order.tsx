export default function Order() {
  return (
    <section id="order" className="py-24 px-6 bg-red-600 text-center">
      <h2 className="text-5xl font-black mb-4 uppercase">Hungry?</h2>
      <p className="text-xl mb-12">Order online in seconds.</p>

      <div className="flex flex-wrap justify-center gap-6">
        <a className="bg-black px-8 py-4 font-black rounded-xl">ZOMATO</a>
        <a className="bg-orange-500 px-8 py-4 font-black rounded-xl">SWIGGY</a>
        <a className="bg-green-600 px-8 py-4 font-black rounded-xl">WHATSAPP</a>
      </div>
    </section>
  );
}
