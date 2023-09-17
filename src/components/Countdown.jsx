import styled from "styled-components";

import { useState, useEffect } from "react";

export default function Countdown() {
  const countDownDate = new Date("Oct 1, 2023 20:00:00").getTime();

  // Update the count down every 1 second
  const [date, setDate] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDate({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return (
    <Container>
      <p>O evento começará em</p>
      <h1>
        {date.days}d {date.hours}h {date.minutes}m {date.seconds}s
      </h1>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  z-index: 10;
  background-color: #faf6f7;
  display: flex;
  justify-content: center;
  border: 2px solid #0001;
  height: 80px;
  p,
  h1 {
    padding: 0;
    margin: 0;
  }
  text-align: center;
  font-size: 1rem;
`;
