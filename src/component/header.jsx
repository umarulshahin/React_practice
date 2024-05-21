import { useDispatch } from "react-redux";
import "./header.css"
function Header(props){
  const dispatch=useDispatch()

    const{
      Menuselete
    }=props; 
    return (
    <div className='app_header'>
        <span className='header_title'>New Application</span>

        <span onClick={()=>{
           Menuselete('Home');
        }}>Home</span>

        <span onClick={()=>{
          Menuselete('Usage')
        }}>Usage</span>

        <span onClick={()=>{
            Menuselete('Contacts')
        }}>Contacts</span>
        
        <span onClick={()=>{
          dispatch({
            type:"logout"
          })
        }}>Logout</span>
  
      </div>
    );

};

export default Header;