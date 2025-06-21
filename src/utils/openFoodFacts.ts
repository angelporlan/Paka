
import { Product, OpenFoodFactsResponse } from '../types/nutrition';

const API_BASE_URL = 'https://world.openfoodfacts.org/api/v0/product';

export const fetchProductData = async (barcode: string): Promise<Product | null> => {
  try {
    console.log(`Buscando producto con código: ${barcode}`);
    
    const response = await fetch(`${API_BASE_URL}/${barcode}.json`);
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const data: OpenFoodFactsResponse = await response.json();
    
    console.log('Respuesta de OpenFoodFacts:', data);
    
    if (data.status === 1 && data.product) {
      // Validar que el producto tenga información nutricional mínima
      const product = data.product;
      
      // Si no tiene nutriments, crear un objeto vacío
      if (!product.nutriments) {
        product.nutriments = {};
      }
      
      return {
        code: barcode,
        product_name: product.product_name || '',
        brands: product.brands || '',
        image_url: product.image_url || '',
        nutriments: product.nutriments,
        nutrition_grades: product.nutrition_grades || '',
        categories: product.categories || '',
        ingredients_text: product.ingredients_text || ''
      };
    }
    
    console.log('Producto no encontrado o sin datos válidos');
    return null;
    
  } catch (error) {
    console.error('Error al obtener datos del producto:', error);
    throw error;
  }
};

// Función auxiliar para obtener productos de muestra (para testing)
export const getSampleProducts = (): Product[] => {
  return [
    {
      code: '3017620422003',
      product_name: 'Nutella',
      brands: 'Ferrero',
      image_url: '',
      nutriments: {
        energy_100g: 539,
        fat_100g: 30.9,
        'saturated-fat_100g': 10.6,
        carbohydrates_100g: 57.5,
        sugars_100g: 56.3,
        fiber_100g: 0,
        proteins_100g: 6.3,
        salt_100g: 0.107
      },
      nutrition_grades: 'e',
      categories: 'Spread, Sweet spread',
      ingredients_text: 'Sugar, palm oil, hazelnuts, skimmed milk powder, fat-reduced cocoa powder, lecithins (soya), vanillin'
    }
  ];
};
