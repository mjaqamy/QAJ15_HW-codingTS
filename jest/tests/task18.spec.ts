import { ObjectClient } from '../libs/objectsClient';

describe('Тест API (jest)', () => {
  const objectClient = new ObjectClient();
  //GET
  describe('Проверки для Get /objects', () => {
    test('Get /objects - проверяем, что массив не пустой', async () => {
      const res = await objectClient.getAllObjects();
      expect(res.body.length).toBeGreaterThan(0);
    });
    test('Get /objects - проверяем, что первый элемент содержит "data"', async () => {
      const res = await objectClient.getAllObjects();
      expect(res.body[0]).toHaveProperty('data');
    });
  });
  describe('Проверки для Get /objects/{id}', () => {
    test('Проверяем, что объект с id=2 существует и сервер вернул успешный ответ /objects/{id}', async () => {
      const res = await objectClient.getObjectById(2);
      expect(res.status).toBe(200);
    });

    test('Проверяем, что нет юзера id = 209 - Error Not found id = 209 - Get /objects/{id}', async () => {
      let result: any;
      try {
        result = await objectClient.getObjectById(209);
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
    test('PUT /objects/{id} - обновление объекта', async () => {
      const updatedObject = {
        name: 'Updated Sunday',
        data: {
          year: 2026,
          price: 2000
        }
      };
      const res = await objectClient.putObject(2, updatedObject);
      expect(res.status).toBe(200);

      const getRes = await objectClient.getObjectById(2);
      expect(getRes.body.name).toBe(updatedObject.name);
    }); // этот тест падает - Method Not Allowed
  });
  //PATCH

  //DELETE
  describe('Проверки для Delete /objects/{id}', () => {
    test('Проверяем, что объект с id = 6 удаляется и сервер вернул успешный ответ /objects/{id}', async () => {
      const res = await objectClient.deleteObject(6);
      expect(res.status).toBe(200);
    }); // этот тест падает - Method Not Allowed

    test('Не удалось удалить, так как нет такого юзера - Error Not found id = 209 - Get /objects/{id}', async () => {
      let result: any;
      try {
        result = await objectClient.deleteObject(209);
      } catch (error: any) {
        expect(error.status).toBe(404);
      }
    });
  });
});
