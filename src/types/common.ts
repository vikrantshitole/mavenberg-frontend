export interface CommonProps {
  children: React.ReactNode;
}
export interface DrawerProps {
    isDrawerOpen: boolean;
}
export interface ErrorBoundaryState {
  hasError: boolean;
  error: string | null;
}
export interface HeaderProps {
    toggleDrawer: () => void;
}
export interface DashboardLayoutProps {
    children?: React.ReactNode;
}
