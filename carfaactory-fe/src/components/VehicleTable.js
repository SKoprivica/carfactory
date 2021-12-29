import React, { useState, useEffect } from "react";
import { Table, Modal, Button } from "antd";
import axios from "axios";

const VehicleTable = ({ vehicles }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [vehicleDetails, setVehicleDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDetailsClick = (e, value) => {
    setLoading(true);
    console.log(value);
    setIsModalVisible(true);
    axios
      .post("http://localhost:5000/api/car-factory/vehicle/details", value)
      .then((response) => {
        setVehicleDetails(response.data);
        setLoading(false);
        console.log(vehicleDetails);
      })
      .catch((error) => console.log(error));
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Colour",
      dataIndex: "colour",
      key: "colour",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Action",
      render: (value) => (
        <a onClick={(e) => handleDetailsClick(e, value)}>Details</a>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={vehicles} />
      <CustomModal
        loading={loading}
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        vehicle={vehicleDetails}
      />
    </>
  );
};

const CustomModal = ({ loading, isModalVisible, handleOk, vehicle }) => {
  return (
    <Modal title="Vehicle Details" visible={isModalVisible} footer={[
        <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
        OK
        </Button>,
      ]}>
      {loading && <div>Loading</div>}
      {!loading && <VehicleDetails details={vehicle} />}
    </Modal>
  );
};

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
  const vehicle = details.vehicleDetails;
  return (
    <div>
      <span>{vehicle.id} </span>
      <span>{vehicle.name} </span>
      <span>{vehicle.colour} </span>
      <span>{vehicle.category} </span>
      <span>{vehicle.type} </span>

      {arr.map((field) => (
        <div key={field.name}>
          <span>{field.name}: </span>
          <span>{JSON.stringify(field.value)}</span>
        </div>
      ))}
    </div>
  );
};

export default VehicleTable;
