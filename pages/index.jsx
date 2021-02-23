import Head from 'next/head';
import { Cover } from 'components';
import { Menu } from 'layouts';

export default function Home() {
  return (
    <>
      <Head>
        <title>Desafio Wiser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cover />
      <Menu />
    </>
  );
}
