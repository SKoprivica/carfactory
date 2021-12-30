import React from "react";
import "antd/dist/antd.css";
import {
    Form,
    Input,

    Select,
    InputNumber,
    Checkbox,
    Switch,
    Typography,
    Space
} from "antd";
const { Option } = Select;


const BasicInfo = () => {
    return (
        <>
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
        </>)
}

export default BasicInfo;