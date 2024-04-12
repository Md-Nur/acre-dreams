import { useEffect, useState } from "react";
import { getFav } from "../utils/localStorage";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaLocationDot } from "react-icons/fa6";
import RemoveFav from "../components/Estates/RemoveFav";
import { Helmet } from "react-helmet";

const Favourite = () => {
  const [fav, setFav] = useState();
  useEffect(() => {
    fetch("/data/estate.json")
      .then((res) => res.json())
      .then((data) => {
        setFav(data.filter((d) => getFav().includes(d.id)));
      })
      .catch((err) => toast.error(err.message));
  }, [getFav()]);
  if (!fav) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  if (!fav.length) {
    return (
      <h3 className="text-xl font-semibold text-center">
        You don't have any favourite item
      </h3>
    );
  }
  const handleSort = (sortField) => {
    if (sortField === "Area") {
      setFav(
        [...fav].sort(
          (a, b) => parseInt(a.Area.split(" ")) - parseInt(b.Area.split(" "))
        )
      );
    } else if (sortField === "price") {
      setFav([...fav].sort((a, b) => parseInt(a.price) - parseInt(b.price)));
    }
  };
  return (
    <section className="w-full">
      <Helmet>
        <title>{`Favourite properties || Acre Dreams`}</title>
      </Helmet>
      <h2 className="text-3xl font-bold my-10 text-center">
        Your Favourites Properties
      </h2>
      <select
        className="select select-primary w-40 block mx-auto"
        onClick={(e) => handleSort(e.target.value)}
      >
        <option disabled selected>
          Sort Properties
        </option>
        <option value="Area">Area</option>
        <option value="price">Price</option>
      </select>
      <div className="m-1 p-1 md:m-3 md:p-3 lg:m-5 lg:p-5">
        {fav.map((f) => (
          <div
            className="card md:card-side bg-base-100 shadow-xl m-5"
            key={f.id}
          >
            <figure>
              <img
                src={f.image}
                alt={f.estate_title}
                className="object-cover w-full md:w-96 h-56"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{f.estate_title}</h2>
              <p className="flex items-center gap-1">
                <FaLocationDot />
                {f.location.address}
              </p>
              <div className="card-actions justify-start">
                <div className="badge badge-outline">$ {f.price}</div>
                <div className="badge badge-outline">{f.segment_name}</div>
                <div className="badge badge-outline">{f.Area}</div>
              </div>
              <div className="card-actions justify-end space-x-2">
                <RemoveFav id={f.id} />
                <Link to={`/property/${f.id}`} className="btn btn-success">
                  View Property
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Favourite;
