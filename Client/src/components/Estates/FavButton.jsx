import { FaHeart } from "react-icons/fa";
import { addFav } from "../../utils/localStorage";
import { useEffect, useState } from "react";
import { useFavs } from "../../contexts/FavourtieProvide";

const FavButton = ({ id }) => {
  const [allStates, setAllStates] = useState();
  const { favs, setFavs } = useFavs();

  useEffect(() => {
    fetch("/data/estate.json")
      .then((res) => res.json())
      .then((data) => {
        setAllStates(data);
      });
  }, []);

  return (
    <button
      onClick={() => {
        addFav(id);
        const favorite = allStates.filter((state) => state.id === id);
        setFavs([...favs, ...favorite]);
      }}
      className="btn btn-accent flex items-center"
    >
      <FaHeart />
      <span className="">Add to favorites</span>
    </button>
  );
};

export default FavButton;
