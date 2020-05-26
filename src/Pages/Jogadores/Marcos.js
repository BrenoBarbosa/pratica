import React from 'react';
import ImgMarcos from '../../Imagens/marcos.jpg';
import '../Marcos.css'


function Marcos(){

    return( 

        <>
    

            <img src={ImgMarcos} />

            <div className="p1">
                <p><b>Marcos:</b> Durante toda a carreira, Marcos esteve no Palmeiras. Daquele dia 16 de maio de 92, há 28 anos, até sua última partida,
                no dia 18 de setembro de 2011, foram 532 partidas oficiais, só sendo superado por Leão, com 617. Ainda vale lembrar, claro,
                o pentacampeonato conquistado com Felipão e a Seleção Brasileira em 2002.
                Pouco tempo após a queda do Palmeiras para a Série B do Campeonato Brasileiro, Marcos esteve próximo de se transferir para a Inglaterra, com uma oferta do Arsenal.
                Mas ele recusou e preferiu disputar a segunda divisão pelo clube, ato que fortaleceu ainda mais seu status de ídolo.</p>
            </div>

        </>
    );
}

export default Marcos;