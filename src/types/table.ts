
export interface Header {
  header: string;
  accessorKey: string;
  size?: number;
}
export interface TableProps {
  headers:Header [];
  data?: any[];
}
export interface DataTableViewProps {
    isCustom?: boolean
}