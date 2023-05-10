import aboutBg from "../assets/images/about-background.svg";

const About = () => {
  return (
    <div>
      <img src={aboutBg} className="w-full" />
      <div className="px-6 mt-4">
        <h1 className="text-2xl font-semibold mb-6">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="mb-4">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="m-6 p-8 rounded-md bg-[#FFCC8D] flex flex-col gap-2">
        <p className="text-lg font-semibold">
          Your destination is waiting. Your van is ready.
        </p>
        <button className="bg-[#000] text-white px-2 py-2 rounded-md w-fit">
          Explore our vans
        </button>
      </div>
    </div>
  );
};

export default About;
