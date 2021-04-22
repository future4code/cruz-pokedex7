import axios from "axios";
import { useEffect, useState } from "react";
import { BaseUrl } from "../constants/BaseUrl";

const useRequestData = (initialValue, endPoint) => {
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    makeData();
  }, []);

  const makeData = async () => {
    let url = `${BaseUrl}${endPoint}`;
    try {
      const response = await axios.get(url);
      setData(response.data.results);
      console.log("request data ");
      console.log("response da data ver se deu certo chakalaka: ", data);
    } catch (error) {
      console.log("Erro encontrado: ", error);
    }

    return data;
  };

  return data;
};

export default useRequestData;
