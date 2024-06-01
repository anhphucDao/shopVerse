import {Product} from './data';

type StoreState = {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
  UIState: Array<Product>;
  setUIState: (UIState: Array<Product>) => void;
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  debouncedInputValue: string;
  setDebouncedInputValue: (debouncedInputValue: string) => void;

  textOnEnter: string;
  setTextOnEnter: (input: string) => void;
};

export type {StoreState};
