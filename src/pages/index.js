import Head from "next/head";

import Banner from "@/components/Banner";
import CountDown from "@/components/CountDown";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Os segredos de um atendimento inesquecível</title>
      </Head>
      <Banner />
      <CountDown />
      <About />
    </>
  );
}
