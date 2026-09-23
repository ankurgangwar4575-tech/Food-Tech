import dataset from '../data/polymer_dataset.json';

// Configuration for KNN Model
const K = 3; // We want the top 3 nearest neighbors

/**
 * Normalizes user priorities into a 0-1 vector space
 * This creates the "Ideal Target Point" in 4D space
 */
const getTargetVector = (priorities) => [
  priorities.oxygen / 100,
  priorities.moisture / 100,
  priorities.strength / 100,
  priorities.transparency / 100
];

/**
 * Normalizes a material's properties into a 0-1 vector space
 */
const getMaterialVector = (material) => [
  material.scores.oxygenBarrier / 10,
  material.scores.moistureBarrier / 10,
  material.scores.strength / 10,
  material.scores.transparency / 10
];

/**
 * Calculates Euclidean Distance between two n-dimensional vectors
 * This is the core mathematical function of the K-Nearest Neighbors (KNN) algorithm.
 */
const euclideanDistance = (vec1, vec2) => {
  let sum = 0;
  for (let i = 0; i < vec1.length; i++) {
    // If a priority is 0, we don't care about the distance in that dimension
    if (vec1[i] === 0) continue; 
    
    // Standard Euclidean distance (absolute difference)
    const diff = vec1[i] - vec2[i];
    sum += Math.pow(diff, 2);
  }
  return Math.sqrt(sum);
};

export const getFullDataset = () => {
  return dataset;
}

/**
 * Executes the K-Nearest Neighbors (KNN) Recommendation Algorithm
 */
export const runKNNPrediction = (priorities) => {
  console.log("Running K-Nearest Neighbors (KNN) ML Inference...");
  
  const targetVector = getTargetVector(priorities);
  
  // Calculate Euclidean Distance for every polymer in the dataset
  const scoredDataset = dataset.map(material => {
    const materialVector = getMaterialVector(material);
    const distance = euclideanDistance(targetVector, materialVector);
    
    // Convert distance to a "Confidence Score" (0-100)
    // Distance of 0 = 100% match. Max possible distance in 4D (0-1) is 2.
    const confidenceScore = Math.max(0, Math.round((1 - (distance / 2)) * 100));

    // Apply a severe penalty if it fails a critical constraint
    let finalScore = confidenceScore;
    if (priorities.moisture > 80 && material.scores.moistureBarrier < 6) finalScore -= 40;
    if (priorities.oxygen > 80 && material.scores.oxygenBarrier < 6) finalScore -= 40;
    if (priorities.strength > 80 && material.scores.strength < 6) finalScore -= 40;
    
    return {
      ...material,
      matchScore: Math.max(0, finalScore),
      distance: distance
    };
  });

  // Sort by highest match score (closest neighbors)
  scoredDataset.sort((a, b) => b.matchScore - a.matchScore);

  // Return the K-Nearest Neighbors
  return scoredDataset.slice(0, K);
};
