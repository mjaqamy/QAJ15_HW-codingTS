// 1. Создайте функцию, которая создает массив с 10 случайными числами и возвращает произведение 3 самых больших значений

function multiplierOfMaxNumbers(size: number = 10, maxValue: number = 100, multiply: number = 3) {
  // создаем пустой массив
  let arr = [];
  // цикл, который повторится size раз
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * maxValue) + 1); // генерируем случайное число от 0 до size, а push - команда, которая добавляет новое число в конец списка.
  }
  // сортируем массив от большего к меньшему
  arr.sort((a, b) => b - a); // это стандартный способ сортировки чисел по убыванию
  let resultArray = arr.slice(0, multiply); // оставляем в массиве только multiply самых больших чисел (от индекса 0 до multiply)
  console.log(resultArray);
  const result = resultArray.reduce((acc, value) => acc * value); // перемножаем элементы массива между собой (acc — накопленный результат, value — текущее число)
  return result;
}
console.log(multiplierOfMaxNumbers());
