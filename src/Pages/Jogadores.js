import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import imgCarg from '../Imagens/ll.png';
import './Jogadores.css';


function Jogadores(){

    return (
        <>
            <button className="b2 teste">
                <Link to="/Marcos/">MARCOS</Link>
            </button>

            <button className="b2 teste2">
                <Link to="/Totti/">TOTTI</Link>
            </button>

            <button className="b2 teste3">
                <Link to="/Rogerio/">ROGERIO</Link>
            </button>

            <div className='carregar'>
                <img src={imgCarg} />
                <p>Selecione algum jogador dos botões do header para avançarmos</p>
            </div>
        </>
    );
}

export default Jogadores;