interface Window {
  _BASE_URL_: string;
  _BNR_URL_: string;
}
const base_url = (window as unknown as Window)._BASE_URL_;
const bnr_url = (window as unknown as Window)._BNR_URL_;

export const BASE_URL =
  base_url !== "BASE_URL" ? base_url : "http://localhost:3000";
export const BNR_URL =
  bnr_url !== "BNR_URL"
    ? bnr_url
    : "https://sparkly-souffle-e37dff.netlify.app";
