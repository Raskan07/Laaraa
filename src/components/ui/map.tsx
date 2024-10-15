// components/.js
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

const CustomMap = ({lat,lan}:any) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyALeWJ7fL9Cu7DCm9mxmMJcIVGELjohwBc", // Load the API key from environment variables
  });

  const center = useMemo(() => ({ lat:lat, lng:lan}), []); // Set default map center (San Francisco)

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={12}
      center={center}
      mapContainerStyle={{ width: "100%", height: "225px" }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default CustomMap ;
