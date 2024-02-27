import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Players from "./components/Players"



function App() {

  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player" >
        <Players initialName="Player-1" symbol="X" isActive={activePlayer === 'X'} />
        <Players initialName="Player-2" symbol="Y" isActive={activePlayer === 'O'} />
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
    </main>
  )
}

export default App
