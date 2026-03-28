function Hero() {
  return (
    <>
      <section className="flex w-full justify-center items-center h-75">
        <div className="text-center flex flex-col items-center">
          <div className="text-6xl font-bold italic pb-5">
            Find the best ✈️ flights faster
          </div>
          <div className="text-3xl italic pb-10 text-gray-500">
            Travel Smarter
          </div>
        </div>
      </section>
      <section>
        <div className="flex gap-10 justify-center ">
          <div>Round trip</div>
          <div>Passangers</div>
        </div>
      </section>
      <section className="flex gap-5">
        <div className="bg-white px-4 py-2 rounded-xl shadow-sm">
          <div className="text-xs text-gray-400">From</div>
          <div className="outline-none text-sm font-medium">Warsaw, poland</div>
        </div>
        <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
          🔄️
        </div>
        <div>
          <div className="text-xs text-gray-400">To</div>
          <div className="outline-none text-sm font-medium">Bangkok, Thailand</div>
        </div>
        <button className="bg-black text-white px-6 py-2 rounded-xl">
          Search
        </button>
      </section>
    </>
  );
}
export default Hero;
