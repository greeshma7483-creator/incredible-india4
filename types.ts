export type PageId = 'home' | 'about' | 'states' | 'tourism' | 'festivals' | 'food';

export interface StateInfo {
  name: string;
  capital: string;
  region: 'North' | 'South' | 'East' | 'West' | 'Central' | 'North-East' | 'Union Territory';
  languages: string[];
  famousFor: string;
  populationRank: number;
  areaKm2: number;
  highlight: string;
}

export interface TouristPlace {
  id: string;
  name: string;
  state: string;
  category: 'Monuments' | 'Palaces & Forts' | 'Spiritual' | 'Nature & Backwaters';
  description: string;
  historicalEra: string;
  bestTimeToVisit: string;
  unesco: boolean;
  image: string;
  imageAlt: string;
  keyFeature: string;
}

export interface Festival {
  id: string;
  name: string;
  alternateName?: string;
  celebratedBy: string;
  monthOrSeason: string;
  category: 'Harvest' | 'Spiritual' | 'Cultural' | 'National' | 'Lights & Joy' | 'Spring';
  description: string;
  significance: string;
  traditionalFood: string;
  traditions: string[];
  image: string;
  imageAlt: string;
  keyFeature?: string;
}

export interface FoodDish {
  id: string;
  name: string;
  region: 'North India' | 'South India' | 'East India' | 'West India';
  dietType: 'Vegetarian' | 'Vegan' | 'Traditional';
  description: string;
  mainIngredients: string[];
  flavorProfile: string;
  bestServedWith: string;
  image: string;
  imageAlt: string;
}

export interface NationalSymbol {
  name: string;
  title: string;
  symbol: string;
  significance: string;
  adoptedYear: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}
