import React from 'react';
import { FixedSizeList as List } from 'react-window';
import type { Header, TableProps } from '../types/table';

const TableHeader: React.FC<TableProps> = ({ headers }) => (
  <div className="flex bg-gray-50 dark:bg-gray-800 min-w-[514] text-gray-700 dark:text-gray-200 text-xs font-bold uppercase border-b border-gray-200">
    {headers.map((header: Header, index: number) => (
      <div
        key={header.accessorKey || index}
        className="px-6 py-3 flex-1 min-w-0"
        style={{ flexBasis: `${100 / headers.length}%` }}
      >
        {header.header}
      </div>
    ))}
  </div>
);

const Row: React.FC<{
  index: number;
  style: React.CSSProperties;
  data: {
    rows: any[];
    headers: Header[];
  };
}> = ({ index, style, data }) => {
  const row = data.rows[index];
  const headers = data.headers;

  return (
    <div
      style={{...style,overflowX: 'auto'}}
      className="flex border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 dark:hover:text-gray-200 text-sm text-gray-700 dark:text-gray-600 overflow-x-auto"
    >
      {headers.map((header, i) => (
        <div
          key={i}
          className="px-6 py-4 flex-1 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap"
          style={{ flexBasis: `${100 / headers.length}%` }}
        >
          {row[header.accessorKey]}
        </div>
      ))}
    </div>
  );
};

const CustomizedTable: React.FC<TableProps> = ({ headers, data }) => {
  const rowHeight = 45;
  const visibleRows = 12;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-gray-200 dark:border-gray-600">
      <TableHeader headers={headers} />
      <List
        height={rowHeight * visibleRows}
        itemCount={(data ?? []).length}
        itemSize={rowHeight}
        width="100%"
        itemData={{ rows: data ?? [], headers }}
      >
        {Row}
      </List>
    </div>
  );
};

export default CustomizedTable;