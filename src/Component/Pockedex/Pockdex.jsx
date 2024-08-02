import Search from "../Search/Search.jsx"
import PockmonList from '../PockmonList/PockmonList.jsx'
import "./pockedex.css"
function pockedex(){
    return(
        <div className="pockedex-wrapper">
            <Search/>
            <PockmonList/>
        </div>
    )
}

export default pockedex