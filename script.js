const candyCrushGame = () => {
  const grid = document.querySelector('.grid')
  const scoreDisplay = document.getElementById('score')
  const movesDisplay = document.getElementById('moves')
  const width = 8
  const squares = []
  let score = 0
  let moves = 20
  let gameLoop

  const bellsSound = new Audio('./bells.mp3')
  bellsSound.load()

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
  scoreDisplay.innerHTML = score
  movesDisplay.innerHTML = moves

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
  }

  const dragEnd = () => {
    const validMoves = [
      squareIdBeingDragged - 1,
      squareIdBeingDragged - width,
      squareIdBeingDragged + 1,
      squareIdBeingDragged + width
    ]
    const validMove = validMoves.includes(squareIdBeingReplaced)
    // Prevent row wrapping
    const isLeftEdge = squareIdBeingDragged % width === 0
    const isRightEdge = squareIdBeingDragged % width === width - 1

    if (
      (isLeftEdge && squareIdBeingReplaced === squareIdBeingDragged - 1) ||
      (isRightEdge && squareIdBeingReplaced === squareIdBeingDragged + 1)
    ) {
      return
    }
    if (validMove) {
      const colorBeingDragged =
        squares[squareIdBeingDragged].style.backgroundImage
      const colorBeingReplaced =
        squares[squareIdBeingReplaced].style.backgroundImage
      squares[squareIdBeingDragged].style.backgroundImage = colorBeingReplaced
      squares[squareIdBeingReplaced].style.backgroundImage = colorBeingDragged

      moves--
      movesDisplay.textContent = moves

      if (moves === 0) {
        alert('Game Over!')
        clearInterval(gameLoop)
        removeEventListeners()
      }

      checkForMatches()
    }
  }

  const addEventListener = () => {
    squares.forEach((square) => {
      square.addEventListener('dragstart', dragStart)
      square.addEventListener('dragover', dragOver)
      square.addEventListener('dragenter', dragEnter)
      square.addEventListener('drop', dragDrop)
      square.addEventListener('dragend', dragEnd)
    })
  }

  const removeEventListeners = () => {
    squares.forEach((square) => {
      square.removeEventListener('dragstart', dragStart)
      square.removeEventListener('dragover', dragOver)
      square.removeEventListener('dragenter', dragEnter)
      square.removeEventListener('drop', dragDrop)
      square.removeEventListener('dragend', dragEnd)
    })
  }

  addEventListener()

  const checkForMatches = () => {
    let foundMatch = false
    // Row of Four
    for (let i = 0; i < 64; i++) {
      const rowOfFour = [i, i + 1, i + 2, i + 3]
      const notValid = [
        5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53,
        54, 55, 61, 62, 63
      ]
      if (notValid.includes(i)) continue
      let decidedColor = squares[i].style.backgroundImage
      if (
        decidedColor &&
        rowOfFour.every(
          (index) => squares[index].style.backgroundImage === decidedColor
        )
      ) {
        rowOfFour.forEach(
          (index) => (squares[index].style.backgroundImage = '')
        )
        score += 4
        foundMatch = true
        bellsSound.play()
      }
    }

    // Column of Four
    for (let i = 0; i < 32; i++) {
      const columnOfFour = [i, i + width, i + width * 2, i + width * 3]
      let decidedColor = squares[i].style.backgroundImage
      if (
        decidedColor &&
        columnOfFour.every(
          (index) => squares[index].style.backgroundImage === decidedColor
        )
      ) {
        columnOfFour.forEach(
          (index) => (squares[index].style.backgroundImage = '')
        )
        score += 4
        foundMatch = true
        bellsSound.play()
      }
    }

    // Row of three
    for (let i = 0; i < 64; i++) {
      const rowOfThree = [i, i + 1, i + 2]
      const notValid = [
        6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 62, 63
      ]
      if (notValid.includes(i)) continue

      let decidedColor = squares[i].style.backgroundImage
      if (
        decidedColor &&
        rowOfThree.every(
          (index) => squares[index].style.backgroundImage === decidedColor
        )
      ) {
        rowOfThree.forEach(
          (index) => (squares[index].style.backgroundImage = '')
        )
        score += 3
        foundMatch = true
        bellsSound.play()
      }
    }

    // Column of three
    for (let i = 0; i < 47; i++) {
      const columnOfThree = [i, i + width, i + width * 2]
      let decidedColor = squares[i].style.backgroundImage
      if (
        decidedColor &&
        columnOfThree.every(
          (index) => squares[index].style.backgroundImage === decidedColor
        )
      ) {
        columnOfThree.forEach(
          (index) => (squares[index].style.backgroundImage = '')
        )
        score += 3
        foundMatch = true
        bellsSound.play()
      }
    }

    if (foundMatch) scoreDisplay.innerHTML = score
    else {
    }
  }
  window.setInterval(() => {
    checkForMatches()
  }, 100)
}
candyCrushGame()
