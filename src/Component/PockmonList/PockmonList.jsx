import Pockmon from "../pockmon/pockmon.jsx";
import "./pockimonList.css";
import usePockimonList from "../hooks/usePockimonList.js";

function pockmonList() {
  const { pockimon, setPockimon } = usePockimonList();
  return (
    <>
      <div className="show-data">
        {pockimon.isLoading
          ? "Data Loading..."
          : pockimon.pockimonList.map((pockmon) => (
              <Pockmon
                name={pockmon.name}
                image={pockmon.image}
                key={pockmon.id}
                id={pockmon.id}
              />
            ))}
      </div>

      <div className="control">
        <button
          disabled={pockimon.prevButton == null}
          onClick={() => {
            const seturl = pockimon.prevButton;
            setPockimon({ ...pockimon, PockmonURL: seturl });
          }}>
          prev
        </button>
        <button
          disabled={pockimon.nextButton == null}
          onClick={() => {
            const seturl = pockimon.nextButton;
            setPockimon({ ...pockimon, PockmonURL: seturl });
          }}>
          next
        </button>
      </div>
    </>
  );
}
export default pockmonList;

// by using many useState

// import axios from "axios";
// import { useEffect, useState } from "react";
// import Pockmon from "../pockmon/pockmon";
// import "./pockimonList.css"

// function pockmonList() {
//   const [pockmonURL,setpockmonURL] = useState("https://pokeapi.co/api/v2/pokemon")
//   const [pockmonList, setPockmonList] = useState([]);
//   const [isLoading, setIsloading] = useState(true);
//   const [nextButton,setnextButton]=useState("");
//   const [prevButton,setprevButton]=useState("");

//   async function getdata() {
//     setIsloading(true)
//     const response = await axios.get(pockmonURL);
//     console.log("the response is",response);
//     const pockmonResult = response.data.results;
//     // console.log(pockmonResult);
//     setnextButton(response.data.next)
//     setprevButton(response.data.previous)
//     const pockmonResultPromise = pockmonResult.map((pockmon) =>
//       axios.get(pockmon.url) //it return a promise
//       // pockmon.url //-->Here we get only the array of url
//     );
//     // console.log(pockmonResultPromise);
//     const pockmonData = await axios.all(pockmonResultPromise);  //.all returns a array
//     console.log(pockmonData);
//     const result = pockmonData.map((pockdata) => {
//       const pockmon = pockdata.data;
//       return {
//         id:pockmon.id,
//         name: pockmon.name,
//         image: pockmon.sprites.other.dream_world.front_default,
//         types: pockmon.types,
//       };
//     });
//     setPockmonList(result)
//     console.log(result);
//     setIsloading(false);
//   }
//   useEffect(() => {
//     getdata();
//   }, [pockmonURL]);
//   return (
//     <>
//       <div className="show-data">{isLoading ? "Data Loading..." :
//         pockmonList.map((pockmon)=><Pockmon name={pockmon.name} image={pockmon.image} key={pockmon.id}/>)
//         }</div>

//         <div className="control">
//           <button disabled={prevButton == null} onClick={()=>setpockmonURL(prevButton)}>prev</button>
//           <button disabled={nextButton == null} onClick={()=>setpockmonURL(nextButton)}>next</button>
//         </div>
//     </>
//   );
// }
// export default pockmonList
