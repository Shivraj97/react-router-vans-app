import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);
  const [vansType, setVansType] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        const uniqueVansType = [
          ...new Set(data?.vans?.map((item) => item.type)),
        ];
        setVans(data.vans);
        setVansType(uniqueVansType);
      });
  }, []);

  const vansElements = vans?.map((van) => (
    <div key={van.id} className="flex flex-col">
      <Link to={van?.id}>
        <img src={van?.imageUrl} alt={van?.name} className="rounded-md" />
        <div className="flex justify-between my-2">
          <p className="text-md font-semibold">{van?.name}</p>
          <div className="flex flex-col md:flex-row md:items-center">
            <p className="text-lg font-semibold">
              {van?.price?.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
            <span className="ml-1">/day</span>
          </div>
        </div>
        <button
          className={`link-button px-4 py-1.5 w-fit text-white font-semibold ${
            van?.type === "rugged"
              ? "bg-[#115E59]"
              : van?.type === "luxury"
              ? "bg-[#161616]"
              : ""
          }`}
        >
          {van?.type?.charAt(0).toUpperCase() + van?.type?.slice(1)}
        </button>
      </Link>
    </div>
  ));

  return (
    <div className="px-8 md:px-20">
      <div className="text-3xl mb-6 font-bold">Explore our van options</div>
      <div className="flex justify-between mb-8 items-center">
        <div className="flex flex-wrap flex-1 gap-2">
          {vansType?.map((van) => (
            <div
              key={van}
              className="bg-[#FFEAD0] rounded-md px-4 py-1 hover:cursor-pointer hover:underline"
            >
              {van?.charAt(0).toUpperCase() + van?.slice(1)}
            </div>
          ))}
        </div>
        <div className="underline">Clear filters</div>
      </div>
      <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 gap-8 mb-8 md:mb-20">
        {vansElements}
      </div>
    </div>
  );
};

export default Vans;
