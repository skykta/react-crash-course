import { useState } from "react"
const initialGameBorad = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]


export default function GameBoard({ playerTurn, playerTurnSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBorad)

    function handleTurnSelect(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
            updatedBoard[rowIndex][colIndex] = playerTurnSymbol
            return updatedBoard
        })

        playerTurn()
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                        <button onClick={() => handleTurnSelect(rowIndex, colIndex)}>{playerSymbol}</button>
                    </li>
                    )}
                </ol>
            </li>
            )}
        </ol>
    )
}