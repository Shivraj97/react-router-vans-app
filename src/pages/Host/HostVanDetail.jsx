import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

const HostVanDetail = () => {
  const params = useParams();
  const [van, setVan] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/vans/${params?.id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setVan(data?.vans);
      });
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-8 bg-white p-8 md:p-8 rounded-md">
      <Link to=".." relative="path" className="underline mb-8">
        ← Back to all vans
      </Link>
      <div className="p-2 flex gap-4 items-center mt-8">
        <div className="w-20 h-20 md:w-80 md:h-80">
          <img src={van?.imageUrl} className="rounded-md" />
        </div>
        <div className="flex flex-col">
          <div
            className={`link-button px-4 py-0.5 md:py-1.5 w-fit text-white font-semibold ${
              van?.type === "rugged"
                ? "bg-[#115E59]"
                : van?.type === "luxury"
                ? "bg-[#161616] text-white"
                : "text-black"
            }`}
          >
            {van?.type}
          </div>
          <p className="font-semibold text-md md:text-2xl">{van?.name}</p>
          <p className="text-[#4D4D4D] text-sm md:text-xl">
            ${van?.price} <span> /day</span>
          </p>
        </div>
      </div>
      <div className="flex gap-2 my-4">
        <NavLink
          to="."
          end
          className={({ isActive }) =>
            isActive
              ? "text-[#E17654] font-bold underline"
              : "hover:text-orange-400"
          }
        >
          Details
        </NavLink>
        <NavLink
          to="pricing"
          className={({ isActive }) =>
            isActive
              ? "text-[#E17654] font-bold underline"
              : "hover:text-orange-400"
          }
        >
          Pricing
        </NavLink>
        <NavLink
          to="photos"
          className={({ isActive }) =>
            isActive
              ? "text-[#E17654] font-bold underline"
              : "hover:text-orange-400"
          }
        >
          Photos
        </NavLink>
      </div>
      <Outlet context={{ van }} />
    </div>
  );
};

export default HostVanDetail;
