import Search from "../Search/Search.jsx"
import "./pockedex.css"
function pockedex(){
    return(
        <div className="pockedex-wrapper">
            <span id="head-of-the-page">Pockdex</span>
            <Search/>
        </div>
    )
}

export default pockedex