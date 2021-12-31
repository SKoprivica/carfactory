import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const Accessories = () => {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  return (
      <Form.List name="accessories">
        {(fields, { add, remove }) => (
          <>
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Accessory
              </Button>
            </Form.Item>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{ display: "flex", marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name]}
                  rules={[{ required: true, message: "Missing accessory" }]}
                >
                  <Input placeholder="Accessory" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
          </>
        )}
      </Form.List>
  );
};

export default Accessories;
