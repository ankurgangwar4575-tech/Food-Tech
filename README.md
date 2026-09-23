# MaterialAI - AI-Driven Polymer Design

MaterialAI is an interactive web dashboard that utilizes Machine Learning to recommend the optimal polymer structure for food packaging. By using a K-Nearest Neighbors (KNN) algorithm, the application calculates the Euclidean distance between a user's specific packaging requirements (O2 barrier, moisture barrier, strength, transparency) and a large dataset of polymer variations.

## Features
- **Real-time ML Inference:** Adjust sliders to immediately see the KNN model recalculate the nearest neighbors.
- **Large Dataset:** Includes a curated dataset of 64 polymer variations (PET, HDPE, PLA, EVOH, etc.) with realistic parametric scores.
- **Predictive Scoring:** Translates mathematical distance into a 0-100 "KNN Match Score".
- **Modern UI:** Built with a fully responsive, bio-tech themed dashboard using Tailwind CSS.

## Technology Stack
- **Frontend Framework:** React.js (Vite)
- **Styling:** Tailwind CSS v3
- **Machine Learning Engine:** Custom KNN Algorithm (`src/ml/engine.js`)
- **Icons:** Heroicons (via SVG)

## How to Run Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Setup

1. **Clone or Extract the Project:**
   Extract the provided ZIP file or clone the repository to your local machine.

2. **Navigate to the Project Directory:**
   Open your terminal and navigate to the project folder:
   ```bash
   cd Food
   ```

3. **Install Dependencies:**
   Run the following command to install all necessary packages (including React and Vite):
   ```bash
   npm install
   ```

4. **Start the Development Server:**
   Launch the app by running:
   ```bash
   npm run dev
   ```

5. **View the Application:**
   Open your browser and navigate to `http://localhost:5174` (or the port specified in your terminal).

## Project Structure
- `src/App.jsx` - Main application logic and state management.
- `src/ml/engine.js` - Contains the K-Nearest Neighbors algorithm and Euclidean distance math.
- `src/data/polymer_dataset.json` - The dataset of 64 polymer formulations used for ML training.
- `src/components/` - UI components (InputPanel, ResultsPanel, MaterialTable).

## Academic Use
This project was designed for academic purposes in Food Science & Technology to demonstrate the viability of using predictive computational models in material science engineering.
