import React from "react";
import axios from "axios";
import VehicleTable from "./VehicleTable";



class VehicleReview extends React.Component {
  state = {
    allVehicles: [],
    showDetails: false,
    vehicleBasicInfo: null,
  };

  detailsClick = (vehicle) => {
    const newState = !this.state.showDetails;

    if (newState) {
      axios
        .post("http://localhost:5000/api/car-factory/vehicle/details", vehicle)
        .then((response) => {
          console.log(response);
          this.setState({
            vehicleBasicInfo: response.data,
            showDetails: newState,
          });
        })
        .catch((error) => console.log(error));
    }
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/car-factory/vehicle")
      .then((response) => {
        console.log(response);
        this.setState({ allVehicles: response.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { allVehicles, showDetails, vehicleBasicInfo } = this.state;
    return (
      <div className="page">
        <h2>Vehicle Review</h2>
        
        <VehicleTable vehicles={allVehicles} />
      </div>
    );
  }
}


export default VehicleReview;
