import { IPersonData } from '@services/types';
import { createContext, useContext, useState } from 'react';

interface DataContextType {
  data: IPersonData;
  setData: React.Dispatch<React.SetStateAction<IPersonData>>;
  isLoad: boolean;
  setIsLoad: React.Dispatch<React.SetStateAction<boolean>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

type DataProviderType = { children: React.ReactNode };

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: DataProviderType) {
  const [data, setData] = useState<IPersonData>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });
  const [isLoad, setIsLoad] = useState(true);
  const [page, setPage] = useState(1);

  const value = { data, setData, isLoad, setIsLoad, page, setPage };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
