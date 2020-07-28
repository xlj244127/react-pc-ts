import React from 'react';
import { withRouter } from "react-router-dom";
import './header.less';
import logo from "../../assets/images/logo.jpg";
import home from "../../assets/images/12.png";
import { useAction } from '../../store/store';

const Header = (props: any) => {
  const action = useAction();

  const toHomeAction = () => {
    props.history.push("/ant/echarts");
  }
  const closePage = () => {
    sessionStorage.setItem("isLogin", "false");
    action.changeHasAuth(false);
  }
  return (
    <div className="page-show">
      <div className="show-left">
        <img src={logo} alt="" />
        <div className="title">徐隆基</div>
      </div>
      <div className="show-right">
        <img onClick={toHomeAction} src={home} alt="" />
        <div className="btn" onClick={closePage}>推出登录</div>
      </div>
    </div>
  );
};

export default withRouter(Header);