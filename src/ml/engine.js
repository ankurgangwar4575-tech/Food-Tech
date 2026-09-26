import dataset from '../data/polymer_dataset.json';

const K = 3; 


const getTargetVector = (priorities) => [
  priorities.oxygen / 100,
  priorities.moisture / 100,
  priorities.strength / 100,
  priorities.transparency / 100
];


const getMaterialVector = (material) => [
  material.scores.oxygenBarrier / 10,
  material.scores.moistureBarrier / 10,
  material.scores.strength / 10,
  material.scores.transparency / 10
];


const euclideanDistance = (vec1, vec2) => {
  let sum = 0;
  for (let i = 0; i < vec1.length; i++) {
    if (vec1[i] === 0) continue; 
    
    const diff = vec1[i] - vec2[i];
    sum += Math.pow(diff, 2);
  }
  return Math.sqrt(sum);
};

export const getFullDataset = () => {
  return dataset;
}


export const runKNNPrediction = (priorities) => {
  console.log("Running K-Nearest Neighbors (KNN) ML Inference...");
  
  const targetVector = getTargetVector(priorities);
  
  const scoredDataset = dataset.map(material => {
    const materialVector = getMaterialVector(material);
    const distance = euclideanDistance(targetVector, materialVector);
    
   
    const confidenceScore = Math.max(0, Math.round((1 - (distance / 2)) * 100));

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

  scoredDataset.sort((a, b) => b.matchScore - a.matchScore);

  return scoredDataset.slice(0, K);
};
