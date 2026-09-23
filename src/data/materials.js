// Data for the PolymerIQ mock engine

export const materialsDatabase = [
  {
    id: 'hdpe',
    name: 'HDPE',
    fullName: 'High-density polyethylene',
    primaryUse: 'Milk bottles • caps',
    scores: {
      oxygenBarrier: 2,   // Low
      moistureBarrier: 9, // Very high
      strength: 6         // Medium
    },
    recycling: 'Widely recycled',
    evidence: {
      level: 'High',
      source: 'PubChem'
    },
    description: 'Excellent moisture barrier and chemical resistance, oxygen barrier is limited.'
  },
  {
    id: 'pp',
    name: 'PP',
    fullName: 'Polypropylene',
    primaryUse: 'Tubs • films • caps',
    scores: {
      oxygenBarrier: 2,   // Low
      moistureBarrier: 9, // Very high
      strength: 7         // Medium-high
    },
    recycling: 'Recyclable',
    evidence: {
      level: 'High',
      source: 'PubChem'
    },
    description: 'Very good moisture resistance and useful heat tolerance, lower oxygen barrier.'
  },
  {
    id: 'pet',
    name: 'PET',
    fullName: 'Polyethylene terephthalate',
    primaryUse: 'Bottles • trays',
    scores: {
      oxygenBarrier: 7,   // High
      moistureBarrier: 7, // High
      strength: 8         // High
    },
    recycling: 'Widely recycled',
    evidence: {
      level: 'High',
      source: 'PubChem'
    },
    description: 'Clear and strong with a good gas barrier, less suited to high-heat filling unless modified.'
  },
  {
    id: 'evoh',
    name: 'EVOH',
    fullName: 'Ethylene vinyl alcohol',
    primaryUse: 'Barrier layer • laminate',
    scores: {
      oxygenBarrier: 10,  // Very high
      moistureBarrier: 2, // Low
      strength: 5         // Medium
    },
    recycling: 'Multilayer dependent',
    evidence: {
      level: 'Medium',
      source: 'FDA FCS'
    },
    description: 'Outstanding oxygen barrier, but highly sensitive to moisture. Used in multilayers.'
  },
  {
    id: 'pla',
    name: 'PLA',
    fullName: 'Polylactic acid',
    primaryUse: 'Cups • trays • films',
    scores: {
      oxygenBarrier: 5,   // Medium
      moistureBarrier: 3, // Low
      strength: 4         // Medium-low
    },
    recycling: 'Industrial composting',
    evidence: {
      level: 'Medium',
      source: 'PubChem'
    },
    description: 'Bio-based and compostable, moderate barrier properties.'
  },
  {
    id: 'ldpe',
    name: 'LDPE',
    fullName: 'Low-density polyethylene',
    primaryUse: 'Films • pouches',
    scores: {
      oxygenBarrier: 2,   // Low
      moistureBarrier: 8, // Very high
      strength: 3         // Low
    },
    recycling: 'Store-drop-off',
    evidence: {
      level: 'Medium',
      source: 'PubChem'
    },
    description: 'Highly flexible, great for films, good moisture barrier but poor oxygen barrier.'
  }
];

// Helper to calculate match score
// User priorities are 0-100. Material scores are 1-10.
export function calculateMatchScore(material, userPriorities) {
  // Normalize user priorities to 0-1
  const weightO2 = userPriorities.oxygen / 100;
  const weightMoisture = userPriorities.moisture / 100;
  const weightStrength = userPriorities.strength / 100;

  // Total weight
  const totalWeight = weightO2 + weightMoisture + weightStrength || 1; 

  // Normalize material scores to 0-100
  const scoreO2 = material.scores.oxygenBarrier * 10;
  const scoreMoisture = material.scores.moistureBarrier * 10;
  const scoreStrength = material.scores.strength * 10;

  // Calculate weighted sum
  const weightedSum = (scoreO2 * weightO2) + (scoreMoisture * weightMoisture) + (scoreStrength * weightStrength);
  
  // Base score 0-100
  let finalScore = Math.round(weightedSum / totalWeight);

  // Apply some logic to penalize if a requirement is high but material is low
  if (weightO2 > 0.8 && material.scores.oxygenBarrier < 5) finalScore -= 20;
  if (weightMoisture > 0.8 && material.scores.moistureBarrier < 5) finalScore -= 20;

  return Math.max(0, Math.min(100, finalScore)); // clamp between 0 and 100
}
