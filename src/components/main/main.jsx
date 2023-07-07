

import {data} from "../../helpers/data"
import Card from "./Card";


const Main = (item)=>{
    console.log(data);
    return(
        <div className="card-container">
            {data.map(()=>(
            <Card item={item}/>
            ))}

        </div>
    )
}
 
export default Main;