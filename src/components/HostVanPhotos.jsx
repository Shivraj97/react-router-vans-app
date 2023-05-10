import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { van } = useOutletContext();
  return (
    <div className="w-20 h-20 md:w-60 md:h-60">
      <img src={van?.imageUrl} className="rounded-md" />
    </div>
  );
};

export default HostVanPhotos;
