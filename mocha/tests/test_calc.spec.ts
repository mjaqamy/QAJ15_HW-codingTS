import { calc } from '../../task14_calculator';
import { expect } from 'chai';

describe(`Калькулятор`, () => {
  let i = 0;
  describe('Сложение', () => {
    afterEach(() => {
      i++;
      console.log('тест №', i);
    });
    after(() => {
      console.log('всего тестов на сложение', i);
    });
    it('сложения двух положительных чисел', () => {
      const result = calc.add(1, 2);
      expect(result).to.equal(3);
    });
    it('сложения двух отрицательных чисел', () => {
      const result = calc.add(-1, -2);
      expect(result).to.equal(-3);
    });
    it('сложение с нулем (0 + 0)', () => {
      const result = calc.add(0, 0);
      expect(result).to.equal(0);
    });
    it('сложение с нулем (число + 0)', () => {
      const result1 = calc.add(10, 0);
      expect(result1).to.equal(10);

      const result2 = calc.add(-2, 0);
      expect(result2).to.equal(-2);

      const result3 = calc.add(0, 20);
      expect(result3).to.equal(20);

      const result4 = calc.add(0, -50);
      expect(result4).to.equal(-50);
    });
  });
  describe('Деление', () => {
    it('деление двух положительных чисел', () => {
      const result = calc.delenie(10, 5);
      expect(result).to.equal(2);
    });
    it('деление положительного числа на 1', () => {
      const result = calc.delenie(10, 1);
      expect(result).to.equal(10);
    });
    it('деление 0 на число', () => {
      const result = calc.delenie(0, 5);
      expect(result).to.equal(0);
    });
    it('деление числа на 0', () => {
      // const result = calc.delenie(3, 0);
      // expect(result).to.throw(`Invalid value: деление на ноль`); // в данном случае ошибка выбросится(из файла task14_calculator) до того, как Chai успеет её проверить
      expect(() => calc.delenie(3, 0)).to.throw('Ошибка: деление на ноль');
    });
    it('деление отрицательного числа на положительное', () => {
      const result = calc.delenie(-10, 5);
      expect(result).to.equal(-2);
    });
    it('деление отрицательного числа на отрицательное', () => {
      const result = calc.delenie(-10, -5);
      expect(result).to.equal(2);
    });
  });
});
