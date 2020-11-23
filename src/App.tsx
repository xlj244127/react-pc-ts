import React, { useEffect, useState } from 'react';
import { useStore, useAction, withStore } from "./store/store";
import AppRouter from './router/router';
import commonFunc from 'untis/common-func';

const UIWidth = 1920;  //设计稿宽度
const RootFontSizeRate = 100;  //rem px换算比例

function App() {
  const store = useStore();
  const action = useAction();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setRootFontSize();
    if (commonFunc.getCookie("token")) {
      action.changeHasAuth(true);
    }
  }, [])

  useEffect(() => {
    setIsLogin(store.hasAuth);
  }, [store.hasAuth])

  // 改变根元素fontsize
  const setRootFontSize = () => {
    const { clientWidth } = document.documentElement;
    const rootFontSize = clientWidth / UIWidth * RootFontSizeRate;
    document.documentElement.style.fontSize = `${rootFontSize}px`;
    action.changeRootFont(rootFontSize);
  }

  return (
    <AppRouter isLogin={isLogin} />
  );
}

export default withStore(App);
