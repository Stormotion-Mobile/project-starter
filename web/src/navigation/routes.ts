export enum MainRoute {
  Auth = '/auth',
  Dashboard = '',
  Root = '/',
  Settings = '/settings',
}

export const createNavigatorPath = (path: string) => `${path}/*`;
