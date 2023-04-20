import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [services, setServices] = useState([]);
  const [openingHours, setOpeningHours] = useState([]);
  const [contactUs, setContactUs]=useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
        if (res.data.services) {
          setServices(res.data.services);
        }
        if (res.data.openingHours) {
          setOpeningHours(res.data.openingHours);
        }
        if(res.data.contactUs){
          setContactUs(res.data.contactUs)
        }
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
      if (res.data.services) {
        setServices(res.data.services);
      }
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  // return the services data along with the other data, loading, and error variables
  return { data, loading, error, services, openingHours,contactUs, reFetch };
};

export default useFetch;
