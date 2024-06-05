import styled from "styled-components";

export const PostCardContainer = styled.div`
  height: 16rem;
  width: 25rem;

  border-radius: 8px;
  overflow: hidden;

  background: ${(props) => props.theme["base-post"]};
  padding: 2rem;

  p {
    margin-top: 1.5rem;
    color: ${(props) => props.theme["base-text"]};
    line-height: 1.6;

    
  }
`;
export const PostCardTitle = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;

  h1 {
    width: 75%;

    font-size: 0.25rem;
    font-weight: 700;
    color: ${(props) => props.theme["base-title"]};

    line-height: 1.6;

    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme["base-title"]};

    line-height: 1.6;
  }

  span {
    display: flex;

    align-items: flex-end;
    justify-content: flex-end;
    text-align: end;

    width: 20%;
    display: flex;
    margin-top: 0.32rem;

    font-size: 0.875rem;

    color: ${(props) => props.theme["base-span"]};
  }
`;
