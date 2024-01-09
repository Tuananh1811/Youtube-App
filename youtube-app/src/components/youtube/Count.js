import React, {useState} from "react";

const Example=function(){
     const [count,setCount]=useState(0);
     return(
          <div>
               <p>Bạn đã bấm {count} lần</p>
               <button onClick={()=>setCount(count+1)}>
                    Bấm đi nào
               </button>
          </div>
     )
}
export default Example;