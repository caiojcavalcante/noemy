import { styled } from "styled-components";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function Banner() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <Center>
      <Section>
        <Image priority src="/01.png" alt="noemy" width={350} height={400} />
        <form>
          <h1>
            Não perca o <b>evento</b> que vai <b>mudar sua empresa</b> de uma
            vez por todas!
          </h1>
          {/* <input
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /> */}
          <input
            placeholder="Digite seu email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <input
            placeholder="Digite seu número de celular"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          /> */}
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              axios.post("/api/subscription", {
                name,
                email,
                phone,
              });
            }}
          >
            Inscrever-me
          </button>
          {/* <p>
            Prometemos não usar nenhuma informação de contato para enviar
            qualquer tipo de SPAM. Os dados coletados são tratados nos termos da
            Lei Geral de Proteção de Dados e você pode se descadastrar da nossa
            lista a qualquer momento. Para mais informações, acesse nossa{" "}
            <u>Política de Privacidade</u>.
          </p> */}
        </form>
      </Section>
    </Center>
  );
}

const Center = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 30px 5px;
  align-items: center;
  background: radial-gradient(circle at 79% 55.65%, #ffd54a, transparent 61%),
    radial-gradient(circle at 89.99% 8.05%, #ffffff, transparent 67%),
    radial-gradient(circle at 26.4% 24.44%, #ffb536, transparent 61%),
    radial-gradient(circle at 3.98% 89.97%, #fff0db, transparent 67%),
    radial-gradient(circle at 92.97% 91.95%, #ffebb5, transparent 61%),
    radial-gradient(circle at 50% 50%, #ffffff, #ffffff 100%);
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  position: relative;
  img {
    object-fit: cover;
    mix-blend-mode: darken;
  }
  form {
    max-width: 800px;
    /* aspect-ratio: 1; */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px 50px;
    p {
      font-size: 0.6rem;
    }

    h1 {
      padding: 0;
      font-size: 3rem;
      font-weight: bolder;
      width: 80%;
      margin: 0;
    }
    input {
      font-family: "Open sans";
      font-style: italic;
      text-align: center;
      font-size: 1.5rem;
      box-sizing: border-box;
      width: 100%;
      border-radius: 100px;
      background-color: #ddd;
      padding: 15px;
      outline: none;
      border: 1px solid #0001;
    }
    button {
      font-family: "Open sans";
      box-sizing: border-box;
      width: 100%;
      border-radius: 100px;
      font-size: 1.5rem;
      font-weight: bolder;
      padding: 15px;
      background-color: #000;
      color: #fdfdfd;
      border: none;
    }
    @media (max-width: 1000px) {
      padding: 30px 10px;
      p {
      }
      h1 {
        font-size: 2rem;
        width: 100%;
      }

      input {
        font-size: 1rem;
      }
      button {
        font-size: 1rem;
      }
    }
    border: 10px solid #ddd;
    background-color: #fdfdfd;
    border-radius: 20px;
    gap: 10px;

    /* &:before {
                  content: "O evento acontecerá no dia 14/09 às 17:00";
                  position: absolute;
                  bottom: -190px;
                  width: 100%;
                  max-width: 1000px;
                  height: 150px;
                  z-index: -100;
                  background-color: #edc5719f;
                  backdrop-filter: blur(10px);
                  border-radius: 20px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 1.5rem;
                  font-weight: 600;
                  color: #fdfdfd;
                  outline: 10px solid #ea15;
            
                } */
  }
`;
