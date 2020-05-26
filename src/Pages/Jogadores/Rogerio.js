import React from 'react';
import ImgRogerio from '../../Imagens/rogerio.jpg';
import '../Rogerio.css'


function Rogerio(){

    return( 

        <>
    

            <img src={ImgRogerio} />

            <div className="p1">
                <p><b>Rogério Ceni: </b>Mais conhecido como eterno reserva do goleiro Marcos, Ceni coleciona alguns títulos.
                É considerado um dos maiores ídolos do São Paulo FC, o arqueiro disputou 1237 partidas pelo São Paulo,
                marcou 131 gols e conquistou 18 títulos, dentre eles o Mundial de Clubes de 2005 e os Campeonatos Brasileiros 
                de 2006, 2007 e 2008. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore 
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
                ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.m 
                </p>
            </div>

        </>
    );
}

export default Rogerio;