import axios from 'axios';
import {API_ENDPOINTS} from '../constant';
import {Product} from '../types/data';

async function fetchProducts(): Promise<Product[]> {
  const response = await axios.get<Product[]>(API_ENDPOINTS.GET_PRODUCTS);

  return response.data;
}
