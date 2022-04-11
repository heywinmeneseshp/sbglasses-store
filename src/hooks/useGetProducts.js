import { useEffect, useState } from 'react';
import axios from 'axios';
import endPoints from '@services/api'

const useGetProducts = (number) => {
  const [products, setProducts] = useState([]);
  const offset = (12 * number);
  
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(endPoints.products.getProducts(12, offset));
      setProducts(response.data);
    };
    fetchData();
  }, [number]);

  return products;
};

export default useGetProducts;
