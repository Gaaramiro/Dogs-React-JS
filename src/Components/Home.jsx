import React from 'react';
import Feed from '../Feed/Feed';
import Loading from './Helper/Loading';
import Head from './Helper/Head';

function Home() {
  return (
    <section>
      <Head title="Fotos" />
      <Feed />
    </section>
  );
}

export default Home;
