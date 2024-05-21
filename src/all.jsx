
import React from "react";
import Home_page from "./pages/Home_page";
import Header from "./component/header";
import Footer from "./component/footer";
import Dummy from "./pages/dummy";
import Usage from "./pages/usage"
import { Provider } from "react-redux";
import Contact from "./pages/Contact";
import store from "./Redux_toolkit/appStore";
class All extends React.Component{

    constructor(props){
        super(props);

        this.state={

            selectPage:"Home"
        };
    }
    handleMenuselete=(val)=>{
        console.log(val)
        this.setState({
            selectPage:val
        });
    }


    handlpageChange(){

        const{
            selectPage
        }=this.state;

        switch (selectPage){

            case "Home":
                return <Home_page />

            case "Usage":
                return <Usage key="about" name="Usage" />
            case "Contacts":
                return <Contact key="contacts" name="Contacts" />
            case "Logout":
                return <Dummy key="logout" name="Logout"/>
                
            default:
                break ;

        }
    }
    
    render(){
        return ( 
        <Provider store={store}>
            <div className='App'>

            <Header Menuselete={this.handleMenuselete} />

            <div className='App_body'>
            {this.handlpageChange()}

            </div>
            
            <Footer />
        </div>
        </Provider>
        );
    }
}

export default All;