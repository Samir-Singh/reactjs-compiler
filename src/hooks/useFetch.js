import { useEffect, useState } from "react";

const useFetch = (url, onSuccess, onFailure, options = { method: "GET" }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response = await fetch(url, { ...options });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        response = await response.json();
        setData(response?.posts);
        onSuccess(response);
      } catch (error) {
        setError(error);
        onFailure(error);
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
