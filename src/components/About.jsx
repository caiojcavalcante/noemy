import styled from "styled-components";
import Image from "next/image";

export default function About() {
  return (
    <Section>
      <TextWrapper>
        <p>QUEM É</p>
        <h1>
          NOEMY
          <br />
          CHEN?
        </h1>
      </TextWrapper>
      <Image
        src="/noemy.jpeg"
        alt="noemy"
        height={400}
        width={300}
        sizes="(max-width: 1000px) 300px, 1022px"
      />
      <Box>
        <p>
          Oie, me chamo Noemy Chen, e minha paixão é o atendimento ao cliente e
          eu acredito, com toda minha experiência profissional, que a chave
          secreta para aumentar a receita está em encantar e satisfazer todos os
          nossos clientes! Cadastre seu e-mail acima e vamos juntos criar
          experiências memoráveis para fidelizar e crescer.
        </p>
      </Box>
    </Section>
  );
}

const Box = styled.div`
  background-color: rgb(197, 124, 7);
  border-radius: 20px;
  color: #faf6f7;
  padding: 10px;
  height: fit-content;
  width: 30%;
  @media (max-width: 1000px) {
    width: 90%;
  }
`;

const TextWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  @media (max-width: 1000px) {
    width: 90%;
    @media (max-width: 1000px) {
      text-align: center;
    }
  }
  p {
    font-size: 1.5rem;
    @media (max-width: 1000px) {
      font-size: 2rem;
    }
  }
  h1 {
    font-size: 5rem;
    @media (max-width: 1000px) {
      font-size: 3rem;
    }
  }
  h1,
  p {
    padding: 0;
    margin: 0;
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
  padding: 0 150px;
  height: 50vh;
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    gap: 0;
    height: fit-content;
  }
  background-color: #dedede;
  img {
    aspect-ratio: 1022 / 1280;
    height: 100%;
    width: auto;
    mix-blend-mode: darken;
    @media (max-width: 1000px) {
      width: 100%;
      max-width: 300px;
      margin: 0 auto;
      height: auto;
    }
    //saturate image
    filter: saturate(1.5);
  }
`;
