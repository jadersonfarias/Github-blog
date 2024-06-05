import { ArrowSquareOut, GithubLogo, Users } from "@phosphor-icons/react";
import {
  ProfileContainer,
  ProfileContent,
  ProfileImage,
  ProfileInformation,
  SocialInfo,
} from "./style";
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

interface Profile {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  followers: number;
}

export function Profile() {
  const [profileGitHub, setProfileGitHub] = useState<Profile | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento


  useEffect(() => {
    async function fetchGitHubProfile() {
      try {
        const response = await api.get("/users/jadersonfarias");
        const { login, avatar_url, html_url, name, bio, followers } = response.data;

        // Atualiza o estado com os dados do perfil
        setProfileGitHub({
          login,
          avatar_url,
          html_url,
          name,
          bio,
          followers,
        });
      } catch (error) {
        console.error("Erro ao buscar dados do GitHub:", error);
      } finally {
        setLoading(false);
      } // Define carregamento como falso após a busca

    } 
    fetchGitHubProfile();
}, []);

if (loading) {
  return <span>Loading...</span> // Mostra "Loading..." enquanto os dados estão sendo buscados
}

if (!profileGitHub) {
    return  <span>Error loading profile</span> //Mensagem de erro se o perfil não for carregado
}

  return (
    <ProfileContainer>
      <ProfileContent>
        <div>
          <ProfileImage src={profileGitHub?.avatar_url} />
        </div>
        <ProfileInformation>
          <div id="separator">
            <h1>{profileGitHub?.name}</h1>
            <a href="https://github.com/jadersonfarias">
              Github <ArrowSquareOut size={14} weight="bold" />
            </a>
          </div>
          <p>
           {profileGitHub?.bio}
          </p>
          <SocialInfo>
            <span>
              <GithubLogo size={22} weight="bold" />
              {profileGitHub?.login}
            </span>
            <span>
              <Users size={22} weight="bold" />
              {profileGitHub?.followers}
              {' '}
              seguidores
            </span>
          </SocialInfo>
        </ProfileInformation>
      </ProfileContent>
    </ProfileContainer>
  );
}
