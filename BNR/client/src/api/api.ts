interface Window {
  _BASE_URL_: string;
}
const base_url = (window as unknown as Window)._BASE_URL_;

export const BASE_URL =
  base_url !== "BASE_URL_PLACEHOLDER"
    ? base_url
    : "https://banner-service-back.onrender.com";
