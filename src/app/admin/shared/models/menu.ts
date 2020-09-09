import { IMenuItem } from './menu-item';

export interface IMenu {
  name: string;
  items: IMenuItem[];
}