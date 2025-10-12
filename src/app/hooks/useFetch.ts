"use client";
import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(url, { 
          cache: "no-store"
        });
        if (!res.ok) throw new Error("Failed to fetch journey data");
        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
}
  


// const fetchData = async () => {
//   try {
//     setIsLoading(true);
//     setError(null);
//     const res = await fetch("http://localhost:3000/api/journey", { 
//       cache: "no-store"
//     });
    
//     if (!res.ok) {
//       throw new Error('Failed to fetch journey data');
//     }
    
//     const data = await res.json();
//     setJourneyData(data);
//     console.log('Journey data loaded:', data);
//   } catch (err) {
//     console.error('Error fetching journey data:', err);
//     setError(err instanceof Error ? err.message : 'Failed to load data');
//   } finally {
//     setIsLoading(false);
//   }
// };

// useEffect(() => {
//   fetchData();
// }, []);