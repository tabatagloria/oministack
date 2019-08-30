import React from 'react';
import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';
import './Main.css';

export default function Main({match}){
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" />
                    <footer>
                        <strong>Filipe Deschamps</strong>
                        <p>Programador e cantor sertanejo nos tempos livres.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" />
                    <footer>
                        <strong>Filipe Deschamps</strong>
                        <p>Programador e cantor sertanejo nos tempos livres.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" />
                    <footer>
                        <strong>Filipe Deschamps</strong>
                        <p>Programador e cantor sertanejo nos tempos livres.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" />
                    <footer>
                        <strong>Filipe Deschamps</strong>
                        <p>Programador e cantor sertanejo nos tempos livres.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}