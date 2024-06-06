import { useContext } from "react";
import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { BlogContainer, BlogPostContainer } from "./styles";
import { GithubDataContext } from "../../context/GithubDataContext";

export function Blog() {
  const {issuesGitData} = useContext(GithubDataContext)


  return (
    <BlogContainer>
      <Profile/>
      <SearchForm />
      <BlogPostContainer>
         {
          issuesGitData.map(issues => {
            return(
              <PostCard
                 key={issues.id}
                 title={issues.title}
                 body={issues.body}
                 date={issues.created_at}
                 number={issues.number.toString()}
              />
            )
          })
         }
      </BlogPostContainer>
    </BlogContainer>
  );
}
