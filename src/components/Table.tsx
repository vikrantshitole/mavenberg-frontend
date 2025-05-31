import React, { useRef } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_RowVirtualizer,
} from 'material-react-table';
import type { TableProps } from '../types/table';

const VirtualTable: React.FC<TableProps> = ({ headers, data }) => {
  const rowVirtualizerInstanceRef = useRef<MRT_RowVirtualizer>(null);
  const table = useMaterialReactTable({
    columns: headers,
    data: data ?? [],
    defaultDisplayColumn: { enableResizing: true },
    enableBottomToolbar: false,
    enableTopToolbar: false,
    enableColumnResizing: false,
    enableColumnVirtualization: true,
    enableGlobalFilterModes: false,
    enablePagination: false,
    enableRowNumbers: true,
    enableSorting: false,
    enableColumnActions: false,
    enableRowSelection: false,
    enableRowActions: false,
    enableRowVirtualization: true,
    muiTableContainerProps: { sx: { maxHeight: '600px', width: 'auto' } },
    rowVirtualizerInstanceRef, //optional
    rowVirtualizerOptions: { overscan: 10, count: (data ?? []).length, enabled: true }, //optionally customize the row virtualizer
    columnVirtualizerOptions: { overscan: 2 }, //optionally customize the column virtualizer
  });

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-gray-200 dark:border-gray-600">
      <MaterialReactTable table={table} />
    </div>
  );
};

export default VirtualTable;
