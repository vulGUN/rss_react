import { IPerson } from '@/components/PersonCard/types';

export interface IPersonData {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPerson[];
}
