import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";


// interface GitCardsProps{
//      items: IssuesArrayData[];
//      key: number;
//      title: string;
//      body: string;
//      date?: Date;
//      total_count: number;
// }

interface IssuesArrayData {
    number: number;
    id: string;
    title: string;
    body: string;
    created_at: Date;
  }

interface GithubDataContextType {
    issuesGitData: IssuesArrayData[]

    fetchIssuesGit: (query?: string) => Promise<void>
}

export const GithubDataContext = createContext({} as GithubDataContextType)

interface TransactionsProviderProps {
    children: ReactNode;
  }



export function GithubDataContextProvider({ children }: TransactionsProviderProps){
    const [issuesGitData, setIssuesGitData] = useState<IssuesArrayData[]>([])
   
   

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

    return(
        <GithubDataContext.Provider value={
            {
              fetchIssuesGit,
              issuesGitData,
            }
        }>
         {children}
        </GithubDataContext.Provider>
    )
}