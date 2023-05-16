import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

function GoToSite({ cords }) {
  const map = useMap();
  map.flyTo(cords, 15, {
    animate: true,
    duration: 1.5,
  });
}

export const MapContent = ({ position }) => {
  return (
    <div className="map-container">
      <MapContainer center={[position.latitude, position.longitude]} zoom={15}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[position.latitude, position.longitude]}>
          <Popup maxWidth="500">
            this ip {position.ip} is in: <br /> {position.region}
          </Popup>
        </Marker>
        <GoToSite cords={[position.latitude, position.longitude]} />
      </MapContainer>
    </div>
  );
};
