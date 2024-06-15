import { createContext, useContext, useState, useEffect } from "react";
import { getFav } from "../utils/localStorage";

const FavContext = createContext({
  favs: [],
  setFavs: () => {},
});

export const FavProvider = ({ children }) => {
  const [favs, setFavs] = useState([]);
  useEffect(() => {
    fetch("/data/estate.json")
      .then((res) => res.json())
      .then((data) => {
        setFavs(data.filter((d) => getFav().includes(d.id)));
      })
      .catch((err) => toast.error(err.message));
  }, []);

  return (
    <FavContext.Provider value={{ favs, setFavs }}>
      {children}
    </FavContext.Provider>
  );
};

export const useFavs = () => {
  return useContext(FavContext);
};
