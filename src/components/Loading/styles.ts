import styled from 'styled-components'

export const Spinner = styled.div`
  height: 50px;
  width: max-content;
  font-size: 18px;
  font-weight: 600;
  margin: 0 auto;
  font-family: monospace;
  letter-spacing: 1em;
  color: #f5f5f5;
  filter: drop-shadow(0 0 10px);
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    animation: loading6454 1.75s ease infinite;
  }

  span:nth-child(2) {
    animation-delay: 0.25s;
  }

  span:nth-child(3) {
    animation-delay: 0.5s;
  }

  span:nth-child(4) {
    animation-delay: 0.75s;
  }

  span:nth-child(5) {
    animation-delay: 1s;
  }

  span:nth-child(6) {
    animation-delay: 1.25s;
  }

  span:nth-child(7) {
    animation-delay: 1.5s;
  }

  @keyframes loading6454 {
    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-10px);
    }
  }
`
