import React from 'react';
import { FixedSizeList as List } from 'react-window';

interface TableProps {
  headers: { title: string; key: string }[];
  data: any[];
}

const TableHeader: React.FC<{ headers: { title: string; key: string }[] }> = ({ headers }) => (
  <div className="flex bg-gray-50 dark:bg-gray-800 min-w-[514] text-gray-700 dark:text-gray-600 text-xs font-bold uppercase border-b border-gray-200">
    {headers.map((header, index) => (
      <div
        key={index}
        className="px-6 py-3 flex-1 min-w-0"
        style={{ flexBasis: `${100 / headers.length}%` }}
      >
        {header.title}
      </div>
    ))}
  </div>
);

const Row: React.FC<{
  index: number;
  style: React.CSSProperties;
  data: {
    rows: any[];
    headers: { title: string; key: string }[];
  };
}> = ({ index, style, data }) => {
  const row = data.rows[index];
  const headers = data.headers;

  return (
    <div
      style={{...style,overflowX: 'auto'}}
      className="flex border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-sm text-gray-700 dark:text-gray-600 overflow-x-auto"
    >
      {headers.map((header, i) => (
        <div
          key={i}
          className="px-6 py-4 flex-1 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap"
          style={{ flexBasis: `${100 / headers.length}%` }}
        >
          {row[header.key]}
        </div>
      ))}
    </div>
  );
};

const VirtualTable: React.FC<TableProps> = ({ headers, data }) => {
  const rowHeight = 45;
  const visibleRows = 12;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-gray-200 dark:border-gray-600">
      <TableHeader headers={headers} />
      <List
        height={rowHeight * visibleRows}
        itemCount={data.length}
        itemSize={rowHeight}
        width="100%"
        itemData={{ rows: data, headers }}
      >
        {Row}
      </List>
    </div>
  );
};

export default VirtualTable;
