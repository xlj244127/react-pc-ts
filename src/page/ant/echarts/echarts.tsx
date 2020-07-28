import React, { useState } from 'react';
// import Pie from "./components/pie/pie";
// import BarAndLine from "./components/barAndLine/barAndLine";
import PointGD from "./components/pointGD/pointGD";
// import ScrollMsg from "./components/scrollMsg/scrollMsg";
import "./echarts.less";

const Echarts = () => {
  const [latitude] = useState(22.565034);
  const [longitude] = useState(113.865113);
  
  return (
    <div className="page-home-main">
      <div className="home-content">
        <div className="content-left">
          <div className="pie-charts">
            {/* <Pie /> */}
          </div>
          <div className="line-charts">
            {/* <BarAndLine /> */}
          </div>
        </div>
        <div className="content-right">
          <PointGD
            domId="static-map-text"
            latitude={latitude}
            longitude={longitude}
          />
        </div>
      </div>
      <div className="home-footer">
        {/* <ScrollMsg /> */}
      </div>
    </div>
  );
};

export default Echarts;