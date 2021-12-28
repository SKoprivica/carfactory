import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Select, InputNumber, Checkbox } from "antd";
import axios from "axios";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
/* eslint-disable no-template-curly-in-string */

const truckTypes = ["TOW_TRUCK", "TANK_TRUCK"];

const busTypes = ["CITY_BUS", "INTERCITY_BUS"];

const carTypes = ["CABRIOLET", "CLASSIC"];

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!"
  },
  number: {
    range: "${label} must be between ${min} and ${max}"
  }
};

class CreateVehicle extends React.Component {
  onFinish = (values) => {
    console.log(values);
    axios
      .post("http://localhost:8080/api/car-factory/vehicle/create", values.vehicle)
      .then((p) => console.log(p))
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <h2>Create Vehicle</h2>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={this.onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["vehicle", "name"]}
            label="Name"
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["vehicle", "colour"]}
            label="Colour"
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["vehicle", "category"]}
            label="Category"
            rules={[
              {
                required: true
              }
            ]}
          >
            <Select placeholder="select category">
              <Option value="CAR">CAR</Option>
              <Option value="BUS">BUS</Option>
              <Option value="TRUCK">TRUCK</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={["vehicle", "type"]}
            label="Type"
            rules={[
              {
                required: true
              }
            ]}
          >
            <Select placeholder="select type">
              <Option value="CLASSIC">CLASSIC</Option>
              <Option value="CABRIOLET">CABRIOLET</Option>
              <Option value="CITY_BUS">CITY_BUS</Option>
              <Option value="INTERCITY_BUS">INTERCITY_BUS</Option>
              <Option value="TOW_TRUCK">TOW_TRUCK</Option>
              <Option value="TANK_TRUCK">TANK_TRUCK</Option>
            </Select>
          </Form.Item>
          <h3>CAR</h3>
          <Form.Item name={["vehicle", "seats"]} label="Seats">
            <InputNumber />
          </Form.Item>
          <Form.Item name={["vehicle", "accessories"]} label="Accessories">
            <InputNumber />
          </Form.Item>
          <h3>Classic Car</h3>
          <Form.Item
            name={["vehicle", "roofRackStorage"]}
            label="Roof Rack Storage"
          >
            <InputNumber />
          </Form.Item>
          <h3>Cabriolet Car</h3>
          <Form.Item
            name={["vehicle", "detachableHardtops"]}
            label="Detachable Hardtops"
          >
            <Checkbox onChange={() => {}}></Checkbox>
          </Form.Item>
          <h3>BUS</h3>
          <Form.Item
            name={["vehicle", "standingPlaces"]}
            label="Standing Places"
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name={["vehicle", "seatingPlaces"]} label="Seating Places">
            <InputNumber />
          </Form.Item>
          <h3>Inetercity Bus</h3>
          <Form.Item
            name={["vehicle", "luggageCapacity"]}
            label="Luggage Capacity"
          >
            <InputNumber />
          </Form.Item>
          <h3>City Bus</h3>
          <Form.Item name={["vehicle", "articulated"]} label="Articulated">
            <Checkbox onChange={() => {}}></Checkbox>
          </Form.Item>
          <h3>TRUCK</h3>
          <Form.Item name={["vehicle", "axlesNumber"]} label="Axles Number">
            <InputNumber />
          </Form.Item>
          <h3>Tank Truck</h3>
          <Form.Item name={["vehicle", "tankCapacity"]} label="Tank Capacity">
            <InputNumber />
          </Form.Item>
          <h3>Tow Truck</h3>
          <Form.Item name={["vehicle", "tractionPower"]} label="Traction Power">
            <InputNumber />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CreateVehicle;
