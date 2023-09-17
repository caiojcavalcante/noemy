import { styled } from "styled-components";
import { isValidElement, useState } from "react";
import axios from "axios";
import Image from "next/image";
import useMediaQuery from "@/lib/usemediaquery";

export default function Banner() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [responded, setResponded] = useState(false);

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  return (
    <Center>
      <Section>
        <form>
          <h1>OS SEGREDOS DE UM ATENDIMENTO INESQUECÍVEL</h1>
          <p>
            Pronto para transformar clientes em verdadeiros fãs da sua marca?
            Não perca esta oportunidade de descobrir os segredos que podem fazer
            toda a diferença!
          </p>
          {!responded ? (
            <>
              <input
                placeholder="Digite seu email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: isValidEmail(email)
                    ? "rgb(240,190,59)"
                    : "#000",
                  color: isValidEmail(email) ? "#000" : "#fff",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  if (!email || !isValidEmail(email)) {
                    alert("Preencha todos os campos");
                    return;
                  }
                  axios
                    .post("/api/subscription", {
                      name: "nome",
                      email,
                      phone: "0",
                    })
                    .then((res) => {
                      setResponded(true);
                    });
                  setName("");
                  setEmail("");
                  setPhone("");
                }}
              >
                Inscrever-me
              </button>
            </>
          ) : (
            <h2>Obrigado por se inscrever!</h2>
          )}
        </form>
      </Section>
    </Center>
  );
}

const Center = styled.div`
  overflow: hidden;
  /* height: calc(93vh); */
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: #000;
  position: relative;
  background-size: cover;
  background-position: center;
  @media (min-width: 1000px) {
    background-image: url("/fundo.jpg");
  }
  @media (max-width: 1000px) {
    background-image: url("/fundo-mobile.jpg");
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);
  position: relative;
  box-sizing: border-box;
  form {
    //fire glow effect red orange yellow shadow
    z-index: 1000;
    /* box-shadow: 50px -100px 100px 0px #8608, -50px 100px 1000px 0px #fd04,
      0 200px 200px 50px #000, 0 -200px 200px 50px #000; */
    opacity: 0.9;
    width: 95%;
    max-width: 900px;
    @media (min-width: 1000px) {
      width: 70%;
    }
    /* height: 90%; */
    /* aspect-ratio: 1; */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media (min-width: 1000px) {
      padding: 90px;
    }
    p {
      font-size: 1.2rem;
    }

    h1 {
      padding: 0;
      font-size: 3rem;
      font-weight: bolder;
      width: 90%;
      margin: 0;
    }
    input {
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
      box-shadow: inset 0 0 10px 0 #0001;
    }
    button {
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
    background-color: #fdfdfd;
    border-radius: 20px;
    gap: 10px;
  }
`;
