import React, { Component } from "react";
import { Layout, Typography, Row, Col } from "antd";
import NavigationBar from "../components/NavigationBar";
import Routes from "../config/Routes";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

class Dashboard extends Component {

  state = {
    reload: false
  }

  reload = () => {
    this.setState({reload: !this.state.reload})
  }

  handleClick = (e) => {
   
  };
  render() {
    return (
      <Layout>
        <Header style={{  padding: 0, }}
     
       
       
        >
          <Row justify="start">
            <Col span={3}>
              <Title style={{ color: "#fff",  padding:5, margin:10, border:"solid", width:180 }} level={3}>Car Factory</Title>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider>
            <NavigationBar />
          </Sider>
          <Layout>
            <Content className="dashboard-main-content">
              <Routes reload={this.reload}/>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
