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
    it('сложение с нулем (положительное число + 0)', () => {
      const result = calc.add(10, 0);
      expect(result).to.equal(10);
    });
    it('сложение с нулем (отрицательное число + 0)', () => {
      const result = calc.add(-2, 0);
      expect(result).to.equal(-2);
    });
    it('сложение с нулем (0 + положительное число)', () => {
      const result = calc.add(0, 20);
      expect(result).to.equal(20);
    });
    it('сложение с нулем (0 + отрицательное число)', () => {
      const result = calc.add(0, -50);
      expect(result).to.equal(-50);
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
