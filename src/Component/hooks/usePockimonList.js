import axios from "axios";
import { useEffect, useState } from "react";

function usePockimonList() {
  const [pockimon, setPockimon] = useState({
    PockmonURL: 'https://pokeapi.co/api/v2/pokemon',
    pockimonList: [],
    isLoading: true,
    nextButton: "",
    prevButton: "",
  });
  async function getdata() {
    setPockimon((state) => ({ ...state, isLoading: true }));
    const response = await axios.get(pockimon.PockmonURL);
    console.log("the response is", response);
    console.log(response.data);
    const pockmonResult = response.data.results;
    // console.log(pockmonResult);
    

    setPockimon((state) => ({
      ...state,
      nextButton: response.data.next,
      prevButton: response.data.previous,
    }));

      const pockmonResultPromise = pockmonResult.map(
        (pockmon) => axios.get(pockmon.url) //it return a promise
        // pockmon.url //-->Here we get only the array of url
      );
      // console.log(pockmonResultPromise);
      const pockmonData = await axios.all(pockmonResultPromise); //.all returns a array
      console.log(pockmonData);
      const result = pockmonData.map((pockdata) => {
        const pockmon = pockdata.data;
        return {
          id: pockmon.id,
          name: pockmon.name,
          image: pockmon.sprites.other.dream_world.front_default,
          types: pockmon.types,
        };
      });
      setPockimon((state) => ({
        ...state,
        pockimonList: result,
        isLoading: false,
      }));

      console.log(result);
    
  }

  useEffect(() => {
    getdata();
  }, [pockimon.PockmonURL]);

  return { pockimon, setPockimon };
}

export default usePockimonList;
