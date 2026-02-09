# Typing Speed Test - Frontend Mentor

A responsive typing speed test application that lets users measure their WPM and accuracy across passages of varying difficulty, built with Vue 3 and Tailwind CSS.

## Challenge Overview

Your challenge is to build out this typing speed test app and get it looking as close to the design as possible. We store the passage data in a local `data.json` file. You can use that to randomly select passages of varying difficulty.

## Portfolio Project

This project also serves as a portfolio demonstration showcasing:
- **Frontend Development**: Vue 3 with Composition API and Vuex for reactive component development
- **State Management**: Vuex store for managing game state, stats, and personal bests
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Real-Time Feedback**: Live WPM, accuracy, and character-level visual feedback while typing
- **Local Persistence**: localStorage for saving personal bests across sessions

## Features

### Test Controls
- Start a test by clicking the start button or by clicking the passage and typing
- Select a difficulty level (Easy, Medium, Hard) for passages of varying complexity
- Switch between "Timed (60s)" mode and "Passage" mode (timer counts up, no limit)
- Restart at any time to get a new random passage from the selected difficulty

### Typing Experience
- See real-time WPM, accuracy, and time stats while typing
- See visual feedback showing correct characters (green), errors (red/underlined), and cursor position
- Correct mistakes with backspace (original errors still count against accuracy)

### Results & Progress
- View results showing WPM, accuracy, and characters (correct/incorrect) after completing a test
- See a "Baseline Established!" message on their first test, setting their personal best
- See a "High Score Smashed!" celebration with confetti when beating their personal best
- Have their personal best persist across sessions via localStorage

### UI & Responsiveness
- View the optimal layout depending on their device's screen size
- See hover and focus states for all interactive elements

## Built With

- **Vue 3** - Progressive JavaScript framework
- **Vuex 4** - State management for Vue
- **Tailwind CSS v4** - Utility-first CSS framework for styling
- **Vite** - Fast build tool and development server

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository and navigate to the project directory
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Key Implementation Details

- **Real-Time Stats**: WPM and accuracy calculated live as the user types
- **Character-Level Feedback**: Each character is visually marked as correct (green), incorrect (red/underlined), or pending
- **Dual Test Modes**: Timed mode with a 60-second countdown, and Passage mode with no time limit
- **Difficulty Levels**: Passages sourced from a local `data.json` file, categorized into Easy, Medium, and Hard
- **Personal Best Tracking**: High scores persisted in localStorage with celebratory feedback on new records
- **Responsive Layout**: Adapts to mobile, tablet, and desktop screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational purposes as part of the Frontend Mentor challenge.

## Author

- Website - [franciscocristina.com](https://franciscocristina.com)
- LinkedIn - [francisco-cristina](https://www.linkedin.com/in/francisco-cristina)
- GitHub - [@gumballoon](https://github.com/gumballoon)
- Frontend Mentor - [@gumballoon](https://www.frontendmentor.io/profile/gumballoon)
- CSS Battle - [@gumballoon](https://cssbattle.dev/player/gumballoon)

## Acknowledgments

- Frontend Mentor for the design and challenge
- Vue.js team for the progressive JavaScript framework
- Tailwind CSS team for the utility-first CSS framework
