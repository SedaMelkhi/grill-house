import axios from "axios";

export const API_URL = "https://makhmudov.tech/api/";
export const API = "https://makhmudov.tech/";
export const API_DOMAIN = "https://jemmesgarden.com";

axios.defaults.baseURL = API_URL;

export interface IBanner {
  id: number;
  url: string;
}
export interface IMenu {
  id: number;
  title: string;
}
export interface ISection {
  id: number;
  title: string;
  products: [];
}
export interface IProduct {
  id: number;
  name: string;
  description:string ;
  price: number;
  weight: number;
  image: string;
}
export const BannersService = {
  async getBanners(): Promise<IBanner[]> {
    try {
      const { data } = await axios.get("banner/");
      
      return data;
    } catch {
      return [];
    }
  },
};
export const MenuService = {
  async getMenu(): Promise<IMenu[]> {
    try {
      const { data } = await axios.get("menu/");
      return data;
    } catch {
      return [];
    }
  },
};
export const SectionService = {
  async getSection(): Promise<ISection[]> {
    try {
      const { data } = await axios.get("menu/");
      return data;
    } catch {
      return [];
    }
  },
};

export const ProductService = {
  async getProduct(productId: string): Promise<IProduct[]> {
    try {
      const { data } = await axios.get(`products/${productId}`);
      
      
      return data;
    } catch {
      return [];
    }
  },
};