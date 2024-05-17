import "./header.css"
function Header(props){
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
          Menuselete('Logout')
        }}>Logout</span>
  
      </div>
    );

};

export default Header;