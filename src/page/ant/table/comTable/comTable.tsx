import React, { useState, useEffect } from 'react';
import { Table, Pagination } from 'antd';
import { useStore } from "store/store";
import "./comTable.less";

interface Pval {
  active: number,
  dataSource: any[],
  curPage: number,
  pageSize: number,
  curPageChange: (pageNum: number) => void,
  pageSizeChange: (cur: number, size: number) => void,
};

const ComTable = (props: Pval) => {
  const store = useStore();
  const size = store.rootFontSize;

  const [columns, setColumns]: any = useState([]);

  useEffect(() => {
    let col: any = []
    if (props.active === 1) {
      col = [
        { title: '序号', dataIndex: 'key', key: 'key', width: 1 * size, render: (t: any, v: any, index: number) => index + 1 + (props.curPage - 1) * props.pageSize },
        { title: '姓名', dataIndex: 'name', key: 'name', width: 1.3 * size, render: (t: any, v: any) => <div>{t}</div> },
        { title: '住址', dataIndex: 'address', key: 'address', width: 1.5 * size, render: (t: any, v: any) => <div className="elip">{t}</div> },
        { title: '联系方式', dataIndex: 'phone', key: 'phone', width: 1.5 * size, render: (t: any, v: any) => <div className="elip">{t}</div> },
        { title: '公司地址', dataIndex: 'companyAddress', key: 'companyAddress', width: 1.5 * size, render: (t: any, v: any) => <div className="elip">{t}</div> },
        { title: '工作性质描述', dataIndex: 'remark', key: 'remark', render: (t: any, v: any) => <div className="elip">{t}</div> }
      ];
    }
    setColumns(col);
  }, [props, size])

  return (
    <div className="wrap-box">
      <div className="wrap-table">
        <Table
          rowKey={(record: any, i: any) => `${record.key}_${i}`}
          loading={props.active === 4 ? true : false}
          dataSource={props.dataSource}
          columns={columns}
          className="reset-table auto-scroll-y my-table-class"
          pagination={false}
          scroll={{ y: 'auto' }}
          locale={{
            emptyText: () => {
              return props.dataSource.length ? "暂无数据" : null
            }
          }}
        />
      </div>
      <div className="wrap-pagination">
        <Pagination
          showQuickJumper
          showSizeChanger
          current={props.curPage}
          pageSize={props.pageSize}
          total={props.dataSource.length}
          showTotal={(total) => `共${total}条`}
          onChange={props.curPageChange}
          onShowSizeChange={props.pageSizeChange}
          className="reset-ant-pagination"
          pageSizeOptions={["20", "50", "100"]}
        />
      </div>
    </div>
  );
};

export default ComTable;