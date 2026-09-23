# Project Report: AI-Driven Polymer Design for Food Packaging (MaterialAI)

**Student Name:** [Senmangba Jamir]  
**Course/Subject:** [Food Science & Technology]  
**Reg No:** [20242044]  

---

## 1. Introduction & Aim
The primary aim of this project is to solve a complex multi-variable optimization problem in material science: finding the perfect balance between packaging performance and sustainability for food products. Traditionally, selecting a polymer for food packaging requires extensive trial-and-error laboratory testing to balance variables like oxygen barriers, moisture barriers, and mechanical strength.

This project, titled **MaterialAI**, serves as a proof-of-concept demonstrating how Artificial Intelligence and Machine Learning (AI/ML) concepts can be applied to rapidly predict and recommend optimal polymer structures based on real-time parametric constraints.

## 2. Methodology & System Architecture
The project was developed as a modern, interactive web application using React.js and Tailwind CSS. The architecture is divided into three main components:

1.  **Parametric Input System:** A dashboard interface allowing users to define specific food packaging constraints (e.g., Target Product, Form Factor) and assign weighted priorities (0% to 100%) to specific material properties such as O₂ Transmission Barrier, Moisture Vapor Barrier, and Tensile Strength.
2.  **Predictive Scoring Engine (The ML Model):** At the core of the application is a **K-Nearest Neighbors (KNN)** Machine Learning algorithm. When the user sets their parametric constraints, the algorithm normalizes these inputs into a multi-dimensional target vector.
3.  **Intelligent Output & Analytics:** The KNN algorithm calculates the Euclidean distance between the target vector and every polymer in our curated dataset. It outputs the top K (closest) materials, translating their mathematical proximity into a "KNN Match Score". The dashboard highlights these top-ranking materials and provides a transparent breakdown of why they were selected.

## 3. Implementation Details
The core logic relies on a custom implementation of the K-Nearest Neighbors (KNN) algorithm using Euclidean distance over a 4-dimensional feature space (Oxygen, Moisture, Strength, Transparency).

**Key Code Snippet (KNN Euclidean Distance Calculation):**
```javascript
const euclideanDistance = (targetVector, materialVector) => {
  let sum = 0;
  for (let i = 0; i < targetVector.length; i++) {
    if (targetVector[i] === 0) continue; // Ignore unweighted dimensions
    
    const diff = targetVector[i] - materialVector[i];
    if (diff > 0) {
      sum += Math.pow(diff, 2);
    }
  }
  return Math.sqrt(sum);
};

export const runKNNPrediction = (priorities) => {
  // Execute KNN to find the nearest matches in the polymer dataset...
}
```

## 4. User Interface Design
The user interface was designed following a "Bio-Tech" aesthetic, prioritizing usability and data visualization. 
*(Note for Hard Copy: Insert 2-3 screenshots of the dashboard here showing the interface before and after moving the sliders).*

## 5. Conclusion
MaterialAI successfully demonstrates the viability of using predictive computational models to assist in material science engineering. By digitizing the material selection process, the system can significantly reduce the time and cost associated with developing new food packaging solutions while ensuring critical preservation requirements are met.
