import React from 'react';
import {Popover} from "antd";
import "./lineWidth.less";

const list = [
	{ name: "任露", total: 200, obj: {family: 100, perents: 80, oneself: 20} },
	{ name: "李瑶", total: 80, obj: {family: 80, perents: 40, oneself: 40} },
	{ name: "鲁建宇", total: 90, obj: {family: 90, perents: 20, oneself: 70} },
	{ name: "赵傲", total: 50, obj: {family: 50, perents: 30, oneself: 20} },
];
const maxVal = Math.max(...list.map(item => item.total));

const LineWidth = () => {

	const content = (item: any) => {
		return <div>
			<div>{item.name}</div>
			<div>
				<div><span>家庭收入:</span><span>{`${item.obj.family}万元`}</span></div>
				<div><span>父母收入:</span><span>{`${item.obj.perents}万元`}</span></div>
				<div><span>自己收入:</span><span>{`${item.obj.oneself}万元`}</span></div>
			</div>
		</div>;
	}

  return (
    <div className="line-width">
      <div className="title">柱图</div>
      <div className="main">
        {
			list.map((item: any, index: number) => {
				return <div className="person" key={index}>
					<div>{item.name}</div>
					<Popover content={() => content(item)}>
						<div>
							<div style={{width: `${item.obj.family / maxVal * 100}%`}}></div>
							<div style={{width: `${item.obj.perents / maxVal * 100}%`}}></div>
							<div style={{width: `${item.obj.oneself / maxVal * 100}%`}}></div>
						</div>
					</Popover>
					<div>{`${item.total}万元`}</div>
				</div>;
			})
		}
      </div>
    </div>
  );
};

export default LineWidth;