import Calendar from "@/components/icons/Calendar";
import Cheap from "@/components/icons/Cheap";
import Online from "@/components/icons/Online";
import Head from "next/head";
import styled from "styled-components";

export default function Home() {
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
          <p>18/09 a 24/09</p>
          <Cheap />
          <p>Evento gratuito</p>
          <Online />
          <p>100% online</p>
        </Box>
        <h2>Falta apenas um passo para concluir sua inscrição</h2>
        <Box>
          <div>
            <h3>Entre para o grupo do whatsapp oficial do evento</h3>
            <p>
              Será por lá que vamos te mandar os materiais de apoio das aulas e
              fazer nossas comunicações oficiais.
            </p>
            <Button>
              ENTRAR PARA O CANAL
              <img src="/whatsapp.png" />
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
  background-color: #f2f2f2;
  h1,
  h2,
  h3,
  p {
    margin: 0;
    padding: 0;
  }
  h1 {
    font-size: 3rem;
    @media (max-width: 600px) {
      font-size: 2.3rem;
    }
    b {
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
  border: .1px solid #0004;
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
  padding: 17px;
  border-radius: 2rem;
  border: none;
  font-size: 1.4rem;
  font-weight: bolder;

  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 10px;
  }
  img {
    height: 40px;
  }
  box-shadow: 0px 0px 10px 0px #0004;
`;
