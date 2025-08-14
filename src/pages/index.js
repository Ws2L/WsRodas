import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Topo from "@/components/Topo";
import Capa from "@/components/Capa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ws Garage</title>
        <meta name="description" content="A melhor loja de rodas do litoral" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.svg" />
      </Head>
        <Topo/>
        <section>
          <Capa/>
        </section>
    </>
  );
}
