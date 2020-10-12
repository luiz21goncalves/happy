import { FiPlus } from 'react-icons/fi';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Map = dynamic(async () => (await import('react-leaflet')).Map, {
  ssr: false
});

const TileLayer = dynamic(
  async () => (await import('react-leaflet')).TileLayer,
  { ssr: false }
);

import 'leaflet/dist/leaflet.css';

import { Container, Sidebar } from '../../styles/pages/OrphanageMap';
import { GetServerSideProps } from 'next';

interface OrphanagesMapProps {
  mapbox_key: string;
}

export default function OrphanagesMap({ mapbox_key }: OrphanagesMapProps) {
  return (
    <Container>
      <Sidebar>
        <header>
          <img src="/images/map-marker.svg" alt="Happy" />

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
        style={{ width: '100%', height: '100%', zIndex: 5 }}>
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${mapbox_key}`}
        />
      </Map>

      <Link href="/">
        <a>
          <FiPlus size={32} color="#fff" />
        </a>
      </Link>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps<OrphanagesMapProps> = async () => {
  const mapbox_key = process.env.MAPBOX_TOKEN;

  return {
    props: {
      mapbox_key
    }
  };
};
