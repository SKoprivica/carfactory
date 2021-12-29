import { Space, Typography } from "antd";
import React from "react";
import axios from "axios";
import VehicleTable from "../vehicles/review/VehicleTable";

const { Text } = Typography;

class ParkingsReview extends React.Component {
  state = {
    parkings: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/car-factory/parking/status")
      .then((response) => {
        console.log(response);
        this.setState({ parkings: response.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="page">
        <h2>Parking Review</h2>
        <Space>{this.state.parkings.map(parking => <Parking data={parking}/>)}</Space>
      </div>
    );
  }
}

const Parking = ({ data }) => {
  return (
    <Space direction="vertical">
      <Space>
        <Text strong>Name: </Text>
        <Text>{data.name}</Text>
      </Space>
      <Space>
        <Text strong>Surface: </Text>
        <Text>{data.surface}</Text>
      </Space>
      <Space>
        <Text strong>Occupied Area: </Text>
        <Text>{data.occupiedArea}</Text>
      </Space>
      <Space>
        <Text strong>Full </Text>
        <Text>{data.full ? "YES" : "NO"}</Text>
      </Space>
      <VehicleTable vehicles={data.vehicles} />
    </Space>
  );
};

export default ParkingsReview;
