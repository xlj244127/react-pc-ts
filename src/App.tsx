import React, { useState } from 'react';
import AppRouter from './router/router';
import { useAction, withStore } from "./store/store";

const UIWidth = 1920;  //设计稿宽度
const RootFontSizeRate = 100;  //rem px换算比例

function App () {
  const action = useAction();

  // 改变根元素fontsize
  const setRootFontSize = () => {
    const { clientWidth } = document.documentElement;
    const rootFontSize = clientWidth / UIWidth * RootFontSizeRate;
    document.documentElement.style.fontSize = `${rootFontSize}px`;
    action.changeRootFont(rootFontSize);
  }

  const [is] = useState(() => {
    setRootFontSize();
    return true;
  })

  return (
    <AppRouter is={is} />
  );
}

export default withStore(App);
