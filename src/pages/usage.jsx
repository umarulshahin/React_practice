import './usage.css';
import React,{useState,useEffect, useReducer} from "react";
const fReducer=((state,action)=>{
    if(action==="incriment"){
        return state+1
    }else if(action==="decrement"){
        return state-1
    }
});
function Usage(props){
     
    // const [value,setValue] = useState(0);
    const [value,dispatch]=useReducer(fReducer,0)
    const [color,setColor] = useState("white");
    const [Boom,setBoom] = useState(true);
    
    useEffect(()=>{
        setBoom(false)

        let id=setTimeout(()=>{
        setBoom(true)
        },value*1000)

        return ()=>{
            clearTimeout(id);
        }
    },[value]);

    return (
        <div className='usage' >
            <div className='usage_item' style={{background:color}}>
                
               <label >{value}</label>
            <div className='buttons' >
                <button className='btn1' onClick={()=>{
                    // setValue((state)=>{
                    //     return state +1 
                    // });
                    dispatch("incriment")
                }}> + </button>

                <button className='btn2' onClick={()=>{
                    // setValue((state)=>{
                    //     return state -1
                    // })
                    dispatch("decrement")
                }}> - </button>

            </div>
            <div>
                <button onClick={()=>{
                    setColor("green")
                }}>Green</button>

                <button onClick={()=>{
                    setColor("red")
                }}> Red </button>
            </div>
            </div>
            <br />
            
            {
                value && Boom ?( 
                    
                    <div className='Boom'>
                        <span>
                            Boom
                        </span>
                    </div>
                ):null
            }
         
            </div>
    )
};

export default Usage;