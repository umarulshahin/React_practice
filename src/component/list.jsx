import Label2 from "./Label2";
import Label from "./label";
import "./list.css"

function  Listed(props){
    const {
        titel,
        disc,
        isActive,
        isDelete,
        onLabelClick
      
    }=props;

    return (
        <div className="list_item">
            <hr />
            <div className="list_title">
                <h4>{titel}</h4>
                <label onClick={isDelete}>Delete</label>

            </div>
            <div className="discr">
               {disc}

            </div>
                 
            <div className="list_label">
                <Label  onAction={onLabelClick} isActive={isActive}/>
            </div>
            <hr />
        </div>
    );
}

export default Listed;