import React from 'react';
import { AspectRatio } from '@chakra-ui/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const BarberMap = () => {
  const position = [40.410383, -3.706679]; // Latitud y longitud de la ubicación de la barbería
  const direccion = "Calle de Embajadores, 10, Madrid";
  return (
    <AspectRatio ratio={16 / 9}>
      <MapContainer center={position} zoom={100} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            {direccion}
          </Popup>
        </Marker>
      </MapContainer>
    </AspectRatio>
  );
};

export default BarberMap;

