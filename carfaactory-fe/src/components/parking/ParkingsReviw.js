import { Space, Typography, Tabs } from "antd";
import React from "react";
import axios from "axios";
import VehicleTable from "../vehicles/review/VehicleTable";

const { Text } = Typography;
const { TabPane } = Tabs;
const noOcupied = { padding: 20, border: 'solid', borderColor: '#bae7ff', with: "200" }
const ocupied = { padding: 20, border: 'solid', borderColor: '#ff7875' }

const noOcupiedTab = { padding: 10, border: 'solid', borderColor: '#bae7ff', with: "200" }
const ocupiedTab = {  padding: 10,border: 'solid', borderColor: '#ff7875' }

class ParkingsReview extends React.Component {
  state = {
    parkings: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/car-factory/parking/status")
      .then((response) => {
        const { data } = response;
        data.sort((a, b) => a.occupiedArea > b.occupiedArea)
        this.setState({ parkings: data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    console.log(this.state)
    return (
      <div className="page">
        <h2>Parking Review</h2>
        <Tabs style={{marginLeft:20}}>
          {this.state.parkings.map(parking => <TabPane key={parking.name} tab={<div style={parking.full ? ocupiedTab : noOcupiedTab}>{parking.name}</div>}><Parking data={parking} /></TabPane>)}
        </Tabs>
      </div>
    );
  }
}


const Parking = ({ data }) => {
  return (
    <Space direction="vertical" >
      <div style={data.full ? ocupied : noOcupied} >
        <div >
          <Text strong>Name: </Text>
          <Text>{data.name}</Text>
        </div>
        <div>
          <Text strong>Surface: </Text>
          <Text>{data.surface}</Text>
        </div>
        <div>
          <Text strong>Occupied Area: </Text>
          <Text>{data.occupiedArea}</Text>
        </div>
        <div>
          <Text strong>Full </Text>
          <Text>{data.full ? "YES" : "NO"}</Text>
        </div>
      </div>
      <Space>
        <VehicleTable vehicles={data.vehicles} />
      </Space>
    </Space>
  );
};

export default ParkingsReview;
