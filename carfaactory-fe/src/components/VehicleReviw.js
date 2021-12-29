import React from "react";
import axios from "axios";
import { SearchOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import VehicleTable from "./VehicleTable";

const { Title } = Typography;

class VehicleReview extends React.Component {
  state = {
    allVehicles: [],
    showDetails: false,
    vehicleDetails: null,
  };

  detailsClick = (vehicle) => {
    const newState = !this.state.showDetails;

    if (newState) {
      axios
        .post("http://localhost:5000/api/car-factory/vehicle/details", vehicle)
        .then((response) => {
          console.log(response);
          this.setState({
            vehicleDetails: response.data,
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
    const { allVehicles, showDetails, vehicleDetails } = this.state;
    return (
      <div className="page">
        <h2>Vehicle Review</h2>

        <VehicleTable vehicles={allVehicles} />

        {/* <div>
          {this.state.allVehicles &&
            allVehicles.map((vehicle) => {
              return (
                <div key={vehicle.id}>
                  <div>
                    <span>{vehicle.id} </span>
                    <span>{vehicle.name} </span>
                    <span>{vehicle.colour} </span>
                    <span>{vehicle.category} </span>
                    <span>{vehicle.type} </span>
                    <span>{vehicle.type} </span>
                    <SearchOutlined
                      onClick={() => this.detailsClick(vehicle)}
                    />
                  </div>
                  {showDetails && !!vehicleDetails && (
                    <VehicleDetails details={vehicleDetails} />
                  )}
                </div>
              );
            })}
        </div> */}
      </div>
    );
  }
}

const VechileTable = ({ vechiles, detailsClick }) => {};

const VehicleDetails = ({ details }) => {
  const arr = [];
  for (const k in details) {
    console.log(k);
    if (k === "vehicleDetails" || k === "id") {
      continue;
    }
    arr.push({ name: k, value: details[k] });
  }
  console.log(arr);
  return (
    <div>
      {arr.map((field) => (
        <div key={field.name}>
          <span>{field.name}: </span>
          <span>{JSON.stringify(field.value)}</span>
        </div>
      ))}
    </div>
  );
};

export default VehicleReview;
