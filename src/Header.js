import './Header.css';
import GlobeSvg from './Images/Globe.svg';
import DropDownSvg from './Images/DropDown.svg';

function Header()
{
    return(
        <div>
            <header id="PageHeader">
                <div id='PageTitle'>
                    <h3>Anais do Simpósio Latino Americano de Ciências de Alimentos</h3>
                    <h2>Anais do 13º Simpósio Latino Americano de Ciência de Alimentos</h2>
                    <h3>ISSN:1234-5678</h3>
                </div>
                <div id='SelectLangWrapper' tabIndex={0}>
                    <img src={GlobeSvg}></img>
                    <select id='SelectLang'>
                        <option>PT, BR</option>
                        <option>ENG, USA</option>
                    </select>
                    <img src={DropDownSvg}></img>
                </div>
                <div id='AcountInfos'>
                    <span className='WelcomeMsg'>Bem vindo!</span>
                    <span className='AcountEmail'>alguem12@galoascience.com</span>
                    <div className='Img'></div>
                </div>
            </header>
        </div>
    )
}

export default Header;