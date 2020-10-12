import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

import { Container, Wrapper, Location } from '../../styles/pages/Lading';

export default function Landing() {
  return (
    <Container>
      <Wrapper>
        <img src="/images/logo.svg" alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>Ipatinga</strong>
          <span>Minas Gerais</span>
        </Location>

        <Link href="/app">
          <a>
            <FiArrowRight size={24} color="rgba(0, 0, 0, 0.6)" />
          </a>
        </Link>
      </Wrapper>
    </Container>
  );
}
