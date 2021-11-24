import React, { Fragment } from 'react'
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCommentDots, faClipboardList, faUserFriends, faStore, faPlay, faBell, faBars, faImages, faClock, faEllipsisH, faGlobeAmericas, faThumbsUp, faCommentAlt, faShare} from '@fortawesome/free-solid-svg-icons';
const user = `${process.env.PUBLIC_URL}/imagens/Usuario.png`;
console.log('TESTE ENV =>', process.env);



function HomePage2() {
    return(
        <Fragment>
            <Header>
                <User>
                <a href=""><IconUser icon={faUser}/>  </a>              
                </User>  
                <BoxImput type="text" placeholder="Pesquisar" />
                                  
                <a href=""><IconChat icon={faCommentDots}/></a>              
            </Header>
            <Header2>
                <a href=""><IconDoc icon={faClipboardList} /></a>
                <a href=""><IconFriends icon={faUserFriends} /></a>
                <a href=""><IconStore icon={faStore} /></a>
                <Caixa>
                <a href=""><IconTV icon={faPlay} /></a>
                </Caixa>
                <a href=""><IconBell icon={faBell} /></a>
                <a href=""><IconBars icon={faBars} /></a>
            </Header2>
            <User2>
                <a href=""><Photo src="imagens/Augusto.png" alt="" /></a>
                <Thinking type='text' placeholder='O que você está pensando?'></Thinking>
                <a href=""><IconPicture icon={faImages} /></a>
            </User2>
            <Store>
                <TituloStore> Stories </TituloStore>
               <a href=""><ColunClock><IconClock icon={faClock}  /> Seus itens arquivados </ColunClock> </a>
            </Store>
            <ProfileDiv>
                <Profile src="imagens/Augusto.png" alt="" />
                <Profile src="imagens/Augusto.png" alt="" />
                <Profile src="imagens/Augusto.png" alt="" />
                <Profile src="imagens/Augusto.png" alt="" />
                <Profile src="imagens/Augusto.png" alt="" />
                <Profile src="imagens/Augusto.png" alt="" />
            </ProfileDiv>  
            <ProfilePost>
                <DivPhoto>
                    <a href=""><ProfilePhoto src="imagens/Profile.png" /></a>                        
                </DivPhoto>
                <ProfileInfos>
                    <a href="">
                    <ProfileName>
                        David Barbosa Consuelo
                    </ProfileName>
                    </a>
                    <ProfileDate>
                        07 de Julho de 2021. <IconGlobo icon={faGlobeAmericas}/> 
                    </ProfileDate>
                </ProfileInfos>
                <a href=""><IconOptions icon={faEllipsisH} /></a>
            </ProfilePost>  

            <DivComentPost>
                Café da manhã perfeito de frente ao mar!
            </DivComentPost>

            <BodyPost>
                <Post>
                 <PhotoPost src="imagens/cafe.png" />
                </Post>
            </BodyPost>
            
            <DivInteraction>
                <Interaction>
                    <DivEmoticon>
                        <LikeHand src="imagens/like.png" /> <Love src="imagens/love.png" /> 25
                    </DivEmoticon>
                    <DivComents>
                        15 Comentários
                    </DivComents>
                </Interaction>
                <Interaction2>
                    <Like>
                        <a href=""><IconLike icon={faThumbsUp} /> Curtir </a>
                    </Like>
                    <Coment>
                        <a href=""><IconMSG icon={faCommentAlt} /> Comentar </a>
                    </Coment>
                    <Share>
                        <a href=""><IconShare icon={faShare} /> Compartilhar </a>
                    </Share>
                </Interaction2>

            </DivInteraction>
         </Fragment>
    ) 
}

export default HomePage2;

const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #3b5998;
padding: 0px 10px;
width: 100%;
height: 40px;
`;

const User = styled.div`
height: 20px;
width: 20px;
border-radius: 15px;
border: solid 2px #FFF;
display: flex;
align-items: center;
justify-content: center;
`

const IconUser = styled(FontAwesomeIcon)`
font-size: 14px;
color: #FFF;
`;

const BoxImput = styled.input`
text-align: center;
background-color: #3b5998;
color: #FFF;
border: none;
border-bottom: solid 2px #FFF;
padding: 5px 0px;
width: 75%;
::placeholder { 
    color: #FFF;
    opacity: 1; 
  }
`

const IconChat = styled(FontAwesomeIcon)`
color: #FFF;
font-size: 25px;
`

const Header2 = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
padding: 13px 24px;
`

