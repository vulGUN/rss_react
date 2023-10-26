export interface SearchProps {
  onSearch: () => void;
  input: string;
  setInput: (value: string) => void;
  setIsLoad: (value: boolean) => void;
}

export type PersonType = {
  person: IPerson;
};

export interface IErrorBoundaryState {
  hasError: boolean;
}

export interface IErrorBoundaryProps {
  children: React.ReactNode;
}

export interface IAppState {
  input: string;
  people: IPerson[];
  isLoad: boolean;
  throwError: boolean;
}

export interface IPerson {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export interface IPersonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPerson[];
}
