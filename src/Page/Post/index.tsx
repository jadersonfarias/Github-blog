
import { useLocation } from "react-router-dom";
import { BodyPost } from "./components/BodyPost";
import { HeaderPost } from "./components/HeaderPost";
import { PostContainer } from "./styles";
import { useContext, useEffect } from "react";
import { GithubDataContext } from "../../context/GithubDataContext";




export function Post(){
    const {IssuesGitSelect } = useContext(GithubDataContext)
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