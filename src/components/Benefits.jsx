import styled from "styled-components";
import Image from "next/image";

export default function Benefits() {
  return (
    <Section>
      <Column>
        <div>
          <h1>
            O evento que vai mudar de vez a visão do seu cliente sobre você
          </h1>
          <p>
            Aprenda com a especialista Noemy Chen como transformar clientes em
            verdadeiros fãs da sua marca.
          </p>
        </div>
        <Image src="/benefits.svg" alt="benefits" width={300} height={300} />
      </Column>
      <Column>
        <ul>
          <li>
            <h2>Conquiste Lealdade Duradoura</h2>
            <p>
              Ganhe a confiança e devoção dos seus clientes, transformando-os em
              verdadeiros fãs da sua marca.
            </p>
          </li>
          <li>
            <h2>Amplie sua Reputação de Marca</h2>
            <p>
              Aprenda estratégias com a especialista Noemy Chen para elevar a
              percepção da sua marca, consolidando uma reputação positiva no
              mercado.
            </p>
          </li>
          <li>
            <h2>Impulsione o Crescimento do Negócio</h2>
            <p>
              Descubra práticas eficazes para aumentar a satisfação dos
              clientes, gerando impacto positivo nos resultados e no crescimento
              sustentável da sua empresa.
            </p>
          </li>
        </ul>
      </Column>
    </Section>
  );
}

const Section = styled.section`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 20px;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      text-align: center;
    }
  }
  gap: 2rem;
  padding: 50px calc((100vw - 1500px) / 2);
  h1 {
    font-family: var(--montserrat);
    font-size: 3.4rem;
    @media (max-width: 1000px) {
        font-size: 2.2rem;
    }
    margin: 0;
}
h2 {
    font-size: 2.5rem;
    margin: 0;
}
p {
    font-size: 1.3rem;
    @media (max-width: 1000px) {
        font-size: 1rem;
    }
    font-weight: 500;
    margin: 0;
  }
  background-color: #fff;
`;
const Column = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;
  ul {
    padding-inline-start: 0;

    li + li {
      margin-top: 2rem;
      border-top: 3px solid #000;
    }
    li {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 0.5rem 0;
    }
  }
`;
