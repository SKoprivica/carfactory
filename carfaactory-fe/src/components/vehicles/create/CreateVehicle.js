import React, { useState } from "react";
import "antd/dist/antd.css";
import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  Checkbox,
  Switch,
  Typography,
  Space
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import BasicInfo from "./BasicInfo";
import { CategoryForm, Fragment, TypeField, TypeForm } from "./CommonComponents";


import { RoutesPath } from "../../../config/Routes"
import axios from "axios";
const { Option } = Select;
const { Text, Title } = Typography;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const defaultVehicle = {
  accessories: [],
  articulated: false,
  axlesNumber: null,
  category: null,
  colour: null,
  detachableHardtops: false,
  luggageCapacity: null,
  name: null,
  roofRackStorage: null,
  seatingPlaces: null,
  seats: null,
  standingPlaces: null,
  tankCapacity: null,
  type: null,
};

const CreateVehicle = (props) => {

  const [form] = Form.useForm();
  const [state, setState] = useState(defaultVehicle)


  const onFinish = (values) => {

    axios
      .post("http://localhost:5000/api/car-factory/vehicle/create", values)
      .then((p) => {
        props.history.push(RoutesPath.VEHICLE_REVIEW);
      })
      .catch((error) => console.log(error));
  };


  const updateState = updatedState => {
    setState(prevState => ({ ...prevState, ...updatedState }));
  };


  const onFieldsChange = (e, values) => {
    console.log(state)
    const [field] = e;
    const [name] = field.name;
    console.log(name)
    const { value } = field;
    updateState({ [name]: value });
    if (name === "category") {
      updateState({ type: null })
      form.setFieldsValue({
        type: null
      })
    }
    console.log(form.getFieldsValue())
  };



  return (
    <div className="page">
      <Title level={2}>Create Vehicle</Title>
      <Form
        form={form}
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        onFieldsChange={onFieldsChange}
        validateMessages={validateMessages}
      >
        <BasicInfo />
        <CategoryForm category={state.category} />
        <TypeField {...state} />
        <TypeForm {...state} />
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );

}

export default CreateVehicle;
