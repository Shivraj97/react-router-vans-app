import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [vans, setVans] = useState();

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setVans(data.vans);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error && !loading) {
    return <div>Oops! Something went wrong</div>;
  }

  const vansElements = vans?.map((van) => {
    return (
      <Link key={van?.id} to={`/host/vans/${van?.id}`}>
        <div className="p-2 bg-white flex gap-4 items-center">
          <div className="w-20 h-20 md:w-80 md:h-80">
            <img src={van?.imageUrl} className="rounded-md" />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-md md:text-2xl">{van?.name}</p>
            <p className="text-[#4D4D4D] text-sm md:text-xl">
              ${van?.price} <span> /day</span>
            </p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="my-8">
      <h1 className="my-4 text-3xl font-bold">Your listed vans</h1>
      <div className="flex flex-col gap-4 mb-4">
        {vans?.length ? vansElements : <div>No Vans</div>}
      </div>
    </div>
  );
};

export default HostVans;
