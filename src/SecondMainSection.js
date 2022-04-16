import './SecondMainSection.css';
import CreateIconSvg from './Images/Create.svg';
import TopicIcon1Svg from './Images/TopicIcon1.svg';
import TopicIcon2Svg from './Images/TopicIcon2.svg';
import TopicIcon3Svg from './Images/TopicIcon3.svg';
import ItalicIconSvg from './Images/ItalicIcon.svg';
import BoldIconSvg from './Images/BoldIcon.svg'
import SendedIconSvg from './Images/SendedIcon.svg'
import Topic from './Topic';
import { useEffect, useState } from 'react';

function SecondMainSection()
{
    const [CallToActionOfComentsElement, setCallToActionOfComentsElement] = useState(null);

    const [NewCreatedTopic, setNewCreatedTopic] = useState(null);

    const [ResumeHeightStats, setResumeHeightStats] = useState('false');

    useEffect(()=>{
        setCallToActionOfComentsElement(RenderCallToActionOfComentsElement);
    }, []);

    function RenderCallToActionOfComentsElement()
    {
        setCallToActionOfComentsElement(()=>{
            return(
                <div className='CallToActionOfComents'>
                    <h2>Compartilhe suas ideias ou dúvidas com os autores!</h2>
    
                    <div className='Images'>
                        <img src={TopicIcon1Svg}></img>
                        <img src={TopicIcon2Svg}></img>
                        <img src={TopicIcon3Svg}></img>
                    </div>
    
                    <p>Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus questionamentos ou sugestões para o autor!</p>
    
                    <div className='Button' onClick={RenderCreatTopicForm}>
                        <img src={CreateIconSvg}></img>
                        <span>criar tópico</span>
                    </div>
                </div>
            )
        })
    }

    function RenderCreatTopicForm()
    {
        setCallToActionOfComentsElement(()=>{
            return(
                <div className='CreateTopicForm'>
                    <h3>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</h3>
    
                    <label>Assunto</label>
                    <input type='text' placeholder='Defina um tópico sucinto para notificar os autores...'></input>

                    <label>Conteúdo</label>
                    <div className='WrapperInputTextWithEditing'>
                        <textarea></textarea>
                        <div>
                            <div>
                                <img src={BoldIconSvg}></img>
                                <img src={ItalicIconSvg}></img>
                            </div>
                            <button onClick={RenderCreateTopicStatusSend}>Enviar</button>
                        </div>
                    </div>
                    <button onClick={RenderCallToActionOfComentsElement}>Cancelar</button>
                </div>
            )
        });

        setNewCreatedTopic(null)
    }

    function RenderCreateTopicStatusSend()
    {
        setCallToActionOfComentsElement(()=>{
            return(
                <div className='TopicStatusSend'>
                    <h2>Seu tópico foi enviado com sucesso! :D</h2>

                    <p>Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</p>

                    <a>Descubra outros trabalhos!</a>

                    <div className='Button' onClick={RenderCreatTopicForm}>
                        <span>criar novo tópico</span>
                    </div>
                </div>
            )
        });

        setNewCreatedTopic(()=>{
            return(
                <div className='TopicSended'>
                    <Topic Title='Assunto da pergunta aparece aqui' Maker='Carlos Henrique Santos' Content='Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...' LikeAmount='1' AnswerAmount='1'/>
                    <div>
                        <img src={SendedIconSvg}></img>
                        <h2>Aguardando feedback dos autores</h2>
                        <a onClick={RenderCreatTopicForm}>Editar tópico</a>
                    </div>
                </div>
            )
        })
    }

    function TogleResumeHeightStats()
    {
        if(document.querySelector('#ResumeText').getAttribute('expanded') == 'false')
        {
            setResumeHeightStats('true');
        }
        else
        {
            setResumeHeightStats('false');
        }
    }

    return(
        <section id='SecondMainSection'>
            <div className='Resume'>
                <h2>Resumo</h2>
                <div id='ResumeText' expanded={ResumeHeightStats} onClick={TogleResumeHeightStats}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.
                    </p>

                    <p>
                        Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat feugiat. Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id. Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit non, suscipit interdum turpis. Etiam finibus urna libero, eget interdum eros volutpat ullamcorper. Pellentesque et pretium lorem. Aenean interdum quis diam ac porttitor. Cras nec ipsum pulvinar, pharetra libero non, ornare enim. Etiam in laoreet odio.
                    </p>

                    <p>
                        Nam eget tristique elit, at fermentum tellus. Mauris scelerisque ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus. Integer scelerisque neque dui, in lacinia erat molestie eu. Phasellus maximus dui eget lacus porta tempor. Ut ex nibh, dignissim quis purus semper, efficitur facilisis turpis. Praesent blandit elementum ultricies. Aliquam sit amet enim sit amet nulla pulvinar lobortis consectetur non odio. Phasellus at lacus hendrerit, vulputate nisi sit amet, viverra mauris. Etiam eu scelerisque orci. Quisque sagittis, mi vitae pharetra iaculis, orci elit eleifend massa, eu posuere mauris odio id odio. Morbi eu libero luctus, consectetur lorem vel, interdum sapien. Aenean in porta arcu. Maecenas eu maximus massa.
                    </p>

                    <p>
                        Praesent velit dolor, dignissim sed quam ac, efficitur porta justo. Pellentesque porta pharetra felis ut hendrerit. Nulla facilisi. Aliquam erat volutpat. Nunc sit amet faucibus quam. Maecenas dapibus luctus dolor at viverra. Duis nec fringilla libero. Duis risus nibh, viverra ac orci nec, iaculis dictum sem. Aliquam at malesuada arcu. Aliquam erat volutpat. Donec varius ipsum purus, ut vehicula purus placerat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </p>
                </div>
            </div>

            <div className='Discussion'>
                <h2>Discussões</h2>

                <div className='Topics'>
                    {CallToActionOfComentsElement}

                    {NewCreatedTopic}

                    <Topic Title='Assunto da pergunta aparece aqui' Maker='Carlos Henrique Santos' Content='Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...' LikeAmount='1' AnswerAmount={3}/>

                    <Topic Title='Assunto da pergunta aparece aqui' Maker='Carlos Henrique Santos' Content='Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...' LikeAmount='1' AnswerAmount='1'/>
                </div>
            </div>
        </section>
    )
}

export default SecondMainSection;