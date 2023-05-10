import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const VanDetail = () => {
  const params = useParams();
  const [van, setVan] = useState();

  useEffect(() => {
    fetch(`/api/vans/${params?.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data?.vans));
  }, [params.id]);

  return (
    <>
      {van ? (
        <div className="px-8 md:px-20">
          <Link to="/vans" className="underline mb-8">
            ← Back to all vans
          </Link>
          <img
            src={van?.imageUrl}
            alt={van?.name}
            className="rounded-md my-6 w-full"
          />
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
          <h1 className="my-4 text-2xl font-bold">{van?.name}</h1>
          <div className="mb-3">
            <span className="text-2xl font-bold">
              {van?.price?.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
            <span>/ day</span>
          </div>
          <p>{van?.description}</p>
          <button className="link-button text-white my-4">Rent this van</button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default VanDetail;
