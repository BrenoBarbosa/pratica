import React from 'react';
import ImgTotti from '../../Imagens/totti.jpg';
import '../Marcos.css'


function Totti(){

    return( 

        <>
    

            <img src={ImgTotti} />

            <div className="p1">
                <p><b>Totti: </b>Maior jogador da história da Roma, Francesco Totti acumula recordes e conquistas na Itália.
                Desde 1992 na Roma, Totti estreou cedo pela equipe, aos 16 anos, em 93. De lá para cá, foram 300 gols marcados
                pela equipe, feito alcançado neste ano, títulos e grande idolatria. Pela Seleção Italiana, mesmo sem alcançar o 
                mesmo brilho, venceu a Copa do Mundo de 2006. Veja imagens marcantes da carreira do jogador. Lorem ipsum dolor sit
                amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.Ure reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>

        </>
    );
}

export default Totti;