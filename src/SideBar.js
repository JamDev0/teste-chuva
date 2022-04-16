import './SideBar.css';
import SLACA13Png from './Images/13SLACA.png'

function SideBar()
{
    return(
        <section id='SideBar'>
            <div className='Header'>
                SLACA 2019
            </div>
            <img src={SLACA13Png}></img>
            <nav>
                <table>
                    <tr>
                        <td>Apresentação</td>
                    </tr>
                    <tr>
                        <td>Comitês</td>
                    </tr>
                    <tr>
                        <td>Autores</td>
                    </tr>
                    <tr>
                        <td>Eixos temáticos</td>
                    </tr>
                    <tr>
                        <td className='NavItemSelected'>Trabalhos</td>
                    </tr>
                    <tr>
                        <td>Contato</td>
                    </tr>
                </table> 
            </nav>
        </section>
    )
}

export default SideBar;