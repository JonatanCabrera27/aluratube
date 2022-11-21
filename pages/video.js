import React from "react";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import config from "../config.json";

const StyledVideo = styled.div`
    display:flex;
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
    .user-info,.contador__comentario{
        display:flex;
    }
    .user-detail{
        display:grid;
        gap: .1rem;
    }
    .botones{
        position: relative;
        right: .7em;
        display:flex;
        margin-left: 2em;   
    }
    .reacciones{
        margin-left: 10em;
        display:flex;  
    }
    .like,.dislike,.suscribirse{
        margin-top: 0.5em;
        background-color:${({ theme }) => theme.backgroundLevel2};
        border: unset;
        color:${({ theme }) => theme.textColorBase};
    }
    .suscribirse{
        border-radius: 1.5em;
        width:100px;
        height:34px;
    }
    .like{
        border-top-left-radius:27px;
        border-bottom-left-radius:27px;
        width:90px;
        height:34px;
        border-right: solid ;
        border-right-color:${({ theme }) => theme.backgroundBase};
    
    }
    .dislike{
        position:relative;
        border-top-right-radius:27px;
        border-bottom-right-radius:27px;
        width:60px;
        height:34px;
    }
    .video{
        width:45.4em;
        height:25.5em;
    }

    .video > iframe{
        width:100%;
        height:100%;
    }
    .video-description{
        margin-top: .4rem;
        background-color: ${({ theme }) => theme.backgroundLevel1};
        width: 727px;
        height: 70px;
        border-radius:1rem;
        padding: 1.2rem;
        transition: height .2s;
    }
    .readbutton{
        color: ${({ theme }) => theme.textColorBase};
        border:unset;
        background:unset;
        width: 100px;
        height:24px;
        
    }
    .read-more{
        display:block;
        height:400px;
    }
    .read-less{
        display:none
    }
    .comentarios{
        margin-left: 1em;
        height: 20em;
        width: 100%;
    }
    .contador__comentario p{
        margin: 1em;
    }
    .caja__comentarios{
        background-color:${({ theme }) => theme.backgroundLevel1};
        width:40em;
        height: 7em;
        border-radius: 1em;
        padding: 2rem;
    }
    .caja__comentarios > input{
        width:35em;
        margin-left:1em;
        position:relative;
        left:.2em;
        top:-1.2em;
        border:unset;
        padding:1em;
        color:${({ theme }) => theme.textColorBase};
        background-color:${({ theme }) => theme.backgroundLevel1};
    }
    #user{
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .caja__comentarios > span{
        position:relative;
        left:2em;
        top:-1em;
        width:40px;
        height:40px;
        background-color:${({ theme }) => theme.backgroundLevel1};
    }
    .caja__comentarios > i{
        width:40px;
        height:40px;
        background-color:${({ theme }) => theme.backgroundLevel1};
    }
    .caja__comentarios > hr{
        width:30em;
        position:relative;
        right:-2.4em;
        top:-.2em;
    }
    .lista__comentarios{
        margin-top:2em;
        width:40em;
        height:25em;
        border-radius: 1em;
        background-color:${({ theme }) => theme.backgroundLevel1};
        padding:2em;
        display:flex;
    }
    .lista__comentarios > p{
        margin-left: 1em;
        margin-top:.7em;
    }
    @media (max-width:600px){
        flex-direction: column;
    }
`;

export default function Video() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    function verMas() {
        if (document.querySelector(".read-less")) {
            const verMas = document.querySelector(".read-less");
            document.querySelector(".video-description").style.height = '400px';
            // Obtener clases CSS
            verMas.className;              
            verMas.getAttribute("class");  
            // Modificar clases CSS
            verMas.className = "read-more";
            verMas.setAttribute("class", "read-more");
            

            const botonVermas = document.querySelector("#boton__vermas");
            botonVermas.textContent = "Ver menos"
            
            
        }
        else {
            const div = document.querySelector(".read-more");
            document.querySelector(".video-description").style.height = '70px';
            

            // Obtener clases CSS
            div.className;              
            div.getAttribute("class");  

            // Modificar clases CSS
            div.className = "read-less";
            div.setAttribute("class", "read-less");
            const botonVermas = document.querySelector("#boton__vermas");
            botonVermas.textContent = "Ver mas"

        }
    }

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
                    <div className="contenido">
                        <div className="video">
                            <iframe src="https://www.youtube.com/embed/0oJQUs5oRiM" title="Gartic Phone - Não assista a esse NerdPlayer!" samesite="Strict" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                                    <div>
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
                                <div className="botones">
                                    <button className="suscribirse">
                                        suscribirse
                                        </button>
                                    <div className="reacciones">
                                        <button className="like">
                                            <span><i className="fa-regular fa-thumbs-up"></i></span>
                                                Me gusta
                                            </button>
                                        <button className="dislike">
                                            <span><i class="fa-regular fa-thumbs-down fa-flip-horizontal" ></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="video-description">
                                <p>
                                    225,587 vistas  Se estrenó el 8 sept 2022
                                    <button type="button" id="boton__vermas" className="readbutton" onClick={verMas}> Ver mas </button>
                                    <span className="read-less">
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
                    </div>
                    <div className="comentarios">
                        <div className="contador__comentario">
                            <p>
                                15K comentarios
                            </p>
                            <p>
                                <span><i class="fa-solid fa-bars-staggered"></i></span> Ordenar
                            </p>
                        </div>
                        <div className="caja__comentarios">
                            <picture>
                                <img id="user" src={`https://github.com/${config.github}.png`} />
                            </picture>
                            <input type="text" placeholder="Escribe aqui tu comentario" />
                            <span><i className="fa-solid fa-play"></i></span>
                            <hr />
                        </div>
                        <div className="lista__comentarios">
                            <picture>
                                <img id="user" src={`https://github.com/${config.github}.png`} />
                            </picture>
                            <p>
                                Buen video 10/10
                            </p>
                        </div>
                    </div>
                </StyledVideo>
            </div>
            <script src="https://kit.fontawesome.com/a0d6210aae.js" crossOrigin="anonymous"></script>
        </>
    );
}


