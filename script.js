const candyCrushGame = () => {
  const grid = document.querySelector('.grid')
  const scoreDisplay = document.getElementById('score')
  const width = 8
  const squares = []
  let score = 0
  const candyColors = [
    'url("./blue-candy.png")',
    'url("./yellow-candy.png")',
    'url("./green-candy.png")',
    'url("./orange-candy.png")',
    'url("./purple-candy.png")',
    'url("./red-candy.png")'
  ]

  const createBoard = () => {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement('div')
      square.setAttribute('draggable', true)
      square.setAttribute('id', i)
      let randomColor = Math.floor(Math.random() * candyColors.length)
      square.style.backgroundImage = candyColors[randomColor]
      grid.appendChild(square)
      squares.push(square)
    }
  }
  createBoard()
  scoreDisplay.textContent = score

  let squareIdBeingDragged
  let squareIdBeingReplaced

  const dragStart = (event) => {
    squareIdBeingDragged = parseInt(event.target.id)
  }
}
