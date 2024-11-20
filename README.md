---

# Word Matching Game

A fun and interactive word matching game where players match pairs of related words based on the configuration selected. Players select words, and the game verifies if the words match based on pre-defined word groups. Correct matches are rewarded with points, and the game progresses until all pairs are matched.

## Features
- **Customizable Difficulty**: Adjust the number of items and group size for different levels of difficulty.
- **Dynamic Gameplay**: The word list is shuffled every time the game starts.
- **Scoring System**: Points are awarded for correct matches.
- **Visual Feedback**: Words turn green when matched, and selections are reset if incorrect.
- **Mobile Friendly**: The game is responsive and works on both desktop and mobile devices.

## How to Play
1. Select two words from the grid.
2. If the words belong to the same group, they will be highlighted in green, and you will earn points.
3. If the words don’t match, they will reset after a short period.
4. Continue selecting pairs until all words are matched.
5. Keep track of your score in the top left corner.

## Installation

### Prerequisites
- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [Node.js Official Website](https://nodejs.org/).

### Steps to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/word-matching-game.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd word-matching-game
   ```

3. **Install the required dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

   This will launch the game in your browser at `http://localhost:3000`.

## Configuration Options
The game includes configurable options that affect the number of items and the size of each group:

- **`itemCount`**: Total number of items (words) in the game.
- **`groupSize`**: Number of words in each group that need to be matched.
- **`columns`**: Number of columns to arrange the words in the grid.

You can modify these settings to change the difficulty or layout of the game.

## Gameplay Example

1. **Words to Match**: "Valletta", "Malta", "New Delhi", "India", "Madagascar", "Antananarivo", etc.
2. **Match Criteria**: Players must match "Valletta" with "Malta", "New Delhi" with "India", and so on.

## Development

### Key Files and Components

- **`GameBoard.js`**: The main game logic, including the word matching logic, scoring, and resetting the game.
- **`WordCard.js`**: Displays each word in the grid and handles clicks to select words.
- **`generateWords()`**: Function used to generate the shuffled list of words and group them for matching.

### Folder Structure
```
/word-matching-game
├── /src
│   ├── /components
│   │   ├── GameBoard.js      # Main game logic and UI
│   │   ├── WordCard.js       # Individual word card display
│   ├── /utils
│   │   ├── generateWords.js  # Function to generate word list and group them
│   └── index.js              # Entry point to the app
├── /public
│   └── index.html            # HTML template for the app
├── package.json              # Project dependencies and scripts
└── README.md                 # This file
```

## Contributions
If you'd like to contribute to this project, feel free to open an issue or submit a pull request. Any contributions, suggestions, or improvements are highly appreciated!

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
