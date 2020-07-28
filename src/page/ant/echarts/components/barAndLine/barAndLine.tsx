import React, { useEffect } from "react";
import echarts from "echarts";
import "./barAndLine.less";
import { useStore } from "store/store";

const list = [
  { govern: 677, governPre: 0.9, unGovern: 75, regioName: "龙岗区" },
  { govern: 106, governPre: 0.8, unGovern: 75, regioName: "龙华区" },
  { govern: 23, governPre: 0.5, unGovern: 5, regioName: "罗湖区" },
  { govern: 67, governPre: 0.9, unGovern: 15, regioName: "福田区" },
  { govern: 5, governPre: 0.771, unGovern: 2, regioName: "宝安区" },
  { govern: 99, governPre: 1, unGovern: 75, regioName: "坪山区" },
  { govern: 222, governPre: 0.93, unGovern: 45, regioName: "南山区" },
  { govern: 1, governPre: 0.4, unGovern: 25, regioName: "光明区" },
]

const BarAndLine = (props: any) => {

  const store = useStore();

  useEffect(() => {
    getDate();
  })

  const getDate = () => {
    let xData: any[] = [];
    let govern: any[] = [];
    let unGovern: any[] = [];
    let governPre: any[] = [];
    list.forEach((item: any) => {
      xData.push(item.regioName);
      govern.push(item.govern);
      unGovern.push(item.unGovern);
      governPre.push(Math.round(item.governPre * 100));
    })
    drawChart(xData, govern, unGovern, governPre);
  }

  const drawChart = (xData: any, govern: any, unGovern: any, governPre: any) => {
    const size = store.rootFontSize;
    let dom: any = document.getElementById("barAndLine");
    const myChart = dom && echarts.init(dom);
    const option: any = {
      tooltip: {
        trigger: "axis",
        confine: "true",
        backgroundColor: "transparent",
        borderColor: "transparent",
        textStyle: {
          fontSize: 0.2 * size,
          color: "#fff"
        },
        formatter: (params: any) => {
          const params2 = Array.isArray(params) ? params : [params];
          return (
            `<div class='tooltip'>
              <div class='arrow2'>${params2[0].name}</div>
              <div class='time2'>已完成: <span>${params2[0].value}</span></div>
              <div class='time2'>未完成: <span>${params2[1].value}</span></div>
              <div class='time2'>完成率: <span>${params2[2].value}</span></div>
            </div>`
          );
        }
      },
      grid: {
        right: "3%",
        left: "3%",
        bottom: "2%",
        width: "94%",
        height: "77%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          axisLabel: {
            color: "#ccc",
            interval: 0,
            fontSize: 0.2 * size,
            showMinLabel: false,
            showMaxLabel: false,
            align: "center",
            verticalAlign: "top"
          },
          boundaryGap: true,
          axisTick: {
            show: false
          },
          axisPointer: {
            show: true,
            lineStyle: {
              color: "rgba(0, 0, 0, 0.5)"
            }
          },
          data: xData,
          axisLine: {
            lineStyle: {
              color: "rgba(0,0,0,0.8)",
              width: 1
            }
          }
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "数量(个)",
          nameGap: 0.2 * size,
          nameTextStyle: {
            fontSize: 0.2 * size,
            color: "#ccc"
          },
          axisLabel: {
            color: "#ccc",
            fontSize: 0.2 * size,
            formatter: "{value}",
            showMinLabel: true,
            showMaxLabel: true,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(0,0,0,0.2)"
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "rgba(0,0,0,0.8)",
              width: 1
            }
          }
        },
        {
          type: "value",
          name: "完成率(%)",
          nameGap: 0.2 * size,
          max: 100,
          min: 0,
          minInterval: 5,
          nameTextStyle: {
            fontSize: 0.2 * size,
            color: "#ccc"
          },
          axisLabel: {
            color: "#ccc",
            fontSize: 0.2 * size,
            formatter: "{value}",
            showMinLabel: true,
            showMaxLabel: true,
          },
          triggerEvent: true,
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "rgba(0,0,0)",
              width: 1
            }
          }
        }
      ],
      series: [
        {
          name: "已完成",
          type: "bar",
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
            },
            colorStops: [{
              offset: 0, color: "#00dcff"
            }, {
              offset: 0.5, color: "#00b7ff"
            }],
            globalCoord: false
          },
          barWidth: 0.2 * size,
          data: govern
        },
        {
          name: "未完成",
          type: "bar",
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
            },
            colorStops: [{
              offset: 0, color: "#00dcff"
            }, {
              offset: 0.5, color: "#00b7ff"
            }],
            globalCoord: false
          },
          barWidth: 0.2 * size,
          data: unGovern
        },
        {
          name: "完成率",
          type: "line",
          yAxisIndex: 1,
          showAllSymbol: true,
          symbol: "circle",
          symbolSize: 0.2 * size,
          label: {
            normal: {
              show: true,
              position: "top",
              color: "#fff",
              fontSize: 0.15 * size,
              formatter: "{c}%"
            }
          },
          itemStyle: {
            color: "#26d6bc"
          },
          lineStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: "#2651c6"
              },
              {
                offset: 1,
                color: "#26d6bc"
              }
            ])
          },
          data: governPre
        }
      ]
    }
    myChart.setOption(option);
  }

  return (
    <div className="barAndLine">
      <div id="barAndLine"></div>
    </div>
  );
}

export default BarAndLine;
