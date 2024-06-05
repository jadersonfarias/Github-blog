import { ArrowSquareOut, CaretLeft } from "@phosphor-icons/react";
import { HeaderPostContainer, HeaderPostLinks } from "./styles";
//import { ArrowSquareOut,  CaretLeft, ChatCircle } from "";

export function HeaderPost(){
    return(
        <HeaderPostContainer>
             <HeaderPostLinks>
                <a href="">
                  <CaretLeft size={16} />
                    voltar
                </a>
                <a href="">
                    Ver no Github 
                    <ArrowSquareOut size={16} />
                </a>
             </HeaderPostLinks>
        </HeaderPostContainer>
    )
}