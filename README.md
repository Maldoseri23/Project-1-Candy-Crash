# Project 1

## Date: 24/4/2025

### By: Maryam Aldoseri

---

### **_Description_**
#### The aim of this project is to build a simple Candy Crush-style game using HTMl, CSS and JavaScript. The game creates an 8x8 grid of colorful candy images that players can drag and swap with adjacent candies. When three or four candies of the same color align in a row or column, they disappear, and the player’s score increases. The candies above then fall down to fill empty spaces, and new candies appear at the top, allowing continuous gameplay.

---

### **_How to Get Started_**

#### Pseudocode for the overall game play
#### 1.	Create HTML CSS JS files
#### 2.	Setup HTML Structure 
#### 3.	Create a grid container.
#### 4.	Style CSS or colors/images
#### 5.	In script.Js Create gameBoard function
#### 6.	Use for loop to create 64 divs each representing a candy with a random color
#### 7.	. Each div has a unique ID to be able to drag it
#### 8.	create game initialization function 
#### 9.	Select the grid element (the game board) and the score display.
#### 10.	Sets the board width to 8 (for an 8x8 grid).
#### 11.	Initializes an array squares to hold the candy squares and a score variable.
#### 12.	Defines candyColors as an array of image URLs representing different candy types example= https://w7.pngwing.com/pngs/83/750/png-transparent-candy-crush-saga-candy-crush-soda-saga-candy-crush-jelly-saga-fudge-candy-match-thumbnail.png
#### 13.	Each candy square gets event listeners for drag-and-drop events: dragstart, dragend, dragover, dragenter, dragleave, and drop
#### 14.	 Create function dragStart: Stores the color and ID of the dragged candy.
#### 15.	Create function dragDrop: Swaps the colors of the dragged and dropped candies.
#### 16.	Create function dragEnd: Checks if the move is valid (only adjacent swaps allowed). If not, it reverts the swap.
#### 17.	Create function checkRowForFour and checkColumnForFour: Look for four candies of the same color in a row or column.
#### 18.	Create function checkRowForThree and checkColumnForThree: Look for three candies of the same color.
#### 19.	When a match is found, the matched candies are cleared (set to blank), and the score is updated
#### 20.	Create function moveIntoSquareBelow moves candies down into empty spaces and fills the top row with new random candies.for loop
#### 21.	Create function setInterval that runs every 100 milliseconds to: check for new matches, move candies down to fill gaps, continuously update the board and score.



---

---

### **_Credits_**

#### Place Holder: [Place Holder](http://www.PlaceHolder.com)

---
