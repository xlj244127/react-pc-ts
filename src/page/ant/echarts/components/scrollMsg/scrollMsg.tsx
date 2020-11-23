import React, { useState, useEffect } from 'react';
import "./scrollMsg.less";

const ScrollMsg = () => {
  const [logs, setLogs] = useState([]);
  const [node, setNode] = useState();
  let timer: any;

  useEffect(() => {
    let arr: any = [];
    for (var i = 0; i < 10; i++) {
      let obj = { name: "2019-10-05 23:59", text: "滚动数据在div里面向上当鼠标移动到div上时停止滚动，鼠标移出后保持滚动" };
      arr.push(obj);
    }
    setLogs(arr);
  }, [])

  useEffect(() => {
    startInter();
    return () => {
      timer && clearInterval(timer);
    }
  }, [node])

  const startInter = () => {
    clearInterval(timer);
    let faNode: any = document.querySelector(".log-box");
    let chNode: any = document.querySelector(".log-item");
    setNode(chNode);
    const itemHeight: any = chNode && chNode.clientHeight;
    const boxHeight: any = faNode && faNode.clientHeight;
    const totalHeight: any = itemHeight * logs.length * 2;
    if (boxHeight >= totalHeight) {
      clearInterval(timer);
    } else {
      clearInterval(timer);
      faNode.scrollTop = 0;
      timer = setInterval(() => {
        if (totalHeight > boxHeight) {
          const scrollTop = faNode && faNode.scrollTop;
          if (Math.ceil(totalHeight - scrollTop) <= Math.ceil(boxHeight)) {
            faNode.scrollTop = totalHeight / 2;
          } else {
            faNode.scrollTop = scrollTop + 1;
          }
        }
      }, 30);
    }
  }

  const handMouseEvent = (flag: boolean) => {
    flag ? clearInterval(timer) : startInter();
  }

  return (
    <div className="scroll-msg">
      <div className="title">系统消息</div>
      <div className="log-box" onMouseEnter={() => handMouseEvent(true)} onMouseLeave={() => handMouseEvent(false)}>
        {
          logs.map((item: any, i: number) => {
            return <div key={i} className="log-item">
              <span>{item.name}</span>
              <span>{item.text}</span>
            </div>;
          })
        }
      </div>
    </div>
  );
};

export default ScrollMsg;