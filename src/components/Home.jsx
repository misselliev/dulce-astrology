const Home = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo-500">
            Dulce Astrology
            <br className="hidden lg:inline-block" />
            <p className="text-xs italic text-indigo-500">Written in the stars</p>
          </h1>
          <p className="mb-8 leading-relaxed text-indigo-300">
            Welcome to <span className="italic">Unleash the Stars: Astrology&apos;s Best Friend!</span> Join us on an
            extraordinary cosmic journey guided by a tiny but mighty celestial explorer, our resident Chihuahua
            astrologer, Madame Dulce.
            <br />
            Discover the enchanting world of astrology through the unique perspective of a four-legged friend, as we
            delve into the mysteries of the zodiac and explore the interconnected web of the universe.
            <br />
            Get ready for an astrology experience like no other, where the wisdom of the stars meets the charm of our
            pint-sized pundit. It&apos;s time to let the celestial paws lead the way to your destiny!
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-indigo-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="https://hips.hearstapps.com/hmg-prod/images/dog-astrology-1641470968.jpg?resize=1200:*"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
