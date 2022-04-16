import './Footer.css';
import GaloaLogoPng from './Images/GaloaLogo.png';

function Footer()
{
    function BtnClick()
    {
        window.location.assign('https://galoa.com.br/')
    }
    return(
        <footer>
            <img src={GaloaLogoPng}></img>
            <button onClick={BtnClick}>Saiba Mais</button>
            <div>
                <p><strong>Preservar a mamória do evento e ampliar o acesso ao conhecimento científico</strong> gerado em eventos é a razão de ser da plataforma Galoá Proceedings.</p>
                <p>Os trabalhos publicados aqui têm maior alcance e ficam disponíveis para toda a comunidade científica, mantendo aceso o debate científico fomentado pelos encontros e aumentando o impacto do evento.</p>
            </div>
        </footer>
    )
}

export default Footer;