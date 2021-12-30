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


export const TYPE_LIST = {
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


export const CATEGORY_CONST = {
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


export const TYPE_CONST = {
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

