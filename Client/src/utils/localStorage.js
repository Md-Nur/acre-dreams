import { toast } from "react-hot-toast";
const getFav = () => {
  let favs = localStorage.getItem("favs");
  if (favs) {
    favs = JSON.parse(favs);
  } else {
    favs = [];
  }
  return favs;
};
const addFav = (id) => {
  let favs = getFav();
  favs.push(id);
  localStorage.setItem("favs", JSON.stringify(favs));
  toast.success("Added to favorites");
};

const rmFav = (id) => {
  let favs = getFav();
  favs = favs.filter((item) => item !== id);
  localStorage.setItem("favs", JSON.stringify(favs));
  toast.success("Removed from favorites");
};

export { getFav, addFav, rmFav };
