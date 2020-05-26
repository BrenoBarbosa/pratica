import React from 'react';
import ImgHome from '../Imagens/1.jpg';
import './Home.css';

function Home(){

    return(
        <>
    
            <img src={ImgHome} className="imgTamanho"></img>
            <p>
            Em um tempo em que o futebol é cada vez mais tratado como um negócio, o amor à camisa e a fidelidade aos clubes é algo cada vez mais raro
            no mundo da bola. No entanto houveram alguns e ainda existem poucos atletas que ficaram marcados por vestir apenas o manto de uma equipe,
            em muitos casos trocando contratos milionários no exterior por ter seu nome eternizado na história daquele time. Portanto é de extrema importância
            exaltar os jogadores que vestiram a camisa de um único clube na carreira, monstros sagrados dos gramados que mantém a chama acesa do amor à
            bandeira e ao escudo de uma só instituição. A eles todos o nosso profundo RESPEITO!
            </p>

        </>
    );
}

export default Home;