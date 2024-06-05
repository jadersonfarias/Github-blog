import styled from "styled-components";

export const SearchFormContainer = styled.div`
  width: 100%;
  max-width: 830px;
  margin: 4.5rem auto 3rem;

  input[type="text"] {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1.5rem;

    color: ${props => props.theme["base-subtitle"]};
    font-size: 1rem;

    border-radius: 6px;
    padding: 0.5rem 1rem;

    background: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
      letter-spacing: 1px;
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.blue};
    }
  }
`;

export const Publicity = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    &:first-child {
      font-size: 1.125rem;
      color: ${(props) => props.theme["base-subtitle"]};
      font-weight: 700;
    }

    &:last-child {
      color: ${(props) => props.theme["base-span"]};
      font-size: 0.875rem;
    }
  }
`;
