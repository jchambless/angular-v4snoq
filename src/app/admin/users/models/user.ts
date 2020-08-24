import { IRole } from '../../roles/models/role';

export interface IUser {
  Id: number;
  Username: string;
  FirstName: string;
  LastName: string;
  Roles: IRole[];
}