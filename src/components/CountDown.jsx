import styled from "styled-components";

import { useState, useEffect } from "react";

export default function CountDown() {
  const countDownDate = new Date("Sep 14, 2023 20:00:00").getTime();

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
    <div>
      <Container>
        <p>O evento começará em</p>
        <h1>
          {date.days}d {date.hours}h {date.minutes}m {date.seconds}s
        </h1>
      </Container>
    </div>
  );
}

const Container = styled.div`
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  z-index: 10;
  background-color: #faf6f7;
  padding: 15px 10px;
  border-radius: 10px;
  border: 2px solid #0001;
  p, h1{
    padding: 0;
    margin: 0;
  }
  text-align: center;
  font-size: 1rem;
`;
