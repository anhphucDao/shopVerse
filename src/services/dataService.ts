import axios from 'axios';
import {API_ENDPOINTS} from '../constant';
import {Product} from '../types/data';

async function fetchProducts(): Promise<Product[]> {
  const response = await axios.get<Product[]>(API_ENDPOINTS.GET_PRODUCTS);

  return response.data;
}

async function fetchCategories(): Promise<string[]> {
  const response = await axios.get<string[]>(API_ENDPOINTS.GET_CATEGORIES);

  return response.data;
}

async function fetchProductById(id: number): Promise<Product> {
  const response = await axios.get<Product>(
    `${API_ENDPOINTS.GET_PRODUCT_BY_ID}${id}`,
  );

  return response.data;
}

async function fetchProductsByCategory(category: string): Promise<Product[]> {
  const response = await axios.get<Product[]>(
    `${API_ENDPOINTS.GET_PRODUCTS_BY_CATEGORY}${category}`,
  );

  return response.data;
}

export {
  fetchProducts,
  fetchCategories,
  fetchProductById,
  fetchProductsByCategory,
};
