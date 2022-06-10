import { useState } from "react";
import axios from "axios";

const useFetch = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [isResponse, setIsResponse] = useState();

  const fetchData = async ({ url, sheet, action, data, filter }) => {
    setIsLoad(true);
    console.log(`start fetch -> ${action}`);
    try {
      let time = new Date().getTime();
      const response = await axios.get(url, {
        params: {
          action,
          sheet,
          data: data ? JSON.stringify(data) : null,
          filter: filter ? JSON.stringify(filter) : null,
          time,
        },
      });
      setIsResponse(["success", "Berhasil..."]);
      console.log(`success fetch -> ${action}->`, response.data);
      if (response.data.error) throw Error(response.data.message);
      return response.data;
    } catch (error) {
      setIsResponse(["danger", error.message]);
      console.error(`error fetch -> ${action} ->`, error);
      return { error: true, message: error.message };
    } finally {
      setTimeout(() => {
        setIsLoad(false);
        setIsResponse();
      }, 3000);
      console.log(`finish fetch -> ${action}`);
    }
  };
  return { fetchData, isLoad, isResponse };
};

export default useFetch;
