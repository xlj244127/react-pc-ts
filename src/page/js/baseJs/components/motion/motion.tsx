import React, { useEffect, useState } from 'react';
import "./motion.less";

const arr = [
	{ child: ["a1a1a1", "a2a2a2", "a3a3a3"], name: "aaaaaa" },
	{ child: ["b1b1b1", "b2b2b2", "b3b3b3"], name: "bbbbbb" },
	{ child: ["c1c1c1", "c2c2c2", "c3c3c3"], name: "cccccc" },
	{ child: ["d1d1d1", "d2d2d2", "d3d3d3"], name: "dddddd" },
];

const Motion = () => {
	const [active, setActive] = useState<number>();

	useEffect(() => {
		const arr = [
			{ pollte: "aa", list: "a1" },
			{ pollte: "bb", list: "b1" },
			{ pollte: "cc", list: "c1" },
			{ pollte: "aa", list: "a1" },
			{ pollte: "bb", list: "b1" },
		]
		let obj: any = {};
		let arr2: any = [];
		arr.forEach((item) => {
			if (!obj[item.pollte]) {
				arr2.push(item);
				obj[item.pollte] = true;
			}
		})
	}, []);

	const overAction = (index: number) => {
		setActive(index);
	}

	const leaveAction = () => {
		setActive(-1);
	}

	const changeStyle = () => {
		let box: any = document.getElementsByClassName("boxx")[0];
		let timer = setInterval(() => {
			let cur = box.offsetLeft;
			let wid = box.offsetParent.offsetWidth - box.offsetWidth;
			let speed = 7;
			if (cur + speed >= wid) {
				clearInterval(timer);
				box.style.left = `${wid}px`;
				return;
			}
			box.style.left = cur + speed + 'px';
		}, 10)
	}

	const resetAction = () => {
		let box: any = document.getElementsByClassName("boxx")[0];
		box.style.left = "0px";
	}

	return (
		<div className="motion-event-contain">
			<div className="motion">
				{
					arr.map((item, index) => {
						let height0 = index === active ? `${item.child.length * 0.3}rem` : 0;
						return <div className="main" onMouseLeave={leaveAction}>
							<div onMouseOver={() => overAction(index)}>{item.name}</div>
							{
								<div style={{ height: height0 }}>
									{
										item.child.map((one) => {
											return <div>{one}</div>;
										})
									}
								</div>
							}
						</div>;
					})
				}
			</div>
			<div className="other">
				<div className="boxx" onMouseEnter={changeStyle}><span onClick={resetAction}>复原</span></div>
			</div>
		</div>
	);
};

export default Motion;