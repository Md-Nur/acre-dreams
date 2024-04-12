import { FaHeart } from "react-icons/fa";
import { addFav } from "../../utils/localStorage";

const FavButton = ({ id }) => {
    
  return (
    <button
      onClick={() => addFav(id)}
      className="btn btn-accent flex items-center"
    >
      <FaHeart />
      <span className="">Add to favorites</span>
    </button>
  );
};

export default FavButton;
