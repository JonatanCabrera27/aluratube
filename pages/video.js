import React from "react";
import styled from "styled-components";
import Menu from "../src/components/Menu";

const StyledVideo = styled.div`
    margin: 4rem 1rem 0px;

    .descripcion{
        margin-top: .2rem;
    }
    .titulo{
        margin: .4rem 0px;
        font-size: 1.4rem;
    }
    .user-avatar img {
        width: 3,1rem;
        height: 3,1rem;
        border-radius: 50%;
        margin-right: .7rem;
    }
    .user-info{
        display:flex;
    }
    .user-detail{
        display:grid;
        gap: .1rem;
    }
    .video-description{
        margin-top: .4rem;
        background-color: ${({ theme }) => theme.backgroundLevel1};
        width: 727px;
        height: 70px;
        border-radius:1rem;
        padding: 1.2rem;
        transition: height .3s;
    }
    .video-description:hover{
        height: 360px;
    }
    .read-more{
        display:none;
        transition: display .3s;
    }
    .read-more:hover{
        display:block;
    }
`;

export default function Video() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <StyledVideo>
                    <div className="video">
                        <iframe width="727" height="409" src="https://www.youtube.com/embed/0oJQUs5oRiM" title="Gartic Phone - Não assista a esse NerdPlayer!" SameSite="Strict" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="descripcion">
                        <p className="titulo">
                            Gartic Phone - Não assista a esse NerdPlayer!
                        </p>
                        <div className="user-info">
                            <div className="user-avatar">
                                <img src="https://yt3.ggpht.com/ytc/AMLnZu9pDOp93R9V0cp_CodoiMk8FM60-46FkdDasQ1i=s48-c-k-c0x00ffffff-no-rj" />
                            </div>
                            <div className="user-detail">
                                <p>
                                    <a>
                                        Jovem Nerd
                                    </a>
                                </p>
                                <p>
                                    2.52 M de suscriptores
                                </p>
                            </div>

                        </div>
                        <div className="video-description">
                            <p>
                                225,587 vistas  Se estrenó el 8 sept 2022
                                Samsung Galaxy Zflip4: https://jovemnerd.page.link/Magalu-Sa...
                                <span className="read-more">
                                    <br />
                                    O que você tá fazendo aqui, não falei pra você não assistir esse Nerdplayer!?zz
                                    <br />
                                    <br />
                                    EDIÇÃO POR ESTÚDIO 42
                                    http://www.estudio42.com.br
                                    <br />
                                    <br />
                                    ASSINE O CANAL DO JOVEM NERD NO YOUTUBE
                                    http://www.youtube.com/JovemNerd
                                    <br />
                                    <br />
                                    Siga o Jovem Nerd no Twitter, Facebook, YouTube e Instagram, foi o Azaghal que mandou!
                                    <br />
                                    <br />
                                    http://twitter.com/JovemNerd<br />
                                    http://facebook.com/JovemNerd<br />
                                    http://youtube.com/JovemNerd<br />
                                    http://instagram.com/JovemNerd<br />
                                    http://twitter.com/Azaghal<br />
                                    <br />
                                    <br />
                                    #garticphone
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="comentarios">
                        <div>
                            contador y "ordenar"
                        </div>
                        <div>
                            hacer comentario
                        </div>
                        <div>
                            comentarios
                        </div>
                    </div>
                </StyledVideo>
            </div>
        </>
    );
}


