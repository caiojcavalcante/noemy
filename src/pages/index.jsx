import Head from "next/head";

import Banner from "@/components/Banner";
import Countdown from "@/components/Countdown.jsx";
import About from "@/components/About";
import Benefits from "@/components/Benefits";

export default function Home() {
  return (
    <>
      <Head>
        <title>Os segredos de um atendimento inesquecível</title>
        <meta
          name="title"
          content="Os segredos de um atendimento inesquecível"
        />
      </Head>
      <Countdown />
      <Banner />
      <Benefits />
      <About />
    </>
  );
}
