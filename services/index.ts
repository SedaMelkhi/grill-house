import axios from "axios";

export const API_URL = "https://makhmudov.tech/api/";
export const API_DOMAIN = "https://jemmesgarden.com";
export const DADATA_API_URL =
  "http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
export const DADATA_TOKEN = "209b8d5e8bb14b84a183757c77c9502d3bca4220";

axios.defaults.baseURL = API_URL;

export interface IBanner {
  id: number;
  url: string;
}

// export interface ISuggestion {
//   value: string;
//   unrestricted_value: string;
//   data: Record<string, any>;
// }

export const BannersService = {
  async getBanners(): Promise<IBanner[]> {
    try {
      const { data } = await axios.get("banner/");
      return data;
    } catch (error) {
      console.error("Error fetching banners", error);
      return [];
    }
  },
};

export const DadataService = {
  async getAddressSuggestions(query: string) {
    try {
      const { data } = await axios.post(
        DADATA_API_URL,
        {
          query,
          count: 5,
          locations: [
            {
              region_fias_id: "de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e",
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Token ${DADATA_TOKEN}`,
          },
        }
      );
      return data.suggestions;
    } catch (error) {
      console.error("Error fetching address suggestions", error);
      return [];
    }
  },
};
