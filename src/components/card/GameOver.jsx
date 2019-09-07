import React from 'react';

const GameOver = ({ restartGame }) => (
    <div className="justify-center">
        <h1>Game Over!</h1>
        <h3> If you enjoyed plating this game, follow me @ShableHarris for more... </h3>
        <button className="restart-button" onClick={restartGame}>Restart Game</button>
    </div>
);

export default GameOver;