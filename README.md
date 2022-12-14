# Project: Battleship Game
An implementation of the classic battleship game.
Application developed using JavaScript, CSS3, and HTML5. Packaged using Webpack.
## [Live Link 👈](https://waldorfio.github.io/battleship-project/)

### Features
- Create a custom gameboard with various battleships	
- Verse an randomised AI
    - Interact with a hidden enemy gameboard to fire shots
- Instantly observe shots received on your own gameboard (from the bot)
- View a scoreboard tracking ships sunk
- Restart the game once a winner is announced

![](screencap.PNG)

### Goals
- Practice the basics of testing using Jest
- Practice working with Test Driven Development (TDD) concepts in mind
- Actively avoid running into the tightly-coupled problem, through the use of TDD

### Challenges Faced
- Learning Jest
- Actively applying TDD, over console.logs and DOM error traceback
- Actively developing pure functions

## How to run the app
### 1. Click the [hosted link](https://waldorfio.github.io/battleship-project/)

OR

### 2. Host it locally
1.	Either fork or download the app and open the folder in the cli
2.	Install all dependencies using the `npm i` command
3.	Start the web server using the `npm run local` command. The app will be served at http://localhost:8080/
4.	Go to  http://localhost:8080/ in your browser, and start playing the game!

## How to use the app
1. Enter your player name in the landing page
2. Hit the START GAME button
3. Cycle through and place your chosen battleships across your gameboard, in the x or y axis
4. Wait for the AI to place their respective battleships
5. Begin the game
    - Place markers on your enemies blank gameboard
    - 'Hits' will be marked on the gameboard
    - Each player is given 1 turn, with a 'hit' giving the player an extra turn

## Future Features
- Randomise the bots initial ship placement
- Giving the bot a bonus round if player hits ship
- AI with scaling difficulty
- Selection of axis for ship placement
- Rebuild codebase using react.js

## Dependencies
- CSS Loader
- File Loader
- Jest
- Webpack CLI
