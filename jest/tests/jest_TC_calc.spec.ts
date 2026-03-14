import { Calculator } from '../../task14_calculator';

describe('Калькулятор (jest)', () => {
  let i = 0;
  let calcul: Calculator;
  beforeEach(() => {
    calcul = new Calculator();
  });
  describe('Сложение', () => {
    afterEach(() => {
      i++;
    });
    afterAll(() => {
      console.log('всего тестов на сложение', i);
    });
    test('сложение двух положительных чисел', () => {
      const result = calcul.add(2, 3);
      expect(result).toBe(5);
    });

    test('сложения двух отрицательных чисел', () => {
      const result = calcul.add(-1, -2);
      expect(result).toBe(-3);
    });
    test('сложение с нулем (0 + 0)', () => {
      const result = calcul.add(0, 0);
      expect(result).toBe(0);
    });
    test('сложение с нулем (положительное число + 0)', () => {
      const result = calcul.add(10, 0);
      expect(result).toBe(10);
    });
    test('сложение с нулем (отрицательное число + 0)', () => {
      const result = calcul.add(-2, 0);
      expect(result).toBe(-2);
    });
    test('сложение с нулем (0 + положительное число)', () => {
      const result = calcul.add(0, 20);
      expect(result).toBe(20);
    });
    test('сложение с нулем (0 + отрицательное число)', () => {
      const result = calcul.add(0, -50);
      expect(result).toBe(-50);
    });
  });
  describe('Деление', () => {
    test('деление двух положительных чисел', () => {
      expect(calcul.delenie(6, 3)).toBe(2);
    });
    test('деление положительного числа на 1', () => {
      const result = calcul.delenie(10, 1);
      expect(result).toBe(10);
    });
    test('деление 0 на число', () => {
      const result = calcul.delenie(0, 5);
      expect(result).toBe(0);
    });
    test('деление числа на 0', () => {
      // const result = calc.delenie(3, 0);
      // expect(result).to.throw(`Invalid value: деление на ноль`); // в данном случае ошибка выбросится(из файла task14_calculator) до того, как Chai успеет её проверить
      expect(() => calcul.delenie(3, 0)).toThrow('Ошибка: деление на ноль');
    });
    test('деление отрицательного числа на положительное', () => {
      const result = calcul.delenie(-10, 5);
      expect(result).toBe(-2);
    });
    test('деление отрицательного числа на отрицательное', () => {
      const result = calcul.delenie(-10, -5);
      expect(result).toBe(2);
    });
  });
});
