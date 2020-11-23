import React, { useState, useRef } from 'react';
import "./mouseEvent.less";
import elf from "assets/images/girl.gif";
import { useStore } from "store/store"

const MouseEvent = () => {
	const store = useStore();
	const size = store.rootFontSize;
	const myRef: any = useRef(null);

	const [text, setText] = useState<string>();
	const [bgColor, setBgColor] = useState<string>();
	const [left, setLeft] = useState<string>();
	const [top, setTop] = useState<string>();

	const enterAction = () => {
		setText("亲爱的, 我爱你");
	}

	const leaveAction = () => {
		setText("对不起, 开玩笑");
	}

	const moveAction = () => {  //随机生成RGBA颜色
		let r = Math.floor(Math.random() * 256); //随机生成256以内r值
		let g = Math.floor(Math.random() * 256); //随机生成256以内g值
		let b = Math.floor(Math.random() * 256); //随机生成256以内b值
		let alpha = Math.random(); //随机生成1以内a值
		let color = `rgb(${r},${g},${b},${alpha})`;  //返回rgba(r,g,b,a)格式颜色
		setBgColor(color);
	}

	const imgMoveAction = (e: any) => {
		console.log(myRef)
		let left = e.pageX - myRef.current.offsetParent.offsetLeft - myRef.current.offsetWidth / 2 - 2.2 * size + "px";
		let top = e.pageY - myRef.current.offsetParent.offsetTop - myRef.current.offsetHeight / 2 - 0.8 * size + "px";
		setLeft(left);
		setTop(top);
	}

	return (
		<div className="mouse-event-contain">
			<div className="box2" style={{ background: bgColor }} onMouseEnter={enterAction} onMouseLeave={leaveAction} onMouseMove={moveAction}>{text}</div>
			<div className="move-mouse" onMouseMove={imgMoveAction}>
				<img className="img" alt="" style={{ left: left, top: top }} ref={myRef} src={elf} />
			</div>
		</div>
	);
};

export default MouseEvent;