import React from 'react';
import LineWidth from "./components/lineWidth/lineWidth";
import MouseEvent from "./components/mouseEvent/mouseEvent";
import DrawEvent from "./components/drawEvent/drawEvent";
import Motion from "./components/motion/motion";
import "./baseJs.less";

const modeList = [
  {order: 1, mode: LineWidth},
  {order: 2, mode: MouseEvent},
  {order: 3, mode: DrawEvent},
  {order: 4, mode: Motion},
  {order: 5, mode: ""},
  {order: 6, mode: ""}
];

const BaseJs = () => {

  return (
    <div className="page-base-js">
      {
        modeList.map((item: any) => {
          return <div key={item.order} className={`box ${item.order <= 3 ? "newClas" : ""}`}>
            {
              item.mode && <item.mode />
            }
          </div>;
        })
      }
    </div>
  );
};

export default BaseJs;