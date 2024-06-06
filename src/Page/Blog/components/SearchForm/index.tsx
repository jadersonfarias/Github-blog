import { useForm } from "react-hook-form";
import { SearchFormContainer,  Publicity } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from 'zod'
import { GithubDataContext } from "../../../../context/GithubDataContext";
import { useContextSelector } from "use-context-selector";

const searchFormSchema = z.object({
    query: z.string(),
})

type searchFormInput = z.infer<typeof searchFormSchema>

export function  SearchForm(){

 const  fetchIssuesGit  = useContextSelector(GithubDataContext, (context) => {
    return context.fetchIssuesGit
  })

    const {register,handleSubmit} = useForm<searchFormInput>(
        {
         resolver: zodResolver(searchFormSchema)
        }
    )

    function handleSearch(data:searchFormInput) {
          fetchIssuesGit(data.query)
      }
    
    return(
        <SearchFormContainer>
             <Publicity>
                <span>Publicacões</span>
                <span>6 publicações</span>
             </Publicity>
             <form onSubmit={handleSubmit(handleSearch)}>
                 <input 
                    type="text"
                   placeholder="Buscar conteúdo"
                   {...register('query')}
                 />
             
             </form>
        </SearchFormContainer>
    )
}