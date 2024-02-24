const API_URL = "http://localhost:3004";

export interface ApiQueryParams {
  [key: string]: string | number | boolean;
}

export interface RequestOptions {
  page?: number;
  _limit?: number;
  rating_like?: string;
}

export const defaultRequestOptions = {
  pages: 1,
  _limit: 10,
};

export async function apiRequest(
  endpoint: string,
  query: ApiQueryParams = {},
  options: RequestOptions = {}
) {
  try {
    const response = fetch(`${API_URL}/${endpoint}`);
    const data = await (await response).json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
