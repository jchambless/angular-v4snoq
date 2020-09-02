import * as moment from 'moment';

export interface IFxCategoryItem {
  name: string;
  code: string;
}

export interface IGalleryDto {
  code: string;
  name: string;
  location: string;
  created: moment.Moment;
}