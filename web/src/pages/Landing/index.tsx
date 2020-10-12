import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../../images/logo.svg';

import { Container, Wrapper, Location } from './styles';

const Landing: React.FC = () => (
  <Container>
    <Wrapper>
      <img src={logoImg} alt="Happy" />

      <main>
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
      </main>

      <Location>
        <strong>Ipatinga</strong>
        <span>Minas Gerais</span>
      </Location>

      <Link to="/app">
        <FiArrowRight size={24} color="rgba(0, 0, 0, 0.6)" />
      </Link>
    </Wrapper>
  </Container>
);

export default Landing;
