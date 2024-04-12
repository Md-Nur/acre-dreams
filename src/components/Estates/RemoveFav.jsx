import { MdDelete } from "react-icons/md";
import { rmFav } from "../../utils/localStorage";

const RemoveFav = ({id}) => {
  return (
    <button
      onClick={() => rmFav(id)}
      className="btn btn-error flex items-center"
    >
      <MdDelete />
      <span className="">Remove favorites</span>
    </button>
  );
};

export default RemoveFav;
