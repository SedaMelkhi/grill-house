import axios from "axios";

export const API_URL = "https://makhmudov.tech/api/";
export const API = "https://makhmudov.tech/";
export const DADATA_API_URL =
  "http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
export const DADATA_TOKEN = "209b8d5e8bb14b84a183757c77c9502d3bca4220";

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
  description: string;
  category: ICategory;
  price: string; // Цена представлена как строка, например, "320.00"
  weight: string; // Вес также представлен как строка, например, "300"
  image: string;
  available: boolean;
  order_count: number;
  recommended_categories: ICategory[];
}
export interface ICategory {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface ICartItem {
  id: number;
  product: IProduct;
  quantity: number;
  get_total_price: number;
}

export interface ICart {
  items: ICartItem[];
  total_price: number;
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
  async getProduct(productId: number): Promise<IProduct | null> {
    try {
      const { data } = await axios.get(`products/${productId}`);

      return data;
    } catch {
      return null;
    }
  },
  async getPopularProduct(): Promise<IProduct[] | null> {
    try {
      const { data } = await axios.get(`products/popular/`);
      return data;
    } catch {
      return null;
    }
  },
};
function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
}
function clearCsrfCookie() {
  const csrfToken = getCookie("csrftoken"); // Получаем текущий CSRF-токен

  if (csrfToken) {
    // Удаляем куку с CSRF-токеном
    document.cookie = `csrftoken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
}

export const CartService = {
  async getCart(): Promise<ICart | null> {
    try {
      const { data } = await axios.get("cart/", {
        withCredentials: true,
      });
      return data;
    } catch {
      return null;
    }
  },
  async addProductToCart(product: { product_id: number; quantity: number }) {
    try {
      const { data } = await axios.post("cart/add/", product, {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      clearCsrfCookie();
      console.error("Ошибка при добавлении товара в корзину:", error);
      return null;
    }
  },
};
