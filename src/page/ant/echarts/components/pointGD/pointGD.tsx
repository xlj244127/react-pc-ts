import React, { useEffect, useState } from "react";
import "./pointGD.less";
// import Icon from "../../../../../assets/images/selected-location.png";

declare const AMap:any

const PointGD = (props: any) => {
  const [map, setMap] = useState<any>();

  useEffect(() => {
    initMap();
  }, [])

  const initMap = () => {
    var map = new AMap.Map(props.domId, {
      resizeEnable: true,
      center: [116.481181, 39.989792],
      zoom: 16
    });
    setMap(map);
  }

  useEffect(() => {
    addMarker();
  }, [map])

  //添加marker标记
  const addMarker = () => {
    if (!map) return;
    map.clearMap();
    const marker = new AMap.Marker({
        map: map,
        position: [116.481181, 39.989792]
    });
    //鼠标点击marker弹出自定义的信息窗体
    AMap.event.addListener(marker, 'click', function () {
      // infoWindow.open(map, marker.getPosition());
    });
  }

  return (
    <div className="map-search-container">
      <div className="gd-map-target" id={props.domId}></div>
    </div>
  ) 
}

export default PointGD;
