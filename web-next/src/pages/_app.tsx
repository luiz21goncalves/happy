import GlobaStyle from '../../styles/GlobaStyle';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobaStyle />
      <Component {...pageProps} />
    </>
  );
}
