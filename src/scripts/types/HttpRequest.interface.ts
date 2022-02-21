import { AxiosResponse } from 'axios';

export default interface HttpRequest {
  get(url: string): Promise<AxiosResponse>
  post(url: string, data: any): Promise<AxiosResponse>
  patch(url: string, id: string, data: any): Promise<AxiosResponse>
  delete(url: string, id: string, data?: any): Promise<AxiosResponse>
  put(url: string, id: string, data: any): Promise<AxiosResponse>
}
