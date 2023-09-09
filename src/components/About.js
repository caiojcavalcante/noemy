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
      <Image src="/noemy.jpeg" alt="noemy" height={400} width={300}
        sizes="(max-width: 1000px) 300px, 1022px"
      />
      <Box>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Nullam euismod, nisl eget aliquam ultricies, ipsum sapien
          ultricies nunc, euismod aliquet nunc diam vitae urna. Nulla facilisi.
          Nullam euismod, nisl eget aliquam ultricies, ipsum sapien ultricies
          nunc, euismod aliquet nunc diam vitae urna.
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
  margin: auto 0;
  @media (max-width: 1000px) {

  }
`;

const TextWrapper = styled.div`
  @media (max-width: 1000px) {
    text-align: center;
  }
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  p {
    font-size: 1.5rem;
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 50px;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
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
  }
`;
