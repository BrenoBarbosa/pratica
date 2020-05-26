import React from 'react';
import './Main.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './Home';
import Jogadores from './Jogadores';
import Marcos from './Jogadores/Marcos';
import Totti from './Jogadores/Totti';
import Rogerio from './Jogadores/Rogerio';

function Main(){



    return(
        <>
        <BrowserRouter>
            <header>
                <nav>
                    <ul>
                        <li>
                            <button className="b">
                                <Link to="/">HOME</Link>
                            </button>
                        </li>

                        <li>
                            <button className="b">
                                <Link to="/Jogadores/">JOGADORES</Link>
                            </button>
                        </li>
                    </ul>

                    <div>
                        <Route path="/Jogadores/" component={Jogadores}/>
                    </div>               
                </nav>
            </header>

            <main>
                <div className="content"> 
                    <Route path="/" exact component={Home}/>
                </div>

                <div>
                    <Route path="/Marcos/" component={Marcos}/>
                </div>  

                <div>
                    <Route path="/Totti/" component={Totti}/>
                </div> 

                <div>
                    <Route path="/Rogerio/" component={Rogerio}/>
                </div>  

            </main>

            <footer>
                <p>Criado pelo alunos: Breno Barbosa e Luan Kennedy</p>
            </footer>
        </BrowserRouter>
        </>
    );

}

export default Main;