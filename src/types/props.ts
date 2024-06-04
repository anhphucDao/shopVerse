import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {MutableRefObject} from 'react';
import {homeNavigationProp, detailsNavigationProp} from './screen';

interface AssistiveChipProps {
  title: string;
  categoryUI: string;
  onPress: () => void;
  chipPressed: boolean;
}

interface AuthRequireDialogProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

interface AvatarComponentProps {
  setVisible: (visible: boolean | ((prevState: boolean) => boolean)) => void;
}

interface BottomSheetComponentProps {
  bottomSheetRef: MutableRefObject<BottomSheetMethods | null>;
  priceOrder: string;
  setPriceOrder: (value: string) => void;
  ratingFrom: number;
  setRatingFrom: (value: number) => void;
  applySortAndFilter: () => void;
  resetSortAndFilter: () => void;
  setPriceRange: (value: {from: string; to: string}) => void;
  isReset: boolean;
}

interface ButtonFilterProps {
  applySortAndFilter: () => void;
  resetSortAndFilter: () => void;
}

interface CommentProps {
  rating: {
    rate: number;
    count: number;
  };
}

interface DetailHeaderProps {
  navigation: detailsNavigationProp;
}

interface FilterProps {
  openBottomSheet: () => void;
  closeBottomSheet: () => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

interface FooterProps {
  setVisible: (value: boolean) => void;
  setShowSnackBar: (value: boolean) => void;
  price: string;
}

interface PriceFilterProps {
  priceOrder: string;
  setPriceOrder: (value: string) => void;
  setPriceRange: (value: {from: string; to: string}) => void;
  isReset: boolean;
}

interface ProductProps {
  name: string;
  price: string;
  imageUrl: string;
  navigation: homeNavigationProp;
  itemId: string;
}

interface ProfileDialogProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
  navigation: homeNavigationProp;
}
interface RatingFilterProps {
  ratingFrom: number;
  setRatingFrom: (value: number) => void;
}

interface ShoppingBagProps {
  navigation: homeNavigationProp;
}

interface SnackBarProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  message: string;
  countdown?: number;
}
type Route = {
  key: string;
  name: string;
  params?: Record<string, unknown>;
  state: NavigationState;
};

type NavigationState = {
  type: string;
  key: string;
  routeNames: string[];
  routes: Route[];
  index: number;
  stale: boolean;
  state?: NavigationState; // For nested navigators
};

export type {
  AssistiveChipProps,
  AuthRequireDialogProps,
  AvatarComponentProps,
  BottomSheetComponentProps,
  ButtonFilterProps,
  CommentProps,
  DetailHeaderProps,
  FilterProps,
  FooterProps,
  PriceFilterProps,
  ProductProps,
  ProfileDialogProps,
  RatingFilterProps,
  ShoppingBagProps,
  SnackBarProps,
  NavigationState,
};
