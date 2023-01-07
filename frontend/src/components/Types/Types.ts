import { SortsStateType } from "../../util/FilterOption";

export interface Image {
  publicId: string;
  url: string;
  _id: string;
}

export interface ProductType {
  viewCount: number;
  deliveryAvailable: string;
  gender: string;
  colorVariant: string[];
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  discountPrice: number;
  ratings: number;
  image: Image[];
  category: string;
  stock: number;
  numOfReviews: number;
  reviews: string[];
  createdAt: string;
  sizeVariant: string[];
}

//  Filtering Props type

export interface FilteringProps {
  sizes: string[];
  sorts: SortsStateType;
  colors: string[];
  categoryes: string[];
  priceRange: number[];
  selectAllCategory: string[];
  setSizes: React.Dispatch<React.SetStateAction<string[]>>;
  setSorts: React.Dispatch<React.SetStateAction<SortsStateType>>;
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
  setCategoryes: React.Dispatch<React.SetStateAction<string[]>>;
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
  setSelectAllCategory: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface FilteringModalProps {
  sizes: string[];
  sorts: SortsStateType;
  colors: string[];
  categoryes: string[];
  priceRange: number[];
  selectAllCategory: string[];
  setShowMobileFiltering: React.Dispatch<React.SetStateAction<boolean>>;
  showMobileFiltering: boolean;
  setSizes: React.Dispatch<React.SetStateAction<string[]>>;
  setSorts: React.Dispatch<React.SetStateAction<SortsStateType>>;
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
  setCategoryes: React.Dispatch<React.SetStateAction<string[]>>;
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
  setSelectAllCategory: React.Dispatch<React.SetStateAction<string[]>>;
  handleResetFiltering?: () => void;
}
