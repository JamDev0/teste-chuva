import { useEffect, useState } from 'react';
import './Topic.css';
import MoreInfoSvg from './Images/MoreInfo.svg';
import LikeIconSvg from './Images/LikeIcon.svg';
import AnswerIconSvg from './Images/AnswerIcon.svg';

function Topic(Props)
{
    const [Title, setTitle] = useState(Props.Title);
    const [Maker, setMaker] = useState(Props.Maker);
    const [Content, setContent] = useState(Props.Content);
    const [LikeAmount, setLikeAmount] = useState(Props.LikeAmount);
    const [AnswerAmount, setAnswerAmount] = useState(Props.AnswerAmount);
    const [Coments, setComents] = useState();
    
    let Cont = 0;
    
    useEffect(()=>{
    }, []);

    function AlternateComents()
    {
        if(!document.querySelector('#Answers') && AnswerAmount == 3)
        {
            setComents(()=>{
                return(
                    <div id='Answers'>
                        <div>
                            <h3>Adriano da Silva</h3>
                            <div className='Token'><span>Autor</span><img src={AnswerIconSvg}></img></div>
                            <p>Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.</p>
                        </div>

                        <div className='SubAnswer'>
                            <h3>Carmila Ferreira Andrade</h3>
                            <p>Consegui entender melhor agora! Parece que a variação da análise da dimensão e impacto de processo formativo situado impacto de processo formativo.</p>

                            <p>Obrigada pela resposta, muito interessante o seu trabalho! </p>
                        </div>

                        <div>
                            <h3>Carmila Ferreira Andrade</h3>
                            <div className='Token'><span>Coautor</span><img src={AnswerIconSvg}></img></div>
                            <p>Também ínteressante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.</p>

                            <p>Situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.</p>
                        </div>
                    </div>
                )
            })

            Cont = 1;
        }
        else
        {
            console.log('oefhdsfhdj')

            setComents(null)
            Cont = 0;
        }
    }

    return(
        <section id='Topic'>
            <div className='Coment'>
                <h2>{Title}</h2>
                <h3>{Maker}</h3>
                <p>{Content}</p>

                <div className='Interactions'>
                    <img className='MoreInfo' src={MoreInfoSvg}></img>
                    <div className='Like'><img src={LikeIconSvg}></img></div>
                    <span>{LikeAmount} like</span>
                    <span onClick={AlternateComents}>{AnswerAmount} resposta</span>
                </div>
            </div>
            {Coments}
        </section>
    )
}

export default Topic;