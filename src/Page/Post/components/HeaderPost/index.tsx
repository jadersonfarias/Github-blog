import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from "@phosphor-icons/react";
import {
  HeaderPostContainer,
  HeaderPostContent,
  HeaderPostInfo,
  HeaderPostLinks,
} from "./styles";
import { GithubDataContext } from "../../../../context/GithubDataContext";
import { useContext } from "react";

import {  formatDistanceToNowStrict} from "date-fns";
import {ptBR} from "date-fns/locale/pt-BR";
import moment from "moment";
import { NavLink } from "react-router-dom";

export function HeaderPost() {
  const { selectedIssue } = useContext(GithubDataContext)
  const formattedDate = moment(selectedIssue?.created_at).format()
  return (
    <HeaderPostContainer>
      <HeaderPostLinks>
        <NavLink to={"/"}>
          <CaretLeft size={14} />
          voltar

        </NavLink>

        <a href={selectedIssue?.html_url} target="_blank">
          Ver no Github
          <ArrowSquareOut size={14} />
        </a>
      </HeaderPostLinks>
      <HeaderPostContent>
        <h1>{selectedIssue?.title}</h1>
        <HeaderPostInfo>
          <span>
            <GithubLogo size={22} weight="fill" />
           {selectedIssue?.user.login}
          </span>
          <span>
            <CalendarBlank size={22} weight="fill" />
            {formatDistanceToNowStrict(new Date( String(formattedDate)), 
                        {
                            addSuffix: true,
                            locale: ptBR,
                        })}
          </span>

          <span>
                        <ChatCircle weight="bold" size={22} />
                        {selectedIssue?.comments} comentários
                    </span>
        </HeaderPostInfo>
      </HeaderPostContent>
    </HeaderPostContainer>
  );
}
