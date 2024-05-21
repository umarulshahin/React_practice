import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
import Toole from "../component/Toole.jsx"
import Simple_list from "../component/simple_list.jsx";
import { MyContext,Mycontext2} from "./context.js";
import Info from "../component/Info.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getDatainfo } from "../Redux_toolkit/getDataSlice.jsx";
import { fetchApi } from "../fetchApi.jsx";

const Home_page=()=>{
    
    // const [data,setdata]=useState([])
    const[activeState,setactiveState]=useState("All")
    
    const dispatch=useDispatch()
    const data =useSelector(state=>state.datainfo.data)
    const Loading =useSelector(state=>state.datainfo.Loading)
    const error=useSelector(state=>state.datainfo.error)
  
    useEffect(() => {
        dispatch(getDatainfo());
    }, []);



    const handlpageRefresh=()=>{
    }


    const onAction=(evt)=>{
        
        const value=evt.target.value
        setactiveState(value)
      

  
    }
  
    const isDelete=(val)=>{
        dispatch(deletedata(val.id))
    //    const new_arr=this.state.data.filter((elament)=> elament.id !==val.id );
    //    setdata(new_arr)
       
    }

    const handleonLabelclick=(arg)=>{
        setactiveState(arg)
     
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
        {
            Loading && <div style={{backgroundColor:"green"}}>Loading......</div>
        }
        {
            error && <div style={{backgroundColor:"red"}}>{error}</div> 
         }

         <Mycontext2.Provider value={100}>
         <Info  showLabel={memodata} />

        <Toole pageRefresh={handlpageRefresh} lebalValue={activeState} onAction={onAction} count={data.length}>
           <Simple_list onLabelClick={handleonLabelclick} data={new_arr} onAction={isDelete}/>
        </Toole>
        </Mycontext2.Provider>

        </div>
        )
}

export default Home_page;