const Home = () => {
  return (
    <div className="relative mx-auto">
      <div className="w-full bg-cover bg-heroBg h-64" alt="Hero"></div>
      <div className="absolute top-0 left-0 px-6 py-4 w-full">
        <h1 className="text-2xl mb-4 font-semibold text-white">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="text-sm mb-14 text-white">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button className="link-button hover:bg-[#FF8C10]">Find your van</button>
      </div>
    </div>
  );
};

export default Home;
