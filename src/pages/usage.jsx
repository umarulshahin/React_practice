import './usage.css';
import { useDispatch, useSelector } from 'react-redux';
function Usage(props){
    const value =useSelector((store)=>{
         return store.value;
    })
    const dispatch =useDispatch();

    return (
        <div className='usage' >
            <div className='usage_item' >
                
               <label >{value}</label>
            <div className='buttons' >
                <button className='btn1' onClick={()=>{
                 dispatch({
                    type:"increment"
                 })
                }}> + </button>

                <button className='btn2' onClick={()=>{
                  dispatch({
                    type:"decrement"
                  })
                }}> - </button>

            </div>
            
            </div>
            <br />
            
           
            </div>
    )
};

export default Usage;