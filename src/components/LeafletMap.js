import React from 'react';
import { Box } from '@chakra-ui/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { MdLocationOn } from 'react-icons/md';
import ReactDOMServer from 'react-dom/server';
import 'leaflet/dist/leaflet.css';

// Converte o ícone SVG em uma string HTML
const iconHtml = ReactDOMServer.renderToString(<MdLocationOn style={{ fontSize: '32px', color: 'red' }} />);

const customIcon = L.divIcon({
  html: iconHtml,
  className: '',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const center = [-23.666875977271012, -46.52504086923079];

const LeafletMap = () => {
  return (
    <Box w="100%" h={{ base: '300px', md: '400px' }} display="flex" justifyContent="center" alignItems="center">
      <MapContainer center={center} zoom={13} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center} icon={customIcon}>
          <Popup>
            Avenida João Ramalho,609 <br /> Vila Assunção, Santo André - SP <br/> CEP: 09030-320
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default LeafletMap;
