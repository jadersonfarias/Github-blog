import styled from "styled-components";

export const HeaderPostContainer = styled.div`
  width: 100%;
  max-width: 830px;
  height: 10rem;

  margin: 0 auto;
  margin-top: -5rem;

  border-radius: 8px;
  padding: 2rem;

  background: ${(props) => props.theme["base-profile"]};
`;

export const HeaderPostLinks = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;

  color: ${(props) => props.theme.blue};

  a {
    display: flex;
    align-items: start;

    gap: 0.5rem;

    border-bottom: 1px solid transparent;
    transition: all ease-out 0.2s;

    text-decoration: none;
    color: ${(props) => props.theme.blue};

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }

    svg {
      &:last-child {
        margin-top: -2px;
      }
    }
  }
`;

export const HeaderPostContent = styled.div`
     margin-top: 0.5rem;
    
    font-size: 0.85rem;
    color: ${props => props.theme["base-title"]};
    font-weight: 400;
`;

export const HeaderPostInfo = styled.div`
  display: flex;
  gap: 1.3rem;
  margin-top: 1.5rem;

  span {
    color: ${(props) => props.theme["base-subtitle"]};
    display: flex;
    align-items: center;
    gap: 4px;
  }

  span:first-child {
    svg {
      background-color: ${(props) => props.theme["base-label"]};
      border-radius: 50%;
      color: ${(props) => props.theme["base-profile"]};
      padding: 0.1rem;
    }
  }
  svg {
    color: ${(props) => props.theme["base-label"]};
  }
`;
