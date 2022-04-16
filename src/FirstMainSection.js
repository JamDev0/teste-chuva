import './FirstMainSection.css';
import DownloadIconSvg from './Images/DownloadIcon.svg';
import StarIconSvg from './Images/StarIcon.svg';
import DoiIconSvg from './Images/DoiIcon.svg';
import ScottPng from './Images/Scott.png';
import Video from './Videos/Video.mp4'
import { useEffect, useState } from 'react';

function FirstMainSection()
{
    const [VideoInfo, setVideoInfo] = useState(()=>{
        return(
            <div className='VideoInfos' onClick={PlayVideo}>
                <h2>Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP </h2>
                <div>
                    <img src={ScottPng}></img>
                    <h2>Beatriz Christiane Melo</h2>
                    <h3>FCA / Universidade Estadual de Campinas</h3>
                </div>
            </div>
        )
    });

    useEffect(()=>{
    }, [])

    function PlayVideo()
    {
        document.querySelector('#FirstMainSectionVideo').play();
    }

    function VideoPaused()
    {
        console.log('EventoFoi');
        setVideoInfo(()=>{
            return(
                <div className='VideoInfos' onClick={PlayVideo}>
                    <h2>Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP </h2>
                    <div>
                        <img src={ScottPng}></img>
                        <h2>Beatriz Christiane Melo</h2>
                        <h3>FCA / Universidade Estadual de Campinas</h3>
                    </div>
                </div>
            )
        })
    }

    function VideoPlayed()
    {
        setVideoInfo(null)
    }

    return(
        <section id='FirstMainSection'>
            <h2>Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP</h2>
            <div className='Links'>
                <div className='Download'>
                    <img src={DownloadIconSvg}></img>
                    <span>Download</span>
                </div>
                <div className='Star'>
                    <img src={StarIconSvg}></img>
                </div>
                <div className='doi'>
                    <img src={DoiIconSvg}></img>
                </div>
                <h3>COMO CITAR ESSE TRABALHO?</h3>
            </div>
            <div className='VideoWrapper'>
                <video id='FirstMainSectionVideo' onPause={VideoPaused} onPlay={VideoPlayed} controls={true}>
                    <source src={Video} type="video/mp4" />
                </video>
                {VideoInfo}
            </div>

            <div className='Details'>
                <h2>Detalhes</h2>
                <section>
                    <div className='WrapperFirstK'>
                        <p className='FirsKinOfInfoInP'>Tipo de Apresentação: <strong>Pôster</strong></p>
                        <p className='FirsKinOfInfoInP'>Eixo temático: <strong>Alimentação e saúde (AS)</strong> </p>
                        <p className='FirsKinOfInfoInP'>Palavras-chaves: <strong>Alimentos funcionais, alimentação escolar.</strong></p>
                    </div>

                    <h3>Autores:</h3>
                    <ul>
                        <li>Galileo Galilei¹</li>
                        <li>Berta Lange de Morretes²</li>
                        <li>Isaac Newton³</li>
                        <li>Cesar Lattes¹</li>
                        <li>Stephen Hawking⁴</li>
                    </ul>

                    <div>
                        <p className='SecondKindOfInfoInP'>¹Universidade Estadual de Campinas</p>
                        <p className='SecondKindOfInfoInP'>²Universidade de São Paulo</p>
                        <p className='SecondKindOfInfoInP'>³Instituto Nacional de Pesquisas Espaciais</p>
                        <p className='SecondKindOfInfoInP'>⁴Universidade Federal do Rio de Janeiro</p>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default FirstMainSection;