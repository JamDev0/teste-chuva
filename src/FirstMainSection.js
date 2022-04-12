import './FirstMainSection.css';
import DownloadIconSvg from './Images/DownloadIcon.svg';
import StarIconSvg from './Images/StarIcon.svg';
import DoiIconSvg from './Images/DoiIcon.svg';

function FirstMainSection()
{
    return(
        <div>
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

                <video>
                    <source src="/media/cc0-videos/flower.webm" type="video/webm"/>
                </video>
            </section>
        </div>
    )
}

export default FirstMainSection;