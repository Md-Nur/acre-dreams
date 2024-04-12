import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ latt, long, location, className }) => {
  return (
    <MapContainer
      center={[latt, long]}
      zoom={10}
      scrollWheelZoom={false}
      className={className}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latt, long]}>
        <Popup>{location}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
