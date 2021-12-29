import React, { useState, useEffect } from "react";
import { Table, Modal, Button, Space, Input, Typography } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import _ from "lodash";

const { Text } = Typography;

class VehicleTable extends React.Component {
  state = {
    searchText: "",
    searchedColumn: "",
    isModalVisible: false,
    vehicleBasicInfo: null,
    loading: false,
  };

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  handleOk = () => {
    this.setState({ isModalVisible: false });
  };

  handleDetailsClick = (e, value) => {
    this.setState({ loading: true, isModalVisible: true });
    axios
      .post("http://localhost:5000/api/car-factory/vehicle/details", value)
      .then((response) => {
        this.setState({ vehicleBasicInfo: response.data, loading: false });
      })
      .catch((error) => console.log(error));
  };

  columns = [
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
      title: "Category",
      dataIndex: "category",
      key: "category",
      ...this.getColumnSearchProps("category"),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      ...this.getColumnSearchProps("type"),
    },
    {
      title: "Creation Date",
      dataIndex: "creationDate",
      key: "creationDate",
    },
    {
      title: "Action",
      key: "id",
      render: (value) => (
        <a onClick={(e) => this.handleDetailsClick(e, value)}>Details</a>
      ),
    },
  ];

  render() {
    return (
      <>
        <Table columns={this.columns} dataSource={this.props.vehicles} />
        <CustomModal
          loading={this.state.loading}
          isModalVisible={this.state.isModalVisible}
          handleOk={this.handleOk}
          vehicle={this.state.vehicleBasicInfo}
        />
      </>
    );
  }
}

const CustomModal = ({ loading, isModalVisible, handleOk, vehicle }) => {
  return (
    <Modal
      title="Vehicle Details"
      onCancel={handleOk}
      visible={isModalVisible}
      footer={[
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleOk}
        >
          OK
        </Button>,
      ]}
    >
      {loading && <div>Loading</div>}
      {!loading && <VehicleBasicInfo details={vehicle} />}
    </Modal>
  );
};

const VehicleBasicInfo = ({ details }) => {
  const arr = [];
  for (const k in details) {
    console.log(k);
    if (k === "vehicleBasicInfo" || k === "id") {
      continue;
    }
    arr.push({ name: k, value: details[k] });
  }
  console.log(arr);
  const vehicle = details.vehicleBasicInfo;
  return (
    <>
      <Space direction="vertical">
        <Space>
          <Text strong>ID: </Text>
          <Text>{vehicle.id}</Text>
        </Space>
        <Space>
          <Text strong>Name: </Text>
          <Text>{vehicle.name}</Text>
        </Space>
        <Space>
          <Text strong>Colour: </Text>
          <Text>{vehicle.colour}</Text>
        </Space>
        <Space>
          <Text strong>Category: </Text>
          <Text>{vehicle.category}</Text>
        </Space>
        <Space>
          <Text strong>Type: </Text>
          <Text>{vehicle.type}</Text>
        </Space>
        {arr.map((field) => (
          <Space key={field.name}>
            <Text strong>{_.startCase(field.name)}: </Text>
            <Text>{JSON.stringify(field.value)}</Text>
          </Space>
        ))}
      </Space>
    </>
  );
};

export default VehicleTable;