const IconDoc = styled(FontAwesomeIcon)`
font-size: 26px;
color: #3b5998;
`

const IconFriends = styled(FontAwesomeIcon)`
font-size: 26px;
color: #3b5998;
`

const IconStore = styled(FontAwesomeIcon)`
font-size: 26px;
color: #3b5998;
`

const Caixa = styled.div`
height: 30px;
width: 35px;
border: solid 2px #3b5998;
display: flex;
align-items: center;
justify-content: center;
`

const IconTV = styled(FontAwesomeIcon)`
font-size: 26px;
color: #3b5998;
`

const IconBell = styled(FontAwesomeIcon)`
font-size: 26px;
color: #3b5998;
`

const IconBars = styled(FontAwesomeIcon)`
font-size: 26px;
color: #3b5998;
`

const User2 = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 70px;
padding: 10px 12px;
`

const Photo = styled.img`
height: 45px;
border-radius: 25px;
`

const Thinking = styled.input`
border-radius: 26px 26px;
width: 82%;
height: 37px;
border: 1px solid #00000030;`

const IconPicture = styled(FontAwesomeIcon)`
font-size: 28px;
color: #3b5998;
height: 35px;
`

const Store = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 40px;
padding: 5px 15px;
`

const TituloStore = styled.h1`
font-size: 16px;`

const ColunClock = styled.div`
flex-direction: colunm;
color:#00000075
`

const IconClock = styled (FontAwesomeIcon)`
font-size: 16px;
`

const ProfileDiv = styled.div`
justify-content: space-between;
width: 98%;
height: 170px;
padding: 4px 25px;
`

const Profile = styled.img`
height: 160px;
width: 90px;
border-radius: 20px;
padding: 1px 4px;
`

const ProfilePost = styled.div`
display: flex;
justify-content: space-between;
font-size: 13px;
width: 98%;
height: 50px;
margin: 10px;
padding: 5px 7px 0px;
`

const DivPhoto = styled.div`
display: flex;
flex-direction: colunm;
width: 40px;
height: 40px;
border-radius: 50%;
border: 1px solid #00000087;
`

const ProfilePhoto = styled.img`
display: flex;
flex-direction: colunm;
width: 40px;
height: 40px;
border-radius: 50%;
`

const ProfileInfos = styled.div`
font-size: 13px;
display: flex;
flex-direction: column;
width: 85%;
height: 40px;
padding: 2px 0px;
`

const ProfileName = styled.div`
font-weight: 600;
font-size: 15px;
color: #000;
display:flex;
flex-direction: column;
width: 100%;
height: 17px;
`

const ProfileDate = styled.div`
display: flex;
width: 100%;
height: 17px;
color: #00000096;
`

const IconGlobo = styled(FontAwesomeIcon)`
display: flex;
color: #000000e6 !important
font-size: 13px;`

const IconOptions = styled(FontAwesomeIcon)`
display: flex;
flex-direction: colunm;
color: #000;
font-size: 21px;
height: 36px;
`

const DivComentPost = styled.div`
width: 100%;
height: 20px;
margin-top: -8px;
`

const BodyPost = styled.div`
width: 100%;
height: 310px;
margin: 15px;
margin-top: -12px;
`

const Post = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 310px;
height: 310px;
margin: 23px;
`

const PhotoPost = styled.img`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 310px;
`

const DivInteraction= styled.div`
display: flex;
flex-direction: column;
height: 60px;
width: 100%;
margin-top: -10px;
`

const Interaction = styled.div`
display: flex;
justify-content: space-between;
height: 20px;
width: 100%;
`
const DivEmoticon = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const LikeHand = styled.img`
height: 18px;
width: 18px;
` 

const Love = styled.img`
height: 18px;
width: 18px;
margin-right: 5px;
`

const DivComents = styled.div`
`

const Interaction2 = styled.div`
display: flex;
color: #616770;
font-size: 16px;
height: 45px;
width: 100%
`
const IconLike = styled(FontAwesomeIcon)`
margin-right: 5px;
color: #616770;
`

const Like = styled.div`
display: flex;
width: 33%;
align-items: center;
justify-content: center;
cursor: pointer;
`

const IconMSG = styled(FontAwesomeIcon)`
color: #616770;
margin-right: 5px;
`

const Coment = styled.div`
display: flex;
width: 34%;
align-items: center;
justify-content: center;
`

const IconShare = styled(FontAwesomeIcon)`
color: #616770;
`

const Share = styled.div`
display: flex;
width: 33%;
align-items: center;
justify-content: center;
`