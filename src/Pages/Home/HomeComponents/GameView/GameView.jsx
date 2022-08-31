import React from "react";
import './GameView.scss';

const GameView = (props) =>{
    const {tplayers, nplayers, avg, session, name, status, link} = props;

    return(
        <div className="gameview-wrapper">
            <div className="gameview-game">
                <img className="gameview__img" src={`${link}`} alt="" />
                <p className="gameview__name">{name}</p>
            </div>
            <div className="table-wrapper">
                <table className="table-info">

                    <tr className="table__item">
                        <td className="table__item__tittle">Total Player</td>
                        <td className="table__item__value">{tplayers}</td>
                    </tr>
                    <tr className="table__item">
                        <td className="table__item__tittle">New Player</td>
                        <td className="table__item__value">{nplayers}</td>
                    </tr>
                    <tr className="table__item">
                        <td className="table__item__tittle">Avg.Price</td>
                        <td className="table__item__value">{avg}</td>
                    </tr>
                    <tr className="table__item">
                        <td className="table__item__tittle">Session</td>
                        <td className="table__item__value">{session}</td>
                    </tr>

                </table>
            </div>
            <div className="game-status">
                <p className="game-status__value">{status}</p>
            </div>
        </div>
    )
}

export default GameView;