import { PostCardContainer, PostCardTitle } from "./style";
import  ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm';

import { formatDistanceToNow } from "date-fns";
import { ptBR }  from "date-fns/locale/pt-BR";

interface PostCardProps {
  title: string;
  body: string;
  date: Date;
}

export function PostCard(props: PostCardProps) {
  const convertBody = props.body.substr(0, 122).concat('...');

  
  return (
    <PostCardContainer>
      <PostCardTitle>
        <h1>{props.title}</h1>
        <span>
          {" "}
          {formatDistanceToNow(new Date(props.date), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </PostCardTitle>
      <ReactMarkdown 
                children={convertBody} 
                remarkPlugins={[remarkGfm]} 
            />
    </PostCardContainer>
  );
}
