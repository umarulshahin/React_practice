import Listed from "./list";

function Simple_list(props){

    const{
        data, 
        onAction,
        onLabelClick
    }=props;

    return (
        <div className='App_list'>{

            data.map( (obj)=>{
            return < Listed key={obj.titel} 
                            titel={obj.titel}
                            disc={obj.disc} 
                            isActive={obj.isActive} 
                            onLabelClick={onLabelClick}
                            isDelete={()=>{onAction(obj)}}
                           
                            />
            })
            }
        </div>
    );

};

export default Simple_list