import Search from "../Search/Search.jsx"
import PockmonList from '../PockmonList/PockmonList.jsx'
import PockimonDetails from "../pockimondetails/pockimondetails.jsx"
import "./pockedex.css"
import { useEffect, useState } from "react";
function pockedex(){
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(()=>{},[searchTerm])
    return(
        <div className="pockedex-wrapper">
            <Search updateSearchTerm = {setSearchTerm} />
            {/* {searchTerm} */}
            {(!searchTerm)?<PockmonList/> : <PockimonDetails key={searchTerm} pokemonName={searchTerm} />}
        </div>
    )
}

export default pockedex