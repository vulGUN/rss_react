import { IPerson } from '@components/PersonalCard/types';

export interface IPersonData {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPerson[];
}
