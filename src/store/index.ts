import {create} from 'zustand';
import createSelectors from './createSelectors';
import {StoreState} from '../types/store';
import {Product} from '../types/data';

const useStoreBase = create<StoreState>()(set => ({
  UIState: [],
  setUIState: (UIState: Array<Product>) => set(() => ({UIState: UIState})),
  isAuth: false,
  setIsAuth: (isAuth: boolean) => set(() => ({isAuth: isAuth})),
  searchQuery: '',
  setSearchQuery: (searchQuery: string) =>
    set(() => ({searchQuery: searchQuery})),
  debouncedInputValue: '',
  setDebouncedInputValue: (debouncedInputValue: string) =>
    set(() => ({debouncedInputValue: debouncedInputValue})),
  textOnEnter: '',
  setTextOnEnter: (textOnEnter: string) =>
    set(() => ({textOnEnter: textOnEnter})),
}));

const useStore = createSelectors(useStoreBase);

export default useStore;
