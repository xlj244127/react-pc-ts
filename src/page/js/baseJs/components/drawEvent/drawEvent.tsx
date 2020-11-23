import React from 'react';
import Sty from "./drawEvent.module.less";
import ClipboardJS from "clipboard";
import { message } from 'antd';

const DrawEvent = () => {
	const list = [
		{ name: "列表one", code: "sfsfwefegergeesdfajflsjfiwefsjflskjflskjfaekjn" },
		{ name: "列表two", code: "sldfosdfjsoifjwjifsjenwrjiejjsoijdfsjfoisajfjfs" },
		{ name: "列表three", code: "sdfkwejnwogoajsdjfosjofjiasjdfjsjfdasfkefenaeff" }
	];

	const copyAction = (i: number) => {
		const el = document.querySelectorAll(".copy-btn")[i];
		const clipboard = new ClipboardJS(el);
		clipboard.on('success', function (e: any) {
			// console.log(e);
			message.success("复制成功!");
			clipboard && clipboard.destroy();
		});
		clipboard.on('error', function (e: any) {
			message.success("复制失败!");
			clipboard && clipboard.destroy();
		});
	};

	return (
		<div className={Sty.drawEventContain}>
			{
				list.map((item: any, i: number) => {
					return <div className={Sty.oneLine}>
						<div>{item.name}</div>
						<div
							className="copy-btn"
							data-clipboard-text={item.code}
							onClick={() => copyAction(i)}
						>
							复制
						</div>
					</div>;
				})
			}
		</div>
	);
};

export default DrawEvent;