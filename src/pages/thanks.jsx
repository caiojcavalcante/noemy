import Calendar from "@/components/icons/Calendar";
import Cheap from "@/components/icons/Cheap";
import Online from "@/components/icons/Online";
import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const Router = useRouter();

  const link = "https://chat.whatsapp.com/FTKEMUyxN1uJlA6UCnonlH";

  const HandleClick = () => {
    Router.push(link);
  };
  return (
    <>
      <Head>
        <title>Obrigado por participar!</title>
      </Head>
      <Section>
        <h1>
          OS SEGREDOS DE UM <br /> <b>ATENDIMENTO INESQUECÍVEL</b>
        </h1>
        <Box>
          <Calendar />
          <p>23 de Outubro</p>
          <Cheap />
          <p>Evento gratuito</p>
          <Online />
          <p>100% online</p>
        </Box>
        <h2>Falta apenas um passo para concluir sua inscrição</h2>
        <Box>
          <div>
            <h3>Entre para o grupo do whatsapp oficial do evento</h3>
            <p>Será por lá que vamos fazer nossas comunicações oficiais</p>
            <Button onClick={() => HandleClick()}>
              ENTRAR PARA O CANAL
              <Image
                src="/whatsapp.png"
                alt="whatsapp"
                width={1030 / 20}
                height={1024 / 20}
                quality={100}
                sizes="100px"
              />
            </Button>
          </div>
        </Box>
      </Section>
    </>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  min-height: 100vh;
  padding: 50px 10px;
  text-align: center;
  background: radial-gradient(
      circle at 48.75% 32.08%,
      #ffffff,
      transparent 120%
    ),
    radial-gradient(circle at 97.97% 96.02%, #edc26d, transparent 100%),
    radial-gradient(circle at 10.09% 24.2%, #f0f0af, transparent 100%),
    radial-gradient(circle at 50% 50%, #000000, #000000 100%);
  h1,
  h2,
  h3,
  p {
    margin: 0;
    padding: 0;
  }
  h1 {
    text-shadow: -1px 3px 10px rgba(255, 255, 255, 255);
    font-size: 3rem;
    font-weight: 400;
    @media (max-width: 600px) {
      font-size: 2.3rem;
    }
    b {
      font-weight: 400;
      color: #dfa000;
    }
  }
  h2 {
    font-size: 1.8rem;
    @media (max-width: 600px) {
      font-size: 1.4rem;
    }
  }
  h3 {
    font-size: 1.4rem;
    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
  p {
    font-size: 1rem;
    font-weight: 500;
    @media (max-width: 600px) {
      font-size: 0.8rem;
    }
  }
  box-sizing: border-box;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 20px;
  border-radius: 1.5rem;
  max-width: 600px;
  gap: 5px;
  div {
    padding: 30px;
    @media (max-width: 600px) {
      padding: 10px 0;
    }
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  background-color: #fff;
  border: 0.1px solid #0004;
  svg {
    height: 30px;
    color: #444;
  }
  p + svg {
    margin-left: 10px;
  }
  p {
    color: #444;
  }
`;

const Button = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: #fff;
  background: linear-gradient(
    30deg,
    rgba(79, 200, 74, 1) 0%,
    rgba(63, 190, 216, 1) 130%
  );
  &:hover {
    cursor: pointer;
    filter: brightness(1.1);
  }
  padding: 12px;
  border-radius: 2rem;
  border: none;
  /* border: 1px solid #afb; */
  border: 0.1px solid #0004;
  font-size: 1.4rem;
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 10px;
  }
  box-shadow: 0px 0px 10px 0px #0004;
`;
