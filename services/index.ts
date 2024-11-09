import axios from "axios";

export const API_URL = "https://makhmudov.tech/api/";
export const API_DOMAIN = "https://jemmesgarden.com";

axios.defaults.baseURL = API_URL;

export interface IBanner {
  id: number;
  url: string;
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
