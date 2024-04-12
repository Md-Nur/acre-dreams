import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import Map from "../components/Map/Map";
import { FaLocationDot } from "react-icons/fa6";
import { FaChartArea } from "react-icons/fa";
import { PiLineSegmentsBold } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import FavButton from "../components/Estates/FavButton";
import { getFav } from "../utils/localStorage";
import RemoveFav from "../components/Estates/RemoveFav";
import { Helmet } from "react-helmet";

const Property = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    fetch(`/data/e${id}.json`)
      .then((res) => res.json())
      .then((data) => setProperty(data))
      .catch((err) => toast.error(err.message));
    if (getFav().find((i) => i === parseInt(id))) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [getFav()]);

  if (!property) {
    return <span className="loading loading-ball loading-lg"></span>;
  }
  return (
    <section className="w-full">
      <Helmet>
        <title>{`${property?.estate_title} -- Acre Dreams`}</title>
      </Helmet>
      <figure className="bg-cover">
        <img
          src={property?.image}
          alt={property?.estate_title}
          className="w-full h-[60vh] md:h-[80vh] object-cover"
        />
      </figure>

      <div className="flex justify-between items-center m-3 p-3 max-w-7xl mx-auto my-20">
        <div>
          <h1 className="text-3xl md:text-3xl font-bold">
            {property?.estate_title}
          </h1>
          <p>Property id: {property.id}</p>
        </div>
        <div className="text-right">
          <h2 className="text-xl">For {property.status}</h2>
          <h2 className="text-2xl text-green-500 font-bold">
            ${property.price}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-7xl mx-auto mb-20">
        <div className="md:col-span-2 space-y-10 m-2 p-2">
          <div className="card bg-base-200 shadow-xl w-full p-3 m-1">
            <h3 className="text-center text-xl font-bold my-5">Location: </h3>
            <Map
              latt={parseFloat(property?.latitude)}
              long={parseFloat(property?.longitude)}
              location={property?.location.address}
              className="rounded-xl"
            />
          </div>
          <div className="card bg-base-200 shadow-xl w-full pb-5 m-1">
            <h3 className="text-center text-xl font-bold my-5">Description:</h3>
            <p className="px-5">{property.description}</p>
          </div>
        </div>
        <div className="m-2 p-2 space-y-10">
          <div className="card bg-base-200 shadow-xl w-full p-5 m-1">
            <h3 className="text-center text-xl font-bold my-5">Details:</h3>
            <p className="text-gray-500 mt-3 md:text-lg flex items-center gap-2">
              <FaLocationDot /> location:
            </p>
            <p className="mb-3">{property?.location.address}</p>
            <p className="text-gray-500 my-3 md:text-lg flex items-center gap-2">
              <FaChartArea /> Area:&nbsp;
              {property?.Area}
            </p>
            <p className="text-gray-500 my-3 md:text-lg flex items-center gap-2">
              <PiLineSegmentsBold />
              Segment:&nbsp;
              {property?.segment_name}
            </p>
          </div>
          <div className="card bg-base-200 shadow-xl w-full p-5 m-1">
            <h3 className="text-center text-xl font-bold my-5">Facilities:</h3>
            <ul>
              {property?.facilities.map((fac, i) => (
                <li
                  className="text-gray-500 my-3 md:text-lg flex items-center gap-2"
                  key={i}
                >
                  <FaCheckCircle className="text-green-500" />
                  {fac}
                </li>
              ))}
            </ul>
          </div>
          <div className="card bg-base-200 shadow-xl w-full p-5 m-1">
            {isFav ? (
              <>
                <h3 className="text-center text-xl font-bold my-5">
                  Don't you like this property?
                </h3>
                <RemoveFav id={property.id} />
              </>
            ) : (
              <>
                <h3 className="text-center text-xl font-bold my-5">
                  Do you like this property?
                </h3>
                <FavButton id={property.id} />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Property;
