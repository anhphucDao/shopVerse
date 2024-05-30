import {create} from 'zustand';
import createSelectors from './createSelectors';
import {StoreState} from '../types/store';

const useStoreBase = create<StoreState>()(set => ({
  isAuth: false,
  setIsAuth: (isAuth: boolean) => set(() => ({isAuth: isAuth})),
}));

const useStore = createSelectors(useStoreBase);

export default useStore;
