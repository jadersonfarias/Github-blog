import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 830px;
  height: 13rem;
  margin: 0 auto;
  padding: 2rem 2.5rem;

  margin-top: -5rem;

  border-radius: 8px;
  background: ${(props) => props.theme["base-profile"]};
`;

export const ProfileImage = styled.img`
  max-height: 9rem;
  max-width: 9rem;
  object-fit: cover;
  border-radius: 6px;
  display: block;
`;

export const ProfileContent = styled.div`
  display: flex;
  gap: 2rem;
`;

export const ProfileInformation = styled.div`
 width: 100%;
 #separator {
  display: flex;
  align-items: center;
  justify-content: space-between;

    a { 
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.2rem;

        margin-top: -0.7rem;
        padding-bottom: 3px;

        border-bottom: 1px solid transparent;

        font-size: 12px;
        text-transform: uppercase;
        font-weight: 700;
        text-decoration: none;
        color: ${props => props.theme.blue};

        transition: all ease-out 0.2s;

        &:hover {
            border-bottom: 1px solid ${props => props.theme.blue};
        }

        svg {
            margin-top: -2px;
        }
    
  }
 }

  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 24px;
    font-weight: 700;
  }

  p {
    color: ${(props) => props.theme["base-text"]};
   
  }
`;

export const SocialInfo = styled.div`
  display: flex;
  gap: 1.3rem;
  margin-top: 1.5rem;

  span {
    color: ${(props) => props.theme["base-subtitle"]};
    display: flex;
    align-items: center;
    gap: 4px;
  }

  svg {
    color: ${(props) => props.theme["base-label"]};
  }
`;
