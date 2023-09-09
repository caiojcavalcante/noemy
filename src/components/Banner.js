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
      <LeftImage priority src="/01.jpeg" alt="noemy" height={800} width={300} />
      <RightImage
        priority
        src="/02.jpeg"
        alt="noemy"
        height={800}
        width={300}
      />
      <Section>
        <form>
          <h1>
            OS SEGREDOS DE UM <br /> ATENDIMENTO INESQUECÍVEL
          </h1>
          <p>
            Aprenda a como cobrar mais pelos seu serviço, reter seus clientes
            por mais tempo e ser o favorito dentre os profissionais do mercado!
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
                  axios.post("/api/subscription", {
                    name: "nome",
                    email,
                    phone: "0",
                  }).then((res) => {
                    setResponded(true);
                  });
                  setName("");
                  setEmail("");
                  setPhone("");
                }
              }
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

const LeftImage = styled(Image)`
  @media (max-width: 1000px) {
    display: none;
  }
  position: absolute;
  object-fit: contain;
  top: 0;
  left: 0;
  height: 100%;
  aspect-ratio: auto;
  width: auto;
  opacity: 0.7;
`;

const RightImage = styled(Image)`
  @media (max-width: 1000px) {
    display: none;
  }
  position: absolute;
  object-fit: contain;
  top: 0;
  right: 0;
  height: 100%;
  aspect-ratio: auto;
  width: auto;
  opacity: 0.7;
  &:before {
    content: "";
    background-color: #f00;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Center = styled.div`
  overflow: hidden;
  /* height: calc(93vh); */
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 79% 55.65%, #ffd54a, transparent 61%),
      radial-gradient(circle at 89.99% 8.05%, #000, transparent 67%),
      radial-gradient(circle at 26.4% 24.44%, #ffb536, transparent 61%),
      radial-gradient(circle at 3.98% 89.97%, #fff0db, transparent 67%),
      radial-gradient(circle at 92.97% 91.95%, #ffebb5, transparent 61%),
      radial-gradient(circle at 50% 50%, #fff, #fff 100%);
    opacity: 1;
  }
  background-color: #000;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
  form {
    //fire glow effect red orange yellow shadow
    box-shadow: 50px -100px 100px 0px #8608, -50px 100px 1000px 0px #fd04,
      0 200px 200px 50px #000, 0 -200px 200px 50px #000;

    width: 95%;
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
      padding: 3% 9%;
    }
    p {
      font-size: 1.5rem;
    }

    h1 {
      padding: 0;
      font-size: 3rem;
      font-weight: bolder;
      width: 90%;
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
    background-color: #fdfdfd;
    border-radius: 20px;
    gap: 10px;
  }
`;
