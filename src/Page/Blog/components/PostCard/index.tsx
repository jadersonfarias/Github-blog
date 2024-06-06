import { PostCardContainer, PostCardTitle } from "./style";
import  ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm';

import { formatDistanceToNow } from "date-fns";
import { ptBR }  from "date-fns/locale/pt-BR";
import { useNavigate } from "react-router-dom";

interface PostCardProps {
  title: string;
  body: string;
  number: string;
  date: Date;
}

export function PostCard(props: PostCardProps) {
  const convertBody = props.body.substr(0, 122).concat('...');

  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/Post?id=${props.number}`);
  };
  return (
    <PostCardContainer onClick={goToDetails}>
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
