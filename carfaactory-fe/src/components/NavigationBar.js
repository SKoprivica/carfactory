import React, { Component } from "react";
import { withRouter, NavLink, Link } from "react-router-dom";

import {RoutesPath} from "../config/Routes";

import "antd/dist/antd.css";
import { Menu } from "antd";
import {
  CarOutlined,
  AreaChartOutlined,
  TableOutlined,
} from "@ant-design/icons";

class NavigationBar extends Component {
  handleClick = (e) => {
 
  };
  render() {
    const { location } = this.props;
    return (
      <Menu
      theme="dark"
        onClick={this.handleClick}
        defaultSelectedKeys={[RoutesPath.VEHICLE_REVIEW]}
        selectedKeys={[location.pathname]}
        mode="inline"
      >
        <Menu.Item key={RoutesPath.VEHICLE_REVIEW} icon={<AreaChartOutlined />}>
        <NavLink to={RoutesPath.VEHICLE_REVIEW}>Vehicles Review</NavLink>
        </Menu.Item>
        <Menu.Item key={RoutesPath.VEHICLE_CREATE} icon={<CarOutlined />}>
          <NavLink to={RoutesPath.VEHICLE_CREATE}>Create Vehicle</NavLink>
        </Menu.Item>

        <Menu.Item key={RoutesPath.PARKING_REVIEW} icon={<TableOutlined />}>
        <NavLink to={RoutesPath.PARKING_REVIEW}>Parking Lot</NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(NavigationBar);