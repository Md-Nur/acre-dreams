import { MdDelete } from "react-icons/md";
import { rmFav } from "../../utils/localStorage";
import { useEffect, useState } from "react";
import { useFavs } from "../../contexts/FavourtieProvide";

const RemoveFav = ({ id }) => {
  const [allStates, setAllStates] = useState();
  const { favs, setFavs } = useFavs();
  useEffect(() => {
    fetch("/data/estate.json")
      .then((res) => res.json())
      .then((data) => {
        setAllStates(data);
      });
  });
  return (
    <button
      onClick={() => {
        rmFav(id);
        setFavs(favs.filter((f) => f.id !== id));
      }}
      className="btn btn-error flex items-center"
    >
      <MdDelete />
      <span className="">Remove favorites</span>
    </button>
  );
};

export default RemoveFav;
