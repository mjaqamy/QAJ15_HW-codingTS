// 0. Реализовать класс калькулятор, с минимум следующими методами: сложение, вычитание, умножение, деление.
export class Calculator {
  add(...a: number[]) {
    return a.reduce((acc, current) => acc + current, 0);
  }
  multiply(...a: number[]) {
    const defolt = a.length === 0 ? 0 : 1; //пример использования тернарного оператора: устанавливаем 0, если массив пустой, иначе 1. Т.е. проверка: (условие) ? (если да) : (если нет)
    return a.reduce((acc, current) => acc * current, defolt);
  }
  delenie(a: number, b: number) {
    if (b === 0) {
      throw Error('Ошибка: деление на ноль');
    }
    return a / b;
  }
  minus(a: number, b: number) {
    return a - b;
  }
}
export const calc = new Calculator();

// console.log(calc.add(4, 26, 7));
// console.log(calc.multiply(2));
// console.log(calc.minus(3, 4));

// const arr = [24, 5, 7, 52, 9];
// const [sum1, ...sum2] = arr;
// console.log(sum1, sum2);
