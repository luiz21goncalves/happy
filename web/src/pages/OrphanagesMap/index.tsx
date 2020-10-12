import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';

import mapMarkerImg from '../../images/map-marker.svg';

import 'leaflet/dist/leaflet.css';

import { Container, Sidebar } from './styles';

const OrphanagesMap: React.FC = () => (
  <Container>
    <Sidebar>
      <header>
        <img src={mapMarkerImg} alt="Happy" />

        <h2>Escolha um orfanato no mapa</h2>
        <p>Muitas crianças estão esperando a sua visita:)</p>
      </header>

      <footer>
        <strong>Ipatinga</strong>
        <span>Minas Gerais</span>
      </footer>
    </Sidebar>

    <Map
      center={[-19.4707569, -42.548012]}
      zoom={15}
      style={{ width: '100%', height: '100%', zIndex: 5 }}
    >
      {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
      />
    </Map>

    <Link to="/">
      <FiPlus size={32} color="#fff" />
    </Link>
  </Container>
);

export default OrphanagesMap;
