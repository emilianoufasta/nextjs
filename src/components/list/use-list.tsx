import { useEffect, useState } from 'react'
import { getCatsData } from '../../../src/api/cats';

export const useGetCats = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCatsData();
      setLoading(false);
      setData(data);
    }
    fetchData();
  }, [])

  return {
    loading, 
    data
  }
}