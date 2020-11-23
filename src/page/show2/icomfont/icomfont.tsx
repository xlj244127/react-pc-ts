import React, { useEffect, useState } from 'react';
import iconStyle from "./icomfont.module.less";

const Icomfont = () => {
  const [isShow, setIsShow] = useState(true);
  const [obj, setObj] = useState({ name: "徐隆基", age: "27" });

  useEffect(() => {
    console.log("xulongji", GlobalConfig.link_url);
    document.body.addEventListener("click", (e: any) => {
      const el = document.querySelector(".box");
      if (el && el.contains(e.target)) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    }, false);

    return () => {
      document.body.removeEventListener("click", (e: any) => {
        const el = document.querySelector(".box");
        if (el && el.contains(e.target)) {
          return;
        } else {
          return;
        }
      }, false);
    }
  }, [])

  const showAction = () => {
    setIsShow(true);
  }

  const changeOneAction = () => {
    setObj({
      ...obj,
      name: "晚星"
    })
  }

  return (
    <div className={iconStyle.icomfontPage}>
      <div onClick={showAction}>字体展示页面</div>
      {
        isShow && <div className={iconStyle.box} style={{ width: "2rem", background: "red", margin: "0.2rem" }}>
          {
            [1, 2, 3, 4].map(item => {
              return <div className={iconStyle.one} key={item}>盒子里面的类容</div>;
            })
          }
        </div>
      }

      <div className={iconStyle.btn} onClick={changeOneAction}>改变obj里面部分参数值</div>

      <div>
        <span>姓名： {obj.name}</span> <br />
        <span>年龄： {obj.age}</span>
      </div>
    </div>
  );
};

export default Icomfont;