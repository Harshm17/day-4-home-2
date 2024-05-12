import { useEffect, useRef, useState } from "react";
import Data from "./data"
//import Gen from "./Genrate"

const Para =() =>{
    const [count , setcount]=useState();
    const refn = useRef(0);
 
    const Change=()=>{
        return(
            <div>
            {
                Data.map((item)=>{
                    if (item.index<count) {
                       return(
                        <p>{item.index+1} 
                        {item.about}</p>
                        
                       )
                     }
                })
            }
         </div>
        )
    }
     
    return(

      
        <div>
           <h1>TIRED OF BORING LOREM IPSUM?</h1>
           <form action="">
            <label htmlFor="Para">ParaGraphs: 1-7</label>
        <input type="number" ref={refn}/>
           <button  onClick={(e)=>{
            e.preventDefault();
            
            setcount(refn.current.value);
           }}>GENERATE</button>
           
           </form>
            <section>
                <ul>
                    {
                        <Change />
                    }
                </ul>
                
            </section>
         
        </div>
    )
    
}

export default Para;
