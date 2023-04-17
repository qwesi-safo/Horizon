import { Component } from "react";

class Plan extends Component{
    render(){
        return(
            <>
            <div className="container-fluid plans">
		<h3 className="text-center">Plan</h3>
	</div>

	<div className="container plan-types">
		<div className="row">
			<div className="col-md-3">
				<div className="card-group">
  					<div className="card">
    					<img src="image1/virtual offices.jpg" className="card-img-top" alt="Virtual Offices"/>
    					<div className="card-body">
      						<h3 className="card-title">Virtual Offices</h3>
      						<p className="card-text">
      							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      							tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, consequat. 
      						</p>
      
    					</div>
  					</div>
				</div>
			</div>

			<div className="col-md-3">
				<div className="card-group">
  					<div className="card">
    					<img src="image1/customize offices.jpg" className="card-img-top" alt="Customized offices"/>
    					<div className="card-body">
      						<h3 className="card-title">Customized Offices</h3>
      						<p className="card-text">
      							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      							consequat. 
      						</p>
      
    					</div>
  					</div>
				</div>
			</div>

			<div className="col-md-3">
				<div className="card-group">
  					<div className="card">
    					<img src="image1/serviced offices.jpg" className="card-img-top" alt="serviced office"/>
    					<div className="card-body">
      						<h3 className="card-title">Serviced Officed</h3>
      						<p className="card-text">
      							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      							consequat. 
      						</p>
      
    					</div>
  					</div>
				</div>
			</div>

			<div className="col-md-3">
				<div className="card-group">
  					<div className="card">
    					<img src="image1/meeting rooms.jpg" className="card-img-top" alt="meeting rooms"/>
    					<div className="card-body">
      						<h3 className="card-title">Meeting Rooms</h3>
      						<p className="card-text">
      							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      							consequat. 
      						</p>
      
    					</div>
  					</div>
				</div>
			</div>

		</div>
	</div>
    </>


        )
    }
    
}
export default Plan;