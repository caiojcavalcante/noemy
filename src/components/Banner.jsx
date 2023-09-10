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
      <div className="left">
        <Image priority src="/01.jpeg" alt="noemy" fill />
      </div>
      <div className="right">
        <Image priority src="/02.jpeg" alt="noemy" fill />
      </div>
      <Section>
        <form>
          <h1>TRANSFORME SEUS CLIENTES EM FAS!</h1>
          <p>
            Aprenda o que é necessário para vender mais e cobrar mais pelo seu
            trabalho no <b>Segredos do Atendimento Inesquecível</b>
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

  .left,
  .right {
    top: 0;
    position: absolute;
    height: 100%;
    width: 480px;
    img {
      //saturate image
      filter: saturate(1.5);
      height: 100%;
      aspect-ratio: 1022/1280;
      width: fit-content;
      object-fit: cover;
    }
  }

  .left {
    left: 0;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      );
      z-index: 1;
    }
    @media (max-width: 1000px) {
      display: none;
    }
  }
  .right {
    right: 0;

    @media (min-width: 1000px) {
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(
          270deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 100%
        );
        z-index: 1;
      }
    }

    @media (max-width: 1000px) {
      width: 100%;
    }
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
    box-shadow: 50px -100px 100px 0px #8608, -50px 100px 1000px 0px #fd04,
      0 200px 200px 50px #000, 0 -200px 200px 50px #000;
    opacity: 0.9;
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
      box-shadow: inset 0 0 10px 0 #0001;
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
