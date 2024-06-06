import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BodyPostContainer } from "./styles";
import { GithubDataContext } from "../../../../context/GithubDataContext";
import { useContext } from "react";


export function BodyPost() {
  const { selectedIssue } = useContext(GithubDataContext)
  return (
    <BodyPostContainer>
      <ReactMarkdown children={selectedIssue?.body} remarkPlugins={[remarkGfm]} />
    </BodyPostContainer>
  );
}
