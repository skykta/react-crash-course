import { useState } from "react"

import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"
import Log from "./components/Log.jsx"
import { WINNING_COMBINATIONS } from "./winning-combinations.js"

const initialGameBorad = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X'

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }

  return currentPlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([])
  // const [hasWinner, setHasWinnner] = useState(false)
  // const [activePlayer, setActivePlayer] = useState('X')
  const activePlayer = deriveActivePlayer(gameTurns)

  let gameBoard = initialGameBorad

  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square

    gameBoard[row][col] = player
  }

  for (const combination of WINNING_COMBINATIONS) {
    // const firstSquareSymbol = gameBoard[]
    // const secondSquareSymbol
    // const thirdSquareSymbol
  }

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns)

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns]

      return updatedTurns
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isPlaying={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isPlaying={activePlayer === 'O'} />
        </ol>
        <GameBoard playerTurn={handleSelectSquare}
          board={gameboard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
