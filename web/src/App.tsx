import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/GlobalStyle';

import 'leaflet/dist/leaflet.css';

const App: React.FC = () => (
  <>
    <Routes />
    <GlobalStyle />
  </>
);

export default App;
