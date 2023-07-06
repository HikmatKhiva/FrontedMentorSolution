import { useState, useEffect } from "react";
const useFetch = (api: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const [reload, setReload] = useState<boolean>(false);
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(api, { signal });
        const json = await response.json();
        if (isMounted) {
          setData(json);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [api, reload]);
  const reloadData = () => setReload((prevReload) => !prevReload);
  return { data, loading, error, reloadData };
};
export default useFetch;