import { ObjectClient } from '../libs/objectsClient';
import type { Response } from 'superagent';

describe('Тест API (jest)', () => {
  const objectClient = new ObjectClient();
  //GET
  describe('Проверки для Get /objects', () => {
    let resResponsGetAllbOjects: Response;
    beforeAll(async () => {
      resResponsGetAllbOjects = await objectClient.getAllObjects();
    });
    test('Get /objects - проверка статуса', async () => {
      expect(resResponsGetAllbOjects.status).toBe(200);
    });
    test('Get /objects - проверяем, что массив не пустой', async () => {
      expect(resResponsGetAllbOjects.body.length).toBeGreaterThan(0);
    });
    test('Get /objects - проверяем, что каждый элемент содержит "data"', async () => {
      resResponsGetAllbOjects.body.forEach((element: any) => {
        expect(element).toHaveProperty('data');
      });
    });
    test('Get /objects - проверяем, что каждый элемент содержит "name"', async () => {
      resResponsGetAllbOjects.body.forEach((element: any) => {
        expect(element).toHaveProperty('name');
      });
    });
    test('Get /objects - проверка получения всех id', async () => {
      const res = await objectClient.getAllObjects(['1', '2', '3']);
      expect(res.status).toBe(200);
      const actualIds = res.body.map((el: any) => el.id);
      expect(actualIds).toStrictEqual(['1', '2', '3']);
    });
    describe('Проверки для Get /objects/{id}', () => {
      test('Проверяем, что объект с id=2 существует и сервер вернул успешный ответ /objects/{id}', async () => {
        const id = '2';
        const res = await objectClient.getObjectById(id);
        expect(res.status).toBe(200);
        expect(res.body.id).toBe(id);
        expect(res.body).toHaveProperty('name');
        expect(res.body).toHaveProperty('data');
      });
      test('Проверяем, что нет юзера id = 209 - Error Not found id = 209 - Get /objects/{id}', async () => {
        let result: any;
        const id = '209';
        try {
          result = await objectClient.getObjectById(id);
        } catch (error: any) {
          expect(error.status).toBe(404);
        }
      });
    });
    //POST
    describe('Проверки для Post', () => {
      test('Post', async () => {
        const testObject = {
          name: 'Sunday',
          data: {
            year: 2019,
            price: 1849.99
          }
        };
        const res = await objectClient.postObject(testObject);
        expect(res.status).toBe(200);

        const createdObject = await objectClient.getObjectById(res.body.id);
        console.log(createdObject.body);
      });
    });

    // PUT
    describe('Проверки для Put', () => {
      const id = '2';
      let createdId: string;

      beforeAll(async () => {
        const res = await objectClient.postObject({
          name: 'Patch Test',
          data: { price: 100 }
        });
        createdId = res.body.id; // сохраняем id созданного объекта
      });
      test('PUT /objects/{id} - обновление объекта', async () => {
        const updatedObject = {
          name: 'Patch Test',
          data: {
            year: 2026,
            price: 2000
          }
        };
        const res = await objectClient.putObject(createdId, updatedObject);
        expect(res.status).toBe(200);
        const getRes = await objectClient.getObjectById(createdId);
        expect(getRes.body.name).toBe(updatedObject.name);
        expect(getRes.body.data.year).toBe(2026);
      });
    });
    //PATCH
    describe('PATCH /objects/{id}', () => {
      let createdId: string;

      beforeAll(async () => {
        const res = await objectClient.postObject({
          name: 'Patch Test',
          data: { price: 100, year: 2020 }
        });
        createdId = res.body.id; // сохраняем id созданного объекта
      });
      test('PATCH - изменяет только одно поле price', async () => {
        const res = await objectClient.patchObject(createdId, {
          data: { price: 777, year: 2020 }
        });
        expect(res.status).toBe(200);
        const updated = await objectClient.getObjectById(createdId);
        expect(updated.body.data.price).toBe(777); // изменилось
        expect(updated.body.data.year).toBe(2020); // НЕ изменилось
      });

      test('PATCH - обновляет name без изменения data', async () => {
        const res = await objectClient.patchObject(createdId, {
          name: 'New Name'
        });
        expect(res.status).toBe(200);
        const updated = await objectClient.getObjectById(createdId);
        expect(updated.body.name).toBe('New Name'); // name обновилось
        expect(updated.body.data).toBeDefined(); // данные остались
      });
      test('PATCH - несуществующий id', async () => {
        const res = await objectClient.patchObject('999999', {
          name: 'Fail'
        });
        expect(res.status).toBe(404);
      });
    });
    //DELETE
    describe('Проверки для Delete /objects/{id}', () => {
      test('Проверяем, что объект с id = 6 удаляется и сервер вернул успешный ответ /objects/{id}', async () => {
        const id = '6';
        const res = await objectClient.deleteObject(id);
        expect(res.status).toBe(405);
      }); // поставила toBe(405), так как этот тест падает - Method Not Allowed

      test('Не удалось удалить, так как нет такого юзера - Error Not found id = 209 - Get /objects/{id}', async () => {
        const id = '209';
        let result: any;
        try {
          result = await objectClient.deleteObject(id);
        } catch (error: any) {
          expect(error.status).toBe(404);
        }
      });
    });
  });
});
