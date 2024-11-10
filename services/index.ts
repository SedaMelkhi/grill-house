import axios from "axios";

export const API_URL = "https://makhmudov.tech/api/";
export const API_DOMAIN = "https://jemmesgarden.com";

axios.defaults.baseURL = API_URL;

export interface IBanner {
  id: number;
  url: string;
}
export interface IMenu {
  id: number;
  title: string;
  products: [];
}

export const BannersService = {
  async getBanners(): Promise<IBanner[]> {
    try {
      const { data } = await axios.get("banner/");
      console.log("Ответ от API:", data); 
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

