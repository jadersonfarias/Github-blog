import styled from "styled-components";

export const BodyPostContainer = styled.div`
  width: 100%;
  max-width: 830px;
  margin: 0 auto;

  padding: 2.5rem 2rem;
  color: ${(props) => props.theme["base-text"]};

  p {
    color: ${(props) => props.theme["base-text"]};
    margin-bottom: 2rem;

    &:first-child {
      margin-top: 1rem;
    }
  }

  code {
    color: ${(props) => props.theme["blue-code"]};
    background-color: ${(props) => props.theme["base-label"]}; /* Define a cor de fundo para os blocos de código */
    padding: 0.2rem 0.4rem; /* Adiciona padding para melhorar a aparência */
    border-radius: 4px; /* Adiciona bordas arredondadas */
  }

  a {
    margin-top: 1rem;

    display: flex;
    color: ${(props) => props.theme.blue};
  }

  h2 {
    margin-bottom: 0.5rem;
  }

  h3 {
    color: ${(props) => props.theme["base-text"]};
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  ul {
    display: flex;
    flex-direction: column;

    font-size: 1rem;

    gap: 0.5rem;
    padding: 1rem;
    width: 100%;

    background-color: ${(props) => props.theme["base-post"]};
    color: ${(props) => props.theme["base-text"]};

    border-radius: 5px;

    list-style: none;

    li {
      gap: 1rem;

      em {
        margin-left: 2rem;
        color: ${(props) => props.theme["gray-code"]};
      }

      &:nth-child(1) {
        strong {
          &:nth-of-type(1) {
            color: ${(props) => props.theme["blue-code"]};
          }

          &:nth-of-type(2) {
            color: ${(props) => props.theme["green-code"]};
          }
        }
      }

      &:nth-child(2) {
        strong {
          &:nth-of-type(1) {
            color: ${(props) => props.theme["green-code"]};
          }
        }
      }

      &:nth-child(3) {
        strong {
          &:nth-of-type(1) {
            color: ${(props) => props.theme["green-code"]};
          }
        }
      }
    }
  }
`;
