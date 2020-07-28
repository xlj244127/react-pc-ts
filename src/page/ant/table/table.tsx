import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import ComTable from "./comTable/comTable";
import "./table.less";

interface Fpar {
  code: number,
  name: string
}

const navList: Fpar[] = [
  { code: 1, name: "普通表单" },
  { code: 2, name: "有条件查询和编辑删除" },
  { code: 3, name: "带排序和左侧固定表单" },
  { code: 4, name: "表格loading效果" },
]

const TablePage = () => {

  const [active, setActive] = useState(1);
  const [dataSource, setDataSource]: any = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  useEffect(() => {
    changeCode(1);
  }, [])

  const changeCode = (val: number) => {
    setActive(val);
    let source = [];
    if (val === 1) {
      for (let i = 0; i < 30; i++) {
        let obj = { key: i, name: '胡彦斌', address: '西湖区湖底公园1号', phone: "075561605494", companyAddress: "前海自贸大厦", remark: "坚持每天打酱油,微笑不漏声色的张扬" };
        source.push(obj);
      }
      setDataSource(source);
    }
    if (val === 2) {
      
    }
    if (val === 3) {
      
    }
    if (val === 4) {
      
    }
  }

  const curPageChange = (pageNum: number) => {
    setCurPage(pageNum);
  }

  const pageSizeChange = (cur: number, size: number) => {
    setPageSize(size);
  }

  return (
    <div className="form-page">
      <div className="content-left">
        <div>
          <div>选择类型</div>
          <Select
            style={{ width: 200 }}
            className="xulongji"
            // placeholder="Select a person"
            // optionFilterProp="children"
            // onChange={onChange}
            // onFocus={onFocus}
            // onBlur={onBlur}
          >
            {
              navList.map((item: any) => {
                return <Select.Option value={`${item.code}_${item.name}`}>{item.name}</Select.Option>;
              })
            }
          </Select>
        </div>
      </div>
      <div className="content-right">
        <div className="right-nav">
          {
            navList.map((item: Fpar, index: number) => {
              return <div className={active === item.code ? "active" : ""} onClick={() => changeCode(item.code)} key={index}>{item.name}</div>;
            })
          }
        </div>
        <div className="right-bottom">
          <ComTable
            active={active}
            dataSource={dataSource}
            curPage={curPage}
            pageSize={pageSize}
            curPageChange={curPageChange}
            pageSizeChange={pageSizeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default TablePage;