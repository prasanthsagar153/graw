import axios, { AxiosRequestConfig } from "axios";

export interface IFetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance =  axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: 'c371b3d87c7e4ab68ca4171b8f2da71f'
  }
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config: AxiosRequestConfig) => {
    return (await axiosInstance.get<IFetchResponse<T>>(this.endpoint, config)).data;
  }

  get = async (id: string | number) => {
    return (await axiosInstance.get<T>(`${this.endpoint}/${id}`)).data;
  }

}

export default APIClient;