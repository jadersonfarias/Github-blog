import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";




interface IssuesArrayData {
    number: number;
    id: string;
    title: string;
    body: string;
    created_at: Date;
  }

  
interface SelectedIssueProps {
  title: string,
  user: {
    login: string;
  },
  created_at: Date,
  comments: number,
  body:string,
  html_url: string,
}

interface GithubDataContextType {
    issuesGitData: IssuesArrayData[]
    selectedIssue?: SelectedIssueProps
    fetchIssuesGit: (query?: string) => Promise<void>
    IssuesGitSelect: (query?: string | null) =>  Promise<void>
}

export const GithubDataContext = createContext({} as GithubDataContextType)

interface TransactionsProviderProps {
    children: ReactNode;
  }



export function GithubDataContextProvider({ children }: TransactionsProviderProps){
    const [issuesGitData, setIssuesGitData] = useState<IssuesArrayData[]>([])
    const [selectedIssue, setSelectedIssue] = useState<SelectedIssueProps>()
   console.log(selectedIssue)
   

    async function fetchIssuesGit(query?: string) {
        const response = await api.get(`/search/issues?q=${query}%20repo:jadersonfarias/Github-blog`)
        
        const filteredIssues = response.data.items.map((issue: IssuesArrayData) => ({
          title: issue.title,
          body: issue.body,
          number: issue.number,
          created_at: issue.created_at,
        }));

       
        setIssuesGitData(filteredIssues)
      
      }

      useEffect(() => {
        fetchIssuesGit('')
      }, [])


      async function IssuesGitSelect(query?: string | null ) {
        
        if (query) {

        try {
          const response = await api.get(`/repos/jadersonfarias/github-blog/issues/${query}` )

         
          const issueData: SelectedIssueProps = {
            title: response.data.title,
            user: {
              login: response.data.user.login,
            },
            created_at: response.data.created_at,
            comments: response.data.comments,
            body: response.data.body,
            html_url: response.data.html_url,
           
          };
          
       
          setSelectedIssue(issueData)
        } catch (error) {
            console.error("Error fetching issue details:", error);
          } 
            }     
           
   }

    return(
        <GithubDataContext.Provider value={
            {
              fetchIssuesGit,
              issuesGitData,
              selectedIssue,
              IssuesGitSelect,
            }
        }>
         {children}
        </GithubDataContext.Provider>
    )
}