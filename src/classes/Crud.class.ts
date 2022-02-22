import axios, { AxiosResponse } from 'axios';
import HttpRequest from '../types/HttpRequest.interface';


export default class Crud implements HttpRequest {
  post(url: string, data: any): Promise<AxiosResponse<any, any>> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(url, data);
        return resolve(res.data);
      } catch (error) {
        return reject(error);
      }
    })
  }

  patch(url: string, data: any): Promise<AxiosResponse<any, any>> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.patch(url, data);
        return resolve(res.data);
      } catch (error) {
        return reject(error);
      }
    })
  }

  delete(url: string, data?: any): Promise<AxiosResponse<any, any>> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.delete(url, data);
        return resolve(res.data);
      } catch (error) {
        return reject(error);
      }
    })
  }

  put(url: string, data: any): Promise<AxiosResponse<any, any>> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.put(url, data);
        return resolve(res.data);
      } catch (error) {
        return reject(error);
      }
    })
  }

  get(url: string): Promise<AxiosResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        return resolve(res.data);
      } catch (error) {
        return reject(error);
      }
    })
  }
}