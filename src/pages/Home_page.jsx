import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
import Toole from "../component/Toole.jsx"
import Simple_list from "../component/simple_list.jsx";
import { MyContext,Mycontext2} from "./context.js";
import Info from "../component/Info.jsx";

const Home_page=()=>{
    
    const [showLabel,setshowLabel]=useState(true)
    const [data,setdata]=useState([])
    const[activeState,setactiveState]=useState("All")
    const[message,setmessage]=useState("")

      

    
    useEffect(()=>{
        
        fetch("/data.json")
           .then((data)=>{
             return data.json();
           })

           .then((data)=>{
            setdata(data)
            
           })

    },[])



    const handlpageRefresh=()=>{

        fetch("./data2.json")
           .then((data)=>{

            return data.json();

           })

           .then((data)=>{
            setdata(data)
            
           })
    }


    const onAction=(evt)=>{
        
        const value=evt.target.value
        setactiveState(value)
      

  
    }
  
    const isDelete=(val)=>{
       const new_arr=this.state.data.filter((elament)=> elament.id !==val.id );
       setdata(new_arr)
       
    }

    const handleonLabelclick=(arg)=>{
        setactiveState(arg)
     
    }
    
    const handleShowLable=(trv)=>{
        setshowLabel(trv.target.checked)
    }
   
   
      
        const new_arr=data.filter((x)=>{

            if (activeState==="All"){
                return true
            }
            if(activeState==="active"){
                return x.isActive ===true;
            }
            if (activeState==="non_active"){
                return x.isActive===false;
            }

            return false;

        });
        console.log("Home Rendering")
        
       const memodata=useMemo(()=>{
        return{
            key : 'value1',
            activeState:activeState
        }
       },[activeState])

        // const handleClick = useCallback(()=>{
           
        //         console.log("handle Click",activeState)
            
        //     },[activeState])


        return (

      <div>
          <div>
            <input type="checkbox" checked={showLabel} onChange={handleShowLable} />ShowLabel
         </div>
         <Mycontext2.Provider value={100}>
         <Info  showLabel={memodata} />

         <MyContext.Provider value={showLabel} > 
        <Toole pageRefresh={handlpageRefresh} lebalValue={activeState} onAction={onAction} count={data.length}>
           <Simple_list onLabelClick={handleonLabelclick} data={new_arr} onAction={isDelete}/>
        </Toole>
        </MyContext.Provider>
        </Mycontext2.Provider>

        </div>
        )
}

export default Home_page;