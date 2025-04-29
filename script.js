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

  const dragOver = (event) => {
    event.preventDefault()
  }

  const dragEnter = (event) => {
    event.preventDefault()
  }

  const dragDrop = (event) => {
    squareIdBeingReplaced = parseInt(event.target.id)
    const colorBeingDragged =
      squares[squareIdBeingDragged].style.backgroundImage
    const colorBeingReplaced =
      squares[squareIdBeingReplaced].style.backgroundImage

    // Swap colors
    squares[squareIdBeingDragged].style.backgroundImage = colorBeingReplaced
    squares[squareIdBeingReplaced].style.backgroundImage = colorBeingDragged
  }

  const dragEnd = () => {
    const validMoves = [
      squareIdBeingDragged - 1,
      squareIdBeingDragged - width,
      squareIdBeingDragged + 1,
      squareIdBeingDragged + width
    ]
    const validMove = validMoves.includes(squareIdBeingReplaced)
    if (!validMove) {
      // Reset colors if the move is invalid
      const colorBeingDragged =
        squares[squareIdBeingDragged].style.backgroundImage
      const colorBeingReplaced =
        squares[squareIdBeingReplaced].style.backgroundImage
      squares[squareIdBeingReplaced].style.backgroundImage = colorBeingReplaced
      squares[squareIdBeingDragged].style.backgroundImage = colorBeingDragged
    } else {
      // Check for matches after a valid move
      checkForMatches()
    }
  }

  squares.forEach((square) => {
    square.addEventListener('dragstart', dragStart)
    square.addEventListener('dragover', dragOver)
    square.addEventListener('dragenter', dragEnter)
    square.addEventListener('drop', dragDrop)
    square.addEventListener('dragend', dragEnd)
  })
}
