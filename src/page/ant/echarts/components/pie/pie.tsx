import React, { useEffect } from "react";
import echarts from "echarts";
import "./pie.less";
import { useStore } from "store/store"

const listData = [
  { name: "任露", value: 4 },
  { name: "赵傲", value: 7 },
  { name: "谢于", value: 9 },
  { name: "李瑶", value: 2 }
]

const Pie = () => {
  const store = useStore();

  useEffect(() => {
    dragChart();
  })

  const dragChart = () => {
    const size = store.rootFontSize;
    const dom: any = document.getElementById("contain");
    const myChart = echarts.init(dom);
    const option: any = {
      color: ["#29c8fe", "#ffe500", "#0095ff", "#58fed3"],
      tooltip: {
        trigger: "item",
        confine: true,
        show: true,
        formatter: (data: any) => {
          return `<div class='pie-tip'>${data.name}: ${data.value}座</div>`
        },
        backgroundColor: "transparent",
        borderColor: "transparent",
        padding: [0, 0, 15, 0],
        textStyle: {
          color: "#fff",
          height: "0.3rem"
        }
      },
      series: [
        {
          type: "pie",
          center: ["50%", "50%"],
          radius: [0.6 * size, 0.9 * size],
          hoverAnimation: true,
          avoidLabelOverlap: true, // 防止标签重叠
          minAngle: 36,
          startAngle: 90,
          hoverOffset: 5,
          label: {
            show: true,
            formatter: (data: any) => {
              const b = data.name;
              const a = data.value;
              const d = data.percent;
              const g = "%";
              const k = "座";
              return `{z|${b} ${a}${k}}\n{d|${d}${g}}`
            },
            rich: {
              z: {
                color: "green",
                lineHeight: 0.2 * size,
                align: "left"
              },
              d: {
                color: "blue",
                lineHeight: 0.2 * size,
                align: "left"
              }
            },
            itemStyle: {
              borderWidth: 0,
            },
            labelLine: {
              show: true,
              length: 0.3 * size,
              length2: 0.2 * size,
              lineStyle: {
                color: "rgba(255,255,255,0.7)",
                width: 0.02 * size
              }
            },
            emphasis: {
              labelLine: {
                length: 0.3 * size,
                length2: 0.2 * size,
              }
            },
            label: {
              show: true
            }
          },
          data: listData
        }
      ]
    }
    myChart.setOption(option);
  }

  return (
    <div className="pie">
      <div className="contain" id="contain"></div>
      <div className="fix">总数: 22</div>
    </div>
  );
}

export default Pie;