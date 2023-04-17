import { Component } from "react";

class Footer extends Component{
    render(){
        return(
         <div className="footer">
		    <div className="container footer-main">
			    <div className="row">
			        <div className="col-md-4 footer-content">
			  	        <h3>Visit us Kenya</h3>
			  	        <h5>Nairobi, Kenya</h5>
			  	        <p className="address">
			  		        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			  		        tempor incididunt ut labore et dolore magna aliqua.
			  	        </p>
			        </div>
			        <div className="col-md-4 footer-content">
			  	        <h3>Visit us Accra</h3>
			  	        <h5>Accra, Ghana</h5>
			  	        <p className="address">tempor incididunt ut labore et dolore magna aliqua. 
			  		        Ut enim ad minim veniam.</p>
			        </div>
			        <div className="col-md-4 footer-content">
			  	        <h3>Visit us Nigeria</h3>
			  	        <h5>Legos, Nigeria</h5>
			  	        <p className="address">tempor incididunt.</p>
			        </div>
			    </div>
		    </div>
	    </div>
        )
    }
}

export default Footer;