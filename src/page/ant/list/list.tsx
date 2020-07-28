import React, { useEffect, useState } from "react";
import { useStore } from "store/store";
import "./list.less";

const array = [
  { name: "一楼", id: "aaa" },
  { name: "二楼", id: "bbb" },
  { name: "三楼", id: "ccc" },
  { name: "四楼", id: "ddd" },
  { name: "五楼", id: "eee" },
  { name: "六楼", id: "fff" }
];

const List = () => {
  const store = useStore();
  const size = store.rootFontSize;

  const [arrTop, setArrTop] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let faDom = document.getElementById("list-content");
    if (faDom) {
      faDom.addEventListener("scroll", () => addListenScroll(faDom), false);
    };
    return () => {
      faDom && faDom.removeEventListener("scroll", addListenScroll, false)
    }
  }, [arrTop]);

  const addListenScroll = (faDom: any) => {
    arrTop.map((item: any) => {
      if(faDom.scrollTop > item.offsetTop) {
        console.log(faDom && faDom.scrollTop, item.offsetTop, item.index);
        setActive(item.index)
      }
    })
  }

  useEffect(() => {
    const arr: any = [];
    array.map((item: any, i: number) => {
      let top = document.getElementById(item.id);
      if (top) {
        arr.push({offsetTop: top.offsetTop - 1 * size, index: i});
      }
    })
    setArrTop(arr);
  }, []);

  return (
    <div className="list-page">
      <div className="nav">
        {
          array.map((item: any, index: number) => {
            return <div className={active === index ? "active" : ""} key={index}><a href={`#${item.id}`} title={item.name}>{item.name}</a></div>;
          })
        }
      </div>
      <div className="list-content" id="list-content">
        {
          array.map(item => {
            return <div className="box" key={item.id} id={item.id}>
              <div className="title">{item.name}</div>
            </div>;
          })
        }
      </div>
    </div>
  );
}

export default List;