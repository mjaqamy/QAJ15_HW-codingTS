import superagent from 'superagent';
import { PatchObjectRequestBody, PostObjectRequestBody } from './types';

export class ObjectClient {
  private URL = 'https://api.restful-api.dev/objects/';
  async getAllObjects(ids?: string[]) {
    if (ids && ids.length > 0) {
      return await superagent.get(this.URL).query({ id: ids.join(',') });
    }
    const res = await superagent.get(this.URL);
    return res;
  }
  async getObjectById(id: string) {
    const res = await superagent.get(`${this.URL}${id}`).catch(error => error);
    return res;
  }
  async postObject(bodyObject: PostObjectRequestBody) {
    const resPost = await superagent.post(this.URL).send(bodyObject);
    return resPost;
  }
  async putObject(id: string, bodyObjectPut: PostObjectRequestBody) {
    const resPut = await superagent
      .put(`${this.URL}${id}`)
      .send(bodyObjectPut)
      .catch(error => error);
    return resPut;
  }
  async patchObject(id: string, bodyObjectPatch: PatchObjectRequestBody) {
    const resPatch = await superagent
      .patch(`${this.URL}${id}`)
      .send(bodyObjectPatch)
      .catch(error => error);
    return resPatch;
  }
  async deleteObject(id: string) {
    const resDel = await superagent.delete(`${this.URL}${id}`).catch(error => error);
    return resDel;
  }
}
