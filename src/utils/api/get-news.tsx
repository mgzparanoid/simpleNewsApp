import axios from "axios";
import { config } from "../../config/config";

export type GetNewsResponseSuccess = {
  success: boolean;
  totalResults: number;
  data: Article[];
};
export type GetNewsResponseError = {
  success: boolean;
  message?: string;
};

export type Article = {
  author: string;
  content: string | null;
  description: string | null;
  publishedAt: string;
  source: Source;
  title: string;
  url: string;
  urlToImage: string | null;
};

export type Source = {
  id: string;
  name: string;
};

export interface GetNews {
  (countryCode: string): Promise<GetNewsResponseSuccess | GetNewsResponseError>;
}

export const getNews: GetNews = async (countryCode: string) => {
  try {
    const response = await axios(
      `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${config.authenticationToken}`
    );
    return { data: response.data.articles, success: true };
  } catch {
    return { message: "Couldn't fetch the news", success: false };
  }
};
