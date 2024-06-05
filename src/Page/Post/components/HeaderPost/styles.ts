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

  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;

  color: ${(props) => props.theme.blue};

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    border-bottom: 1px solid transparent;
    transition: all ease-out 0.2s;

    text-decoration: none;
    color: ${(props) => props.theme.blue};

    &:hover {
            border-bottom: 1px solid ${props => props.theme.blue};
        }

        
  }
`;
