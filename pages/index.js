import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import Image from 'next/image';
import profilePic from '../src/img/banner.jpg';


function HomePage() {
    const estilosDaHomePage = {
        // backgroundColor: "red" 
    };

    // console.log(config.playlists);

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists}>
                    Conteúdo
                </Timeline>
                <Favoritos favoritos = {config.favoritos}/>
            </div>
        </>
    );
}

export default HomePage

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }


const StyledHeader = styled.div`
    #user{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
    .user-banner{
        margin-top: 50px;
        height: 230px;
        width: 100%;
    }

`;
function Header() {
    return (
        <StyledHeader>
            <Image 
                className="user-banner" 
                src={profilePic}
            />
            <section className="user-info">
                <img id="user" src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline(propriedades) {
    const playlistNames = Object.keys(propriedades.playlists);
    // Statement
    // Retorno por expressão
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}

const StyleFavoritos = styled.div`
    .center-item{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #avatar {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        
    }
    .favoritos-info {
        display: grid;
        padding: 16px 0px 16px 32px;
        gap: 16px;
        text-align: center;
        font-size:14px;
    }
    .info{
        padding: 16px 32px;
        gap: 16px;
        font-size:16px;
    }
    .favoritos-display{
        display: flex;
        @media (max-width: 600px) {
            display: grid;
          }

    }
`;

function Favoritos(props){
    const favoritosNames = Object.keys(props.favoritos);
    
    return (
        <StyleFavoritos>
            <section>
                <h2 className="info">
                    Canales Favoritos
                </h2>
                <div className="favoritos-display">
                    {favoritosNames.map((favoritosName) => {
                        const canales = props.favoritos[favoritosName];
                        return (
                            <div className="favoritos-info">
                                <a className="center-item" href={canales.url}>
                                    <img id="avatar" src={canales.avatar} />
                                </a>
                                <p>
                                    {canales.name}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </StyleFavoritos>
    )                                         
}
