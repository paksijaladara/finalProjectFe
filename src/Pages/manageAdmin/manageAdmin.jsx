import React, { Component } from "react";
// import { render } from 'react-dom';
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import ManageProduct from "./manageProduct";
// import { Redirect } from "react-router-dom";

class ManageAdmin extends Component {
  render() {
    // if (this.props.role === "admin") {
    return (
      <Tabs defaultTab="vertical-tab-one" vertical>
        <TabList>
          <Tab tabFor="vertical-tab-one">Manage Product</Tab>
          <Tab tabFor="vertical-tab-two">Manage Admin</Tab>
          <Tab tabFor="vertical-tab-three">Transaksi</Tab>
        </TabList>

        <TabPanel tabId="vertical-tab-one">
          <ManageProduct />
        </TabPanel>
        <TabPanel tabId="vertical-tab-two">
          <p>Tab 2 content</p>
        </TabPanel>
        <TabPanel tabId="vertical-tab-three">
          <p>Tab 3 content</p>
        </TabPanel>
      </Tabs>
    );
  }
  //   return <Redirect to={"/"} />;
  // }
}

export default ManageAdmin;
