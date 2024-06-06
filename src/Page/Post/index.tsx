
import { useLocation } from "react-router-dom";
import { BodyPost } from "./components/BodyPost";
import { HeaderPost } from "./components/HeaderPost";
import { PostContainer } from "./styles";

import { GithubDataContext } from "../../context/GithubDataContext";
import { useContextSelector } from "use-context-selector";
import { useEffect } from "react";




export function Post(){
    const IssuesGitSelect = useContextSelector(GithubDataContext, (context) => {
        return context.IssuesGitSelect      
      })


    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    
   const id = queryParams.get("id");

   useEffect(() => {
    IssuesGitSelect(id)
    }, [id])

    return(
       <PostContainer>
                 <HeaderPost/>
                 <BodyPost />            
       </PostContainer>
    )
}