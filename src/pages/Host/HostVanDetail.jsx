import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HostVanDetail = () => {
  const params = useParams();
  const [van, setVan] = useState();

  useEffect(() => {
    fetch(`/api/vans/${params?.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data?.vans));
  }, [params.id]);

  console.log(van);
  return <div>Host VanDetail</div>;
};

export default HostVanDetail;
