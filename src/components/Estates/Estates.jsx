import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import FavButton from "./FavButton";
import { getFav } from "../../utils/localStorage";
import RemoveFav from "./RemoveFav";

const Estates = () => {
  const [estates, setEstates] = useState([]);
  const [favIds, setFavIds] = useState([]);

  useEffect(() => {
    fetch("/data/estate.json")
      .then((res) => res.json())
      .then((data) => setEstates(data))
      .catch((err) => {
        toast.error(err.message);
      });
    setFavIds(estates.filter((e) => getFav().includes(e.id)));
  }, [getFav()]);
  return (
    <div className="m-1 p-1 my-10">
      <h2 className="text-4xl mb-5 text-center font-bold">Land Estates</h2>
      {/* Estate container  */}
      <div className="flex flex-wrap justify-evenly items-center gap-5 m-1 p-1 my-10">
        {estates.length &&
          estates.map((estate) => (
            <div
              className="max-w-96 card bg-base-100 shadow-xl"
              key={estate.id}
            >
              <figure>
                <img
                  className="w-full h-48 object-cover"
                  src={estate.image}
                  alt={estate.estate_title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {estate.estate_title}
                  <div className="badge badge-secondary">{estate.status}</div>
                </h2>
                <p className="flex items-center gap-1">
                  <FaLocationDot />
                  {estate.location.address}
                </p>
                <div className="card-actions justify-start">
                  <div className="badge badge-outline">$ {estate.price}</div>
                  <div className="badge badge-outline">
                    {estate.segment_name}
                  </div>
                  <div className="badge badge-outline">{estate.Area}</div>
                </div>
                <div className="card-actions justify-end space-x-2">
                  {favIds.find((e) => e.id === estate.id) ? (
                    <RemoveFav id={estate.id} />
                  ) : (
                    <FavButton id={estate.id} />
                  )}
                  <Link
                    to={`/property/${estate.id}`}
                    className="btn btn-success"
                  >
                    View Property
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Estates;
