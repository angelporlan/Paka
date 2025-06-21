
import { Product, UserGoal, NutritionAnalysis } from '../types/nutrition';

export const analyzeNutrition = (product: Product, userGoal: UserGoal): NutritionAnalysis => {
  const nutriments = product.nutriments;
  const positives: string[] = [];
  const negatives: string[] = [];
  let score = 50; // Puntuación base

  // Valores de referencia (por 100g)
  const thresholds = {
    highProtein: 20,
    lowProtein: 5,
    highFat: 20,
    lowFat: 3,
    highSaturatedFat: 5,
    highSugar: 15,
    lowSugar: 5,
    highSalt: 1.5,
    lowSalt: 0.3,
    highFiber: 6,
    highCalories: 400,
    lowCalories: 100
  };

  // Análisis de proteínas
  const proteins = nutriments.proteins_100g || 0;
  if (proteins >= thresholds.highProtein) {
    positives.push(`Rico en proteínas (${proteins.toFixed(1)}g)`);
    score += userGoal === 'deportista' ? 15 : 10;
  } else if (proteins <= thresholds.lowProtein) {
    negatives.push(`Bajo contenido en proteínas (${proteins.toFixed(1)}g)`);
    score -= userGoal === 'deportista' ? 15 : 5;
  }

  // Análisis de grasas
  const fat = nutriments.fat_100g || 0;
  const saturatedFat = nutriments['saturated-fat_100g'] || 0;
  
  if (fat <= thresholds.lowFat) {
    positives.push(`Bajo en grasas (${fat.toFixed(1)}g)`);
    score += userGoal === 'perder-peso' ? 15 : 10;
  } else if (fat >= thresholds.highFat) {
    negatives.push(`Alto contenido en grasas (${fat.toFixed(1)}g)`);
    score -= userGoal === 'perder-peso' ? 10 : 5;
  }

  if (saturatedFat >= thresholds.highSaturatedFat) {
    negatives.push(`Alto en grasas saturadas (${saturatedFat.toFixed(1)}g)`);
    score -= 10;
  }

  // Análisis de azúcares
  const sugars = nutriments.sugars_100g || 0;
  if (sugars <= thresholds.lowSugar) {
    positives.push(`Bajo en azúcares (${sugars.toFixed(1)}g)`);
    score += userGoal === 'perder-peso' ? 15 : 10;
  } else if (sugars >= thresholds.highSugar) {
    negatives.push(`Alto contenido en azúcares (${sugars.toFixed(1)}g)`);
    score -= userGoal === 'perder-peso' ? 15 : userGoal === 'deportista' ? 5 : 10;
  }

  // Análisis de sal
  const salt = nutriments.salt_100g || 0;
  if (salt <= thresholds.lowSalt) {
    positives.push(`Bajo en sal (${salt.toFixed(2)}g)`);
    score += 10;
  } else if (salt >= thresholds.highSalt) {
    negatives.push(`Alto contenido en sal (${salt.toFixed(2)}g)`);
    score -= 10;
  }

  // Análisis de fibra
  const fiber = nutriments.fiber_100g || 0;
  if (fiber >= thresholds.highFiber) {
    positives.push(`Rico en fibra (${fiber.toFixed(1)}g)`);
    score += userGoal === 'perder-peso' ? 15 : 10;
  }

  // Análisis de calorías
  const calories = nutriments.energy_100g || 0;
  if (calories <= thresholds.lowCalories) {
    positives.push(`Bajo en calorías (${calories}kcal)`);
    score += userGoal === 'perder-peso' ? 15 : 5;
  } else if (calories >= thresholds.highCalories) {
    if (userGoal === 'perder-peso') {
      negatives.push(`Alto contenido calórico (${calories}kcal)`);
      score -= 15;
    } else if (userGoal === 'deportista' && proteins >= thresholds.highProtein) {
      positives.push(`Alto aporte energético para entrenamientos (${calories}kcal)`);
      score += 5;
    } else {
      negatives.push(`Alto contenido calórico (${calories}kcal)`);
      score -= 10;
    }
  }

  // Ajustes específicos por objetivo
  if (userGoal === 'deportista') {
    // Los deportistas necesitan más carbohidratos y proteínas
    const carbs = nutriments.carbohydrates_100g || 0;
    if (carbs >= 30 && carbs <= 70) {
      positives.push('Buen aporte de carbohidratos para energía');
      score += 10;
    }
  } else if (userGoal === 'perder-peso') {
    // Para perder peso, valoramos los alimentos saciantes y bajos en calorías
    if (fiber >= thresholds.highFiber && calories <= 200) {
      positives.push('Alimento saciante y bajo en calorías');
      score += 20;
    }
  }

  // Limitar puntuación entre 0 y 100
  score = Math.max(0, Math.min(100, score));

  // Determinar grado
  let grade: 'A' | 'B' | 'C' | 'D' | 'E';
  if (score >= 80) grade = 'A';
  else if (score >= 60) grade = 'B';
  else if (score >= 40) grade = 'C';
  else if (score >= 20) grade = 'D';
  else grade = 'E';

  // Generar recomendación
  let recommendation = '';
  if (score >= 80) {
    recommendation = '¡Excelente elección! Este producto se alinea perfectamente con tu objetivo nutricional.';
  } else if (score >= 60) {
    recommendation = 'Buena opción nutricional. Puedes incluirlo en tu dieta de forma regular.';
  } else if (score >= 40) {
    recommendation = 'Producto aceptable. Consumir con moderación dentro de una dieta equilibrada.';
  } else if (score >= 20) {
    recommendation = 'No es la mejor opción para tu objetivo. Considera alternativas más saludables.';
  } else {
    recommendation = 'Te recomendamos evitar este producto o consumirlo muy ocasionalmente.';
  }

  // Determinar color
  let color = '';
  if (score >= 80) color = '#22c55e';
  else if (score >= 60) color = '#eab308';
  else if (score >= 40) color = '#f97316';
  else color = '#ef4444';

  return {
    score: Math.round(score),
    grade,
    positives,
    negatives,
    recommendation,
    color
  };
};
