# Campo Minato

## Description 

### Delivery

We copy the grid made yesterday into the new repo and add the game logic (attention: you don't need to copy the entire exercise folder but only the index.html, and the js/css/ folders with the related scripts and style sheets, to avoid problems with git initialization).

The computer must generate **16 random numbers** in the same range as the chosen difficulty: *the bombs*. **Warning**: a maximum of one bomb can be placed in the same cell, therefore there cannot be two identical numbers in the bomb array.

The user then clicks on a cell: if the number is present in the list of generated numbers - we have stepped on a bomb - the cell turns red and the *game ends*. Otherwise the clicked cell turns blue and the user can continue clicking on the other cells.

The *game ends* when the player clicks on a bomb or when he reaches the maximum possible number of numbers allowed (i.e. when he has revealed all the cells that are not bombs).

At the end of the game the software must communicate the score, that is, the number of times the user clicked on a cell that was not a bomb.


#### BONUS 

- Add a `select` next to the generate button, which provides a choice between three different difficulty levels: difficulty 1 ⇒ 100 boxes, with a number between 1 and 100, divided into 10 boxes by 10 rows; difficulty 2 ⇒ 81 boxes, with a number between 1 and 81, divided into 9 boxes by 9 rows; - difficulty 3 ⇒ 49 boxes, with a number between 1 and 49, divided into 7 boxes by 7 rows;

- When you click on a bomb and the game ends, prevent yourself from clicking on other cells. Avoid double-clicking on the same cell

- When you click on a bomb and the game ends, the software discovers all the hidden bombs.