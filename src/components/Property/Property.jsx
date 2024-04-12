import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import Map from "../Map/Map";
import { FaLocationDot } from "react-icons/fa6";
import { FaChartArea } from "react-icons/fa";
import { PiLineSegmentsBold } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";

const Property = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  useEffect(() => {
    fetch(`/data/e${id}.json`)
      .then((res) => res.json())
      .then((data) => setProperty(data))
      .catch((err) => toast.error(err.message));
  }, []);

  if (!property) {
    return <span className="loading loading-ball loading-lg"></span>;
  }
  return (
    <section className="w-full">
      <figure className="bg-cover">
        <img
          src={property?.image}
          alt={property?.title}
          className="w-full h-[60vh] md:h-[80vh] object-cover"
        />
        <figcaption className="text-center text-gray-500 text-xs">
          {property?.title}
        </figcaption>
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
              {property?.facilities.map((fac) => (
                <li className="text-gray-500 my-3 md:text-lg flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  {fac}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Property;
