import React from "react";
import "antd/dist/antd.css";
import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  Checkbox,
  Switch
} from "antd";
import {RoutesPath} from "../../../config/Routes"
import axios from "axios";
const { Option } = Select;


const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
};
/* eslint-disable no-template-curly-in-string */

const CATEGORY_CONST = {
  CAR: {
    type: "CAR",
    title: "Car",
    fields: [
      {
        fieldName: "seats",
        label: "Seats",
        component: <InputNumber />,
      },
      {
        fieldName: "accessories",
        label: "Accessories",
        component: <InputNumber />,
      },
    ],
  },
  BUS: {
    type: "BUS",
    title: "Bus",
    fields: [
      {
        fieldName: "standingPlaces",
        label: "Standing Places",
        component: <InputNumber />,
      },
      {
        fieldName: "seatingPlaces",
        label: "Seating Places",
        component: <InputNumber />,
      },
    ],
  },
  TRUCK: {
    type: "TRUCK",
    title: "Truck",
    fields: [
      {
        fieldName: "axlesNumber",
        label: "Axles Number",
        component: <InputNumber />,
      },
    ],
  },
};

const TYPE_LIST = {
  CAR: {
    name: "CAR",
    fields: [
      {
        fieldName: "CLASSIC",
      },
      {
        fieldName: "CABRIOLET",
      },
    ],
  },
  BUS: {
    name: "BUS",
    fields: [
      {
        fieldName: "CITY_BUS",
      },
      {
        fieldName: "INTERCITY_BUS",
      },
    ],
  },
  TRUCK: {
    name: "TRUCK",
    fields: [
      {
        fieldName: "TOW_TRUCK",
      },
      {
        fieldName: "TANK_TRUCK",
      },
    ],
  },
};

const TYPE_CONST = {
  CLASSIC: {
    type: "CLASSIC",
    title: "Classic Car",
    fields: [
      {
        fieldName: "roofRackStorage",
        label: "Roof Rack Storage",
        component: <InputNumber />,
      },
    ],
  },
  CABRIOLET: {
    type: "CABRIOLET",
    title: "Cabriolet Car",
    fields: [
      {
        fieldName: "detachableHardtops",
        label: "Detachable Hardtops",
        component: <Switch />,
      },
    ],
  },

  INTERCITY_BUS: {
    type: "INTERCITY_BUS",
    title: "Inetercity Bus",
    fields: [
      {
        fieldName: "luggageCapacity",
        label: "Luggage Capacity",
        component: <InputNumber />,
      },
    ],
  },
  CITY_BUS: {
    type: "CITY_BUS",
    title: "Inetercity Bus",
    fields: [
      {
        fieldName: "articulated",
        label: "Articulated",
        component: <Checkbox />,
      },
    ],
  },
  TOW_TRUCK: {
    type: "TOW_TRUCK",
    title: "Tow Truck",
    fields: [
      {
        fieldName: "tractionPower",
        label: "Traction Power",
        component: <InputNumber />,
      },
    ],
  },
  TANK_TRUCK: {
    type: "TANK_TRUCK",
    title: "Tank Truck",
    fields: [
      {
        fieldName: "tankCapacity",
        label: "Tank Capacity",
        component: <InputNumber />,
      },
    ],
  },
};

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

class CreateVehicle extends React.Component {
  state = {
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

  onFinish = (values) => {
    console.log(values);
    axios
      .post("http://localhost:5000/api/car-factory/vehicle/create", values)
      .then((p) => {
        this.props.history.push(RoutesPath.VEHICLE_REVIEW);
      })
      .catch((error) => console.log(error));
  };
  onFieldsChange = (e, values) => {
    console.log(e);
    console.log(values);
    const [field] = e;
    console.log(field);
    const [name] = field.name;
    const { value } = field;
    this.setState({ [name]: value });
    if (name === "category") {
      console.log(this.formRef)
      this.formRef.current.setFieldsValue({
        type: null,
      });
    }
  };

  getField({ fieldName, label, component }) {
    return (
      <Form.Item
        key={fieldName}
        name={fieldName}
        label={label}
        valuePropName="checked"
      >
        {component}
      </Form.Item>
    );
  }

  getFragment({ title, fields }) {
    return (
      <React.Fragment>
        <h3>{title}</h3>
        {fields.map((p) => this.getField(p))}
      </React.Fragment>
    );
  }

  getSpecificFormForCategory({ category }) {
    if (category === CATEGORY_CONST.CAR.type) {
      return this.getFragment(CATEGORY_CONST.CAR);
    }
    if (category === CATEGORY_CONST.BUS.type) {
      return this.getFragment(CATEGORY_CONST.BUS);
    }

    if (category === CATEGORY_CONST.TRUCK.type) {
      return this.getFragment(CATEGORY_CONST.TRUCK);
    }

    return <div />;
  }

  getTypeOptions({ category }) {
    if (category === TYPE_LIST.CAR.name) {
      return TYPE_LIST.CAR.fields.map(this.getTypeOption);
    }
    if (category === TYPE_LIST.BUS.name) {
      return TYPE_LIST.BUS.fields.map(this.getTypeOption);
    }

    if (category === TYPE_LIST.TRUCK.name) {
      return TYPE_LIST.TRUCK.fields.map(this.getTypeOption);
    }
  }

  getTypeOption({ fieldName }) {
    return (
      <Option key={fieldName} value={fieldName}>
        {fieldName}
      </Option>
    );
  }

  getSpecificFormForType({ type }) {
    if (type === TYPE_CONST.CLASSIC.type) {
      return this.getFragment(TYPE_CONST.CLASSIC);
    }
    if (type === TYPE_CONST.CABRIOLET.type) {
      return this.getFragment(TYPE_CONST.CABRIOLET);
    }
    if (type === TYPE_CONST.INTERCITY_BUS.type) {
      return this.getFragment(TYPE_CONST.INTERCITY_BUS);
    }
    if (type === TYPE_CONST.CITY_BUS.type) {
      return this.getFragment(TYPE_CONST.CITY_BUS);
    }
    if (type === TYPE_CONST.TOW_TRUCK.type) {
      return this.getFragment(TYPE_CONST.TOW_TRUCK);
    }
    if (type === TYPE_CONST.TANK_TRUCK.type) {
      return this.getFragment(TYPE_CONST.TANK_TRUCK);
    }
    return <div />;
  }

  render() {
    const state = this.state;
    console.log(state);
    console.log(this.props);

    return (
      <div className="page">
        <h2>Create Vehicle</h2>
        <Form
         ref={this.formRef}
          {...layout}
          name="nest-messages"
          onFinish={this.onFinish}
          onFieldsChange={this.onFieldsChange}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["name"]}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["colour"]}
            label="Colour"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["category"]}
            label="Category"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="select category">
              <Option value="CAR">CAR</Option>
              <Option value="BUS">BUS</Option>
              <Option value="TRUCK">TRUCK</Option>
            </Select>
          </Form.Item>
          {this.getSpecificFormForCategory(this.state)}
          <Form.Item
            name={["type"]}
            label="Type"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="select type">
              {this.getTypeOptions(this.state)}
            </Select>
          </Form.Item>
          {this.getSpecificFormForType(this.state)}

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
