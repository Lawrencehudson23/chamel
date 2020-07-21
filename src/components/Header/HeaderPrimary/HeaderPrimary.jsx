import React from "react";
import { Tabs } from "antd";

import "./HeaderPrimary.less";

const HeaderPrimary = () => {
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }
  return (
    <Tabs
      defaultActiveKey="1"
      onChange={callback}
      className="header-primary"
      centered
    >
      <TabPane tab="haute couture" key="1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum iste
        omnis dolorem, neque deleniti assumenda?
      </TabPane>
      <TabPane tab="fashion" key="2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam impedit
        beatae provident reprehenderit eius nesciunt?
      </TabPane>
      <TabPane tab="high jewelry" key="3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        dignissimos accusantium voluptatibus, reprehenderit similique illo!
      </TabPane>

      <TabPane tab="fine jewelry" key="4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illo
        delectus officia animi, libero nulla?
      </TabPane>
      <TabPane tab="watches" key="5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore illo
        quos consequuntur rem fugit voluptatem?
      </TabPane>
      <TabPane tab="eyewear" key="6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis commodi
        quidem mollitia, quos hic cum.
      </TabPane>
      <TabPane tab="fragrance" key="7">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
        molestiae omnis eligendi expedita odit minima!
      </TabPane>
      <TabPane tab="makeup" key="8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
        voluptatibus veritatis laudantium architecto aliquam reprehenderit5{" "}
      </TabPane>
      <TabPane tab="skincare" key="9">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil animi
        aperiam voluptatum quod doloribus impedit.
      </TabPane>
    </Tabs>
  );
};

export default HeaderPrimary;
