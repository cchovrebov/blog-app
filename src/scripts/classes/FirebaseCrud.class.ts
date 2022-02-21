import axios, { AxiosResponse } from 'axios';
import HttpRequest from '../types/HttpRequest.interface';


export default class FirebaseCrud implements HttpRequest {
  private url: string = 'https://jsonplaceholder.typicode.com';

  post(path: string, data: any): Promise<AxiosResponse<any, any>> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(`${this.url}${path}`, data);
        return resolve(res.data);
      } catch (error) {
        return reject(error);
      }
    })
  }
  patch(path: string, id: string, data: any): Promise<AxiosResponse<any, any>> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.patch(`${this.url}${path}/${id}`, data);
        return resolve(res.data);
      } catch (error) {
        return reject(error);
      }
    })
  }
  delete(path: string, id: string, data?: any): Promise<AxiosResponse<any, any>> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.delete(`${this.url}${path}/${id}`, data);
        return resolve(res.data);
      } catch (error) {
        return reject(error);
      }
    })
  }
  put(path: string, id: string, data: any): Promise<AxiosResponse<any, any>> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.put(`${this.url}${path}/${id}`, data);
        return resolve(res.data);
      } catch (error) {
        return reject(error);
      }
    })
  }

  get(path: string): Promise<AxiosResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${this.url}${path}`);
        return resolve(res.data);
      } catch (error) {
        return reject(error);
      }
    })
  }
}