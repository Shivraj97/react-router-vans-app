import { useOutletContext } from "react-router-dom";

export const HostVanPricing = () => {
  const { van } = useOutletContext();
  return (
    <p className="flex items-baseline">
      <strong className="text-2xl">$ {van?.price.toFixed(2)} </strong>{" "}
      <span className="text-[#4D4D4D]">/day</span>
    </p>
  );
};
