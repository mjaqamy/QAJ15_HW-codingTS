import superagent from 'superagent';
import { PostObjectRequestBody } from './types';

export class ObjectClient {
  private URL = 'https://api.restful-api.dev/objects/';
  async getAllObjects() {
    const res = await superagent.get(this.URL);
    return res;
  }
  async getObjectById(id: number | string) {
    const res = await superagent.get(`${this.URL}${id}`);
    return res;
  }
  async postObject(bodyObject:PostObjectRequestBody) {
    const resPost = await superagent.post(this.URL).send(bodyObject);
    return resPost;
  }
  async putObject(id: number | string, bodyObjectPut:PostObjectRequestBody) {
    const resPut = await superagent.put(`${this.URL}${id}`).send(bodyObjectPut);
    return resPut;
  }
  //PUTCH

  async deleteObject(id: number | string) {
    const resDel = await superagent.delete(`${this.URL}${id}`);
    return resDel;
  }
}
