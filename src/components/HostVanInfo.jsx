import { useOutletContext } from "react-router-dom";

export const HostVanInfo = () => {
  const { van } = useOutletContext();
  return (
    <div className="flex flex-col gap-4 my-4">
      <p>
        <strong>Name</strong>: {van?.name}
      </p>
      <p>
        <strong>Category</strong>: {van?.type}
      </p>
      <p>
        <strong>Description</strong>: {van?.description}
      </p>
      <p>
        <strong>Visibility</strong>: {van?.name}
      </p>
    </div>
  );
};
