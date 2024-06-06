import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BodyPostContainer } from "./styles";
import { GithubDataContext } from "../../../../context/GithubDataContext";

import { useContextSelector } from "use-context-selector";




export function BodyPost() {
  const  selectedIssue  = useContextSelector(GithubDataContext, (context) => {
    return context.selectedIssue
      
   
  })
  
  return (
    <BodyPostContainer>
      <ReactMarkdown children={selectedIssue?.body} remarkPlugins={[remarkGfm]} />
    </BodyPostContainer>
  );
}
