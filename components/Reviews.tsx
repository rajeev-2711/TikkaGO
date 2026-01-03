export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-black mb-12 uppercase italic">
          Real Feedback
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-dark p-8 rounded-2xl italic border-none bg-zinc-900">
            <p className="text-lg mb-4">
              "The Butter Chicken taco is a religious experience.
              The shell is perfectly toasted and the gravy is legit."
            </p>
            <div className="flex text-red-600 font-bold space-x-1">★★★★★</div>
            <div className="mt-4 text-sm font-bold">
              — Rahul M., Google Reviews
            </div>
          </div>

          <div className="card-dark p-8 rounded-2xl italic border-none bg-zinc-900">
            <p className="text-lg mb-4">
              "Finally, a fusion place that doesn't feel forced.
              The Achari Paneer has a serious kick. Highly recommend."
            </p>
            <div className="flex text-red-600 font-bold space-x-1">★★★★★</div>
            <div className="mt-4 text-sm font-bold">
              — Sarah J., Local Foodie
            </div>
          </div>

          <div className="card-dark p-8 rounded-2xl italic border-none bg-zinc-900">
            <p className="text-lg mb-4">
              "Super fast delivery and the packaging keeps the tacos
              from getting soggy. 10/10."
            </p>
            <div className="flex text-red-600 font-bold space-x-1">★★★★☆</div>
            <div className="mt-4 text-sm font-bold">
              — Aman V., Swiggy User
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
    