import { createGlobalStyle } from "styled-components";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin"],
  variable: "--montserrat",
});

const myFont = localFont({
  src: "../fonts/ntfabulous.woff2",
  display: "swap",
  variable: "--nt",
});

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-weight: 400;
        user-select: none;
        background-color: #edc571;
        h1 {
            font-family: var(--nt);
        }
        input, button, h2, h3, h4, li, p {
          font-family: var(--montserrat);
        }
        p {
          font-weight: 400;
          font-style: normal;
          font-size: 1rem;
          line-height: 1.5;
          letter-spacing: 0.00938em;
        }
    }
    button {
        color: #222;
    }
`;

export default function App({ Component, pageProps }) {
  return (
    <div className={`${montserrat.variable} ${myFont.variable}`}>
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  );
}
