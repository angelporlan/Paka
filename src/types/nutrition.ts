
export type UserGoal = 'deportista' | 'perder-peso' | 'salud-general';

export interface Nutriments {
  energy_100g?: number;
  fat_100g?: number;
  'saturated-fat_100g'?: number;
  carbohydrates_100g?: number;
  sugars_100g?: number;
  fiber_100g?: number;
  proteins_100g?: number;
  salt_100g?: number;
  sodium_100g?: number;
}

export interface Product {
  code: string;
  product_name?: string;
  brands?: string;
  image_url?: string;
  nutriments: Nutriments;
  nutrition_grades?: string;
  categories?: string;
  ingredients_text?: string;
  additives_tags?: string[];
  additives_n?: number;
  additives_original_tags?: string[];
}

export interface NutritionAnalysis {
  score: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'E';
  positives: string[];
  negatives: string[];
  recommendation: string;
  color: string;
}

export interface OpenFoodFactsResponse {
  product?: Product;
  status: number;
  status_verbose: string;
}
