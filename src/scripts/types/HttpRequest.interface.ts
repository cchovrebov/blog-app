import { AxiosResponse } from 'axios';

export default interface HttpRequest {
  get(path: string): Promise<AxiosResponse>
  post(path: string, data: any): Promise<AxiosResponse>
  patch(path: string, id: string, data: any): Promise<AxiosResponse>
  delete(path: string, id: string, data?: any): Promise<AxiosResponse>
  put(path: string, id: string, data: any): Promise<AxiosResponse>
}
